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
        {props.item?.map((item: string) => (
          <FormControlLabel control={<Checkbox />} label={item} />
        ))}
      </FormGroup>
    </Stack>
  );
}

export default CheckboxCompo;

