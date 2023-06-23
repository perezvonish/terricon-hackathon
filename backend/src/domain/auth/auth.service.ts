import {Injectable, NotFoundException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {UsersService} from "../users/users.service";
import {AuthLogin, AuthRegister, AuthVerifyOtp} from "../../application/dto/auth/auth.request";
import {FindOptionsWhere} from "typeorm";
import {UsersEntity} from "../users/users.entity";
import {CustomExceptions} from "../../config/custom.exceptions";
import bcrypt from "bcrypt";
import "dotenv/config.js"
import * as process from "process";
import {AuthLoginSuccess} from "../../application/dto/auth/auth.response";
import {UserRoles} from "../interfaces/user.roles";

@Injectable()
export class AuthService {
    private readonly saltRounds: number = Number(process.env.BCRYPT_SALT_ROUNDS)

    constructor(
        private jwtService: JwtService,
        private readonly usersService: UsersService,
    ) {}

    private async signIn(userName: string, type: UserRoles): Promise<AuthLoginSuccess> {
        return {
            token: await this.jwtService.signAsync({ userName, type }),
        };
    }

    async login({userName, password}: AuthLogin): Promise<AuthLoginSuccess> {
        const where: FindOptionsWhere<UsersEntity> = {
            userName
        }
        const user = await this.usersService.findOne(where);

        if (!user){
            throw new NotFoundException(CustomExceptions.USER_NOT_FOUND)
        }

        if (await this.comparePassword(password, user.password)){
            return await this.signIn(user.userName, user.type)
        }
    }

    async register(data: AuthRegister) {}

    async verifyOtpCode({code}: AuthVerifyOtp) {
        //hardcode
    }

    async getMe() {
        const user = await this.usersService.findOne({userName: "as"})
    }

    private checkPasswordRepeat(password: string, repeat: string) {
        return password === repeat
    }

    private async hashPassword(password: string) {
        return await bcrypt.hashSync(password, this.saltRounds);
    }

    private async comparePassword(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }
}