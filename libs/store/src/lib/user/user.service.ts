const getUserInfo = async () => {
  const res = await fetch('api/user/userInfo');
  return await res.json();
};

export const UserService = { getUserInfo };
