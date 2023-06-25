import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRoles } from '../interfaces/user.roles';
import { ReviewsEntity } from '../reviews/reviews.entity';

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
  country: string;

  @Column({ nullable: true })
  birthday: Date;

  @Column({ length: 400, nullable: true })
  bio: string;

  @Column({ default: false })
  isVerify: boolean;

  @Column({ nullable: true })
  verifyCode: string;

  @OneToMany(() => ReviewsEntity, (review) => review.user)
  reviews: ReviewsEntity[];

  @Column({ nullable: true })
  resetPasswordCode: string;

  @Column({ enum: UserRoles })
  role: UserRoles;

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
