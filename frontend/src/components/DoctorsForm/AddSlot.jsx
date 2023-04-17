import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal  from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { addAvailableSlot } from "../../actions/available";
import { Box, Container } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import { DesktopTimePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: 'white',
    border: "2px solid #000",
    borderRadius: 10,
    boxShadow: 5,
    padding: 12,
  },
}));

const AddSlot = ({user}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [slot, setSlot] = useState({
    date: moment(), // utiliser la valeur par défaut de Moment.js
    time: moment(), // utiliser la valeur par défaut de Moment.js
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // mettre à jour l'état du créneau en utilisant Moment.js pour formater les valeurs de date et d'time
    setSlot({
      ...slot,
      [name]: moment(value, name === "time" ? "HH:mm" : "YYYY-MM-DD"),
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      date: slot.date.format("YYYY-MM-DD"),
      time: slot.time.format("HH:mm"),
      doctor: user.id,
    };
    dispatch(addAvailableSlot(data));
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Ajouter un créneau
      </Button>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Date"
              name="date"
              type="date"
              value={slot.date.format("YYYY-MM-DD")} // utiliser Moment.js pour formater la valeur
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Heure"
              name="time"
              type="time"
              value={slot.time.format("HH:mm")} // utiliser Moment.js pour formater la valeur
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Ajouter
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddSlot;

