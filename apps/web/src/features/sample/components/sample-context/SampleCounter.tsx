'use client';

import { useContext } from 'react';

import { ReadSampleContext } from '@/features/sample/Sample.context';

export const SampleCounter = () => {
  const { counter } = useContext(ReadSampleContext);

  return <h1>{counter}</h1>;
};
