import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import React from 'react';
import { OrganizationData } from 'src/types/OrganizationData';

const useStyles = makeStyles({
  root: {
    width: 320,
    height: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  description: {
    fontSize: 14,
    wordWrap: 'break-word',
  },
  pos: {
    marginBottom: 12,
  },
});

export interface OrganizationProps {
  data: OrganizationData;
}

export const Organization: React.FC<OrganizationProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={data.avatar_url} />}
        title={data.login}
      />
      <CardContent>
        <Typography
          className={classes.description}
          color="textSecondary"
          gutterBottom
        >
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
