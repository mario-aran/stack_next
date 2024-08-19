import { configureStore } from '@reduxjs/toolkit';

import { sampleReducer } from '@/features/sample/sample-redux';
import { pokemonApi } from '@/lib/redux/apis';

export const makeStore = () => {
  return configureStore({
    reducer: {
      sample: sampleReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    // Adding the api middleware for 'RTK query' features.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([pokemonApi.middleware]),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
