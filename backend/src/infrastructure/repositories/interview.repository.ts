import {Injectable} from "@nestjs/common";
import {IRepository} from "../../domain/interfaces/repository.interface";
import {InterviewEntity} from "../../domain/interviews/interview.entity";
import {DeepPartial, FindManyOptions, FindOneOptions, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class InterviewRepository implements IRepository<InterviewEntity> {
    constructor(
        @InjectRepository(InterviewEntity)
        private readonly repo: Repository<InterviewEntity>
    ) {
    }

    findMany(where: FindManyOptions<InterviewEntity>) {
    }

    findOne(where: FindOneOptions<InterviewEntity>) {
    }

    save(data: DeepPartial<InterviewEntity>) {
    }

    softDelete(where: FindManyOptions<InterviewEntity>) {
    }

}