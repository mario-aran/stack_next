import Stack from '@mui/material/Stack';
import Link from 'next/link';

import { SampleContext, SampleRedux } from '@/features/sample/components';

interface PropsType {
  searchParams?: { [key: string]: string };
}

const CURRENT_PATH = '/sample';

const MODES = {
  REDUX: 'redux',
} as const;

export default function Page({ searchParams }: PropsType) {
  const condition = searchParams?.mode === MODES.REDUX;

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Link href={CURRENT_PATH}>context </Link>
        <Link href={{ pathname: CURRENT_PATH, query: { mode: MODES.REDUX } }}>
          redux
        </Link>
      </Stack>
      <main>{condition ? <SampleRedux /> : <SampleContext />}</main>
    </>
  );
}
