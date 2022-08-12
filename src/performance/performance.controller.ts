import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { PerformanceService } from './performance.service';

@Controller('performance')
export class PerformanceController {
  constructor(private performanceService: PerformanceService) {}

  @Get()
  async getPerformanceData(@Res() res) {
    const data = await this.performanceService.getPerformanceData();
    return res.status(HttpStatus.OK).json(data);
  }
}
