import { api } from '../api.service';

const getUserInfo = async () => {
  const res = await api.get('user/userInfo');
  return res.data;
};

export const UserService = { getUserInfo };
