import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  //Get with observable
  @Get('/user/userInfo')
  getUserInfo() {
    return this.userService.getUserInfo();
  }
}
