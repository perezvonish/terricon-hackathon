import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from '../../domain/orders/orders.service';
import { GetOrdersList, OrdersCreate } from '../dto/orders/orders-request';

@Controller()
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post('create')
  async createOrder(@Body() body: OrdersCreate) {
    return await this.orderService.createOrder(body);
  }

  @Get(':userId')
  async getOrdersList(@Param('userId') param: GetOrdersList) {
    return await this.orderService.getOrdersList(param);
  }
}
