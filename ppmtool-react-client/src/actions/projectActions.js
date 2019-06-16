import axios from "axios";
import { GET_ERRORS, GET_PROJECTS } from "./types";
import * as Constants from "../Constants";

export const createProject = (project, history) => async dispatch => {
  try {
    const response = await axios.post(Constants.BASE_URL, project);
    // take us back to the dashboard if we succesfully create the project.
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getProjects = () => async dispatch => {
  const response = await axios.get(Constants.GET_ALL_PROJECTS);
  dispatch({
    type: GET_PROJECTS,
    payload: response.data
  });
};
