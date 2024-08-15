import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['/', '/pages/:pageName.html'])
  @Render('index')
  root(
    @Param('pageName') pageName: string,
    @Query('img') imagesCount = '100',
    @Query('a') linksCount = '20',
  ) {
    const childPageQuery = `?img=${imagesCount}&a=${linksCount}`;

    return {
      pageName: pageName || 'root',
      imageUrls: this.appService.getImageUrls(Number(imagesCount), pageName),
      linkUrls: this.appService.getLinkUrls(Number(linksCount), childPageQuery),
    };
  }
}
