import { Module } from '@nestjs/common';
import { UsersController } from '../../application/controllers/users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from '../../infrastructure/repositories/users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import JwtAuthenticationGuard from '../../application/guards/jwt-auth.guard';
import { JwtStrategy } from '../../application/strategies/jwt.strategy';
import { PasswordManager } from '../../infrastructure/password-manager';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersRepository,
    JwtAuthenticationGuard,
    JwtStrategy,
    PasswordManager,
  ],
  exports: [],
})
export class UsersModule {}
