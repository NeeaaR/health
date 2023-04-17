import moment from "moment";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function UserAvailability({ appointments }) {
  console.log(appointments);
  return (
    <Container sx={{ color: "white", marginY: 5 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {appointments.map((appointment, index) => (
          <Card
            key={index}
            sx={{
              width: "250px",
              margin: "1rem",
              backgroundColor: "#032b53",
              color: "white",
              border: "1px solid #032b53",
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.4)",
              "&:hover": {
                boxShadow: "10px 4px 16px 0 rgba(0, 0, 0, 0.05)",
                borderColor: "white",
              },
            }}
          >
            <CardMedia>
              <img
                src={`/images/${appointment.doctor.picture}`}
                alt={appointment.doctor.picture}
              />
            </CardMedia>
            <CardContent sx={{ padding: 2 }}>
              <Box sx={{ width: "100%" }}>
                <Typography
                  sx={{
                    fontFamily: ["Plus Jakarta Sans"],
                    fontWeight: 600,
                    color: "white",
                  }}
                  variant="p"
                  color="textSecondary"
                >
                  {appointment.doctor.first_name} {appointment.doctor.last_name} -{" "}
                  {appointment.doctor.speciality}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
                <Button
                  sx={{ textAlign: "center", alignItems: "center" }}
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  {appointment.available_slot.time}
                </Button>
              </Box>
              <CardActions>
                <Link to={`/profil/doctor/${appointment.doctor.id}`} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{ textAlign: "center", justifyContent: "center", color: "white" }}
                    size="large"
                    color="primary"
                  >
                    Accéder au profil du médecin
                  </Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
