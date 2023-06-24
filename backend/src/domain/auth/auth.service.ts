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

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly userRepo: UsersRepository,
    private readonly configService: ConfigService,
    private readonly smsService: SmsService,
    private readonly passwordManager: PasswordManager,
  ) {}

  private async signIn(payload: PayloadDto): Promise<AuthLoginSuccess> {
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

  async login({ phoneNumber, password }: AuthLoginRequestDto): Promise<any> {
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
    const alreadyUser = await this.userRepo.getByPhoneNumber(dto.phoneNumber);
    if (alreadyUser) {
      throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await this.passwordManager.hashPassword(dto.password);

    const verifyCode = this.smsService.mockGenerateCode();
    const userInsert = new UsersEntity(
      dto.phoneNumber,
      hashPassword,
      dto.name,
      dto.surname,
      dto.role,
      verifyCode,
    );
    const user = await this.userRepo.save(userInsert);
    return new AuthRegisterResponseDto(user.id, user.phoneNumber);
  }

  async verifyOtpCode(
    user: UsersEntity,
    dto: AuthVerifyOtpRequest,
  ): Promise<void> {
    if (user.isVerify) {
      throw new HttpException('user verify already', HttpStatus.BAD_REQUEST);
    }
    if (user.verifyCode != dto.code) {
      throw new HttpException('invalid code', HttpStatus.BAD_REQUEST);
    }
    user.isVerify = true;
    await this.userRepo.save(user);
  }
}
