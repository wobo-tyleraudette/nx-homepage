import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('/demo/:id')
  getDemoWithParams(@Param() params) {
    return this.demoService.getDemo();
  }

  @Get('/demo')
  getDemoWithQuery(@Query() query) {
    return this.demoService.getDemo();
  }
}
