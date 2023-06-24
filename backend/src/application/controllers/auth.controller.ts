import { Body, Controller, Patch, Post, Req, UseGuards } from '@nestjs/common';
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
import { IRequestUser } from '../../domain/auth/interface/request-user.interface';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  @UseGuards(JwtAuthenticationGuard)
  @Patch('verify-otp')
  async verifyOtpCode(
    @Body() dto: AuthVerifyOtpRequest,
    @Req() req: IRequestUser,
  ) {
    return this.authService.verifyOtpCode(req.user, dto);
  }

  @ApiOperation({ summary: 'login user' })
  @ApiOkResponse({ type: AuthLoginResponseDto })
  @Post('login')
  async login(
    @Body() body: AuthLoginRequestDto,
  ): Promise<AuthLoginResponseDto> {
    return this.authService.login(body);
  }
}
