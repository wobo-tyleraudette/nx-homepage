import { initialUserState } from '../user/user.slice';

import { RootState } from './homepage-app-state.interface';

export const initialRootState: RootState = {
  user: initialUserState,
};
