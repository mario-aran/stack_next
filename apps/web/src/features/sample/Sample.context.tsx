'use client';

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

// Types
interface UpdateContextValues {
  setCounter: Dispatch<SetStateAction<number>>;
}

// Initial values
const initialReadContextValues = {
  counter: 0,
};

const initialUpdateContextValues: UpdateContextValues = {
  setCounter: () => {},
};

// Context
export const ReadSampleContext = createContext(initialReadContextValues);
export const UpdateSampleContext = createContext(initialUpdateContextValues);

export const SampleContextProvider = ({ children }: PropsWithChildren) => {
  const [counter, setCounter] = useState(initialReadContextValues.counter);

  const UpdateContextValues = useMemo(() => ({ setCounter }), []);

  return (
    <ReadSampleContext.Provider value={{ counter }}>
      <UpdateSampleContext.Provider value={UpdateContextValues}>
        {children}
      </UpdateSampleContext.Provider>
    </ReadSampleContext.Provider>
  );
};
