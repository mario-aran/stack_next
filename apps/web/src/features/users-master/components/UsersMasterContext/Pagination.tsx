'use client';

import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ChangeEvent, useContext } from 'react';

import {
  ReadUsersMasterContext,
  UpdateUsersMasterContext,
} from '@/features/users-master/context';

export const Pagination = () => {
  console.log('Pagination render');

  const { page, rowsPerPage, rowsPerPageOptions, fullDataLength } = useContext(
    ReadUsersMasterContext,
  );
  const { changePage, changeRowsPerPage } = useContext(
    UpdateUsersMasterContext,
  );

  const handleChangePage = (event: unknown, newPage: number) =>
    changePage(newPage);

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    changeRowsPerPage(newRowsPerPage);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <TablePagination
        component="div"
        rowsPerPageOptions={rowsPerPageOptions}
        count={fullDataLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
