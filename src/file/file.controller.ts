import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { FileService } from './file.service';

@Controller()
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('images/:filename')
  getImage(@Param('filename') filename: string): StreamableFile {
    const fileStream = this.fileService.createImageStream({ text: `Hello ${filename}` });
    return new StreamableFile(fileStream);
  }
}
