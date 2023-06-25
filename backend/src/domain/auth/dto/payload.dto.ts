import { UserRoles } from '../../interfaces/user.roles';

export class PayloadDto {
  id: number;
  phoneNumber: string;
  role: UserRoles;
  isVerify: boolean;
  registerAt: Date;
  updatedAt: Date;

  constructor(
    phoneNumber: string,
    role: UserRoles,
    isVerify: boolean,
    registerAt: Date,
    updatedAt: Date,
  ) {
    this.phoneNumber = phoneNumber;
    this.role = role;
    this.isVerify = isVerify;
    this.registerAt = registerAt;
    this.updatedAt = updatedAt;
  }
}
