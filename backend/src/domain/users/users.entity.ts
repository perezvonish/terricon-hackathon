import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRoles } from '../interfaces/user.roles';
import { EmployeeEntity } from '../employee/employee.entity';
import { ClientEntity } from '../client/client.entity';
// import { SmsResetPasswordEntity } from '../sms/sms-reset-password.entity';
@Entity({ name: 'user' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  phoneNumber: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  city: string;

  @Column({ length: 400, nullable: true })
  bio: string;

  @Column({ default: false })
  isVerify: boolean;

  @Column()
  verifyCode: string;

  @Column({ nullable: true })
  resetPasswordCode: string;

  @Column({ enum: UserRoles })
  role: UserRoles;

  @Column({ default: 0 })
  raining: number;

  @OneToOne(() => EmployeeEntity)
  employee: EmployeeEntity;

  @OneToOne(() => ClientEntity)
  client: ClientEntity;

  // @OneToMany(
  //   () => SmsResetPasswordEntity,
  //   (smsResetPassword) => smsResetPassword.user,
  // )
  // smsResetPassword: SmsResetPasswordEntity[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;

  constructor(
    phoneNumber: string,
    password: string,
    name: string,
    surname: string,
    role: UserRoles,
    verifyCode: string,
  ) {
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.name = name;
    this.surname = surname;
    this.role = role;
    this.verifyCode = verifyCode;
  }
}
