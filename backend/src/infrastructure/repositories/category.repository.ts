import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '../../domain/category/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repo: Repository<CategoryEntity>,
  ) {}

  async save(category: CategoryEntity): Promise<CategoryEntity> {
    return await this.repo.save(category);
  }

  async getByTitle(title: string): Promise<CategoryEntity> {
    return await this.repo
      .createQueryBuilder('category')
      .where('category.title = :title', { title })
      .getOne();
  }

  async getById(id: number): Promise<CategoryEntity> {
    return await this.repo
      .createQueryBuilder('category')
      .where('category.id = :id', { id })
      .getOne();
  }
}
