'use client';

import { useAppSelector } from '@/config/redux/hooks';

export const SampleCounter = () => {
  console.log('SampleCounter render');

  const { value } = useAppSelector((state) => state.sample);

  return <h1>{value}</h1>;
};
