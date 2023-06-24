import { BaseTransaction } from './base-transaction';
import { DataSource } from 'typeorm';
import { UsersEntity } from '../../domain/users/users.entity';
import { AuthRegisterRequestDto } from '../../domain/auth/dto/auth-register-request.dto';
import { UserRoles } from '../../domain/interfaces/user.roles';
import { EmployeeEntity } from '../../domain/employee/employee.entity';
import { ClientEntity } from '../../domain/client/client.entity';

export class AuthTransaction extends BaseTransaction {
  constructor(dataSource: DataSource) {
    super(dataSource);
  }

  async register(
    dto: AuthRegisterRequestDto,
    hashPassword: string,
    verifyCode: string,
  ) {
    const queryRunner = await this.start();
    try {
      const userInsert = new UsersEntity(
        dto.phoneNumber,
        hashPassword,
        dto.name,
        dto.surname,
        dto.role,
        verifyCode,
      );

      const user = await queryRunner.manager.insert(UsersEntity, userInsert);
      if (userInsert.role === UserRoles.EMPLOYER) {
        const employeeInsert = new EmployeeEntity(user.identifiers[0].id);
        await queryRunner.manager.insert(EmployeeEntity, employeeInsert);
      } else if (userInsert.role === UserRoles.CLIENT) {
        const clientEntity = new ClientEntity(user.identifiers[0].id);
        await queryRunner.manager.insert(ClientEntity, clientEntity);
      } else {
        throw Error('role is not client and employee');
      }
      await queryRunner.commitTransaction();
      console.log(user);
      return user;
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw new Error(e);
    } finally {
      await queryRunner.release();
    }
  }
}
