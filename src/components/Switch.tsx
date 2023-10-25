import React from 'react';
import { Switch as MuiSwitch, FormControlLabel } from '@material-ui/core';

interface SwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <FormControlLabel
      control={<MuiSwitch checked={checked} onChange={onChange} color="primary" />}
      label="Non-stop Flights Only"
    />
  );
};

export default Switch;