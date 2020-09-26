import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoganalyzerController } from './loganalyzer.controller';
import { LogAnalyzerRepository } from './loganalyzer.repository';
import { LoganalyzerService } from './loganalyzer.service';

@Module({
  imports: [TypeOrmModule.forFeature([LogAnalyzerRepository])],
  controllers: [LoganalyzerController],
  providers: [LoganalyzerService]
})
export class LoganalyzerModule {}
