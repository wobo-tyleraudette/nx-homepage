import { Controller, Get, Param, Query } from '@nestjs/common';
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

  @Get('/demo/:id')
  getDemoWithParams(@Param() params) {
    console.log({ params });
    return this.demoService.getDemo();
  }

  @Get('/demo')
  getDemoWithQuery(@Query() query) {
    console.log({ query });
    return this.demoService.getDemo();
  }

  //Get with Observables
  @Get('/user/userInfoObervable')
  getUserInfoObservable() {
    return this.userService.getUserInfoOservable();
  }

  @Get('/user/userInfo')
  async getUserInfo() {
    const res = await this.userService.getUserInfo();
    return res;
  }
}
