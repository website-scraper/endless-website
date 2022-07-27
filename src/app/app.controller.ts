import { Controller, Get, Param, Render, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['/', '/pages/(:pageName).html'])
  @Render('index')
  root(@Param('pageName') pageName: string = 'Test page') {
    return {
      pageName,
      imageUrls: this.appService.getImageUrls(100),
      linkUrls: this.appService.getLinkUrls(20)
    };
  }
}
