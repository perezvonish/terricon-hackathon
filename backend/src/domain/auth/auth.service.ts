import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UsersEntity } from '../users/users.entity';
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
import { AuthTransaction } from '../../infrastructure/transactions/auth-transaction';
import { AuthLoginResponseDto } from './dto/auth-login-response.dto';
import { v4 } from 'uuid';
import { SmsResetPasswordEntity } from '../sms/sms-reset-password.entity';
import { SmsResetPasswordRepository } from '../../infrastructure/repositories/sms-reset-password.repository';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly userRepo: UsersRepository,
    private readonly configService: ConfigService,
    private readonly smsService: SmsService,
    private readonly passwordManager: PasswordManager,
    private readonly authTransaction: AuthTransaction,
    private readonly smsResetPasswordRepo: SmsResetPasswordRepository,
  ) {}

  private async signIn(payload: PayloadDto): Promise<AuthLoginSuccess> {
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

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

  async register(
    dto: AuthRegisterRequestDto,
  ): Promise<AuthRegisterResponseDto> {
    if (dto.password !== dto.repeatPassword) {
      throw new HttpException(
        'invalid password repeat',
        HttpStatus.BAD_REQUEST,
      );
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

    const user = await this.authTransaction.register(
      dto,
      hashPassword,
      verifyCode,
    );
    return new AuthRegisterResponseDto(1, '123123');
  }

  async verifyOtpCode(
    user: UsersEntity,
    dto: AuthVerifyOtpRequest,
  ): Promise<void> {
    if (user.isVerify) {
      throw new HttpException('user verify already', HttpStatus.BAD_REQUEST);
    }

    async loginCompany() {

    }

    private checkPasswordRepeat(password: string, repeat: string) {
        return password === repeat
    if (user.verifyCode != dto.code) {
      throw new HttpException('invalid code', HttpStatus.BAD_REQUEST);
    }
    user.isVerify = true;
    await this.userRepo.save(user);
  }

  async getResetPasswordCode(phoneNumber: string): Promise<void> {
    const user = await this.validateUserByPhoneNumber(phoneNumber);
    const smsCode = this.smsService.mockGenerateCode();
    const smsResetPassword = new SmsResetPasswordEntity(smsCode, v4(), user);

    const sms = await this.smsResetPasswordRepo.save(smsResetPassword);
  }

  private async validateUserByPhoneNumber(
    phoneNumber: string,
  ): Promise<UsersEntity> {
    const candidate = await this.userRepo.getByPhoneNumber(phoneNumber);
    console.log(candidate);
    console.log('zxc');

    if (!candidate) {
      throw new NotFoundException(CustomExceptions.USER_NOT_FOUND);
    }
    return candidate;
  }
}
