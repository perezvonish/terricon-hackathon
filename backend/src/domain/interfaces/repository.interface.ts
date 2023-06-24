import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';

export interface IRepository<T> {
  findOne(where: FindOneOptions<T>);
  findMany(where: FindManyOptions<T>);
  save(data: DeepPartial<T>);
  softDelete(where: FindManyOptions<T>);
}
