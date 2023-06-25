import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BasicEntity } from '../../config/basic.entity';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'sms_reset_password' })
export class SmsResetPasswordEntity extends BasicEntity {
  @Column()
  code: string;

  @Column()
  token: string;

  @ManyToOne(() => UsersEntity, (user) => user.id, {
    cascade: ['insert', 'remove'],
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @Column({ default: false })
  verify: boolean;

  constructor(code: string, token: string, user: UsersEntity) {
    super();

    this.code = code;
    this.token = token;
    this.user = user;
  }
}
