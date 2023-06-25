import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
} from 'typeorm';

export interface IRepository<T> {
  findOne(where: FindOneOptions<T>);
  findMany(where: FindManyOptions<T>);
  save(data: DeepPartial<T>);
  softDelete(where: FindOptionsWhere<T>);
}
