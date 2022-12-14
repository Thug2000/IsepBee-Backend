import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerformanceController } from './performance/performance.controller';
import { PerformanceService } from './performance/performance.service';
import { PerformanceModule } from './performance/performance.module';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [PerformanceModule, WalletModule],
  controllers: [AppController, PerformanceController],
  providers: [AppService, PerformanceService],
})
export class AppModule {}
