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
import { UserRoles } from '../../domain/interfaces/user.roles';

@Injectable()
export class UsersRepository {
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

  findMany(where: FindOptionsWhere<UsersEntity>) {
    return this.repo
      .createQueryBuilder('user')
      .select('user.id')
      .where(`user.role = ${UserRoles.EMPLOYER}`)
      .getMany();
  }

  findOne(where: FindOneOptions<UsersEntity>) {
    return this.repo.findOne(where);
  }

  softDelete(where: FindOptionsWhere<UsersEntity>) {
    return this.repo.softDelete(where);
  }
}
