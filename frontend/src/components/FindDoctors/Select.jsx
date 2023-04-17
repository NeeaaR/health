import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSpecs({doctors, onSpecChange}) {
  const [spec, setSpec] = React.useState('');
  const handleChange = (event) => {
    const newSpec = event.target.value;
    setSpec(newSpec);
    onSpecChange(newSpec);
  };

  const specList = doctors
    .map(doctor => doctor.speciality)
    .filter((spec, index, self) => self.indexOf(spec) === index);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80, width: 200, marginTop: 5}}>
        <InputLabel sx={{ color: "white"}} id="demo-simple-select-autowidth-label">Spécialisation</InputLabel>
        <Select sx={{ color: "white" }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={spec}
          onChange={handleChange}
          autoWidth
          label="Spécialisation"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {specList.map((spec, index) => (
            <MenuItem key={index} value={spec}>
              {spec}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}