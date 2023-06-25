import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class UserUpdateProfileRequestDto {
  @ApiPropertyOptional({ example: '7963923341' })
  @Transform(({ value }) => `${Number.parseInt(value)}`)
  @IsPhoneNumber('KZ')
  @IsOptional()
  phoneNumber: string;

  @ApiPropertyOptional({ example: 'Олег' })
  @IsString()
  @MinLength(1)
  @IsOptional()
  name: string;

  @ApiPropertyOptional({ example: 'Журавлев' })
  @MinLength(1)
  @IsOptional()
  surname: string;

  @ApiPropertyOptional({ example: 'my@email.kz' })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiPropertyOptional({ example: 'my bio' })
  @IsString()
  @IsOptional()
  @Length(0, 400)
  bio: string;
}
