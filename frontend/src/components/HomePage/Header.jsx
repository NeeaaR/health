import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../css/App.css'

const theme = createTheme({
  palette: {
    background: {
      default: "#001E3C"
    }
  }
});


const html = '<span style="color: red">World</span>';


export default function Header(){
    return(
            // <h1>Prenez le contrôle de <span>vos données</span></h1>
            // <img src="public\images\header_image2.jpg" alt="not found" />

            <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '90vh' }}>
              <CssBaseline />
              <Grid item xs={12} sm={8} md={5} elevation={6}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
              <Typography variant="h1" className='typo-header' sx={{ fontSize: 120, fontFamily: ['Plus Jakarta Sans'], fontWeight: 700, color: '#66B2FF'}}>Prenez le contrôle de <span>vos données</span></Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={7}
                sx={{
                  backgroundImage: 'url(images/header_image2.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </Grid>
          </ThemeProvider>
    )
}