import {
  fetchUser,
  userReducer,
  userSelectors,
  getUserState,
} from './user.slice';
import { UserService } from './user.service';
import { configureStore } from '@reduxjs/toolkit';

describe('user reducer', () => {
  it('should call UserService', async () => {
    const store = configureStore({
      reducer: userReducer,
    });

    jest.spyOn(UserService, 'getUserInfo').mockResolvedValue({ data: 'test' });
    await store.dispatch(fetchUser());
    expect(UserService.getUserInfo).toHaveBeenCalled();
  });

  it('should handle fetchUsers', () => {
    let state = userReducer(undefined, fetchUser.pending(null, null));
    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
      })
    );

    state = userReducer(
      state,
      fetchUser.fulfilled({ name: 'Name' }, null, null)
    );
    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        user: { name: 'Name' },
      })
    );

    const rootState = { user: state };
    expect(getUserState(rootState)).toEqual(
      expect.objectContaining({
        user: { name: 'Name' },
      })
    );

    expect(userSelectors.getUser(rootState)).toEqual(
      expect.objectContaining({
        name: 'Name',
      })
    );

    state = userReducer(
      state,
      fetchUser.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        user: { name: 'Name' },
      })
    );
  });
});
