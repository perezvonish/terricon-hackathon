import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../domain/users/users.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

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

  async getById(id: number): Promise<UsersEntity> {
    return await this.repo
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  }
}
