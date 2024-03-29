import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from "./types";
import setAuthToken from "../components/utils/setAuthToken"

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:8000/api/auth");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = ({ username, email, password, first_name, last_name, gender, age, zip, city, address, health_card_number, phone_number }) => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  const body = JSON.stringify({ username, email, password, first_name, last_name, gender, age, zip, city, address, health_card_number, phone_number });

  try {
    const res = await axios.post("http://localhost:8000/api/patient/register/", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.token
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data;

    if (errors["username"]) {
      errors["username"].forEach(msg =>
        dispatch(setAlert(`Name: ${msg}`, "danger"))
      );
    }

    if (errors["email"]) {
      errors["email"].forEach(msg =>
        dispatch(setAlert(`Email: ${msg}`, "danger"))
      );
    }

    if (errors["password"]) {
      errors["password"].forEach(msg =>
        dispatch(setAlert(`Password: ${msg}`, "danger"))
      );
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Register Doctor 
export const register_doctor = ({ username, email, password, first_name, last_name, speciality, gender, age, zip_code, city, address, health_card_number, phone_number }) => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };

  const body = JSON.stringify({ username, email, password, first_name, last_name, speciality, gender, age, zip_code, city, address, health_card_number, phone_number });

  try {
    const res = await axios.post("http://localhost:8000/api/doctor/register/", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.token
    });

    dispatch(loadUser());
  } catch (err) {
    console.log(err)
    const errors = err.response.data;

    if (errors["username"]) {
      errors["username"].forEach(msg =>
        dispatch(setAlert(`Name: ${msg}`, "danger"))
      );
    }

    if (errors["email"]) {
      errors["email"].forEach(msg =>
        dispatch(setAlert(`Email: ${msg}`, "danger"))
      );
    }

    if (errors["password"]) {
      errors["password"].forEach(msg =>
        dispatch(setAlert(`Password: ${msg}`, "danger"))
      );
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("http://localhost:8000/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.token
    });

    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data.error
    console.log(err)

    dispatch(setAlert(error, "danger"));

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
};