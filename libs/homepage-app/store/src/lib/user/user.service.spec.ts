import { UserService } from './user.service';
import { api } from '../api.service';

describe('user service', () => {
  jest.spyOn(api, 'get').mockResolvedValue({});
  it('should get users', async () => {
    await UserService.getUserInfo();
    expect(api.get).toHaveBeenCalled();
  });
});
