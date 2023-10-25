import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonOutlineIcon from '../icons/PersonOutlineIcon';
import FlightClassOutlinedIcon from '../icons/FlightClassOutlinedIcon';

interface Props {
  type: 'passengers' | 'cabinClass';
}

const CustomInputAdornment: React.FC<Props> = ({ type }) => {
  return (
    <InputAdornment position="start">
      {type === 'passengers' ? <PersonOutlineIcon /> : <FlightClassOutlinedIcon />}
    </InputAdornment>
  );
};

export default CustomInputAdornment;