'use client';

import { useContext } from 'react';

import { ReadSampleContext } from './Sample.context';

export const SampleCounter = () => {
  console.log('SampleCounter render');

  const { counter } = useContext(ReadSampleContext);

  return <h1>{counter}</h1>;
};
