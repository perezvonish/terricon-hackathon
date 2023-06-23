import {ApiProperty} from "@nestjs/swagger";

export class AuthRegister {
    @ApiProperty()
    phoneNumber: string

    @ApiProperty()
    userName: string

    @ApiProperty()
    password: string

    @ApiProperty()
    passwordRepeat: string
}

export class AuthVerifyOtp {
    @ApiProperty()
    code: string
}

export class AuthLogin {
    @ApiProperty()
    userName: string

    @ApiProperty()
    password: string
}