import { NextPage } from 'next';
import { GistList } from 'src/components/gistList';
import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Grid from '@material-ui/core/Grid/Grid';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import { Container, CssBaseline, Link } from '@material-ui/core';

export interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Grid container spacing={6} direction="column" wrap="nowrap">
            <Typography variant="h6" color="inherit" noWrap>
              Test Task
            </Typography>
            <Link
              href="/organizations"
              variant="h6"
              onClick={(e: any) => e.preventDefault}
            >
              Organizations
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <div style={{ padding: 24 }}>
          <Grid container spacing={6} direction="column">
            <section>
              <Typography variant="h2">Gists</Typography>
              <GistList />
            </section>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
