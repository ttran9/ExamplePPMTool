import { GET_PROJECTS } from "../actions/types";

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
    default:
      return state;
  }
}
