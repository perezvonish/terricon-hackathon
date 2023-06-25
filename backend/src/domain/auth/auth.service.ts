import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CustomExceptions } from '../../config/custom.exceptions';
import 'dotenv/config.js';
import { AuthLoginSuccess } from '../../application/dto/auth/auth.response';
import { AuthRegisterRequestDto } from './dto/auth-register-request.dto';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { AuthRegisterResponseDto } from './dto/auth-register-response.dto';
import { ConfigService } from '@nestjs/config';
import { SmsService } from '../sms/sms.service';
import { AuthLoginRequestDto } from './dto/auth-login-request.dto';
import { PayloadDto } from './dto/payload.dto';
import { PasswordManager } from '../../infrastructure/password-manager';
import { AuthVerifyOtpRequest } from './dto/auth-verify-otp-request';
import { AuthLoginResponseDto } from './dto/auth-login-response.dto';
import { SmsResetPasswordRepository } from '../../infrastructure/repositories/sms-reset-password.repository';
import {
  AuthVerifyOtp,
  RequestRecovery,
} from '../../application/dto/auth/auth.request';
import { UsersEntity } from '../users/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly userRepo: UsersRepository,
    private readonly configService: ConfigService,
    private readonly smsService: SmsService,
    private readonly passwordManager: PasswordManager,
    private readonly smsResetPasswordRepo: SmsResetPasswordRepository,
  ) {}

  async login({
    phoneNumber,
    password,
  }: AuthLoginRequestDto): Promise<AuthLoginResponseDto> {
    const candidate = await this.userRepo.getByPhoneNumber(phoneNumber);

    if (!candidate) {
      throw new NotFoundException(CustomExceptions.USER_NOT_FOUND);
    }

    const verifyPassword = await this.passwordManager.comparePassword(
      password,
      candidate.password,
    );

    if (verifyPassword) {
      const payload: PayloadDto = {
        id: candidate.id,
        phoneNumber: candidate.phoneNumber,
        role: candidate.role,
        isVerify: candidate.isVerify,
        registerAt: candidate.createdAt,
        updatedAt: candidate.updatedAt,
      };
      return await this.signIn(payload);
    }
  }

  private async signIn(payload: PayloadDto): Promise<AuthLoginSuccess> {
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

  async register(
    dto: AuthRegisterRequestDto,
  ): Promise<AuthRegisterResponseDto> {
    if (!this.checkPasswordRepeat(dto.password, dto.repeatPassword)) {
      throw new ForbiddenException('Invalid password repeat');
    }

    const candidate = await this.userRepo.getByPhoneNumber(dto.phoneNumber);
    if (candidate) {
      throw new HttpException(
        'phone number already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await this.passwordManager.hashPassword(dto.password);
    const verifyCode = this.smsService.mockGenerateCode();

    const newUser = new UsersEntity(
      dto.phoneNumber,
      hashPassword,
      dto.name,
      dto.surname,
      dto.role,
      verifyCode,
    );
    const user = await this.usersService.save(newUser);

    return new AuthRegisterResponseDto(user.id, user.phoneNumber);
  }

  async verifyOtpCode({
    code,
    phoneNumber,
  }: AuthVerifyOtpRequest): Promise<void> {
    const user = await this.userRepo.getByPhoneNumber(phoneNumber);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.isVerify) {
      throw new BadRequestException('User already verified');
    }

    if (code == user.verifyCode) {
      user.isVerify = true;
      user.verifyCode = null;
    }

    await this.userRepo.save(user);
  }
  private checkPasswordRepeat(password: string, repeat: string) {
    return password == repeat;
  }

  async requestRecovery({ phoneNumber }: RequestRecovery): Promise<boolean> {
    const user = await this.usersService.findOne({ where: { phoneNumber } });

    if (!user) {
      throw new NotFoundException(CustomExceptions.USER_NOT_FOUND);
    }

    user.verifyCode = this.smsService.mockGenerateCode();
    await this.userRepo.save(user);

    return true;
  }

  async resetPassword({
    phoneNumber,
    resetPasswordCode,
    newPassword,
  }: AuthVerifyOtp): Promise<boolean> {
    const user = await this.userRepo.findOne({ where: { phoneNumber } });

    if (!user) {
      throw new NotFoundException(CustomExceptions.USER_NOT_FOUND);
    }
    if (user.resetPasswordCode !== resetPasswordCode) {
      throw new ForbiddenException(CustomExceptions.VERIFY_CODE_INCORRECT);
    }

    user.resetPasswordCode = null;
    user.password = await this.passwordManager.hashPassword(newPassword);
    await this.userRepo.save(user);

    return true;
  }
}
