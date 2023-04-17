import { Button, Typography, Modal } from "@mui/material";
import { Box } from "@mui/system";
import Time from "./Time";
import React, { useState } from "react";
import moment from "moment";
import "moment/dist/locale/fr";
import AppointmentForm from "../DoctorsForm/AppointmentsForm"
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../../actions/appointments";

moment.locale("fr");

export default function DayTime({ slots, reservedSlots }) {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  const handleOpen = (slot) => {
    setSelected(slot);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYesClick = () => {
    const data = {
      available_slot: selected.id,
      doctor: selected.doctor,
      patient: user.id,
    };
    dispatch(addAppointment(data));
    handleClose();
  };

  const handleNoClick = () => {
    handleClose();
  };

  const formatSlotDate = (slotDate) => {
    return moment(slotDate).format("dddd D MMMM");
  };

  const slotsByDay = slots.reduce((slotsByDay, slot) => {
    const slotDay = moment(slot.date).format("dddd D MMMM");
    if (!slotsByDay[slotDay]) {
      slotsByDay[slotDay] = [];
    }
    slotsByDay[slotDay].push(slot);
    return slotsByDay;
  }, {});

  const handleSubmit = (values) => {
    const { slotId } = values;
    console.log("Selected slot ID: ", slotId);
    handleClose();
  };

  return (
    <Box sx={{ color: "white" }}>
      {Object.keys(slotsByDay).map((day) => (
        <Box sx={{ color: "white" }} key={day}>
          <Typography
            component="div"
            variant="h6"
            sx={{
              fontFamily: ["Plus Jakarta Sans"],
              fontWeight: 800,
              marginBottom: 5,
            }}
          >
            - {day} -
          </Typography>
          <ul>
            {slotsByDay[day].map((slot) => (
              <Button
                variant="outlined"
                sx={{
                  maxWidth: "75px",
                  marginX: 1,
                  marginBottom: 3,
                }}
                color={
                  reservedSlots.includes(slot.id) ? "error" : "primary"
                }
                key={slot.id}
                onClick={() => handleOpen(slot)}
              >
                {moment(slot.time, "HH:mm:ss").format("hh:mm")}
              </Button>
            ))}
          </ul>
        </Box>
      ))}
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: "500px",
          borderRadius: 3,
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontFamily: ["Plus Jakarta Sans"],
            fontWeight: 800,
            marginBottom: 2,
          }}
        >
          Rendez-vous pour le{" "}
          {moment(selected?.date).format("dddd D MMMM")} à{" "}
          {moment(selected?.time, "HH:mm:ss").format("HH:mm")}
        </Typography>
        <Typography
          id="modal-description"
          variant="subtitle1"
          sx={{ marginBottom: 2 }}
        >
          Êtes-vous sûr de vouloir prendre ce rendez-vous ?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{ margin: 1 }}
            onClick={handleYesClick}
          >
            Oui
          </Button>
          <Button variant="contained" sx={{ margin: 1 }} onClick={handleNoClick}>
            Non
          </Button>
        </Box>
      </Box>
    </Modal>
    </Box>
  );
}
