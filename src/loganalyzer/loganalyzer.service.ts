import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from "fs";
import { LogAnalyzer } from './loganalyzer.entity';
import { LogAnalyzerRepository } from './loganalyzer.repository';

@Injectable()
export class LoganalyzerService
{

    constructor(@InjectRepository(LogAnalyzerRepository) private logAnalyzerRepository: LogAnalyzerRepository){}

    private timeStampArray = [];
    private logDetailArray = [];

    async getAuthLog()
    {
        const readAuthLogFile = await fs.readFileSync("/var/log/auth.log");
        const logString: string = readAuthLogFile.toString();
        
        let lines = logString.split(/\r\n|\n/);

        lines = lines.splice(lines.length / 2,lines.length)

        lines.forEach((log,index) => {
            const timeStamp = log.slice(0,15);

            const logDetail = log.slice(15);

            if(logDetail.includes("Failed password for"))
            {
                this.timeStampArray.push(timeStamp);
                this.logDetailArray.push(logDetail);
            }

        });


        for(let i = 0; i < this.timeStampArray.length; i++)
        {
            const logAnalyzer = await this.logAnalyzerRepository.create({
                timeStamp: this.timeStampArray[i],
                logDetail: this.logDetailArray[i]
            });
            await logAnalyzer.save();
        }

    }

    async getAllAuthLog(): Promise<LogAnalyzer[]>
    {
        const result = await this.logAnalyzerRepository.find();
        return result;
    }

    async getAuthLogById(id: number): Promise<LogAnalyzer>
    {
        return await this.logAnalyzerRepository.findOne({ id });
    }
}
