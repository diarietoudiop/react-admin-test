import React, { useState } from 'react';
import { SimpleForm, TextInput, SelectInput, required } from 'react-admin';
import { Box, Typography, IconButton } from '@mui/material';
import { Person, Email, VpnKey, Badge, Visibility, VisibilityOff } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeInUp } from './components';

export const UserForm = ({ isEdit }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SimpleForm
      sx={{
        '& .RaFormInput-root': {
          marginBottom: 3,
        },
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ mb: 4, color: 'primary.main' }}>
        {isEdit ? 'Modifier l\'utilisateur' : 'Nouvel utilisateur'}
      </Typography>

      <Box 
        component={motion.div}
        {...fadeInUp}
        sx={{
          '& .MuiTextField-root': {
            '& .MuiOutlinedInput-root': {
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }
            }
          }
        }}
      >
        <Box display="flex" alignItems="center" marginBottom={3}>
          <Person color="primary" sx={{ mr: 2 }} />
          <TextInput 
            source="name" 
            label="Nom" 
            validate={[required()]} 
            fullWidth
            variant="outlined"
          />
        </Box>
        
        <Box display="flex" alignItems="center" marginBottom={3}>
          <Email color="primary" sx={{ mr: 2 }} />
          <TextInput 
            source="email" 
            label="Email" 
            validate={[required()]} 
            fullWidth
            variant="outlined"
          />
        </Box>
        
        {!isEdit && (
          <Box display="flex" alignItems="center" marginBottom={3}>
            <VpnKey color="primary" sx={{ mr: 2 }} />
            <TextInput 
              source="password" 
              label="Mot de passe" 
              validate={[required()]} 
              fullWidth
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
            />
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
              sx={{ ml: 1 }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
        )}
        
        <Box display="flex" alignItems="center">
          <Badge color="primary" sx={{ mr: 2 }} />
          <SelectInput
            source="isActive"
            choices={[
              { id: true, name: 'Actif' },
              { id: false, name: 'Inactif' },
            ]}
            label="Statut"
            variant="outlined"
            defaultValue={true}
            fullWidth
          />
        </Box>
      </Box>
    </SimpleForm>
  );
};