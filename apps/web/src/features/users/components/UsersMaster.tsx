import Box from '@mui/material/Box';

import { UsersProvider } from '@/features/users/Users.context';

import { Pagination } from './Pagination';
import { SearchBox } from './SearchBox';
import { UsersTable } from './UsersTable';

export const UsersMaster = () => {
  return (
    <UsersProvider>
      <Box sx={{ minWidth: 650 }}>
        <SearchBox />
        <UsersTable />
        <Pagination />
      </Box>
    </UsersProvider>
  );
};
