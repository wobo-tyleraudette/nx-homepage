import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { IUser } from '@nx-homepage/shared-interfaces';

// TODO: add catch for errors, look into status and other nest options
@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}

  // Observable
  getUserInfo(): Observable<AxiosResponse<IUser>> {
    return this.httpService
      .get('https://api.namefake.com')
      .pipe(map((res) => res.data));
  }
}
