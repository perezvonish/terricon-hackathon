import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../../domain/auth/auth.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AuthRegisterRequestDto } from '../../domain/auth/dto/auth-register-request.dto';
import { AuthRegisterResponseDto } from '../../domain/auth/dto/auth-register-response.dto';
import { AuthLoginRequestDto } from '../../domain/auth/dto/auth-login-request.dto';
import { AuthLoginResponseDto } from '../../domain/auth/dto/auth-login-response.dto';
import JwtAuthenticationGuard from '../guards/jwt-auth.guard';
import { AuthVerifyOtpRequest } from '../../domain/auth/dto/auth-verify-otp-request';
import { AuthVerifyOtp, RequestRecovery } from '../dto/auth/auth.request';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'login user' })
  @ApiOkResponse({ type: AuthLoginResponseDto })
  @Post('login')
  async login(
    @Body() body: AuthLoginRequestDto,
  ): Promise<AuthLoginResponseDto> {
    return this.authService.login(body);
  }

  @ApiOperation({ summary: 'registration new user' })
  @ApiCreatedResponse({ type: AuthRegisterResponseDto })
  @ApiBadRequestResponse()
  @Post('register')
  async register(
    @Body() dto: AuthRegisterRequestDto,
  ): Promise<AuthRegisterResponseDto> {
    return this.authService.register(dto);
  }

  @ApiOperation({ summary: 'verify user' })
  @ApiOkResponse()
  @Patch('verify-otp')
  verifyOtpCode(@Body() dto: AuthVerifyOtpRequest) {
    return this.authService.verifyOtpCode(dto);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('request-recovery')
  @ApiOkResponse()
  async requestRecovery(@Body() body: RequestRecovery): Promise<boolean> {
    return await this.authService.requestRecovery(body);
  }

  @Post('reset-password')
  @ApiOkResponse()
  async resetPassword(@Body() body: AuthVerifyOtp): Promise<boolean> {
    return this.authService.resetPassword(body);
  }
}
