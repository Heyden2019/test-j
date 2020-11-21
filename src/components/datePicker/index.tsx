import React, { FC } from 'react';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';

type PropsType = {
  selectedDate: Date;
  onChange: any;
};

const DatePicker: FC<PropsType> = ({ selectedDate, onChange }) => {
  return (
    <Grid
      container
      justify="center"
      style={{ marginBottom: '8px', marginTop: '8px' }}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Gists from"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
};

export default DatePicker;
