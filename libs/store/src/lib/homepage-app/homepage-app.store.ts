import { configureStore } from '@reduxjs/toolkit';

import { initialRootState } from './homepage-app-state.initial';
import { rootReducer } from './homepage-app.reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const process: any;

const isDevelopment = process.env.NODE_ENV === 'development';

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: isDevelopment,
  preloadedState: initialRootState,
});

export { rootStore };
