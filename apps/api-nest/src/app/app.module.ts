import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoService } from './demo/demo.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DemoService],
})
export class AppModule {}
