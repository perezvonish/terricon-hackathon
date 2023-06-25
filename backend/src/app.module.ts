import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from './infrastructure/dataSourceOptions';
import { ConfigModule } from '@nestjs/config';
import { ModulesArray } from './infrastructure/modules.array';
import { DadataModule } from './domain/dadata/dadata.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    ...ModulesArray,
    DadataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
