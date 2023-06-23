import { Module } from '@nestjs/common';
import { AppController } from './application/controllers/app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
