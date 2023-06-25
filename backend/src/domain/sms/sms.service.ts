import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
  public mockGenerateCode(): string {
    if (process.env.ENVIRONMENT_TYPE !== 'PROD') {
      return '6666';
    }
  }
}
