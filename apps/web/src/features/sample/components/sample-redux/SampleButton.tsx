'use client';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { decrement, increment } from '@/features/sample/sample.slice';
import { useAppDispatch } from '@/lib/redux/hooks';

export const SampleButton = () => {
  const dispatch = useAppDispatch();

  const handleClickIncrement = () => dispatch(increment());
  const handleClickDecrement = () => dispatch(decrement());

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
