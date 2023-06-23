import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "../../domain/auth/auth.service";
import {AuthLogin, AuthVerifyOtp} from "../dto/auth/auth.request";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post("register")
    async register(@Body() body) {
        return await this.authService.register(body);
    }

    @Post("verify-otp")
    async verifyOtpCode(@Body() body: AuthVerifyOtp) {
        return await this.authService.verifyOtpCode(body)
    }

    @Post("login")
    async login(@Body() body: AuthLogin) {
        return await this.authService.login(body);
    }
}