import React from 'react';
import { Select as MuiSelect, MenuItem } from '@material-ui/core';

interface SelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const Select: React.FC<SelectProps> = ({ value, onChange }) => {
  return (
    <MuiSelect
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      color="primary"
    >
      <MenuItem value="All Classes">All Classes</MenuItem>
      <MenuItem value="Economy">Economy</MenuItem>
      <MenuItem value="Premium Economy">Premium Economy</MenuItem>
      <MenuItem value="Business">Business</MenuItem>
      <MenuItem value="First Class">First Class</MenuItem>
    </MuiSelect>
  );
};

export default Select;