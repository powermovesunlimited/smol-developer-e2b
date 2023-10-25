import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

interface ButtonGroupProps {
  tripType: string;
  setTripType: (tripType: string) => void;
}

const TripButtonGroup: React.FC<ButtonGroupProps> = ({ tripType, setTripType }) => {
  const handleButtonClick = (type: string) => {
    setTripType(type);
  };

  return (
    <ButtonGroup variant="outlined" color="primary">
      <Button
        onClick={() => handleButtonClick('One Way')}
        variant={tripType === 'One Way' ? 'contained' : 'outlined'}
      >
        One Way
      </Button>
      <Button
        onClick={() => handleButtonClick('Round Trip')}
        variant={tripType === 'Round Trip' ? 'contained' : 'outlined'}
      >
        Round Trip
      </Button>
      <Button
        onClick={() => handleButtonClick('Multi-City')}
        variant={tripType === 'Multi-City' ? 'contained' : 'outlined'}
      >
        Multi-City
      </Button>
    </ButtonGroup>
  );
};

export default TripButtonGroup;