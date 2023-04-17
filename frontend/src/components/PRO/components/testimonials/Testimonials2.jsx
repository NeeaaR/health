import React from 'react';
import { makeStyles } from '@mui/styles';

import { Box, Typography, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 48,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    }
  }
}));

export default function Testimonials(props) {
  const classes = useStyles();

  const content = {
    'header': 'Thousands of happy companies',
    'logo1': 'mui-assets/img/logos/gitscape.svg',
    'logo2': 'mui-assets/img/logos/plucky.svg',
    'logo3': 'mui-assets/img/logos/realweb.svg',
    'logo4': 'mui-assets/img/logos/k-hole.svg',
    'logo5': 'mui-assets/img/logos/tholio.svg',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={6}>
            <Typography variant="h5" component="h3" align="center">{content['header']}</Typography>
        </Box>
        <Box pt={4} pb={2} display="flex" flexWrap="wrap" justifyContent="center">
          <img src={content['logo1']} alt="" className={classes.logo} />
          <img src={content['logo2']} alt="" className={classes.logo} />
          <img src={content['logo3']} alt="" className={classes.logo} />
          <img src={content['logo4']} alt="" className={classes.logo} />
          <img src={content['logo5']} alt="" className={classes.logo} />
        </Box>
      </Container>
    </section>
  );
}