import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './homepage-app.reducer';
import { rootStore } from './homepage-app.store';

describe('root reducer', () => {
  it('should combine reducers', async () => {
    const store = configureStore({
      reducer: rootReducer,
    });
    expect(store).toBeTruthy();
  });

  it('should export the root store', () => {
    expect(rootStore).toBeTruthy();
  });
});
