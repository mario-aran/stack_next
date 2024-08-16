'use client';

import { setupListeners } from '@reduxjs/toolkit/query';
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';

import { AppStore, makeStore } from './store';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current) {
      // Optional, but required for refetchOnFocus/refetchOnReconnect behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);

      // Clean up the listener on component unmount
      return () => unsubscribe();
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
