import { ApiProperty } from '@nestjs/swagger';

export class UsersUpdateProfile {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  birthday: Date;

  @ApiProperty({ nullable: true })
  password: string;

  @ApiProperty({ nullable: true })
  newPassword: string;
}
