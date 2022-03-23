import { fetchUser, userReducer } from './user.slice';

describe('user reducer', () => {
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
