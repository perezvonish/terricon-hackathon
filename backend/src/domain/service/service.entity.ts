import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BasicEntity } from '../../config/basic.entity';
import { CategoryEntity } from '../category/category.entity';
import { EmployeeEntity } from '../employee/employee.entity';

@Entity({ name: 'service' })
export class ServiceEntity extends BasicEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => CategoryEntity, (category) => category.services, {
    cascade: ['remove'],
  })
  @JoinColumn({ name: 'category_id' })
  category: number;

  @Column({ default: 0 })
  rating: number;

  @Column({ nullable: true })
  img: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.services)
  @JoinColumn({ name: 'employee_id' })
  employee: number;

  constructor(
    title: string,
    description: string,
    categoryId: number,
    employeeId: number,
    img?: string,
  ) {
    super();
    this.title = title;
    this.description = description;
    this.category = categoryId;
    this.employee = employeeId;
    if (img) {
      this.img = img;
    }
  }
}
