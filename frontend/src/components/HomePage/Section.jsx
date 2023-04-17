import * as React from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  border: "0px",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'centers',
}));

export default function Section({ articles }) {

  const shortContent = articles.content.slice(0, 200) + '...';

  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} sx={{ margin: "50px 50px" }}>
        <Grid xs={7} >
          <Item elevation={0}>
            <Typography variant="h2" sx={{ textAlign: 'left', paddingBottom: '50px', fontSize: 50, fontFamily: ['Plus Jakarta Sans'], fontWeight: 700, color: '#66B2FF', textShadow: "rgb(0, 0, 0) 1px 0 2px"  }} color="">{articles.title}</Typography>
            <Typography variant="body1" sx={{ width: "90%", fontFamily: ['Plus Jakarta Sans'], fontWeight: 700, color: '#6F7E8C', fontSize: "22px"}} color="initial">{shortContent}</Typography>
            <Link to={`/article/${articles.id}`} style={{ textDecoration: 'none' }}>
              <Button variant="contained" sx={{ marginTop: '20px' }}>En savoir plus</Button>
            </Link>
          </Item>
        </Grid>
        <Grid xs={5}>
          <Item elevation={0} xs={0} sx={{
            backgroundImage: `url(/images/background/${articles.image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            boxShadow: "rgb(0, 0, 0) 1px 0 5px"
          }}>
          </Item>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}
