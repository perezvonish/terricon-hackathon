import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class PasswordManager {
  private readonly saltRounds: number = Number(
    this.configService.get('BCRYPT_SALT_ROUNDS'),
  );

  constructor(private readonly configService: ConfigService) {}

  public async hashPassword(password: string) {
    return await hash(password, this.saltRounds);
  }

  public async comparePassword(password: string, hash: string) {
    return await compare(password, hash);
  }
}
