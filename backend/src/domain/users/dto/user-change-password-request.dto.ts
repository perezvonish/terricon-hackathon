import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class UserChangePasswordRequestDto {
  @ApiProperty({ example: 'myPassword11' })
  @IsString()
  @Length(11, 30)
  public password: string;

  @ApiProperty({ example: 'myNewPassword11' })
  @IsString()
  @Length(11, 30)
  public newPassword: string;

  @ApiProperty({ example: 'myNewPassword11' })
  @IsString()
  @Length(11, 30)
  public repeatPassword;
}
