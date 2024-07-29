'use client';

import { Box, Button } from '@mui/material';
import { useState } from 'react';

import { BasicTable } from '@/components/tables/BasicTable';
import { DataTable } from '@/components/tables/DataTable';

export default function Page() {
  const [tableMode, setTableMode] = useState(true);

  const handleTableChange = () => {
    setTableMode((prev) => !prev);
  };

  return (
    <main>
      <Box component="section" m={5}>
        <Button variant="contained" onClick={handleTableChange}>
          Change table
        </Button>
      </Box>

      <Box component="section">
        {tableMode ? <BasicTable /> : <DataTable />}
      </Box>
    </main>
  );
}
