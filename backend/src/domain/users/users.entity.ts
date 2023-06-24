import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRoles } from '../interfaces/user.roles';
@Entity({ name: 'user' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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

  @Column({ enum: UserRoles })
  role: UserRoles;

  @Column({ default: 0 })
  raining: number;

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
