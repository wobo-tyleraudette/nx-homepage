import { AxiosResponse } from 'axios';

export const mockAxios200: AxiosResponse<unknown> = {
  data: {},
  headers: {},
  config: { url: 'http://localhost:3000/mockUrl' },
  status: 200,
  statusText: 'OK',
};
