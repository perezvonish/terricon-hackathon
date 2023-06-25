import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceRepository } from '../../infrastructure/repositories/service.repository';
import { ServiceCreateRequestDto } from './dto/service-create-request.dto';
import { ServiceResponseDto } from './dto/service-response.dto';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { ServiceEntity } from './service.entity';

@Injectable()
export class ServiceService {
  constructor(
    private readonly serviceRepo: ServiceRepository,
    private readonly userRepo: UsersRepository,
    private readonly categoryRepo: CategoryRepository,
  ) {}

  public async create(
    userId: number,
    dto: ServiceCreateRequestDto,
  ): Promise<ServiceResponseDto> {
    const serviceFromUserIsAlready = await this.serviceRepo.getByTitleAndUserId(
      userId,
      dto.title,
    );
    if (serviceFromUserIsAlready) {
      throw new HttpException(
        'title already exist in ur services',
        HttpStatus.BAD_REQUEST,
      );
    }
    const category = await this.categoryRepo.getById(dto.categoryId);
    if (!category) {
      throw new HttpException('category not found', HttpStatus.BAD_REQUEST);
    }
    const employee = await this.userRepo.getUserWithEmployeeByUserId(userId);
    if (!employee) {
      if (!category) {
        throw new HttpException('employee not found', HttpStatus.BAD_REQUEST);
      }
    }
    const serviceEntity = new ServiceEntity(
      dto.title,
      dto.description,
      category.id,
      employee.id,
    );
    const service = await this.serviceRepo.save(serviceEntity);
    return new ServiceResponseDto(service);
  }

  async getById(id: number) {
    const service = await this.serviceRepo.getById(id);
  }

  async getByTitle(title: string) {
    return await this.serviceRepo.getByTitle(title);
  }
}
