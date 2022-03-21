import { initialUserState } from '../user/user.slice';

import { RootState } from './webapp-react-root-state.interface';

export const initialRootState: RootState = {
  user: initialUserState,
};
