import React from "react";
import { Box, Container, Grid, IconButton, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { spacing } from "@mui/system";

const footerNav = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: 4,
  marginBottom: 4,
}

const footerLink = {
  marginLeft: "1rem",
  marginRight: "1rem",
  marginBottom: "1rem",
}


export default function Footer() {
  return (
    <div style={{ backgroundColor: "white" }}>
    <Container maxWidth="lg" >
      <Box py={6} textAlign="center">
        {/* <Link href="#" color="inherit" underline="none">
          <img src="nereus-assets/img/nereus-light.png" alt="" width="110" />
        </Link> */}
        <Typography variant="h6" color="textPrimary" gutterBottom={false}>MyHealth</Typography>
        <Box component="nav" style={footerNav}>
          <Link href="/cgu" variant="body1" color="textPrimary" style={footerLink}>CGU</Link>
          <Link href="/team" variant="body1" color="textPrimary" style={footerLink}>A propos</Link>
          <Link href="/find/doctors" variant="body1" color="textPrimary" style={footerLink}>Prendre Rendez-Vous</Link>
          <Link href="/FAQ" variant="body1" color="textPrimary" style={footerLink}>FAQ</Link>
        </Box>
        <Box mb={3}>
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Box textAlign="center">
          <Typography color="textSecondary" variant="caption">© 2023 KIT All rights reserved.</Typography>
        </Box>
      </Box>
    </Container>
    </div>
  );
};
