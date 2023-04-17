import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_DOCTORS,
    GET_DOCTOR,
    DOCTOR_ERROR,
} from "./types";

//get doctor
export const getDoctor = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8000/api/doctors/${id}`)

        dispatch({ type: GET_DOCTOR, payload: res.data });
    }
     catch (err) {
        dispatch({ type: DOCTOR_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
}
};

//get all doctors
export const getDoctors = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8000/api/doctors/")

        dispatch({ type: GET_DOCTORS, payload: res.data });
    }
     catch (err) {
        dispatch({ type: DOCTOR_ERROR, payload: { msg: err.response.statusText, status: err.response.status } }); 
}
}