import { SmsModule } from '../domain/sms/sms.module';
import { UsersModule } from '../domain/users/users.module';
import { AuthModule } from '../domain/auth/auth.module';

export const ModulesArray = [UsersModule, AuthModule, SmsModule];
