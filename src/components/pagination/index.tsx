import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import Pagination from '@material-ui/lab/Pagination';

type PropsType = {
  totalPages: number;
  page: number;
  onChange: any;
};

const MyPagination: FC<PropsType> = ({ totalPages, page, onChange }) => {
  return (
    <Grid container justify="center">
      <Pagination
        count={totalPages}
        shape="rounded"
        page={page}
        onChange={onChange}
      />
    </Grid>
  );
};

export default MyPagination;
