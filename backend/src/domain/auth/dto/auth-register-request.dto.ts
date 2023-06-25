import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsPhoneNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { UserRoles } from '../../interfaces/user.roles';
import { Transform } from 'class-transformer';

export class AuthRegisterRequestDto {
  @ApiProperty({ example: '7963923341' })
  @Transform(({ value }) => `${Number.parseInt(value)}`)
  @IsPhoneNumber('KZ')
  phoneNumber: string;

  @ApiProperty({ example: 'Олег' })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({ example: 'Журавлев' })
  @MinLength(1)
  surname: string;

  @ApiProperty({ example: 'myPassword11' })
  @IsString()
  @Length(11, 30)
  password: string;

  @ApiProperty({ example: 'myPassword11' })
  @IsString()
  @Length(11, 30)
  public repeatPassword;

  @ApiProperty({ example: 'CLIENT', enum: UserRoles })
  @IsEnum(UserRoles)
  role: UserRoles;
}
