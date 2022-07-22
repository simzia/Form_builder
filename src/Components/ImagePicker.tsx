import React from 'react';

function ImagePickerCompo() {
  const [timeValue, setTimeValue] = React.useState<Date | null>(
    new Date('2018-01-01T00:00:00.000Z'),
  );
  return (
    <input type="file" multiple />
  );
}

export default ImagePickerCompo;
