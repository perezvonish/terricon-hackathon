import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from '../../application/controllers/category.controller';
import { AdminCategoryService } from './admin-category.service';
import { AdminCategoryController } from '../../application/controllers/admin-category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController, AdminCategoryController],
  providers: [CategoryRepository, CategoryService, AdminCategoryService],
})
export class CategoryModule {}
