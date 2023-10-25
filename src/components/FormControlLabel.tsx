import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

interface Props {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NonStopSwitch: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={onChange} />}
      label="Non-stop Flights Only"
    />
  );
};

export default NonStopSwitch;