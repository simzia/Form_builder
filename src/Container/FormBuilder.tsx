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
  Box,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { Question } from '../../types/interfaces';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import Slider from '@mui/material/Slider';
import Dropdown from '../Components/Dropdown';
import SingleLineTextfield from '../Components/SingleLineTextField';
import MultiLineTextfield from '../Components/MultiLineTextfield';
import CheckboxCompo from "../Components/Checkbox"
import RadioButton from '../Components/RadioButton';
import DatePicker from '../Components/DatePicker';

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
  const [radioOptionArry, setRadioOptionArry] = useState<[]>([]);
  const [radioBtnOption, setRadioBtnOption] = useState<string | undefined>();
  const [radioOptionVal, setRadioOptionVal] = useState<string | undefined>();
  const [dateValue, setDateValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );;
  const [timeValue, setTimeValue] = React.useState<Date | null>(
    new Date('2018-01-01T00:00:00.000Z'),
  );

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
  const formSubmitHandler = () => {
    console.log("form submit handler");
  }
  const dateChangeHandler = (newValue: Date | null) => {
    setDateValue(newValue)
  }
  const submitHandler = () => {
    let arry: Question[] = [...formField];
    let arryNew: [] = [];
    if (ansType == 'Dropdown') {
      console.log('ANSWER TYPE', ansType);
      arryNew = optionArry;
    } else if (ansType == 'Checkbox') {
      arryNew = checkBoxOptionArry;
    } else if (ansType == 'Radio Button') {
      arryNew = radioOptionArry;
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
      arry.push(checkBoxOption);
      console.log('OPTION', arry);
      setCheckBoxOptionArry(arry);
    } else if (ansType == 'Dropdown') {
      let arry: any = [...optionArry];
      arry.push(option);
      console.log('OPTION', arry);
      setOptionArry(arry);
    } else if (ansType == 'Radio Button') {
      let arry: any = [...radioOptionArry];
      arry.push(radioBtnOption);
      console.log('OPTION', arry);
      setRadioOptionArry(arry);
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
  useEffect(() => {
    console.log('QUESTION', ansType, isOptionEnable);
  }, [ansType]);
  
  useEffect(() => {
    console.log('ISQUESTION', isQueSubmit);
  }, [isQueSubmit]);
  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 37,
      label: '37',
    },
    {
      value: 100,
      label: '100',
    },
  ];
  return (
    <Stack>
      <Grid container spacing={5} columns={12} style={{ padding: 24 }}>
        <Grid item xs={6} >
          <Stack mr={7}>
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
                <MenuItem value={'Date Picker'}>Date Picker</MenuItem>
                <MenuItem value={'Time Picker'}>Time Picker</MenuItem>
                <MenuItem value={'Number Range Picker'}>Number Range Picker</MenuItem>
                <MenuItem value={'Image Picker'}>Image Picker</MenuItem>
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
                <Grid container spacing={2} columns={12}>
                  {ansType == 'Dropdown'
                    ? optionArry.map((item) => <Grid item xs={2}><Typography style={{backgroundColor: "#ededed", textAlign: "center", borderRadius: "7px", padding: "3px"}}>{item}</Typography></Grid>)
                    : ansType == 'Checkbox'
                    ? checkBoxOptionArry.map((item) => (
                        <Grid item xs={2}><Typography style={{backgroundColor: "#ededed", textAlign: "center", borderRadius: "7px", padding: "3px"}}>{item}</Typography></Grid>
                      ))
                    : ansType == 'Radio Button'
                    ? radioOptionArry.map((item) => (
                        <Grid item xs={2}><Typography style={{backgroundColor: "#ededed", textAlign: "center", borderRadius: "7px", padding: "3px"}}>{item}</Typography></Grid>
                      ))
                    : null}
                </Grid>
              </Container>
            ) : null}
         
            <Button
              variant="contained"
              style={{ marginTop: 20 }}
              onClick={() => submitHandler()}
            >
              Preview
            </Button>
          </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem/>
        <Grid
          item
          xs={5}
          style={{paddingBottom: 20 }}
        >
          <Typography variant="h4" component="h4">
            Form Preview
          </Typography>
          {isQueSubmit && formField ? (
            <FormControl style={{ marginTop: 20 }} fullWidth>
              {formField?.map((item) => (
                <Stack mt={2}>
                  <Typography style={{color: "#222", fontWeight: "900", fontSize: "18px"}}>{item.question}</Typography>
                  {item.answerType === 'Single Line Textfield' ? (
                    <SingleLineTextfield />
                  ) : item.answerType === 'Multiple Line Textfield' ? (
                    <MultiLineTextfield />
                  ) : item.answerType === 'Dropdown' ? (
                      <Dropdown item={item.options}/>
                  ) : item.answerType === 'Checkbox' ? (
                    <CheckboxCompo item={item.options}/>
                  ) : item.answerType === 'Radio Button' ? (
                     <RadioButton item={item.options} />
                  ) : item.answerType === 'Date Picker' ? (
                    <Stack mt={2}>
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
                    </Stack>
                  ) : item.answerType === 'Time Picker' ? (
                    <Stack mt={2}>
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
                    </Stack>
                  ) : item.answerType === 'Number Range Picker' ? (
                    <Stack>
                       <Slider
                        aria-label="Custom marks"
                        defaultValue={20}
                        // getAriaValueText={getNumberRange}
                        step={10}
                        valueLabelDisplay="auto"
                        marks={marks}
                      />
                    </Stack>
                  ) : null}
                </Stack>
              ))}
            </FormControl>
          ) : null}
          <Button
              variant="contained"
              style={{ marginTop: 20 }}
              onClick={() => formSubmitHandler()}
            >
              Submit
            </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default FormBuilder;
function e(e: any, ansType: string): void {
  throw new Error('Function not implemented.');
}
