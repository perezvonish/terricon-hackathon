import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntity } from './service.entity';
import { ServiceService } from './service.service';
import { ServiceRepository } from '../../infrastructure/repositories/service.repository';
import { ServiceController } from '../../application/controllers/service.controller';
import { UsersEntity } from '../users/users.entity';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { CategoryEntity } from '../category/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ServiceEntity, UsersEntity, CategoryEntity]),
  ],
  controllers: [ServiceController],
  providers: [
    ServiceService,
    ServiceRepository,
    UsersRepository,
    CategoryRepository,
  ],
})
export class ServiceModule {}
