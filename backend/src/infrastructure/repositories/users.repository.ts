import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../domain/users/users.entity';
import {
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IRepository } from '../../domain/interfaces/repository.interface';

@Injectable()
export class UsersRepository implements IRepository<UsersEntity> {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly repo: Repository<UsersEntity>,
  ) {}

  async save(user: UsersEntity): Promise<UsersEntity> {
    return await this.repo.save(user);
  }

  async getByPhoneNumber(phoneNumber: string): Promise<UsersEntity> {
    return await this.repo
      .createQueryBuilder('user')
      .where('user.phone_number = :phoneNumber', { phoneNumber })
      .getOne();
  }

  async getById(id: number): Promise<UsersEntity> {
    return await this.repo
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  }

  findMany(where: FindManyOptions<UsersEntity>) {
    return this.repo.find(where);
  }

  findOne(where: FindOneOptions<UsersEntity>) {
    return this.repo.findOne(where);
  }

  softDelete(where: FindOptionsWhere<UsersEntity>) {
    return this.repo.softDelete(where);
  }
}
