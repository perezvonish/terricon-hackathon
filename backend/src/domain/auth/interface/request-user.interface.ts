import { UsersEntity } from '../../users/users.entity';
import { Request } from 'express';

export interface IRequestUser extends Request {
  user: UsersEntity;
}
