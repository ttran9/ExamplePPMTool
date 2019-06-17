import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT } from "./types";
import * as Constants from "../Constants";

export const createProject = (project, history) => async dispatch => {
  try {
    const response = await axios.post(Constants.BASE_URL, project);
    // take us back to the dashboard if we succesfully create the project.
    history.push(Constants.DASHBOARD_URL);
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

export const getProjects = () => async dispatch => {
  const response = await axios.get(Constants.GET_ALL_PROJECTS);
  dispatch({
    type: GET_PROJECTS,
    payload: response.data
  });
};

// if we get any errors we will redirect to our dashboard so we need the history for this.
export const getProject = (id, history) => async dispatch => {
  try {
    const response = await axios.get(`${Constants.GET_PROJECT}${id}`);
    dispatch({
      type: GET_PROJECT,
      payload: response.data
    });
  } catch (error) {
    history.push(Constants.DASHBOARD_URL);
  }
};
