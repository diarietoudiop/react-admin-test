import React from 'react';
import { Box, Typography, Chip, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// User Avatar Component
export const UserAvatar = ({ name }) => {
  const initials = name
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase() || '?';

  return (
    <Avatar
      sx={{
        bgcolor: 'primary.main',
        width: 40,
        height: 40,
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }}
    >
      {initials}
    </Avatar>
  );
};

// Status Field Component
export const StatusField = ({ record }) => {
  if (!record) return null;
  const theme = useTheme();
  
  return (
    <Chip
      label={record.isActive ? 'Actif' : 'Inactif'}
      color={record.isActive ? 'success' : 'error'}
      sx={{
        fontWeight: 600,
        borderRadius: '8px',
        '& .MuiChip-label': {
          px: 2,
        },
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: theme.shadows[2]
        }
      }}
    />
  );
};