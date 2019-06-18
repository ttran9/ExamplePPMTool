import axios from "axios";
import * as Constants from "../Constants";

export const addProjectTask = (
  backlogId,
  projectTask,
  history
) => async dispatch => {
  await axios.post(`${Constants.BACKLOG_API_URL}/${backlogId}`, projectTask);
  history.push(`${PROJECTBOARD_URL}/${backlogId}`);
};
