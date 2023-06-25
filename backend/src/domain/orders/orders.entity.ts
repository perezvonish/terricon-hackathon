import { Column, Entity } from 'typeorm';
import { BasicEntity } from '../../config/basic.entity';

@Entity('orders')
export class OrdersEntity extends BasicEntity {
  @Column()
  clientId: number;

  @Column()
  employeeId: number;

  @Column()
  address: string;

  @Column()
  time: number;

  @Column()
  price: number;

  constructor(
    clientId: number,
    employeeId: number,
    address: string,
    time: number,
    price: number,
  ) {
    super();
    this.clientId = clientId;
    this.employeeId = employeeId;
    this.address = address;
    this.time = time;
    this.price = price;
  }
}
