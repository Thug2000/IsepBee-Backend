import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private walletService: WalletService) {}

  @Get()
  async getWalletData(@Res() res) {
    const data = await this.walletService.getWalletData();
    return res.status(HttpStatus.OK).json(data);
  }
}
