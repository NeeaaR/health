import React from "react";
import { Avatar, Box, Grid, Rating, Typography } from "@mui/material";
import { Container } from "@mui/system";
import moment from "moment";
moment.locale("fr"); 
export default function DoctorHeader({user}) {
  const [value, setValue] = React.useState(2);
  const formattedDate = moment(user.date).format("DD MMMM YYYY");

  return (
    <Container
      sx={{
        paddingTop: "100px",
        color: "white",
        display: "flex",
        '& > legend': { mt: 2 },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg"
            sx={{
              width: 164,
              height: 164,
              position: "relative",
              top: "115px",
              border: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Typography
              component="div"
              variant="h3"
              sx={{
                marginRight: 1,
                fontFamily: ["Plus Jakarta Sans"],
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              {user.first_name}
            </Typography>
            <Typography
              component="div"
              variant="h3"
              sx={{
                fontFamily: ["Plus Jakarta Sans"],
                fontWeight: 800,
                letterSpacing: 5,
              }}
            >
              {user.last_name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Typography
            component="div"
            variant="subtitle2"
            sx={{
              fontFamily: ["Plus Jakarta Sans"],
              fontWeight: 800,
              letterSpacing: 3,
            }}
          >
            Utilisateur depuis le {formattedDate}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
