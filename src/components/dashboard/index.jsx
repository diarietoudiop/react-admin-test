import React, { useEffect, useState } from 'react';
import { useDataProvider, Title } from 'react-admin';
import { Card, CardContent, Typography, Grid, Box, Paper, LinearProgress } from '@mui/material';
import { Person, Article, TrendingUp, Update } from '@mui/icons-material';

const StatCard = ({ title, value, icon, color }) => (
  <Paper 
    elevation={3}
    className="h-40 rounded-xl overflow-hidden"
    sx={{
      background: `linear-gradient(135deg, ${color}11 0%, ${color}22 100%)`,
      transition: 'all 0.3s ease',
      animation: 'fadeIn 0.5s ease-out', 
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 3
      },
      '@keyframes fadeIn': {
        '0%': {
          opacity: 0,
          transform: 'translateY(20px)'
        },
        '100%': {
          opacity: 1,
          transform: 'translateY(0)'
        }
      }
    }}
  >
    <Box className="p-6 h-full relative">
      <Box className="flex justify-between items-start mb-4">
        <Box 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
          sx={{ backgroundColor: `${color}22` }}
        >
          {icon}
        </Box>
      </Box>
      <Box>
        <Typography className="text-gray-600 font-medium mb-3 text-lg">
          {title}
        </Typography>
        <Typography className="text-4xl font-bold" sx={{ color: color }}>
          {value}
        </Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={70} 
        className="absolute bottom-0 left-0 right-0"
        sx={{ 
          height: 6,
          backgroundColor: `${color}22`,
          '& .MuiLinearProgress-bar': {
            backgroundColor: color
          }
        }}
      />
    </Box>
  </Paper>
);

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
    className="mb-16"  // Increased bottom margin
  >
    <Typography 
      variant="h3" 
      sx={{ 
        marginBottom: '2rem',  // Added more space after the main title
        fontWeight: 'bold',
        color: '#1a1a1a'
      }}
    >
      Bienvenue dans l'administration
    </Typography>
    <Typography 
      variant="h6" 
      sx={{ 
        marginBottom: '3rem',  // Added more space after the subtitle
        color: '#666666',
        fontWeight: 'normal'
      }}
    >
      Gérez vos utilisateurs et publications depuis ce tableau de bord
    </Typography>
  </Box>
);

const Dashboard = () => {
  const [state, setState] = useState({ 
    users: 0, 
    posts: 0,
    recentUsers: 0,
    recentPosts: 0 
  });
  const dataProvider = useDataProvider();

  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

      const { total: users } = await dataProvider.getList('users', {
        pagination: { page: 1, perPage: 1 },
        sort: { field: 'id', order: 'ASC' },
        filter: {},
      });

      const { total: posts } = await dataProvider.getList('posts', {
        pagination: { page: 1, perPage: 1 },
        sort: { field: 'id', order: 'ASC' },
        filter: {},
      });

      const { total: recentUsers } = await dataProvider.getList('users', {
        pagination: { page: 1, perPage: 1 },
        sort: { field: 'id', order: 'ASC' },
        filter: { created_at_gte: lastWeek.toISOString() },
      });

      const { total: recentPosts } = await dataProvider.getList('posts', {
        pagination: { page: 1, perPage: 1 },
        sort: { field: 'id', order: 'ASC' },
        filter: { created_at_gte: lastWeek.toISOString() },
      });

      setState({ users, posts, recentUsers, recentPosts });
    };
    fetchData();
  }, [dataProvider]);

  return (
    <Card sx={{ margin: '2rem' }}>  
      <CardContent sx={{ padding: '2rem' }}>  
        <WelcomeMessage />
        
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} lg={3}>
            <StatCard
              title="Utilisateurs Totaux"
              value={state.users}
              icon={<Person sx={{ fontSize: 32, color: '#2196f3' }} />}
              color="#2196f3"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <StatCard
              title="Publications Totales"
              value={state.posts}
              icon={<Article sx={{ fontSize: 32, color: '#4caf50' }} />}
              color="#4caf50"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <StatCard
              title="Nouveaux Utilisateurs"
              value={state.recentUsers}
              icon={<TrendingUp sx={{ fontSize: 32, color: '#9c27b0' }} />}
              color="#9c27b0"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <StatCard
              title="Publications Récentes"
              value={state.recentPosts}
              icon={<Update sx={{ fontSize: 32, color: '#ff9800' }} />}
              color="#ff9800"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Dashboard;