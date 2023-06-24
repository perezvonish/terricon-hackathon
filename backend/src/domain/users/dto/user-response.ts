import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from '../../interfaces/user.roles';
import { UsersEntity } from '../users.entity';

export class UserResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  isVerify: boolean;

  @ApiProperty({ enum: UserRoles })
  role: UserRoles;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(user: UsersEntity) {
    this.id = user.id;
    this.phoneNumber = user.phoneNumber;
    this.name = user.name;
    this.surname = user.surname;
    this.isVerify = user.isVerify;
    this.role = user.role;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
