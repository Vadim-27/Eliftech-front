import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import shopsReducer from "./shop/shop-slice"

const persistConfig = {
  key: 'root',
  storage,
};

const persisteShopsReducer = persistReducer(persistConfig, shopsReducer);

export const store = configureStore({
  reducer: {
    shops: persisteShopsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      ignoredActions: ['payload.headers'],
    }),
});

export const persistor = persistStore(store);
