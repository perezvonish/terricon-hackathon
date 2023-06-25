import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class CategoryController {

  @Get('/list')
  getList() {
    return [
      'Генеральная уборка',
      'Уборка номеров',
      'Уборка после ремонта',
      'Поддерживающая уборка',
      'Эко-уборка',
    ];
  }
}
