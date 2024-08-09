'use client';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { UsersTablePropsType } from '@/features/users/types';

export const UsersTable = ({ filteredData }: UsersTablePropsType) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Perfil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map(({ id, email, name, profile }) => (
            <TableRow key={id} hover>
              <TableCell>{id}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{profile}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
