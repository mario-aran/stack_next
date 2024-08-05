'use client';

import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ChangeEvent, useContext } from 'react';

import { UsersContext } from '@/features/users/Users.context';

export const Pagination = () => {
  const {
    page,
    rowsPerPage,
    rowsPerPageOptions,
    dataLength,
    changePage,
    changeRowsPerPage,
  } = useContext(UsersContext);

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
        count={dataLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
