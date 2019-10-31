import {
  GET_ERRORS,
  SET_CURRENT_USER,
  CLOSE_SIGNUP_MODAL2,
  SHOW_LOGIN_MODAL
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import axios from "axios";

// Register a user
export const registerUser = (userData, next) => dispatch => {
  axios
    .post("/api/user/register", userData)
    .then(res => {
      //history.push("/login")
      if (next === "/login") {
        dispatch({
          type: CLOSE_SIGNUP_MODAL2
        });
        dispatch({
          type: SHOW_LOGIN_MODAL
        });
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/user/login", userData)
    .then(res => {
      const { token } = res.data;
      // set token to ls
      localStorage.setItem("jwToken", token);
      setAuthToken(token);
      // decode token
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  // Remove token from localstorage
  localStorage.removeItem("jwToken");

  // Remove auth header for future requests
  setAuthToken(false);

  // set user to empty object
  dispatch(setCurrentUser({}));
};
