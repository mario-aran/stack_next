import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ChangeEvent, memo } from 'react';

import { PaginationPropsType } from '@/features/users-master/types';

const PaginationComponent = ({
  page,
  rowsPerPage,
  rowsPerPageOptions,
  fullDataLength,
  changePage,
  changeRowsPerPage,
}: PaginationPropsType) => {
  console.log('Pagination render');

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

export const Pagination = memo(PaginationComponent);
