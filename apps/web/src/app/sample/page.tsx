import Stack from '@mui/material/Stack';
import Link from 'next/link';

import {
  PokemonMaster,
  SampleContext,
  SampleRedux,
} from '@/features/sample/components';

interface PropsType {
  searchParams?: { [key: string]: string };
}

const CURRENT_PATH = '/sample';

const MODES = {
  REDUX: 'redux',
  POKEMON: 'pokemon',
} as const;

export default async function Page({ searchParams }: PropsType) {
  const { mode } = (await searchParams) || {};

  const getComponent = () => {
    switch (mode) {
      case MODES.REDUX:
        return <SampleRedux />;

      case MODES.POKEMON:
        return <PokemonMaster />;

      default:
        return <SampleContext />;
    }
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Link href={CURRENT_PATH}>Context </Link>
        <Link href={{ pathname: CURRENT_PATH, query: { mode: MODES.REDUX } }}>
          Redux
        </Link>
        <Link href={{ pathname: CURRENT_PATH, query: { mode: MODES.POKEMON } }}>
          Pokemon
        </Link>
      </Stack>
      <main>{getComponent()}</main>
    </>
  );
}
