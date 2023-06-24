import { UsersEntity } from '../domain/users/users.entity';
import { EmployeeEntity } from '../domain/employee/employee.entity';
import { ClientEntity } from '../domain/client/client.entity';
import { SmsResetPasswordEntity } from '../domain/sms/sms-reset-password.entity';
import { ServiceEntity } from '../domain/service/service.entity';
import { CategoryEntity } from '../domain/category/category.entity';

export const EntitiesArray = [
  UsersEntity,
  EmployeeEntity,
  ClientEntity,
  SmsResetPasswordEntity,
  ServiceEntity,
  CategoryEntity,
];