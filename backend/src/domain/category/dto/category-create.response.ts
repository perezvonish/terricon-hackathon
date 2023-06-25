import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from '../category.entity';

export class CategoryCreateResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Генеральная уборка' })
  title: string;

  @ApiProperty({ example: 'Очень классная генеральная уборка' })
  description: string;

  constructor(category: CategoryEntity) {
    this.id = category.id;
    this.title = category.title;
    this.description = category.description;
  }
}
