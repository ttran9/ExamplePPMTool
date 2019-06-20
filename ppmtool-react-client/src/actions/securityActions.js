import axios from "axios";
import * as Constants from "../Constants";
import { GET_ERRORS } from "./types";

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
