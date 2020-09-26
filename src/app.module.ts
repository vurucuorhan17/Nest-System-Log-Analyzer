import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoganalyzerModule } from './loganalyzer/loganalyzer.module';

import { typeOrmConfig } from "./config/typeorm.config"

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    LoganalyzerModule
  ],
})
export class AppModule {}
