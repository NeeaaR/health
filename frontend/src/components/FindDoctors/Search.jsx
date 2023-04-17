import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import SelectSpecs from "./Select";
import SearchBar from "./SearchBar";

export default function Search({doctors, onSpecChange, onSearch}) {

  return (
    <Container
      sx={{
        color: "white",
      }}
    >
      <Box sx={{ marginTop: "100px", marginBottom: 10 }}>
        <Typography sx={{ padding: "20px", fontWeight: 800 }} variant="h2">
          Trouver un médecin
        </Typography>
        <SearchBar onSearch={onSearch} />
        <SelectSpecs doctors={doctors} onSpecChange={onSpecChange} />
        <Divider sx={{ backgroundColor: "white"}}/>
      </Box>
    </Container>
  );
}
