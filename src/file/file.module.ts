import { Module } from '@nestjs/common';
import { FileController } from './file.controller';

@Module({
  imports: [],
  controllers: [FileController],
  providers: [],
})
export class FileModule {}