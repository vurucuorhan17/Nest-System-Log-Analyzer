import { EntityRepository, Repository } from "typeorm";
import { LogAnalyzer } from "./loganalyzer.entity";

@EntityRepository(LogAnalyzer)
export class LogAnalyzerRepository extends Repository<LogAnalyzer>
{

}
