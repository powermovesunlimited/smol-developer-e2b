```tsx
import React from 'react';
import ButtonGroup from './components/ButtonGroup';
import Autocomplete from './components/Autocomplete';
import TextField from './components/TextField';
import FormControl from './components/FormControl';
import Select from './components/Select';
import MenuItem from './components/MenuItem';
import FormControlLabel from './components/FormControlLabel';
import Switch from './components/Switch';
import Snackbar from './components/Snackbar';
import Alert from './components/Alert';
import { formCSS } from './styles/formCSS';

function App() {
  return (
    <div className="App">
      <form css={formCSS}>
        <ButtonGroup />
        <Autocomplete id="from" label="From" />
        <Autocomplete id="to" label="To" />
        <TextField id="departure-date" label="Departure Date" type="date" />
        <TextField id="return-date" label="Return Date" type="date" />
        <TextField id="passengers" label="Passengers" type="number" />
        <FormControl>
          <Select id="cabin-class" label="Cabin Class">
            <MenuItem value="all">All Classes</MenuItem>
            <MenuItem value="economy">Economy</MenuItem>
            <MenuItem value="premium-economy">Premium Economy</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="first-class">First Class</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Switch id="non-stop-flights-only" />}
          label="Non-stop Flights Only"
        />
      </form>
      <Snackbar>
        <Alert severity="success">Form submitted successfully!</Alert>
      </Snackbar>
    </div>
  );
}

export default App;
```