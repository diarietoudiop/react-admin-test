// src/components/Dashboard/index.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Title } from 'react-admin';

const Dashboard = () => (
  <Card>
    <Title title="Tableau de bord" />
    <CardContent>
      <Typography variant="h4">Bienvenue dans l'administration</Typography>
    </CardContent>
  </Card>
);

export default Dashboard;