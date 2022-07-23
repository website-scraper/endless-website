import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FileController } from './file.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, FileController],
  providers: [AppService],
})
export class AppModule {}
