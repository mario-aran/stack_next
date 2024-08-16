'use client';

import { useState } from 'react';

import { SampleButton } from './SampleButton';
import { SampleCounter } from './SampleCounter';

export const Sample = () => {
  console.log('Sample render');

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <SampleCounter counter={counter} />
      <SampleButton setCounter={setCounter} />
    </div>
  );
};
