import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class ServiceCreateRequestDto {
  @ApiProperty({ example: 'уборка от олега' })
  @IsString()
  @Transform(({ value }) => value.trim().toLowerCase())
  @Length(3, 30)
  title: string;

  @ApiProperty({ example: 'крутая реально уборка от олега' })
  @IsString()
  @Transform(({ value }) => value.trim())
  @Length(10, 100)
  description: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  categoryId: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  img: string;
}
