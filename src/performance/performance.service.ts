import { Injectable } from '@nestjs/common';

@Injectable()
export class PerformanceService {
  async getPerformanceData() {
    let now = new Date();

    let price = 1000.22;
    let status = '+';

    const acc = 20;

    const RAND_MIN = 8;
    const RAND_MAX = -8;

    // value of pullback after each price change (MIN: 0 MAX: 1)
    const PULLBACK_PARAM = 0.1;

    // price - current stock price
    // status - green (+) or red (-)
    // acc - acceleration parameter
    const generatePrice = (price, status, acc) => {
      // randomize the acceleration parameter
      const randAcc = (Math.random() * (RAND_MAX - RAND_MIN) + RAND_MIN) * acc;
      let newPrice;

      if (acc > 0) {
        // +ve acc: uptrend
        newPrice =
          status == '+' ? price - randAcc * PULLBACK_PARAM : price + randAcc;
      } else {
        // -ve acc: downtrend
        newPrice =
          status == '+' ? price + randAcc : price - randAcc * PULLBACK_PARAM;
      }

      //console.log(`price: ${(newPrice > 0) ? newPrice : 0 } | status: ${status} | acc: ${acc} | randAcc: ${randAcc} | newPrice: ${newPrice}`);

      newPrice = Math.round(newPrice * 10000) / 10000;

      return newPrice > 0 ? newPrice : 0;
    };

    const simulateStock = (acc) => {
      let newPrice = generatePrice(price, status, acc);

      status = newPrice - price > 0 ? '+' : '-';
      price = newPrice;
      return price;
    };

    const array = [];

    for (let i = 0; i < 31; i++) {
      var future = new Date();
      future.setDate(future.getDate() - (32 - i));
      var dict = {
        name: future.toLocaleDateString(['fr-FR'], {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        uv: simulateStock(acc),
      };
      array.push(dict);
    }

    return array;
  }
}
