import { combineReducers } from '@reduxjs/toolkit';

import { userSlice } from '../user/user.slice';

import { RootState } from './homepage-app-state.interface';

export const rootReducer = combineReducers<RootState>({
  user: userSlice.reducer,
});
