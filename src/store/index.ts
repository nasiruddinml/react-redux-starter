import {
  Action,
  EnhancedStore,
  ThunkAction,
  configureStore,
} from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';
import storageSession from 'redux-persist/lib/storage/session';
import thunkMiddleware from 'redux-thunk';
import { useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let store: any;

const persistConfig = {
  key: 'winsome',
  whitelist: ['login'], // only these items will be persisted, add other reducers if needed
  storage: storageSession, // if needed, use a safer storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function makeStore(initialState = {}): EnhancedStore {
  return configureStore({
    preloadedState: initialState,
    reducer: persistedReducer,
    middleware: [thunkMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export const initializeStore = (preloadedState: RootState): EnhancedStore => {
  let newStore = store ?? makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    newStore = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return newStore;
  // Create the store once in the client
  if (!store) store = newStore;

  return newStore;
};

export function useStore(initialState: RootState): EnhancedStore {
  return useMemo(() => initializeStore(initialState), [initialState]);
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default makeStore({});
