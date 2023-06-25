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

export class RequestRecovery {
  @ApiProperty()
  phoneNumber: string;
}

export class AuthVerifyOtp {
  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  resetPasswordCode: string;

  @ApiProperty()
  newPassword: string;
}

export class AuthLogin {
  @ApiProperty()
  @IsPhoneNumber('KZ')
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  password: string;
}
