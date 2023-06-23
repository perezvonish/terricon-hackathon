import {DeepPartial, FindManyOptions, FindOptionsWhere} from "typeorm";

export interface IRepository<T> {
    findOne(where: FindOptionsWhere<T>)
    findMany(where: FindManyOptions<T>)
    save(data: DeepPartial<T>)
    softDelete(where: FindManyOptions<T>)
}