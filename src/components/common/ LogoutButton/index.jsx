import React from 'react';
import { useLogout } from 'react-admin';
import { Button } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';

const LogoutButton = () => {
  const [logout] = useLogout();

  return (
    <Button
      onClick={logout}
      color="inherit"
      sx={{ marginLeft: 1 }}
      startIcon={<LogoutIcon />}
    >
      Déconnexion
    </Button>
  );
};

export default LogoutButton;