import React from 'react';
import { InputLabel as MuiInputLabel } from '@material-ui/core';

interface InputLabelProps {
  id: string;
  label: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ id, label }) => {
  return <MuiInputLabel htmlFor={id}>{label}</MuiInputLabel>;
};

export default InputLabel;