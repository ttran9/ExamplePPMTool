import axios from "axios";
import * as Constants from "../Constants";
import { GET_ERRORS, SET_CURRENT_USER, REQUEST_SUCCESS } from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async dispatch => {
  try {
    await axios
      .post(`${Constants.REGISTER_ENDPOINT}`, newUser)
      .then(response => {
        // dispatch an action to update the state with the success message.
        dispatch({
          type: REQUEST_SUCCESS,
          payload: response.data.message
        });
        history.push(`${Constants.ACCOUNT_ACTIVATED_URL}`);
      });
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const login = LoginRequest => async dispatch => {
  try {
    // post login endpoint with LoginRequest payload object
    const response = await axios.post(
      `${Constants.LOGIN_ENDPOINT}`,
      LoginRequest
    );
    // extract token from the response.data
    const { token } = response.data;
    // store the token in the localStorage
    localStorage.setItem(`${Constants.JWT_TOKEN}`, token);

    // set our token in the header (Authorization: Bearer [token here])
    setJWTToken(token);

    // decode token on React
    const decoded = jwt_decode(token);

    // dispatch to our securityReducer
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem(`${Constants.JWT_TOKEN}`);
  setJWTToken(false); // delete the Authorization header.
  console.log(
    "deleted stuff!!! from localStorage and the authorization header"
  );
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
};

export const confirmRegistration = (token, history) => async dispatch => {
  try {
    await axios
      .post(`${Constants.CONFIRM_REGISTRATION_ENDPOINT}/${token}`)
      .then(response => {
        dispatch({
          type: REQUEST_SUCCESS,
          payload: response.data.message
        });
        history.push(`${Constants.REQUEST_SUCCESS_URL}`);
      });
  } catch (error) {
    // if there is an error with the token confirmation this is expected to be caught here such as the token being expired or incorrectly entered.
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const requestPasswordChange = (history, username) => async dispatch => {
  try {
    await axios
      .post(`${Constants.CHANGE_PASSWORD_ENDPOINT}/`, username)
      .then(response => {
        dispatch({
          type: REQUEST_SUCCESS,
          payload: response.data.message
        });
        // the idea here is to redirect the user to a page that informs them the password request was successful and to check his/her email with instructions.
        // TODO: I may possibly have to rename the component that was used to display a message indicating that the account was activated.
        history.push(`${Constants.ACCOUNT_ACTIVATED_URL}`);
      });
  } catch (error) {
    // a potential error would be when the user enters an email address that doesn't exist.
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const changePassword = (
  token,
  history,
  passwordContents
) => async dispatch => {
  try {
    // we expect passwordContents to have a password and a confirmPassword key/value pair.
    await axios
      .post(`${Constants.CHANGE_PASSWORD_ENDPOINT}/${token}`, passwordContents)
      .then(response => {
        // dispatch an action to update the state with the success message.
        dispatch({
          type: REQUEST_SUCCESS,
          payload: response.data.message
        });
        // redirect to a page that will display that the password has been changed successfully.
        history.push(`${Constants.REQUEST_SUCCESS_URL}`);
      });
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
