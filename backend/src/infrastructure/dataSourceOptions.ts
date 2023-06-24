import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { EntitiesArray } from './entities.array';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const dataSourceOptions: DataSourceOptions = {
  migrationsTableName: 'migrations',
  type: 'postgres',
  host: process.env.POSTGRES_HOST as string,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME as string,
  password: process.env.POSTGRES_PASSWORD as string,
  database: process.env.POSTGRES_DATABASE as string,
  logging: false,
  synchronize: true,
  name: 'default',
  entities: EntitiesArray,
  namingStrategy: new SnakeNamingStrategy(),
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  // subscribers: ['src/subscriber/**/*{.ts,.js}'],
};

export const OrmConfig: TypeOrmModuleOptions = {
  ...dataSourceOptions,
  migrationsTableName: 'migrations',
  // migrations: [...migrations],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
