import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { UsersEntity } from './users.entity';
import { UserResponse } from './dto/user-response';
import { UserChangePasswordRequestDto } from './dto/user-change-password-request.dto';
import { PasswordManager } from '../../infrastructure/password-manager';
import { FindOneOptions } from 'typeorm';
import { UserRoles } from '../interfaces/user.roles';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepo: UsersRepository,
    private readonly passwordManager: PasswordManager,
  ) {}

  public async getUserById(id: number): Promise<UserResponse> {
    const user = await this.findUserById(id);
    return new UserResponse(user);
  }

  public async findOne(where: FindOneOptions<UsersEntity>) {
    return await this.userRepo.findOne(where);
  }

  public async save(user: UsersEntity) {
    return await this.userRepo.save(user);
  }

  private async findUserById(id: number): Promise<UsersEntity> {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async getEmployeeList() {
    return await this.userRepo.findMany({
      role: UserRoles.EMPLOYER,
    });
  }

  public async changePassword(
    user: UsersEntity,
    dto: UserChangePasswordRequestDto,
  ): Promise<void> {
    const verifyPassword = await this.passwordManager.comparePassword(
      dto.password,
      user.password,
    );
    if (!verifyPassword) {
      throw new HttpException('invalid password', HttpStatus.BAD_REQUEST);
    }
    if (!dto.newPassword === dto.repeatPassword) {
      throw new HttpException(
        'invalid password repeat',
        HttpStatus.BAD_REQUEST,
      );
    }
    user.password = await this.passwordManager.hashPassword(dto.newPassword);
    await this.userRepo.save(user);
  }
}
