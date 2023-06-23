import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "../../domain/users/users.entity";
import {DeepPartial, FindManyOptions, FindOptionsWhere, Repository} from "typeorm";
import {IRepository} from "../../domain/interfaces/repository.interface";

@Injectable()
export class UsersRepository implements IRepository<UsersEntity> {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly repo: Repository<UsersEntity>
    ) {}

    findMany(where: FindManyOptions<UsersEntity>) {
    }

    findOne(where: FindOptionsWhere<UsersEntity>) {
    }

    save(data: DeepPartial<UsersEntity>) {
    }

    softDelete(where: FindManyOptions<UsersEntity>) {
    }
}