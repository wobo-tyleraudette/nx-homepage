import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { HttpService, HttpModule as BaseHttpModule } from '@nestjs/axios';

@Module({
  imports: [BaseHttpModule],
  exports: [BaseHttpModule],
})
export class HttpModule implements OnModuleInit {
  constructor(private readonly httpService: HttpService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onModuleInit(): any {
    const logger = new Logger('Axios');

    // Add request interceptor and response interceptor to log request infos
    const axios = this.httpService.axiosRef;
    axios.interceptors.request.use(function (config) {
      // Please don't tell my Typescript compiler...
      config['metadata'] = { ...config['metadata'], startDate: new Date() };
      return config;
    });
    axios.interceptors.response.use(
      (response) => {
        logger.log(`Response Status: ${response.status}`);
        return response;
      },
      (err) => {
        logger.error(err);
        return Promise.reject(err);
      }
    );
  }
}
