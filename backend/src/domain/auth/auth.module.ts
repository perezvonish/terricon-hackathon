import 'dotenv/config.js';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '../../application/controllers/auth.controller';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../users/users.entity';
import { SmsService } from '../sms/sms.service';
import JwtAuthenticationGuard from '../../application/guards/jwt-auth.guard';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../../application/strategies/jwt.strategy';
import { PasswordManager } from '../../infrastructure/password-manager';
import { IsVerifyGuard } from '../../application/guards/isVerify.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET.toString(),
      signOptions: { expiresIn: '3d' },
    }),
    TypeOrmModule.forFeature([UsersEntity]),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersRepository,
    UsersService,
    SmsService,
    JwtAuthenticationGuard,
    JwtStrategy,
    PasswordManager,
    IsVerifyGuard,
  ],
})
export class AuthModule {}
