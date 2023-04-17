import { Card, CircularProgress, Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../Navbar";
import DoctorHeader from "./DoctorHeader";
import Stats from "./Stats";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../actions/profile";
import { getReservedSlotIds } from "../../actions/appointments";
import isLoading from "../Loading";
import AddSlot from "../DoctorsForm/AddSlot";
import DayTime from "./DayTime";
import Grid from "nivo/lib/components/axes/Grid";
import Footer from "../HomePage/Footer";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ContactsIcon from '@mui/icons-material/Contacts';
import ApprovalIcon from '@mui/icons-material/Approval';
import { Icon } from "@mui/material";
import { styled } from "@mui/material/styles";


export default function Doctors() {
  //get id from url
  const { id } = useParams();

  const {
    profile: { profile, loading },
    auth,
    appointment: { appointments },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const { user } = auth;

  const AddDisponibilities = () => {
    if (user.id == id) {
      return <AddSlot user={user} />;
    }
  };

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getReservedSlotIds(id));
  }, [dispatch, id]);

  if (loading || profile === null) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2, color: "white" }}>
          Chargement en cours...
        </Typography>
      </Box>
    );
  }

  const CardStyle = {
    backgroundColor: "#032b53",
    color: "white",
    padding: 2,
    width: 300,
    height: 75,
    borderRadius: 2,
    boxShadow: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    '&:hover': {
      backgroundColor: "#032b53",
      padding: 2,
      width: 300,
      height: 75,
      borderRadius: 2,
      borderColor: "white",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer"
    }
  }

  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: "#032b53", marginBottom: 15 }}>
        <DoctorHeader user={profile.profile} />
      </Box>
      <Container maxWidth="lg" sx={{paddingBottom: 10}}>
      <Stack direction="row" spacing={2} sx={{ marginY: 5}}>
        <Card sx={CardStyle}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "white"}}>
            <ContactsIcon sx={{ fontSize: 40 }} /> {profile.profile.phone_number}
          </Typography>
        </Card>
        <Card sx={CardStyle}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
            <LocalHospitalIcon sx={{ fontSize: 40 }} /> {profile.profile.speciality}
          </Typography>
        </Card>
        <Card sx={CardStyle}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "white" }}>
            <ApprovalIcon sx={{ fontSize: 40 }} /> {profile.profile.address}
          </Typography>
        </Card>
      </Stack>
        {/* <Stats /> */}
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontFamily: ["Plus Jakarta Sans"],
            fontWeight: 800,
            color: "white",
            marginBottom: 5,
          }}
        >
          Mes disponibilités
        </Typography>
        {profile.available_slots === null ||
        profile.available_slots.length === 0 ? (
          <Typography variant="body1" sx={{ color: "white" }}>
            Le docteur n'a pas encore défini de créneau disponible.
          </Typography>
        ) : (
          <DayTime
            slots={profile.available_slots}
            reservedSlots={appointments}
          />
        )}

        {AddDisponibilities()}
      </Container>
      <Footer/>
    </div>
  );
}
