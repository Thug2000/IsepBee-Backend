import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletService {
  async getWalletData() {
    const crypto = [
      'Bitcoin',
      'Ethereum',
      'Tether',
      'BNB',
      'Cardano',
      'Solana',
      'Dogecoin',
      'Avalanche',
      'Shiba inu',
      'Litecoin',
    ];

    const array = [];
    for (let i = 0; i < Math.floor(Math.random() * 8) + 1; i++) {
      const cryptoToChoose = crypto[Math.floor(Math.random() * crypto.length)];
      const elements = Math.floor(Math.random() * 5000) + 1;
      var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      var dict = {
        name: cryptoToChoose,
        students: elements,
        fill: randomColor,
      };
      array.push(dict);
    }

    return array;
  }
}
