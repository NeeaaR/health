import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSpecs() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80, width: 200, marginTop: 5}}>
        <InputLabel sx={{ color: "white"}} id="demo-simple-select-autowidth-label">Ville</InputLabel>
        <Select sx={{ color: "white" }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>Aucune</em>
          </MenuItem>
          <MenuItem value={10}>Torcy</MenuItem>
          <MenuItem value={21}>Val d'Europe</MenuItem>
          <MenuItem value={22}>Champs Sur Marne</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}