import { Injectable, NotFoundException } from '@nestjs/common';
import {
  GetOrdersList,
  OrdersCreate,
} from '../../application/dto/orders/orders-request';
import { OrdersRepository } from '../../infrastructure/repositories/orders.repository';
import { UsersService } from '../users/users.service';
import { CustomExceptions } from '../../config/custom.exceptions';
import { OrdersEntity } from './orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
    private readonly usersService: UsersService,
  ) {}

  async createOrder(data: OrdersCreate) {
    const client = await this.usersService.findOne({
      where: { id: data.clientId },
    });

    if (!client) {
      throw new NotFoundException(CustomExceptions.USER_NOT_FOUND);
    }

    const employee = await this.usersService.findOne({
      where: { id: data.employeeId },
    });

    if (!employee) {
      throw new NotFoundException(CustomExceptions.USER_NOT_FOUND);
    }

    const order = new OrdersEntity(
      data.clientId,
      data.employeeId,
      data.address,
      data.time,
      data.price,
    );

    return await this.ordersRepository.save(order);
  }

  async getOrdersList(data: GetOrdersList) {
    return this.ordersRepository.findMany({
      where: {
        clientId: data.userId,
      },
    });
  }
}
