import { Module } from '@nestjs/common';
import { AppController } from './application/controllers/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmConfig } from './infrastructure/dataSourceOptions';
import { ConfigModule } from '@nestjs/config';
import { ModulesArray } from './infrastructure/modules.array';
import { DadataModule } from './domain/dadata/dadata.module';
import { CategoryModule } from './domain/category/category.module';
import { ServiceModule } from './domain/service/service.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    ConfigModule.forRoot({ isGlobal: true }),
    ...ModulesArray,
    DadataModule,
    CategoryModule,
    ServiceModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
