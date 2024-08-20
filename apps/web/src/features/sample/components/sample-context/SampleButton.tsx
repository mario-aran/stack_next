'use client';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useContext } from 'react';

import { UpdateSampleContext } from '@/features/sample/Sample.context';

export const SampleButton = () => {
  const { setCounter } = useContext(UpdateSampleContext);

  const handleClickIncrement = () => setCounter((prevState) => prevState + 1);
  const handleClickDecrement = () => setCounter((prevState) => prevState - 1);

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={handleClickIncrement}>
        +
      </Button>
      <Button variant="contained" onClick={handleClickDecrement}>
        -
      </Button>
    </Stack>
  );
};
