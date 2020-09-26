import { Controller, Get, Param } from '@nestjs/common';
import { LogAnalyzer } from './loganalyzer.entity';
import { LoganalyzerService } from './loganalyzer.service';

@Controller('/loganalyzer')
export class LoganalyzerController
{

    constructor(private loganalyzerService: LoganalyzerService){}

    @Get("/getAuthLog")
    getAuthLog()
    {
        return this.loganalyzerService.getAuthLog();
    }

    @Get("/getAllAuthLog")
    getAllAuthLog(): Promise<LogAnalyzer[]>
    {
        return this.loganalyzerService.getAllAuthLog();
    }

    @Get("/:id/getAuthLog")
    getAuthLogById(@Param("id") id: number): Promise<LogAnalyzer>
    {
        return this.loganalyzerService.getAuthLogById(id);
    }
    

}
