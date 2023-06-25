import { Module } from '@nestjs/common';
import { OrdersController } from '../../application/controllers/orders.controller';
import { OrdersRepository } from '../../infrastructure/repositories/orders.repository';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from './orders.entity';
import { ReviewsEntity } from '../reviews/reviews.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrdersEntity, ReviewsEntity]),
    UsersModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrderModule {}
