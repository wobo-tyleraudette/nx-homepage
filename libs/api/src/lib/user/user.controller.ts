import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  //Get with Observables
  @Get('/user/userInfoObervable')
  getUserInfoObservable() {
    return this.userService.getUserInfoOservable();
  }

  @Get('/user/userInfo')
  async getUserInfo() {
    console.log('--get');
    const res = await this.userService.getUserInfo();
    return res;
  }
}
