import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class CategoryCreateDto {
  @ApiProperty({ example: 'nazvanie' })
  @IsString()
  @Transform(({ value }) => value.trim().toLowerCase())
  @Length(3, 30)
  title: string;

  @ApiProperty({ example: 'opisanie' })
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(10, 100)
  description: string;
}
