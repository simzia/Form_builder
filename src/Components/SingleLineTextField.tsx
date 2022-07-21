import React, { useEffect, useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  Stack,
  TextField,
} from '@mui/material';

function SingleLineTextfield() {
  return (
    <Stack>
      <TextField
        id="outlined-name"
        margin="normal"
      />
    </Stack>
  );
}

export default SingleLineTextfield;

