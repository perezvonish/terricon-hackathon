import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BasicEntity } from '../../config/basic.entity';
import { UsersEntity } from '../users/users.entity';
import { ServiceEntity } from '../service/service.entity';

@Entity({ name: 'employee' })
export class EmployeeEntity extends BasicEntity {
  @OneToOne(() => UsersEntity, { cascade: ['insert', 'update', 'remove'] })
  @JoinColumn({ name: 'user_id' })
  user: number;

  @Column({ default: 0 })
  rating: number;

  @OneToMany(() => ServiceEntity, (service) => service.employee)
  services: ServiceEntity[];

  constructor(userId: number) {
    super();
    this.user = userId;
  }
}
