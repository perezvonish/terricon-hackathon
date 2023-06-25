import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SmsResetPasswordEntity } from '../../domain/sms/sms-reset-password.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SmsResetPasswordRepository {
  constructor(
    @InjectRepository(SmsResetPasswordEntity)
    private readonly repo: Repository<SmsResetPasswordEntity>,
  ) {}

  async save(
    smsResetPassword: SmsResetPasswordEntity,
  ): Promise<SmsResetPasswordEntity> {
    return await this.repo.save(smsResetPassword);
  }

  async getLastTokenByCode(
    id: number,
    code: string,
  ): Promise<SmsResetPasswordEntity> {
    return await this.repo
      .createQueryBuilder('sms_reset_password')
      .where('sms_reset_password.user = :id', {
        id,
      })

      .andWhere('sms_reset_password.code = :code', { code })
      .orderBy('sms_reset_password.createdAt', 'DESC')
      .getOne();
  }
}
