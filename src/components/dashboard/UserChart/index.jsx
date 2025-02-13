import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const UserChart = ({ userData }) => {
  return (
    <Card sx={{ width: '100%', marginTop: 4 }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Posts par Utilisateur
        </Typography>
        <div style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={userData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="postCount" fill="#8884d8" name="Nombre de posts" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserChart;