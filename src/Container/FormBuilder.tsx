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
  Alert,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { Question, OptionsArry } from '../../types/interfaces';
import Dropdown from '../Components/Dropdown';
import SingleLineTextfield from '../Components/SingleLineTextField';
import MultiLineTextfield from '../Components/MultiLineTextfield';
import CheckboxCompo from '../Components/Checkbox';
import RadioButton from '../Components/RadioButton';
import DatePicker from '../Components/DatePicker';
import TimePickerCompo from '../Components/TimePicker';
import NumberRangePicker from '../Components/NumberRangePicker';
import ImagePickerCompo from '../Components/ImagePicker';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { options } from '../../types/interfaces';

function FormBuilder() {
  const [que, setQue] = useState<string>('');
  const [ansType, setAnsType] = useState<string>('');
  const [isQueSubmit, setIsQueSubmit] = useState<boolean>(false);
  const [formField, setFormField] = useState<Question[]>([]);
  const [option, setOption] = useState<string | undefined>();
  const [checkBoxOption, setCheckBoxOption] = useState<string | undefined>();
  const [optionArry, setOptionArry] = useState<[]>([]);
  const [checkBoxOptionArry, setCheckBoxOptionArry] = useState<options[]>([]);
  const [isOptionEnable, setIsOptionEnable] = useState<boolean>(false);
  const [radioOptionArry, setRadioOptionArry] = useState<options[]>([]);
  const [radioBtnOption, setRadioBtnOption] = useState<string | undefined>();
  const [isRangeEnable, setIsRangeEnable] = useState<boolean>(false);
  const [minRange, setMinRange] = useState<string>('');
  const [maxRange, setMaxRange] = useState<string>('');
  const [isQueShowErr, setIsqueShowErr] = useState(false);
  const [isAnsErr, setIsAnsErr] = useState(false);
  const [isOptionAdd, setIsOptionAdd] = useState(false);
  const [newOptionArry, setNewOptionArry] = useState<options[]>([]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    if (event.target.value == 'Dropdown') {
      setIsOptionEnable(true);
    } else if (event.target.value == 'Checkbox') {
      setIsOptionEnable(true);
    } else if (event.target.value == 'Radio Button') {
      setIsOptionEnable(true);
    } else if (event.target.value == 'Number Range Picker') {
      setIsRangeEnable(true);
    } else {
      setIsOptionEnable(false);
    }
    setAnsType(event.target.value);
  };

  const formSubmitHandler = () => {
    console.log('form submit handler');
  };

  const addOptionToListHandler = () => {
    console.log('addNewOptionHandler');
    if (ansType == 'Dropdown') {
      const arry = [...newOptionArry];
      arry.push({ isOptionAdded: true, option: '' });
      setNewOptionArry(arry);
      setIsOptionAdd(true);
    }
    if (ansType == 'Checkbox') {
      const arry = [...checkBoxOptionArry];
      arry.push({ isOptionAdded: true, option: '' });
      setCheckBoxOptionArry(arry);
      setIsOptionAdd(true);
    }
    if (ansType == 'Radio Button') {
      const arry = [...radioOptionArry];
      arry.push({ isOptionAdded: true, option: '' });
      setRadioOptionArry(arry);
      setIsOptionAdd(true);
    }
  };

  useEffect(() => {
    console.log('ISOPTIONADD', isOptionAdd);
  }, [isOptionAdd]);

  const deleteOptionHandler = (index: number) => {
    if (ansType == 'Dropdown') {
      const arry = [...newOptionArry];
      const remove = arry.splice(index, 1);
      setNewOptionArry(arry);
      console.log('DELETE', remove, arry);
    }
    if (ansType == 'Checkbox') {
      const arry = [...checkBoxOptionArry];
      const remove = arry.splice(index, 1);
      setCheckBoxOptionArry(arry);
      console.log('DELETE', remove, arry);
    } else if (ansType == 'Radio Button') {
      const arry = [...radioOptionArry];
      const remove = arry.splice(index, 1);
      setRadioOptionArry(arry);
      console.log('DELETE', remove, arry);
    }
  };

  const submitHandler = () => {
    let arry: Question[] = [...formField];
    let arryNew: options[] = [];
    if (ansType == 'Dropdown') {
      arryNew = newOptionArry;
    } else if (ansType == 'Checkbox') {
      arryNew = checkBoxOptionArry;
    } else if (ansType == 'Radio Button') {
      arryNew = radioOptionArry;
    } else {
      arryNew = [];
    }
    let numArry: string[] = [];
    if (ansType == 'Number Range Picker') {
      numArry = [minRange, maxRange];
    }
    if (que === '') {
      setIsqueShowErr(true);
    }
    if (ansType === '') {
      setIsAnsErr(true);
    } else {
      setIsqueShowErr(false);
      setIsAnsErr(false);
      arry.push({
        question: que,
        answerType: ansType,
        numsArray: numArry,
        newOptionsArry: arryNew,
      });
    }
    setQue('');
    setAnsType('');
    setFormField(arry);
    setIsQueSubmit(true);
    setIsOptionEnable(false);
    setOptionArry([]);
    setRadioOptionArry([]);
    setCheckBoxOptionArry([]);
    setMaxRange('');
    setMinRange('');
    setNewOptionArry([]);
  };
  const handleMinRange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log('MIN RANGE', e.target.value);
    setMinRange(e.target.value);
  };
  const handleMaxRange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log('MAX RANGE', e.target.value);
    setMaxRange(e.target.value);
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

  const onOptionChnageHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    console.log('val', e.target.value);

    if (ansType == 'Checkbox') {
      const arry: any = [...checkBoxOptionArry];
      arry.forEach((item: any, i: number) => {
        if (i == index) {
          item.option = e.target.value;
          console.log('ITEM', item.option);
        }
      });
      setCheckBoxOptionArry(arry);
    } else if (ansType == 'Dropdown') {
      const arry = [...newOptionArry];
      arry.forEach((item, i) => {
        if (i == index) {
          item.option = e.target.value;
          console.log('ITEM', item.option);
        }
      });
      setNewOptionArry(arry);
    } else if (ansType == 'Radio Button') {
      const arry: any = [...radioOptionArry];
      arry.forEach((item: any, i: number) => {
        if (i == index) {
          item.option = e.target.value;
          console.log('ITEM', item.option);
        }
      });
      setRadioOptionArry(arry);
    }
  };
  return (
    <Stack>
      <Grid container spacing={5} columns={12} style={{ padding: 24 }}>
        <Grid item xs={6}>
          <Container>
            <Typography variant="h4" component="h4">
              Generate Your Question Here
            </Typography>
            <Stack>
              {isQueShowErr ? (
                <TextField
                  error
                  id="standard-basic"
                  label="Error"
                  variant="standard"
                  margin="normal"
                  onChange={(e) => onChnageHandler(e)}
                  value={que}
                  helperText="Please Enter a Question"
                />
              ) : (
                <TextField
                  id="standard-basic"
                  label="Question"
                  variant="standard"
                  margin="normal"
                  onChange={(e) => onChnageHandler(e)}
                  value={que}
                />
              )}
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
                <MenuItem value={'Number Range Picker'}>
                  Number Range Picker
                </MenuItem>
                <MenuItem value={'Image Picker'}>Image Picker</MenuItem>
              </Select>
            </FormControl>
            {isAnsErr ? (
              <Alert severity="error">Please Select the Answer Type!</Alert>
            ) : null}
            {ansType && isOptionEnable ? (
              <Container style={{ marginTop: '10px' }}>
                <Typography variant="h6" component="h6">
                  Add Option
                </Typography>
                {ansType == 'Dropdown' && isOptionEnable
                  ? newOptionArry?.map((item, index) =>
                      item.isOptionAdded ? (
                        <Grid
                          container
                          spacing={2}
                          columns={12}
                          alignItems="center"
                        >
                          <Grid item xs={10}>
                            <Stack>
                              <TextField
                                id="standard-basic"
                                label="Option"
                                variant="outlined"
                                margin="normal"
                                onChange={(e) =>
                                  onOptionChnageHandler(e, index)
                                }
                                value={item.option}
                              />
                            </Stack>
                          </Grid>
                          <Grid item xs={2}>
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="center"
                              style={{ display: 'flex' }}
                            >
                              <DeleteForeverIcon
                                onClick={() => deleteOptionHandler(index)}
                              />
                            </Stack>
                          </Grid>
                        </Grid>
                      ) : null
                    )
                  : ansType == 'Checkbox'
                  ? checkBoxOptionArry?.map((item, index) =>
                      item.isOptionAdded ? (
                        <Grid
                          container
                          spacing={2}
                          columns={12}
                          alignItems="center"
                        >
                          <Grid item xs={10}>
                            <Stack>
                              <TextField
                                id="standard-basic"
                                label="Option"
                                variant="outlined"
                                margin="normal"
                                onChange={(e) =>
                                  onOptionChnageHandler(e, index)
                                }
                                value={item.option}
                              />
                            </Stack>
                          </Grid>
                          <Grid item xs={2}>
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="center"
                              style={{ display: 'flex' }}
                            >
                              <DeleteForeverIcon
                                onClick={() => deleteOptionHandler(index)}
                              />
                            </Stack>
                          </Grid>
                        </Grid>
                      ) : null
                    )
                  : ansType == 'Radio Button'
                  ? radioOptionArry?.map((item, index) =>
                      item.isOptionAdded ? (
                        <Grid
                          container
                          spacing={2}
                          columns={12}
                          alignItems="center"
                        >
                          <Grid item xs={10}>
                            <Stack>
                              <TextField
                                id="standard-basic"
                                label="Option"
                                variant="outlined"
                                margin="normal"
                                onChange={(e) =>
                                  onOptionChnageHandler(e, index)
                                }
                                value={item.option}
                              />
                            </Stack>
                          </Grid>
                          <Grid item xs={2}>
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="center"
                              style={{ display: 'flex' }}
                            >
                              <DeleteForeverIcon
                                onClick={() => deleteOptionHandler(index)}
                              />
                            </Stack>
                          </Grid>
                        </Grid>
                      ) : null
                    )
                  : null}

                <Stack direction="row" justifyContent="center">
                  <AddCircleIcon
                    color="primary"
                    onClick={() => addOptionToListHandler()}
                  />
                </Stack>
              </Container>
            ) : null}
            {ansType == 'Number Range Picker' && isRangeEnable ? (
              <Grid container spacing={2} columns={12} mt={2}>
                <Grid item xs={6}>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>Min Range</Typography>
                    <TextField
                      id="filled-basic"
                      label="Min Range"
                      variant="filled"
                      margin="normal"
                      value={minRange}
                      onChange={(e) => handleMinRange(e)}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography>Max Range</Typography>
                    <TextField
                      id="filled-basic"
                      label="Max Range"
                      variant="filled"
                      margin="normal"
                      value={maxRange}
                      onChange={(e) => handleMaxRange(e)}
                    />
                  </Stack>
                </Grid>
              </Grid>
            ) : null}

            <Button
              variant="contained"
              style={{ marginTop: 30 }}
              onClick={() => submitHandler()}
            >
              Preview
            </Button>
          </Container>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5} style={{ paddingBottom: 20 }}>
          <Typography variant="h4" component="h4">
            Form Preview
          </Typography>
          {isQueSubmit && formField ? (
            <Container>
              <FormControl style={{ marginTop: 20 }} fullWidth>
                {formField?.map((item) => (
                  <Stack mt={2}>
                    <Typography
                      style={{
                        color: '#222',
                        fontWeight: '900',
                        fontSize: '18px',
                      }}
                    >
                      {item.question}
                    </Typography>
                    {item.answerType === 'Single Line Textfield' ? (
                      <SingleLineTextfield />
                    ) : item.answerType === 'Multiple Line Textfield' ? (
                      <MultiLineTextfield />
                    ) : item.answerType === 'Dropdown' ? (
                      <Dropdown item={item.newOptionsArry} />
                    ) : item.answerType === 'Checkbox' ? (
                      <CheckboxCompo item={item.newOptionsArry} />
                    ) : item.answerType === 'Radio Button' ? (
                      <RadioButton item={item.newOptionsArry} />
                    ) : item.answerType === 'Date Picker' ? (
                      <Stack mt={2}>
                        <DatePicker />
                      </Stack>
                    ) : item.answerType === 'Time Picker' ? (
                      <Stack mt={2}>
                        <TimePickerCompo />
                      </Stack>
                    ) : item.answerType === 'Number Range Picker' ? (
                      <Stack mt={2}>
                        <NumberRangePicker values={item.numsArray} />
                      </Stack>
                    ) : item.answerType === 'Image Picker' ? (
                      <Stack mt={2}>
                        <ImagePickerCompo />
                      </Stack>
                    ) : null}
                  </Stack>
                ))}
              </FormControl>
              <Button
                variant="contained"
                style={{ marginTop: 20 }}
                onClick={() => formSubmitHandler()}
              >
                Submit
              </Button>
            </Container>
          ) : null}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default FormBuilder;
