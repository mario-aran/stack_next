import { Pagination } from '@mui/material';
import Box from '@mui/material/Box';

import { BasicTableProvider } from './BasicTable.context';
import { CustomTable } from './CustomTable';
import { SearchBox } from './SearchBox';

export const BasicTable = () => {
  return (
    <BasicTableProvider>
      <Box sx={{ minWidth: 650 }}>
        <SearchBox />
        <CustomTable />
        <Pagination />
      </Box>
    </BasicTableProvider>
  );
};
