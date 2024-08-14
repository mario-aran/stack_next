'use client';

import { useState } from 'react';

import { ExampleButton } from './ExampleButton';
import { ExampleCounter } from './ExampleCounter';

export const Example = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <ExampleCounter counter={counter} />
      <ExampleButton setCounter={setCounter} />
    </div>
  );
};
