import React from 'react';
import { Box, Typography } from '@mui/material';

const WelcomeMessage = () => (
  <Box 
    sx={{
      animation: 'slideIn 0.5s ease-out',
      '@keyframes slideIn': {
        '0%': {
          opacity: 0,
          transform: 'translateX(-20px)'
        },
        '100%': {
          opacity: 1,
          transform: 'translateX(0)'
        }
      }
    }}
    className="mb-16"
  >
    <Typography 
      variant="h3" 
      sx={{ 
        marginBottom: '2rem',
        fontWeight: 'bold',
        color: '#1a1a1a'
      }}
    >
      Bienvenue dans l'administration
    </Typography>
    <Typography 
      variant="h6" 
      sx={{ 
        marginBottom: '3rem',
        color: '#666666',
        fontWeight: 'normal'
      }}
    >
      Gérez vos utilisateurs et publications depuis ce tableau de bord
    </Typography>
  </Box>
);

export default WelcomeMessage;