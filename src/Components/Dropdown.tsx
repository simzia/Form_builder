import React, { useEffect, useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  SelectChangeEvent
} from '@mui/material';

function Dropdown(props: any) {
  const handleDropdown = (e: SelectChangeEvent<unknown>) => {
    console.log('Handle drop down');
  };
  return (
    <Stack>
      <FormControl margin="normal">
        <InputLabel id="demo-simple-select-standard-label">Select Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select Options"
          onChange={(e) => handleDropdown(e)}
        >
          {props.item?.map((item: string) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

export default Dropdown;

