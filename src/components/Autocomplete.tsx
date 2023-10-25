```tsx
import React from 'react';
import { Autocomplete as MUIAutocomplete, TextField } from '@material-ui/core';

interface AutocompleteProps {
  options: string[];
  label: string;
  onChange: (value: string) => void;
}

const Autocomplete: React.FC<AutocompleteProps> = ({ options, label, onChange }) => {
  return (
    <MUIAutocomplete
      options={options}
      fullWidth
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      )}
      onChange={(event, value) => onChange(value || '')}
    />
  );
};

export default Autocomplete;
```