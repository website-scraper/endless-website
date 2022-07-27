import { Controller, Get, Param, Render, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['/', '/pages/(:pageName).html'])
  @Render('index')
  root(@Param('pageName') pageName: string) {
    return {
      pageName: pageName || 'root',
      imageUrls: this.appService.getImageUrls(100, pageName),
      linkUrls: this.appService.getLinkUrls(20)
    };
  }
}
