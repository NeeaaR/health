import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_APPOINTMENT,
    GET_APPOINTMENTS,
    APPOINTMENT_ERROR,
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    GET_RESERVEDSLOTSID
} from "./types";


//get appointment
export const getAppointment = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8000/api/appointments/${id}`)

        dispatch({ type: GET_APPOINTMENT, payload: res.data });
    }
     catch (err) {
        dispatch({ type: APPOINTMENT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
}
};

//get all appointments
export const getAppointments = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8000/api/appointments/")

        dispatch({ type: GET_APPOINTMENTS, payload: res.data });
    }
     catch (err) {
        dispatch({ type: APPOINTMENT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
}
}

//add appointment
export const addAppointment = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const res = await axios.post("http://localhost:8000/api/appointments/", formData, config);

        dispatch({ type: ADD_APPOINTMENT, payload: res.data });

        dispatch(setAlert("Appointment Added", "success"));
    } catch (err) {
        console.log(err)
        dispatch({ type: APPOINTMENT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
    }
}    

//delete appointment
export const deleteAppointment = id => async dispatch => {
    try {
        await axios.delete(`http://localhost:8000/api/appointments/${id}`);

        dispatch({ type: DELETE_APPOINTMENT, payload: id });

        dispatch(setAlert("Appointment Removed", "success"));
    } catch (err) {
        dispatch({ type: APPOINTMENT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
    }
}


//reservedslotIds
export const getReservedSlotIds = id => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8000/api/doctors/${id}/reserved-slots/`)

        dispatch({ type: GET_RESERVEDSLOTSID, payload: res.data });
    }
     catch (err) {
        dispatch({ type: RESERVEDSLOT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
}
}