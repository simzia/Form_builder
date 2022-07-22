import React, { useEffect, useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  TextField,
} from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

function TimePickerCompo() {
  const [timeValue, setTimeValue] = React.useState<Date | null>(
    new Date('2018-01-01T00:00:00.000Z'),
  );
  return (
    <LocalizationProvider dateAdapter={ AdapterMoment } >
      <DesktopTimePicker
        label="For desktop"
        value={timeValue}
        onChange={(newValue) => {
          setTimeValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default TimePickerCompo;
