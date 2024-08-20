'use client';

import { useAppSelector } from '@/lib/redux/hooks';

export const SampleCounter = () => {
  const { value } = useAppSelector(({ sample }) => sample);

  return <h1>{value}</h1>;
};
