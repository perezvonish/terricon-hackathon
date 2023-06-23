import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "../../domain/auth/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post("login")
    async login(@Body() body) {
        return await this.authService.login(body);
    }

    @Post("register")
    async register(@Body() body) {
        return await this.authService.register(body);
    }
}