import Button from '@mui/material/Button';
import { Dispatch, memo, SetStateAction } from 'react';

interface PropsType {
  setCounter: Dispatch<SetStateAction<number>>;
}

export const SampleButtonComponent = ({ setCounter }: PropsType) => {
  console.log('SampleButton render');

  const handleClickIncrement = () => setCounter((prevState) => prevState + 1);

  return (
    <Button variant="contained" onClick={handleClickIncrement}>
      +
    </Button>
  );
};

export const SampleButton = memo(SampleButtonComponent);
