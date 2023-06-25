import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceEntity } from '../../domain/service/service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceRepository {
  constructor(
    @InjectRepository(ServiceEntity)
    private readonly repo: Repository<ServiceEntity>,
  ) {}

  async save(service: ServiceEntity): Promise<ServiceEntity> {
    return await this.repo.save(service);
  }

  async getByTitleAndUserId(userId: number, title: string) {
    return await this.repo
      .createQueryBuilder('service')
      .where('service.user_id = :userId', { userId })
      .andWhere('service.title = :title', { title })
      .getOne();
  }

  async getById(id: number): Promise<ServiceEntity> {
    return await this.repo
      .createQueryBuilder('service')
      .where('service.id = :id', { id })
      .getOne();
  }
  async getByTitle(title: string): Promise<ServiceEntity> {
    return await this.repo
      .createQueryBuilder('service')
      .where('service.title = :title', { title })
      .getOne();
  }
}
