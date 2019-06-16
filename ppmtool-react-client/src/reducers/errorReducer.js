import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      // get the errors from our server.
      return action.payload;
    default:
      // just return the state as is (rare case).
      return state;
  }
}
