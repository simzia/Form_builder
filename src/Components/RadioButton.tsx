import {
  Stack,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';

function RadioButton(props: any) {
  return (
    <Stack>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue={props.item? props.item[0] : null}
        >
          {props.item?.map((item: any) => (
            <FormControlLabel value={item} control={<Radio />} label={item.option} />
          ))}
          
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}

export default RadioButton;
