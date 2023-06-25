import { Column, Entity, OneToMany } from 'typeorm';
import { BasicEntity } from '../../config/basic.entity';
import { ServiceEntity } from '../service/service.entity';

@Entity({ name: 'category' })
export class CategoryEntity extends BasicEntity {
  @Column({ unique: true })
  title: string;

  @Column()
  description: string;

  @OneToMany(() => ServiceEntity, (service) => service.category)
  services: ServiceEntity[];

  constructor(title: string, description: string) {
    super();
    this.title = title;
    this.description = description;
  }
}
