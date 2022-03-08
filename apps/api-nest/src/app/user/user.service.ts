import { Get, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

// TODO: extract httpservice into service layer
// add custom errs, etc
@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}

  @Get()
  getUserInfo(): Observable<AxiosResponse<string>> {
    return this.httpService
      .get('https://api.namefake.com')
      .pipe(map((res) => res.data));
  }
}
