import React, { useEffect, useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  Stack,
  TextField,
} from '@mui/material';

function MultiLineTextfield() {
  return (
    <Stack>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        margin="normal"
        defaultValue="Enter Text Here ..."
      />
    </Stack>
  );
}

export default MultiLineTextfield;

