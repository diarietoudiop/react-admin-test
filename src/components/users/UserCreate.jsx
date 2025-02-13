import React from 'react';
import { Create } from 'react-admin';
import { Card } from '@mui/material';
import { motion } from 'framer-motion';
import { UserForm } from './UserForm';
import { fadeInUp } from './components';

export const UserCreate = () => (
  <Create>
    <Card
      component={motion.div}
      {...fadeInUp}
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <UserForm isEdit={false} />
    </Card>
  </Create>
);