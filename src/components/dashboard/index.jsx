import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import { Card, CardContent, Grid } from '@mui/material';
import { Person, Article, TrendingUp, Update } from '@mui/icons-material';
import StatCard from './StatCard';
import UserChart from './UserChart';
import PostChart from './PostChart';
import WelcomeMessage from './WelcomeMessage';

const Dashboard = () => {
  const [state, setState] = useState({ 
    users: 0, 
    posts: 0,
    recentUsers: 0,
    recentPosts: 0 
  });
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);
  const dataProvider = useDataProvider();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: users } = await dataProvider.getList('users', {
          pagination: { page: 1, perPage: 100 },
          sort: { field: 'id', order: 'ASC' }
        });

        const { data: posts } = await dataProvider.getList('posts', {
          pagination: { page: 1, perPage: 100 },
          sort: { field: 'id', order: 'ASC' }
        });

        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        
        const recentUsers = users.filter(user => new Date(user.createdAt) > oneWeekAgo).length;
        const recentPosts = posts.filter(post => new Date(post.publishedAt) > oneWeekAgo).length;

        setState({
          users: users.length,
          posts: posts.length,
          recentUsers,
          recentPosts
        });

        const userPostCounts = users.map(user => ({
          name: user.name,
          postCount: posts.filter(post => post.userId === user.id).length
        }));
        setUserData(userPostCounts);

        const publishedPosts = posts.filter(post => post.status === 'published').length;
        const draftPosts = posts.filter(post => post.status === 'draft').length;
        setPostData([
          { name: 'Publiés', value: publishedPosts },
          { name: 'Brouillons', value: draftPosts }
        ]);

      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
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

        <Grid container spacing={6} sx={{ marginTop: 2 }}>
          <Grid item xs={12} md={6}>
            <UserChart userData={userData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <PostChart postData={postData} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Dashboard;