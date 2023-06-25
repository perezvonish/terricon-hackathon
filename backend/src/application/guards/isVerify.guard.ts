import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { IRequestUser } from '../../domain/auth/interface/request-user.interface';

@Injectable()
export class IsVerifyGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user } = context.switchToHttp().getRequest<IRequestUser>();
    return user.isVerify;
  }
}
