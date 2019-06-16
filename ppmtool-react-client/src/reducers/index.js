import { combineReducers } from "redux";
import errorReducer from "./errorReducer";

export default combineReducers({
  // returns all the reducers

  errors: errorReducer
});
