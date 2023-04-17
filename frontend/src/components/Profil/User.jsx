import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "& input": {
    color: "white",
    backgroundColor: "transparent",
    borderRadius: 5,
    border: "none",
    padding: "10px 14px",
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "#5090D3",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
});

export default function User({ profile }) {
  return (
    <Container sx={{ color: "white" }}>
      <Typography
        component="div"
        variant="p"
        sx={{
          fontFamily: ["Plus Jakarta Sans"],
          fontWeight: 600,
          marginBottom: 5,
        }}
      >
        "Je suis tellement heureux d'avoir utilisé cette plateforme pour trouver le médecin qui me convenait. Les fonctionnalités de recherche étaient très faciles à utiliser et j'ai pu filtrer les résultats pour trouver un professionnel de la santé qui répondait à mes besoins. J'ai également apprécié la transparence de la plateforme en matière de disponibilité des rendez-vous et de la procédure de réservation. Dans l'ensemble, je recommande vivement cette plateforme à quiconque cherche un professionnel de la santé de qualité et efficace."
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          fontFamily: ["Plus Jakarta Sans"],
          fontWeight: 800,
          marginBottom: 5,
        }}
      >
        INFORMATIONS
      </Typography>
      <Box
  component="form"
  sx={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  }}
  noValidate
  autoComplete="off"
>
  <StyledTextField
    label="Nom d'utilisateur"
    variant="outlined"
    defaultValue={profile.username}
  />
  <StyledTextField
    label="Email"
    variant="outlined"
    defaultValue={profile.email}
  />
  <StyledTextField
    label="Prénom"
    variant="outlined"
    defaultValue={profile.first_name}
  />
  <StyledTextField
    label="Nom de famille"
    variant="outlined"
    defaultValue={profile.last_name}
  />
  <StyledTextField
    label="Genre"
    variant="outlined"
    defaultValue={profile.gender}
  />
  <StyledTextField
    label="Âge"
    variant="outlined"
    defaultValue={profile.age}
  />
  <StyledTextField
    label="Numéro de sécurité sociale"
    variant="outlined"
    defaultValue={profile.health_card_number}
  />
  <StyledTextField
    label="Code postal"
    variant="outlined"
    defaultValue={profile.zip_code}
  />
  <StyledTextField
    label="Ville"
    variant="outlined"
    defaultValue={profile.city}
  />
  <StyledTextField
    label="Adresse"
    variant="outlined"
    defaultValue={profile.address}
  />
  <StyledTextField
    label="Numéro de téléphone"
    variant="outlined"
    defaultValue={profile.phone_number}
  />
</Box>

      <Box>
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontFamily: ["Plus Jakarta Sans"],
            fontWeight: 800,
            marginY: 5,
          }}
        >
          MES RENDEZ-VOUS
        </Typography>
      </Box>
    </Container>
  );
}
