import axios from "axios";
import { GET_ERRORS } from "./types";
import * as Constants from "../Constants";

export const createProject = (project, history) => async dispatch => {
  try {
    const response = await axios.post(Constants.CREATE_PROJECT_URL, project);
    // take us back to the dashboard if we succesfully create the project.
    history.push("/");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
