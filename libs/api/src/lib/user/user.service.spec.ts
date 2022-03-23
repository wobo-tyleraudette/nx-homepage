import { HttpService, HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { map, of } from 'rxjs';
import { UserService } from './user.service';
import { mockAxios200 } from '@nx-homepage/utilities';
import { doesNotMatch } from 'assert';

describe('UserService', () => {
  let service: UserService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call httpService', () => {
    mockAxios200.data = { name: 'Test Name ' };
    jest
      .spyOn(httpService, 'get')
      .mockImplementationOnce(() => of(mockAxios200));

    const res = service.getUserInfo();
    expect(httpService.get).toHaveBeenCalled();
    res.subscribe((i) => {
      expect(i).toEqual({ name: 'Test Name ' });
    });
  });
});
