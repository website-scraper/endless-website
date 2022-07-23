import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getImageUrls(count:Number = 0): Array<string> {
    return Array.from(new Array(count), (x, i) => `/files/images/${++i}.jpg`);​​​​​
  }
}
