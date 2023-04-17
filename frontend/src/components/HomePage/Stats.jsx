import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import Icon from '@mui/material/Icon';
import CountUp from 'react-countup';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(20),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '65vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"

}));

export default function Stats() {
  return (
    <Box sx={{ 
        flexGrow: 1,
        backgroundColor: "#001E3C",
        padding: "100px 20vh 100px 20vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)"
        
    }}>
      <Grid container spacing={20} sx={{

      }}>
        <Grid item xs={4}>
          <Item>
            <Typography component="div" sx={{
                fontSize: 75,
                fontWeight: 800,
                // fontFamily: ['Plus Jakarta Sans'],
                color: '#5090D3'
            }}>
              <CountUp start={0} end={100} duration={2}/>%
              </Typography>
            <Typography component="div" sx={{
                fontSize: 25,
                fontWeight: 600,
                fontFamily: ['Plus Jakarta Sans'],
            }}>Nous font confiance</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography component="div" sx={{
                fontSize: 75,
                fontWeight: 800,
                // fontFamily: ['Plus Jakarta Sans'],
                color: '#5090D3'
            }}>250K+</Typography>
            <Typography component="div" sx={{
                fontSize: 25,
                fontWeight: 600,
                fontFamily: ['Plus Jakarta Sans'],
            }}>Comptes crées</Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
        <Item>
            <Typography component="div" sx={{
                fontSize: 75,
                fontWeight: 800,
                // fontFamily: ['Plus Jakarta Sans'],
                color: '#5090D3',
                letterSpacing: 3
            }}>153K+</Typography>
            <Typography component="div" sx={{
                fontSize: 25,
                fontWeight: 600,
                width: "200px",
                fontFamily: ['Plus Jakarta Sans'],
            }}>Médecins nous ont rejoins</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
