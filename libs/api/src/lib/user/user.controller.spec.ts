import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';

import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let user: TestingModule;

  beforeAll(async () => {
    user = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [UserController],
      providers: [UserService],
    }).compile();
  });

  describe('getUserInfo', () => {
    it('should call getUserInfo', () => {
      const userController = user.get<UserController>(UserController);
      const userService = user.get<UserService>(UserService);

      jest.spyOn(userService, 'getUserInfo').mockImplementation();

      userController.getUserInfo();
      expect(userService.getUserInfo).toHaveBeenCalled();
    });
  });
});
