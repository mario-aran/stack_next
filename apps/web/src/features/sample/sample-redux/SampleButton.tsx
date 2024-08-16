'use client';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useAppDispatch } from '@/config/redux/hooks';

import { decrement, increment } from './sampleSlice';

export const SampleButton = () => {
  console.log('SampleButton render');

  const dispatch = useAppDispatch();

  const handleClickIncrement = () => dispatch(increment());
  const handleClickDecrement = () => dispatch(decrement());

  return (
    <Stack>
      <Button variant="contained" onClick={handleClickIncrement}>
        +
      </Button>
      <Button variant="contained" onClick={handleClickDecrement}>
        -
      </Button>
    </Stack>
  );
};
