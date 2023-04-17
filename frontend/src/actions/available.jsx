import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_AVAILABLESLOT,
    GET_AVAILABLESLOTS,
    ADD_AVAILABLESLOT,
    DELETE_AVAILABLESLOT,
    AVAILABLESLOT_ERROR,
} from "./types";

//get availableslot
export const getSlot = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8000/api/availables/${id}`)

        dispatch({ type: GET_AVAILABLESLOT, payload: res.data });
    }
     catch (err) {
        dispatch({ type: AVAILABLESLOT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
}
};

//get all availableslots
export const getSlots = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8000/api/availables/")

        dispatch({ type: GET_AVAILABLESLOTS, payload: res.data });
    }
     catch (err) {
        dispatch({ type: AVAILABLESLOT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
}
}

//add availableslot
export const addAvailableSlot = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        const res = await axios.post("http://localhost:8000/api/availables/", formData, config);

        dispatch({ type: ADD_AVAILABLESLOT, payload: res.data });

        dispatch(setAlert("Available Slot Added", "success"));
    } catch (err) {
        dispatch({ type: AVAILABLESLOT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
    }
}

//delete availableslot
export const deleteAvailableSlot = id => async dispatch => {
    try {
        await axios.delete(`http://localhost:8000/api/availables/${id}`);

        dispatch({ type: DELETE_AVAILABLESLOT, payload: id });

        dispatch(setAlert("Available Slot Removed", "success"));
    } catch (err) {
        dispatch({ type: AVAILABLESLOT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
    }
}

//Get all availableslots for doctor
export const getAvailableSlots = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8000/api/availables/")

        dispatch({ type: GET_AVAILABLESLOTS, payload: res.data });
    }
     catch (err) {
        dispatch({ type: AVAILABLESLOT_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
}
}
