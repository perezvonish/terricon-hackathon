import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class AuthVerifyOtpRequest {
  @ApiProperty({ example: '7963923341' })
  @Transform(({ value }) => `${Number.parseInt(value)}`)
  @IsPhoneNumber('KZ')
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  code: string;
}
