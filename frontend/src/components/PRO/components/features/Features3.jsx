import React from 'react';
import { makeStyles } from '@mui/styles';

import { Box, Typography, Container, Grid } from '@mui/material';

import StorageIcon from '@mui/icons-material/Storage';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import PublicIcon from '@mui/icons-material/Public';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  }
}));

export default function Features(props) {
  const classes = useStyles();

  const content = {
    'badge': 'The New Internet',
    'header': 'We\'ve built a decentralized internet',
    'col1-header': 'Accessibility',
    'col1-desc': 'Ever worried that you won\'t be able to access your data in some places? Nevermore. With PiperNet your connection has no borders.',
    'col2-header': 'Secure',
    'col2-desc': 'Have you ever heard about "not putting all of your eggs in one basket"? Well, with PiperNet you can actually put all your eggs in millions of baskets.',
    'col3-header': 'Speed',
    'col3-desc': '"Loading data" will soon be forgotten same way as floppy discs. With PiperNet algorithm, every data could travel faster than it was ever imaginable.',
    'col4-header': 'Decentralized',
    'col4-desc': 'Decentralized design allows data to flow freely and efficiently. Your data is stored in many places at once. Awesome, right?',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={8}>
          <Box mb={8}>
              <Typography color="primary" variant="button" component="h3" align="center" gutterBottom={true}>{content['badge']}</Typography>
              <Typography variant="h4" component="h2" align="center">{content['header']}</Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Box mb={2} display="flex" alignItems="center">
                <StorageIcon color="primary" className={classes.icon} />
                <Typography variant="h5" component="h3">{content['col1-header']}</Typography>
              </Box>
              <Typography variant="body1" component="p">{content['col1-desc']}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box mb={2} display="flex" alignItems="center">
                <VerifiedUserIcon color="primary" className={classes.icon} />
                <Typography variant="h5" component="h3">{content['col2-header']}</Typography>
              </Box>
              <Typography variant="body1" component="p">{content['col2-desc']}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box mb={2} display="flex" alignItems="center">
                <ShutterSpeedIcon color="primary" className={classes.icon} />
                <Typography variant="h5" component="h3">{content['col3-header']}</Typography>
              </Box>
              <Typography variant="body1" component="p">{content['col3-desc']}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box mb={2} display="flex" alignItems="center">
                <PublicIcon color="primary" className={classes.icon} />
                <Typography variant="h5" component="h3">{content['col4-header']}</Typography>
              </Box>
              <Typography variant="body1" component="p">{content['col4-desc']}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}