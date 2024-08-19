import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { UsersMaster } from '@/features/users-master/components';

export default function Page() {
  return (
    <Box sx={{ width: '90%', mx: 'auto' }} component="main">
      <Box sx={{ my: 2 }} component="section">
        <Typography sx={{ fontWeight: 'medium' }} component="h1" variant="h4">
          Usuarios
        </Typography>
      </Box>

      <Box sx={{ mb: 2 }} component="section">
        <UsersMaster />
      </Box>
    </Box>
  );
}
