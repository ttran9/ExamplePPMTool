import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT, DELETE_PROJECT } from "./types";
import * as Constants from "../Constants";

export const createProject = (project, history) => async dispatch => {
  try {
    await axios.post(`${Constants.PROJECT_API_URL}`, project);
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
  const response = await axios.get(`${Constants.PROJECT_API_URL}/all`);
  dispatch({
    type: GET_PROJECTS,
    payload: response.data
  });
};

// if we get any errors we will redirect to our dashboard so we need the history for this.
export const getProject = (id, history) => async dispatch => {
  try {
    const response = await axios.get(`${Constants.PROJECT_API_URL}/${id}`);
    dispatch({
      type: GET_PROJECT,
      payload: response.data
    });
  } catch (error) {
    history.push(Constants.DASHBOARD_URL);
  }
};

export const deleteProject = id => async dispatch => {
  if (
    window.confirm(
      "Are you sure? This will delete the project and all the data related to it"
    )
  ) {
    await axios.delete(`${Constants.PROJECT_API_URL}/${id}`);
    dispatch({
      type: DELETE_PROJECT,
      payload: id
    });
  }
};
