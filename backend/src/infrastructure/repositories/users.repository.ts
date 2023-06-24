import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../domain/users/users.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
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

  async getById(id: number): Promise<UsersEntity> {
    return await this.repo
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  }

  async getUserWithEmployeeByUserId(id: number): Promise<UsersEntity> {
    return await this.repo
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .andWhere('user.role = :role', { role: UserRoles.EMPLOYER })
      .leftJoinAndSelect('user.emoloyee', 'emoloyee')
      .getOne();
  }

  // async getUserByPhoneNumberWithSmsResetPassword(
  //   phoneNumber: string,
  // ): Promise<UsersEntity> {
  //   return await this.repo
  //     .createQueryBuilder('user')
  //     .where('user.phoneNumber = :phoneNumber', { phoneNumber })
  //     // .leftJoinAndSelect();
  // }
}