import React, { useEffect, useState } from 'react';

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';

function DatePicker() {
  const [dateValue, setDateValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );;

  return (
    <LocalizationProvider dateAdapter={ AdapterMoment } >
      <DesktopDatePicker
        label="For desktop"
        value={dateValue}
        onChange={(newValue) => {
          setDateValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;

