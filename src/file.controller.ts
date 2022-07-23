import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('files')
export class FileController {
  @Get('images/:filename')
  getImage(@Param('filename') filename: string): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'src/public/test-image.png'));
    return new StreamableFile(file);
  }
}
