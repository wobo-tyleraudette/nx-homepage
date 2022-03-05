import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { DemoService } from './demo/demo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private demoService: DemoService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/demo')
  getDemo() {
    return this.demoService.getDemo();
  }
}
