import { Injectable } from '@nestjs/common';
import humanId from 'human-id';

export interface Resource {
  url: string;
  name?: string;
}

@Injectable()
export class AppService {
  getImageUrls(count = 0, prefix = ''): Array<Resource> {
    return Array.from(new Array(count), (x, i) => {
      return {
        url: `/files/images/${prefix}${++i}.png`,
      };
    });
  }

  getLinkUrls(count = 0, query = ''): Array<Resource> {
    return Array.from(new Array(count), () => {
      const pageName = humanId({
        separator: '-',
        capitalize: false,
      });

      return {
        url: `/pages/${pageName}.html${query}`,
        name: pageName,
      };
    });
  }
}
