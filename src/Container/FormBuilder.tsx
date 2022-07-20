import React, { useEffect, useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  Typography,
  Button,
  Stack,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { Link } from 'react-router-dom';

function FormBuilder() {
  const [que, setQue] = useState<string>("");
  const [ansType, setAnsType] = useState<string>();
  const [isQueSubmit, setIsQueSubmit] = useState<boolean>(false);
  const [quenArry, setQueArry] = useState<string[]>([])

  const handleChange = (event:  SelectChangeEvent<string>) => {
    console.log('Age', event.target.value);
  };

  const submitHandler = () => {
    let arry:string[] = [...quenArry]
    arry.push(que)
    setQueArry(arry)
    setIsQueSubmit(true)
  }
  const onChnageHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log("ON CHANGE HANDLER", e.target.value);
    setIsQueSubmit(false)
    setQue(e.target.value)
  }
  useEffect(() => {
    console.log("QUESTION", que);
    
  }, [que])
  useEffect(() => {
    console.log("ISQUESTION", isQueSubmit);
    
  }, [isQueSubmit])
  return (
    <Container>
      <Grid container spacing={2} columns={12} style={{ padding: 24 }}>
        <Grid item xs={6}>
          <Typography variant="h4" component="h4">
            Generate Your Question Here
          </Typography>
          <Stack>
            <TextField
              id="standard-basic"
              label="Question"
              variant="standard"
              style={{ marginTop: 18 }}
              onChange={(e) => onChnageHandler(e)}
            />
          </Stack>
          <Stack style={{ marginTop: 28 }}>
            <Typography variant="h4" component="h4">
              Select the Answer Type
            </Typography>
          </Stack>
          <FormControl fullWidth style={{ marginTop: 20 }}>
            <InputLabel id="demo-simple-select-label">Question Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ansType}
              label="Question Type"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value={'Single Line Textfield'}>
                Single Line Textfield
              </MenuItem>
              <MenuItem value={'Multiple Line Textfield'}>
                Multiple Line Textfield
              </MenuItem>
              <MenuItem value={'Dropdown'}>Dropdown</MenuItem>
              <MenuItem value={'Checkbox'}>Checkbox</MenuItem>
              <MenuItem value={'Radio Button'}>Radio Button</MenuItem>
              <MenuItem value={'Image Pickers'}>Image Picker</MenuItem>
            </Select>
          </FormControl>
          
            <Button variant="contained" style={{marginTop: 20}} onClick={() => submitHandler()}>Preview</Button>
          
        </Grid>
        <Grid item xs={6}>
          {isQueSubmit ? (
            <FormControl fullWidth style={{ marginTop: 20 }}>
              <Typography>{que}</Typography>
            </FormControl>
          ) : (
            null
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormBuilder;
