import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/Store';
import { Gist } from '../gist';
import Alert from '@material-ui/lab/Alert';
import { getGists } from '../../redux/thunks/gists/getGists';
import MyPagination from '../pagination';
import DatePicker from '../datePicker';

export interface GistListProps {}

export const GistList: React.FC<GistListProps> = () => {
  const dispatch = useDispatch();
  const { isLoading, gists, error, totalPages } = useSelector((state: RootState) => state.gists)
  const [page, setPage] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date('2020-01-01'));

  const onDateChange = (date: Date | null) => {
    if(date) {
      setSelectedDate(date);
      setPage(1)
      dispatch(getGists({since: date}))
    }
  };

  const onPageChange = (e: any, newPage: number) => {
    dispatch(getGists({page: newPage, since: selectedDate}));
    setPage(newPage);
  }

  useEffect(() => {
    dispatch(getGists({since: selectedDate}));
  }, []);

  if(error) return (
    <div>
      <Alert severity="error"
          action={
            <Button color="inherit" size="small" onClick={() => dispatch(getGists({page, since: selectedDate}))}>
              Re-request gists
            </Button>
          }
        >
        {typeof error === 'string' ? error : "Some error"}
      </Alert>
    </div>
  )
  
  return (
    <div>
      <DatePicker onChange={onDateChange} selectedDate={selectedDate} />
      {totalPages > 1 && <MyPagination totalPages={totalPages} page={page} onChange={onPageChange}/>}
      {isLoading ? <Grid container justify="center" style={{marginTop: "8px", marginBottom: "8px"}}><CircularProgress /></Grid> :
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {gists.length ? gists.map((gist) => (
                <Grid key={gist.id} item>
                  <Gist data={gist} />
                </Grid>
              )) :  <Typography variant="h6" gutterBottom>
                      No gists
                    </Typography>}
            </Grid>
          </Grid> }
    </div>
  );
};
