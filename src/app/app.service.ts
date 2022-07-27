import { Injectable } from '@nestjs/common';
import humanId from 'human-id'

@Injectable()
export class AppService {
  getImageUrls(count:Number = 0): Array<string> {
    return Array.from(new Array(count), (x, i) => `/files/images/${++i}.jpg`);​​​​​
  }

  getLinkUrls(count:Number = 0): Array<string> {
    return Array.from(new Array(count), () => {
      const pageName = humanId({ separator: '-', capitalize: false });
      return `/pages/${pageName}.html`;
    });​​​​​
  }
}
