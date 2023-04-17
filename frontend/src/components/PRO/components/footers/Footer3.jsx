import React from 'react';
import { makeStyles } from '@mui/styles';

import { Box, IconButton, Link, Typography } from '@mui/material';
import { Container } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => ({
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing(1)
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    'copy': '© 2020 Pied Piper. All rights reserved.',
    'link1': 'Features',
    'link2': 'Enterprise',
    'link3': 'Support',
    'link4': 'ICO',
    ...props.content
  };

  return (
    <footer>
      <Container maxWidth="lg">
        <Box py={6} textAlign="center">
          <Box component="nav" className={classes.footerNav}>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink}>{content['link1']}</Link>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink}>{content['link2']}</Link>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink}>{content['link3']}</Link>
            <Link href="#" variant="body1" color="textSecondary" className={classes.footerLink}>{content['link4']}</Link>
          </Box>
          <Box mb={3}>
            <IconButton color="textSecondary" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="textSecondary" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="textSecondary" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="textSecondary" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Typography color="textSecondary" component="p" variant="body2" gutterBottom={false} className={classes.copy}>{content['copy']}</Typography>
        </Box>
      </Container>
    </footer>
  );
}