'use client';

import Button from '@mui/material/Button';
import { useContext } from 'react';

import { UpdateSampleContext } from './Sample.context';

export const SampleButton = () => {
  console.log('SampleButton render');

  const { setCounter } = useContext(UpdateSampleContext);

  const handleClickIncrement = () => setCounter((prevState) => prevState + 1);

  return (
    <Button variant="contained" onClick={handleClickIncrement}>
      +
    </Button>
  );
};
