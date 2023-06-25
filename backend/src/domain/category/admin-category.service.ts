import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { CategoryCreateDto } from './dto/category-create.dto';
import { CategoryEntity } from './category.entity';
import { CategoryCreateResponse } from './dto/category-create.response';

@Injectable()
export class AdminCategoryService {
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async create(dto: CategoryCreateDto): Promise<CategoryCreateResponse> {
    const categoryIsExists = await this.categoryRepo.getByTitle(dto.title);
    if (categoryIsExists) {
      throw new HttpException(
        'category title already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const categoryEntity = new CategoryEntity(dto.title, dto.description);
    const category = await this.categoryRepo.save(categoryEntity);
    return new CategoryCreateResponse(category);
  }
}
