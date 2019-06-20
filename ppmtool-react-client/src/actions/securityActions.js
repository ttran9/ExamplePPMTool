import axios from "axios";
import * as Constants from "../Constants";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async dispatch => {
  try {
    await axios.post(`${Constants.REGISTER_ENDPOINT}`, newUser);
    history.push(`${Constants.LOGIN_URL}`);
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
    localStorage.setItem("jwtToken", token);

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
