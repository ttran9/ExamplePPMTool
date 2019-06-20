import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  user: {}, // user can be not logged in so this would be empty in that case
  validToken: false // if the user has a valid token.
};

const booleanActionPayload = payload => {
  if (payload) {
    return true;
  } else {
    return false;
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: booleanActionPayload(action.payload),
        user: action.payload // everything we have in the claims.
      };
    default:
      return state;
  }
}
