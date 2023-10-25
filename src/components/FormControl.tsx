import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import FlightClassOutlinedIcon from '../icons/FlightClassOutlinedIcon';
import { formCSS } from '../styles/formCSS';

interface Props {
  cabinClass: string;
  handleCabinClassChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const CabinClassFormControl: React.FC<Props> = ({ cabinClass, handleCabinClassChange }) => {
  return (
    <FormControl variant="outlined" fullWidth css={formCSS}>
      <InputLabel id="cabin-class-label">Cabin Class</InputLabel>
      <Select
        labelId="cabin-class-label"
        id="cabin-class"
        value={cabinClass}
        onChange={handleCabinClassChange}
        startAdornment={<FlightClassOutlinedIcon />}
      >
        <MenuItem value="All Classes">All Classes</MenuItem>
        <MenuItem value="Economy">Economy</MenuItem>
        <MenuItem value="Premium Economy">Premium Economy</MenuItem>
        <MenuItem value="Business">Business</MenuItem>
        <MenuItem value="First Class">First Class</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CabinClassFormControl;