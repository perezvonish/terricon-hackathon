import { ApiProperty } from '@nestjs/swagger';
import { ServiceEntity } from '../service.entity';

export class ServiceResponseDto {
  @ApiProperty({ example: 'уборка от олега' })
  title: string;

  @ApiProperty({ example: 'крутая реально уборка от олега' })
  description: string;

  @ApiProperty({ example: 1 })
  categoryId: number;

  @ApiProperty({ example: 5 })
  rating: number;

  @ApiProperty({ nullable: true })
  img: string;

  @ApiProperty()
  employeeId: number;

  constructor(service: ServiceEntity) {
    this.title = service.title;
    this.description = service.description;
    this.categoryId = service.category;
    this.rating = service.rating;
    this.img = service?.img ?? null;
    this.employeeId = service.employee;
  }
}
