import Button from '@mui/material/Button';
import { Dispatch, memo, SetStateAction } from 'react';

export const ExampleButtonComponent = ({
  setCounter,
}: {
  setCounter: Dispatch<SetStateAction<number>>;
}) => {
  console.log('ExampleButton render');

  return (
    <Button
      variant="outlined"
      onClick={() => setCounter((prevState) => prevState + 1)}
    >
      +
    </Button>
  );
};

export const ExampleButton = memo(ExampleButtonComponent);
