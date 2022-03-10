import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  //Get with observable
  @Get('/user/userInfo')
  getUserInfoObservable() {
    return this.userService.getUserInfo();
  }

  //Get with promise
  @Get('/user/userInfoPromise')
  async getUserInfo() {
    const res = await this.userService.getUserInfoPromise();
    return res;
  }
}
