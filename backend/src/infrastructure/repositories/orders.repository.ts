import { Injectable } from '@nestjs/common';
import { IRepository } from '../../domain/interfaces/repository.interface';
import { OrdersEntity } from '../../domain/orders/orders.entity';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersRepository implements IRepository<OrdersEntity> {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly repo: Repository<OrdersEntity>,
  ) {}

  findMany(where: FindManyOptions<OrdersEntity>) {
    return this.repo.find(where);
  }

  findOne(where: FindOneOptions<OrdersEntity>) {}

  save(data: DeepPartial<OrdersEntity>) {
    return this.repo.save(data);
  }

  softDelete(where: FindOptionsWhere<OrdersEntity>) {}
}
