import { UsersEntity } from '../domain/users/users.entity';
import { SmsResetPasswordEntity } from '../domain/sms/sms-reset-password.entity';
import { ReviewsEntity } from '../domain/reviews/reviews.entity';
import { OrdersEntity } from '../domain/orders/orders.entity';

export const EntitiesArray = [
  UsersEntity,
  ReviewsEntity,
  OrdersEntity,
  SmsResetPasswordEntity,
];
