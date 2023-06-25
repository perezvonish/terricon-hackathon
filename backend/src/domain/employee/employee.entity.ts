import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BasicEntity } from '../../config/basic.entity';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'employee' })
export class EmployeeEntity extends BasicEntity {
  @OneToOne(() => UsersEntity, { cascade: ['insert', 'update', 'remove'] })
  @JoinColumn({ name: 'user_id' })
  user: number;

  @Column({ default: 0 })
  rating: number;

  constructor(userId: number) {
    super();
    this.user = userId;
  }
}
