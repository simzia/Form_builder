import {
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

function CheckboxCompo(props: any) {
  return (
    <Stack>
      <FormGroup row>
        {props.item?.map((item: any) => (
          <FormControlLabel control={<Checkbox />} label={item.option} />
        ))}
      </FormGroup>
    </Stack>
  );
}

export default CheckboxCompo;

