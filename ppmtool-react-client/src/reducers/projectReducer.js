import { GET_PROJECTS, GET_PROJECT } from "../actions/types";

const initialState = {
  projects: [], // array of objects
  project: {} // single project item.
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    default:
      return state;
  }
}
