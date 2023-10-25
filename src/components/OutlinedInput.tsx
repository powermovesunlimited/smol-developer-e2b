import React from 'react';
import { OutlinedInput as MuiOutlinedInput, OutlinedInputProps as MuiOutlinedInputProps } from '@material-ui/core';

interface OutlinedInputProps extends MuiOutlinedInputProps {
  id: string;
  label: string;
}

const OutlinedInput: React.FC<OutlinedInputProps> = ({ id, label, ...props }) => {
  return (
    <MuiOutlinedInput
      id={id}
      label={label}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
};

export default OutlinedInput;