import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { DemoService } from './demo/demo.service';
import { UserService } from './user/user.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private demoService: DemoService,
    private userService: UserService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/demo')
  getDemo() {
    return this.demoService.getDemo();
  }

  @Get('/user/userInfo')
  async getUSerInfo() {
    return this.userService.getUserInfo();
  }
}
