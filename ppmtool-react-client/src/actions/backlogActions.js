import axios from "axios";
import * as Constants from "../Constants";
import { GET_ERRORS, GET_BACKLOG } from "./types";

export const addProjectTask = (
  backlogId,
  projectTask,
  history
) => async dispatch => {
  try {
    await axios.post(`${Constants.BACKLOG_API_URL}/${backlogId}`, projectTask);
    history.push(`${Constants.PROJECTBOARD_URL}/${backlogId}`);
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

export const getBacklog = backlogId => async dispatch => {
  try {
    const response = await axios.get(
      `${Constants.BACKLOG_API_URL}/${backlogId}`
    );
    dispatch({
      type: GET_BACKLOG,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
