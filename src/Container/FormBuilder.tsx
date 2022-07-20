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
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { Question } from '../../types/interfaces';

function FormBuilder() {
  const [que, setQue] = useState<string>('');
  const [ansType, setAnsType] = useState<string>('');
  const [isQueSubmit, setIsQueSubmit] = useState<boolean>(false);
  const [quenArry, setQueArry] = useState<string[]>([]);
  const [formField, setFormField] = useState<Question[]>([]);
  const [option, setOption] = useState<string | undefined>();
  const [checkBoxOption, setCheckBoxOption] = useState<string | undefined>();
  const [optionArry, setOptionArry] = useState<[]>([]);
  const [checkBoxOptionArry, setCheckBoxOptionArry] = useState<[]>([]);
  const [isOptionEnable, setIsOptionEnable] = useState<boolean>(false);
  const [currentOptionArray, setCurrentOptionArray] = useState<[]>();
  const [radioOptionArry, setRadioOptionArry] = useState<[]>([]);
  const [radioBtnOption, setRadioBtnOption] = useState<string | undefined>();

  const handleChange = (event: SelectChangeEvent<string>) => {
    console.log('Age', event.target.value);
    // let ansType = event.target.value;
    if (event.target.value == 'Dropdown') {
      setIsOptionEnable(true);
    } else if (event.target.value == 'Checkbox') {
      setIsOptionEnable(true);
    } else if (event.target.value == 'Radio Button') {
      setIsOptionEnable(true);
    } else {
      setIsOptionEnable(false);
    }
    setAnsType(event.target.value);
  };

  const submitHandler = () => {
    let arry: Question[] = [...formField];
    let arryNew: [] = [];
    if (ansType == 'Dropdown') {
      console.log('ANSWER TYPE', ansType);
      arryNew = optionArry;
      setCurrentOptionArray(optionArry);
    } else if (ansType == 'Checkbox') {
      arryNew = checkBoxOptionArry;
      setCurrentOptionArray(checkBoxOptionArry);
    } else if (ansType == 'Radio Button') {
      arryNew = radioOptionArry;
      setCurrentOptionArray(radioOptionArry);
    } else {
      arryNew = [];
    }
    arry.push({ question: que, answerType: ansType, options: arryNew });
    console.log('ARRAY', arry);
    setQue('');
    setAnsType('');
    setFormField(arry);
    setIsQueSubmit(true);
    setIsOptionEnable(false);
    setOptionArry([]);
    setRadioOptionArry([]);
    setCheckBoxOptionArry([]);
  };
  const onChnageHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log('ON CHANGE HANDLER', e.target.value);
    // setIsQueSubmit(false)
    setQue(e.target.value);
  };
  const addNewOptionHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ansType: string
  ) => {
    console.log('ANSWER TYPE', ansType);

    if (ansType == 'Checkbox') {
      let arry: any = [...checkBoxOptionArry];
      // const opt = option
      arry.push(checkBoxOption);
      console.log('OPTION', arry);
      setCheckBoxOptionArry(arry);
      // setCheckBoxOption("")
    } else if (ansType == 'Dropdown') {
      let arry: any = [...optionArry];
      // const opt = option
      arry.push(option);
      console.log('OPTION', arry);
      setOptionArry(arry);
      // setOption("")
    } else if (ansType == 'Radio Button') {
      let arry: any = [...radioOptionArry];
      // const opt = option
      arry.push(radioBtnOption);
      console.log('OPTION', arry);
      setRadioOptionArry(arry);
      // setOption("")
    }
  };
  const onOptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ansType: string
  ) => {
    console.log('ANSWER TYPE', ansType);
    if (ansType == 'Checkbox') {
      setCheckBoxOption(e.target.value);
    } else if (ansType == 'Dropdown') {
      setOption(e.target.value);
    } else if (ansType == 'Radio Button') {
      setRadioBtnOption(e.target.value);
    }
  };
  const handleDropdown = (e: SelectChangeEvent<unknown>) => {
    console.log('Handle drop down');

    // setDropDownVal(e.target.value)
  };
  useEffect(() => {
    console.log('QUESTION', ansType, isOptionEnable);
  }, [ansType]);
  useEffect(() => {
    console.log('ISQUESTION', isQueSubmit);
  }, [isQueSubmit]);
  return (
    <Container>
      <Grid container spacing={5} columns={12} style={{ padding: 24 }}>
        <Grid item xs={6}>
          <Typography variant="h4" component="h4">
            Generate Your Question Here
          </Typography>
          <Stack>
            <TextField
              id="standard-basic"
              label="Question"
              variant="standard"
              margin="normal"
              onChange={(e) => onChnageHandler(e)}
              value={que}
            />
          </Stack>
          <Stack style={{ marginTop: 28 }}>
            <Typography variant="h4" component="h4">
              Select the Answer Type
            </Typography>
          </Stack>
          <FormControl fullWidth style={{ marginTop: 20 }}>
            <InputLabel id="demo-simple-select-label">Answer Type</InputLabel>
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
          {ansType && isOptionEnable ? (
            <Container>
              <Grid container spacing={2} columns={12}>
                <Grid item xs={8}>
                  <Stack>
                    <TextField
                      id="standard-basic"
                      label="Enter Option"
                      onChange={(e) => onOptionChange(e, ansType)}
                      variant="standard"
                      margin="normal"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    style={{ marginTop: 20 }}
                    onClick={(e) => addNewOptionHandler(e, ansType)}
                  >
                    Add Option
                  </Button>
                </Grid>
              </Grid>
              {ansType == 'Dropdown'
                ? optionArry.map((item) => (
                    <Stack direction="row" spacing={2}>
                      <Typography>{item}</Typography>
                    </Stack>
                  ))
                : ansType == 'Checkbox'
                ? checkBoxOptionArry.map((item) => (
                    <Stack>
                      <Typography>{item}</Typography>
                    </Stack>
                  ))
                : ansType == 'Radio Button'
                ? radioOptionArry.map((item) => <Stack>
                    <Typography>{item}</Typography>
                  </Stack>)
                : null}
            </Container>
          ) : null}

          <Button
            variant="contained"
            style={{ marginTop: 20 }}
            onClick={() => submitHandler()}
          >
            Preview
          </Button>
        </Grid>
        <Grid item xs={6} style={{backgroundColor: "#ededed", paddingBottom: 20}}>
        <Typography variant="h4" component="h4">
            Form Preview
          </Typography>
          {isQueSubmit && formField ? (
            <FormControl style={{ marginTop: 20 }}>
              {formField?.map((item) => (
                <Stack>
                  <Typography>{item.question}</Typography>
                  {item.answerType == 'Single Line Textfield' ? (
                    <TextField
                      id="outlined-name"
                      margin="normal"
                      // value={name}
                      // onChange={handleChange}
                    />
                  ) : item.answerType == 'Multiple Line Textfield' ? (
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      margin="normal"
                      defaultValue="Default Value"
                    />
                  ) : item.answerType == 'Dropdown' ? (
                    <FormControl margin="normal">
                      <InputLabel id="demo-simple-select-label">
                        Select Options
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Select Options"
                        onChange={(e) => handleDropdown(e)}
                      >
                        {item.options?.map((item) => (
                          <MenuItem value={item}>{item}</MenuItem>
                        ))}
                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                    </FormControl>
                  ) : item.answerType == 'Checkbox' ? (
                    <FormGroup>
                      {item?.options?.map((item) => (
                        <FormControlLabel control={<Checkbox />} label={item} />
                      ))}
                    </FormGroup>
                  ) : item.answerType == 'Radio Button' ? (
                    <FormControl>
                      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        {item?.options?.map((item) => (
                          <FormControlLabel
                            value={item}
                            control={<Radio />}
                            label={item}
                          />
                        ))}
                        {/* <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
                        {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
                      </RadioGroup>
                    </FormControl>
                  ) : null}
                </Stack>
              ))}
            </FormControl>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
}

export default FormBuilder;
function e(e: any, ansType: string): void {
  throw new Error('Function not implemented.');
}
