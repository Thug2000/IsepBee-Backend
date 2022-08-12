import { Injectable } from '@nestjs/common';

@Injectable()
export class PerformanceService {
  async getPerformanceData() {
    let now = new Date();

    const array = [];

    for (let i = 0; i < 32; i++) {
      var future = new Date();
      future.setDate(future.getDate() - (32 - i));
      var dict = {
        name: future.toLocaleDateString(['fr-FR'], {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        uv: Math.floor(Math.random() * 5000) + 1,
      };
      array.push(dict);
    }

    return array;
  }
}
