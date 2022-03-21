import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom, map, Observable } from 'rxjs';
import { IUser } from '@nx-homepage/models';

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
