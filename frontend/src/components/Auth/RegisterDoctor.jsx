import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Links from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register, register_doctor } from "../../actions/auth";
import { Link, Navigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Links color="inherit" href="https://mui.com/">
        MyHealth
      </Links>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    background: {
      // default: "#001E3C"
    },
  },
});

const RegisterDoctor = () => {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    speciality: "",
    gender: "",
    age: "",
    zip_code: "",
    city: "",
    address: "",
    health_card_number: "",
    phone_number: "",
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const {
    username,
    password,
    email,
    first_name,
    last_name,
    speciality,
    gender,
    age,
    zip_code,
    city,
    address,
    health_card_number,
    phone_number,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== formData.password2) {
      dispatch(setAlert("Passwords do not match", "danger"));
    } else {
      dispatch(
        register_doctor({
          username,
          email,
          password,
          first_name,
          last_name,
          speciality,
          gender,
          age,
          health_card_number,
          zip_code,
          city,
          address,
          phone_number,
        })
      );
    }
  };

  if (isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" bgcolor="#001E3C">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inscription docteur
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="firstName"
                  label="Prenom"
                  onChange={onChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Nom de famille"
                  name="last_name"
                  onChange={onChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Nom d'utilisateur"
                  name="username"
                  onChange={onChange}
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresse mail"
                  name="email"
                  onChange={onChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  onChange={onChange}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Mot de passe de confirmation"
                  type="password"
                  id="password2"
                  onChange={onChange}
                  autoComplete="new-password2"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="speciality"
                  label="Spécialité"
                  type="text"
                  id="speciality"
                  onChange={onChange}
                  autoComplete="speciality"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="gender"
                  name="gender"
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  onChange={onChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  onChange={onChange}
                  autoComplete="age"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="zip"
                  label="Code postal"
                  name="zip_code"
                  onChange={onChange}
                  autoComplete="zip_code"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="Ville"
                  name="city"
                  onChange={onChange}
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Adresse"
                  name="address"
                  onChange={onChange}
                  autoComplete="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="health_card_number"
                  label="Numéro de Carte Vitale"
                  id="health_card_number"
                  onChange={onChange}
                  maxLength="15"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone_number"
                  label="Numéro de téléphone"
                  id="phone_number"
                  onChange={onChange}
                  autoComplete="phone_number"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Je souhaite recevoir des promotions marketing et des mises à jour par e-mail."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              enregistrer
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Links href="/login" variant="body2">
                  Vous avez déjà un compte? Connecte-toi
                </Links>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default RegisterDoctor;
