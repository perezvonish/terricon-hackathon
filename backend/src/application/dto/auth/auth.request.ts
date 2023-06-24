import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString } from 'class-validator';

export class AuthRegister {
  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  userName: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  passwordRepeat: string;
}

export class AuthVerifyOtp {
  @ApiProperty()
  code: string;
}

export class AuthLogin {
  @ApiProperty()
  @IsPhoneNumber('KZ')
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  password: string;
}
