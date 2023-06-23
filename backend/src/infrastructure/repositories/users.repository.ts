import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsersEntity} from "../../domain/users/users.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersRepository {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly repo: Repository<UsersEntity>
    ) {}
}