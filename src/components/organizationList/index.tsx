import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/Store';
import Alert from '@material-ui/lab/Alert';
import { getOrganizations } from '../../redux/thunks/organizations/getOrganizations';
import { Organization } from '../organization';

export interface OrganizationListProps { }

export const OrganizationList: React.FC<OrganizationListProps> = () => {
  const dispatch = useDispatch();
  const { isLoading, organizations, error, since } = useSelector((state: RootState) => state.organizations)

  useEffect(() => {
    dispatch(getOrganizations());
  }, []);

  if (error) return (
    <div>
      <Alert severity="error"
        action={
          <Button color="inherit" size="small" onClick={() => dispatch(getOrganizations())}>
            Re-request organizations
          </Button>
        }
      >
        {typeof error === 'string' ? error : "Some error"}
      </Alert>
    </div>
  )

  return (
    <div>
      <Grid container justify="center" spacing={2}>
        <Button variant="contained" color="primary" onClick={() => dispatch(getOrganizations())} style={{margin: "8px"}}>
          To start
        </Button>
        <Button variant="contained" color="primary" onClick={() => dispatch(getOrganizations({since}))} style={{margin: "8px"}}>
          Next page
        </Button>
      </Grid>
      {isLoading ? <Grid container justify="center" style={{ marginTop: "8px", marginBottom: "8px" }}><CircularProgress /></Grid> :
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {organizations.length ? organizations.map((org) => (
              <Grid key={org.id} item>
                <Organization data={org} />
              </Grid>
            )) : <Typography variant="h6" gutterBottom>
                No organizations
                    </Typography>}
          </Grid>
        </Grid>}
    </div>
  );
};
