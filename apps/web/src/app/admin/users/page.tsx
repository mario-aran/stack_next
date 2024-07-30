'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { BasicTable } from '@/components/tables/basic-table';

export default function Page() {
  return (
    <Box sx={{ width: '90%', mx: 'auto' }} component="main">
      <Box component="section">
        <Typography
          sx={{ m: 3, fontWeight: 'medium' }}
          component="h1"
          variant="h4"
        >
          Usuarios
        </Typography>
      </Box>

      <Box sx={{ mb: 3 }} component="section">
        <BasicTable />
      </Box>
    </Box>
  );
}
