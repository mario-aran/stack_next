import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import {
  UsersMaster,
  UsersMasterContext,
} from '@/features/users-master/components';

interface PropsType {
  searchParams?: { [key: string]: string };
}

const CURRENT_PATH = '/admin/masters/users' as const;

const MODES = {
  CONTEXT: 'context',
} as const;

export default function Page({ searchParams }: PropsType) {
  return (
    <>
      {/* Navbar */}
      <Stack direction="row" spacing={1}>
        <Link href={{ pathname: CURRENT_PATH }}>Plain</Link>
        <Link href={{ pathname: CURRENT_PATH, query: { mode: MODES.CONTEXT } }}>
          Context
        </Link>
      </Stack>

      {/* Page */}
      <Box sx={{ width: '90%', mx: 'auto' }} component="main">
        <Box sx={{ my: 2 }} component="section">
          <Typography sx={{ fontWeight: 'medium' }} component="h1" variant="h4">
            Usuarios
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }} component="section">
          {searchParams?.mode === MODES.CONTEXT ? (
            <UsersMasterContext />
          ) : (
            <UsersMaster />
          )}
        </Box>
      </Box>
    </>
  );
}
