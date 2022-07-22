import { Stack } from '@mui/material';
import Slider from '@mui/material/Slider';

type RangeValue = {
  minValue: string
  maxValue: string
}
function NumberRangePicker(props: any) {
  const minValue:number = parseFloat(props.values[0])
  const maxValue:number = parseFloat(props.values[1])
  const marks = [
    {
      value: minValue,
      label: props.values[0],
    },
    {
      value: maxValue,
      label: props.values[1],
    }
  ];
  return (
    <Stack>
      <Slider
        aria-label="Custom marks"
        defaultValue={minValue + 10}
        step={10}
        valueLabelDisplay="auto"
        min={minValue}
        max={maxValue}
        marks={marks}
      />
    </Stack>
  );
}

export default NumberRangePicker;
