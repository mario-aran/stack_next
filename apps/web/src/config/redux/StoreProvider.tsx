'use client';

import { setupListeners } from '@reduxjs/toolkit/query';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from './store';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current) {
      // Required for refetchOnFocus/refetchOnReconnect in 'RTK query'
      const unsubscribe = setupListeners(storeRef.current.dispatch);

      // Clean up the listener
      return () => unsubscribe();
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
