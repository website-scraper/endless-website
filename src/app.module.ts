import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FileModule } from './file/file.module';

@Module({
  imports: [
    FileModule,
    RouterModule.register([
      {
        path: 'files',
        module: FileModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
