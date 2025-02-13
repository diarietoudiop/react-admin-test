import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  FilterButton,
  TopToolbar,
  CreateButton,
  ExportButton,
  TextInput,
  SelectInput,
  BulkDeleteButton,
    BulkExportButton,
    useUpdateMany,
    useRefresh,
    useNotify,
} from 'react-admin';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { UserAvatar, StatusField, fadeInUp } from './components';

// User Filters
const userFilters = [
  <TextInput 
    source="q" 
    label="Rechercher"
    alwaysOn
    variant="outlined"
    fullWidth
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }
      }
    }}
  />,
  <SelectInput
    source="isActive"
    choices={[
      { id: true, name: 'Actif' },
      { id: false, name: 'Inactif' },
    ]}
    label="Statut"
    variant="outlined"
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '8px'
      }
    }}
  />
];



// List Actions
const ListActions = () => (
  <TopToolbar
    sx={{
      marginBottom: 2,
      gap: 1,
      '& button': {
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }
      }
    }}
  >
    <FilterButton />
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

export const UserList = () => (
  <List
    filters={userFilters}
    sort={{ field: 'name', order: 'ASC' }}
    perPage={10}
    actions={<ListActions />}
    component={motion.div}
    {...fadeInUp}
    sx={{
      '& .RaList-main': {
        background: 'transparent'
      }
    }}
  >
    <Datagrid
      rowClick="show"
      sx={{
        '& .RaDatagrid-headerCell': {
          background: 'linear-gradient(90deg, #f6f7f9 0%, #ffffff 100%)',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          color: '#2d3748',
        },
        '& .RaDatagrid-row': {
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.002)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            backgroundColor: '#f8fafc',
          }
        }
      }}
    >
      <TextField source="id" />
      <TextField 
        source="name" 
        label="Nom"
        render={record => (
          <Box display="flex" alignItems="center" gap={2}>
            <UserAvatar name={record.name} />
            <Typography fontWeight="500">{record.name}</Typography>
          </Box>
        )}
      />
      <EmailField 
        source="email"
        sx={{ 
          color: 'primary.main',
          '&:hover': {
            textDecoration: 'underline'
          }
        }}
      />
      <StatusField source="isActive" label="Statut" />
      <EditButton
        sx={{
          '&:hover': {
            backgroundColor: 'primary.light'
          }
        }}
      />
    </Datagrid>
  </List>
);