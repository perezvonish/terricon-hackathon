import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '../users/users.entity';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [SmsService, UsersRepository],
})
export class SmsModule {}
