import { Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import SearchBar from "./SearchBar";
import SelectSpecs from "./Select";

export default function Search() {
  return (
    <Container
      sx={{
        color: "white",
      }}
    >
      <Box sx={{ marginTop: "100px", marginBottom: 10 }}>
        <Typography sx={{ padding: "20px", fontWeight: 800 }} variant="h2">
          Trouver une pharmacie
        </Typography>
        <SearchBar />
        <SelectSpecs/>
        <Divider sx={{ backgroundColor: "white"}}/>
      </Box>
    </Container>
  );
}
