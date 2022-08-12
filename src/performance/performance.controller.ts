import { Controller, Get } from '@nestjs/common';
import { PerformanceService } from './performance.service';

@Controller('performance')
export class PerformanceController {
  constructor(private performanceService: PerformanceService) {}

  @Get()
  async getPerformanceData() {
    return this.performanceService.getPerformanceData();
  }
}
