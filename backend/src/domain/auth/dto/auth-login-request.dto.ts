import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class AuthLoginRequestDto {
  @ApiProperty({ example: '77017744374' })
  @Transform(({ value }) => `${Number.parseInt(value)}`)
  @IsPhoneNumber('KZ')
  phoneNumber: string;

  @ApiProperty({ example: 'myPassword' })
  @IsString()
  @Length(11, 30)
  password: string;
}
