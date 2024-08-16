import { configureStore } from '@reduxjs/toolkit';

import { sampleReducer } from '@/features/sample/sample-redux';
import { pokemonApi } from '@/services/pokemon';

export const makeStore = () => {
  return configureStore({
    reducer: {
      sample: sampleReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([pokemonApi.middleware]),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
