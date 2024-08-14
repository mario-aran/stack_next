'use client';

import { useContext } from 'react';

import { UpdateSampleContext } from './Sample.context';

export const SampleButton = () => {
  console.log('SampleButton render');

  const { setCounter } = useContext(UpdateSampleContext);

  return (
    <button onClick={() => setCounter((prevState) => prevState + 1)}>
      add
    </button>
  );
};
