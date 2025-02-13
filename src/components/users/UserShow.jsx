import React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField } from 'react-admin';
import { Card, Typography, Box } from '@mui/material';
import { Person, Email, Badge } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { StatusField, fadeInUp } from './components';

export const UserShow = () => (
  <Show>
    <Card
      component={motion.div}
      {...fadeInUp}
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <SimpleShowLayout>
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
          Détails de l'utilisateur
        </Typography>
        <Box display="flex" alignItems="center" marginBottom={3}>
          <Person sx={{ mr: 2, color: 'primary.main' }} />
          <TextField source="name" label="Nom" />
        </Box>
        <Box display="flex" alignItems="center" marginBottom={3}>
          <Email sx={{ mr: 2, color: 'primary.main' }} />
          <EmailField source="email" />
        </Box>
        <Box display="flex" alignItems="center">
          <Badge sx={{ mr: 2, color: 'primary.main' }} />
          <StatusField source="isActive" label="Statut" />
        </Box>
      </SimpleShowLayout>
    </Card>
  </Show>
);