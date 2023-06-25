import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from './infrastructure/dataSourceOptions';
import { ConfigModule } from '@nestjs/config';
import { ModulesArray } from './infrastructure/modules.array';
import { DadataModule } from './domain/dadata/dadata.module';
import {CategoryController} from "./application/controllers/category.controller";

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    ...ModulesArray,
    DadataModule,
  ],
  controllers: [CategoryController],
  providers: [],
})
export class AppModule {}
