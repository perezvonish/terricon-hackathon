import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import JwtAuthenticationGuard from '../guards/jwt-auth.guard';
import { AdminGuard } from '../guards/admin.guard';
import { CategoryCreateDto } from '../../domain/category/dto/category-create.dto';
import { AdminCategoryService } from '../../domain/category/admin-category.service';
import { CategoryCreateResponse } from '../../domain/category/dto/category-create.response';

@ApiTags('admin/category')
@Controller('admin/category')
@UseGuards(JwtAuthenticationGuard, AdminGuard)
export class AdminCategoryController {
  constructor(private readonly adminCategoryService: AdminCategoryService) {}

  @Post('create')
  async create(
    @Body() dto: CategoryCreateDto,
  ): Promise<CategoryCreateResponse> {
    return this.adminCategoryService.create(dto);
  }
}
