'use client';

import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ChangeEvent, useContext } from 'react';

import {
  UsersMasterContext,
  UsersMasterUpdateContext,
} from '@/features/users/context';

export const Pagination = () => {
  const { page, rowsPerPage, rowsPerPageOptions, fullDataLength } =
    useContext(UsersMasterContext);
  const { changePage, changeRowsPerPage } = useContext(
    UsersMasterUpdateContext,
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
