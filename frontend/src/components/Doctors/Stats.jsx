import React from "react";
import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Stats() {
  const [value, setValue] = React.useState(4);
  return (
    <Box sx={{ color: "white" }}>
      <Typography component="div">Note</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
