import {Injectable} from "@nestjs/common";
import {UsersRepository} from "../../infrastructure/repositories/users.repository";
import {FindOneOptions, FindOptionsWhere} from "typeorm";
import {UsersEntity} from "./users.entity";

@Injectable()
export class UsersService {
    constructor(
        private readonly usersRepository: UsersRepository
    ) {}

    findOne(where: FindOptionsWhere<UsersEntity>) {
        const clause: FindOneOptions<UsersEntity> = {
            where
        }

        return this.usersRepository.findOne(clause)
    }
}