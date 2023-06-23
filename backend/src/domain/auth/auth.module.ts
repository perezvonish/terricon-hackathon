import "dotenv/config.js"
import {Module} from "@nestjs/common";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";

@Module({
    imports: [
        JwtModule.register({
        global: true,
        secret: process.env.JWT_SECRET.toString(),
        signOptions: { expiresIn: '3d' },
        }),
    ]
})
export class AuthModule {}