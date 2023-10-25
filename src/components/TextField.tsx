import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';
import { formCSS } from '../styles/formCSS';

interface TextFieldProps {
  id: string;
  label: string;
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  InputProps?: any;
  InputLabelProps?: any;
}

const TextField: React.FC<TextFieldProps> = ({ id, label, type, value, onChange, InputProps, InputLabelProps }) => {
  return (
    <MuiTextField
      id={id}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      InputProps={InputProps}
      InputLabelProps={InputLabelProps}
      variant="outlined"
      fullWidth
      css={formCSS}
    />
  );
};

export default TextField;