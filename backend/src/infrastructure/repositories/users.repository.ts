import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "../../domain/users/users.entity";
import {DeepPartial, FindManyOptions, FindOneOptions, FindOptionsWhere, Repository} from "typeorm";
import {IRepository} from "../../domain/interfaces/repository.interface";

@Injectable()
export class UsersRepository implements IRepository<UsersEntity> {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly repo: Repository<UsersEntity>
    ) {}

    findMany(where: FindManyOptions<UsersEntity>) {
    }

    findOne(where: FindOneOptions<UsersEntity>) {
        return this.repo.findOne(where)
    }

    save(data: DeepPartial<UsersEntity>) {
    }

    softDelete(where: FindManyOptions<UsersEntity>) {
    }
}