import axios from "axios";
import { setAlert } from "../actions/alert";

import {
  GET_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  GITHUB_ERROR,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED
} from "./types";

// Get Current User Profile
export const getCurrentProfile = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("http://localhost:8000/api/profile/me");
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get All Profiles
export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8000/api/users/");
    dispatch({ type: GET_PROFILES, payload: res.data });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8000/api/users/${userId}/`);
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    console.log(err)
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err, status: err },
    });
  }
};

// Get User by ID
export const getUserById = userId => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8000/api/profile/${userId}/`);
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    console.log(err)
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err, status: err },
    });
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify(formData);

    const res = await axios.post("/api/profile", body, config);

    dispatch({ type: GET_PROFILE, payload: res.data });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data;

    if (errors["status"]) {
      errors["status"].forEach(msg =>
        dispatch(setAlert(`Status: ${msg}`, "danger"))
      );
    }

    if (errors["skills"]) {
      errors["skills"].forEach(msg =>
        dispatch(setAlert(`Skills: ${msg}`, "danger"))
      );
    }

    if (errors["bio"]) {
      errors["bio"].forEach(msg => dispatch(setAlert(`Bio: ${msg}`, "danger")));
    }

    if (errors["website"]) {
      errors["website"].forEach(msg =>
        dispatch(setAlert(`Website: ${msg}`, "danger"))
      );
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Account and profile
export const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    try {
      await axios.delete("/api/profile");

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert("Your account has been deleted permanently"));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};