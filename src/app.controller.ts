import { Controller, Get, Param, Render, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return {
      imageUrls: this.appService.getImageUrls(100)
    };
  }

  // @Get('files/images/:filename')
  // getImage(@Param('filename') filename: string): StreamableFile {
  //   const file = createReadStream(join(process.cwd(), 'src/public/test-image.png'));
  //   return new StreamableFile(file);
  // }


}
