import Stack from '@mui/material/Stack';

import { UsersMasterProvider } from '@/features/users-master/context';

import { Pagination } from './Pagination';
import { SearchBox } from './SearchBox';
import { UsersTable } from './UsersTable';

export const UsersMaster = () => {
  return (
    <UsersMasterProvider>
      <Stack sx={{ minWidth: 650 }} spacing={1}>
        <SearchBox />
        <UsersTable />
        <Pagination />
      </Stack>
    </UsersMasterProvider>
  );
};
