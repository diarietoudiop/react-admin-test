import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Title } from 'react-admin';

const Dashboard = () => {
  const [state, setState] = useState({ users: 0, posts: 0 });
  const dataProvider = useDataProvider();

  useEffect(() => {
    const fetchData = async () => {
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
      setState({ users, posts });
    };
    fetchData();
  }, [dataProvider]);

  return (
    <Card>
      <Title title="Tableau de bord" />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">Bienvenue dans l'administration</Typography>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">Utilisateurs</Typography>
                <Typography variant="h3">{state.users}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">Publications</Typography>
                <Typography variant="h3">{state.posts}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Dashboard;