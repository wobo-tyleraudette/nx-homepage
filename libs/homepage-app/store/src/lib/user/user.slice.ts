import { IUser } from '@nx-homepage/models';
import { UserService } from './user.service';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../homepage-app/homepage-app-state.interface';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  loadingStatus?: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string;
  user?: IUser;
}

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchUser())
 * }, [dispatch]);
 * ```
 */

export const fetchUser = createAsyncThunk('user/userInfo', async () => {
  // no try catch needed b/c extraReducers catches error
  // user RejectedWithValue() for custom err handling
  // https://redux-toolkit.js.org/api/createAsyncThunk#examples
  const res = await UserService.getUserInfo();
  return res.data;
});

export const initialUserState: UserState = {
  loadingStatus: 'not loaded',
};

export const userSlice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state: UserState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchUser.fulfilled,
        (state: UserState, action: PayloadAction<IUser>) => {
          state.user = action.payload;
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchUser.rejected, (state: UserState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const userReducer = userSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(userActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const userActions = { fetchUser };

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllUser);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */

export const getUserState = (rootState: RootState): UserState =>
  rootState[USER_FEATURE_KEY];

const getUser = (rootState: RootState): IUser | undefined =>
  getUserState(rootState).user;

export const userSelectors = { getUser };
