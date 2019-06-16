import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  // returns all the reducers

  errors: errorReducer,
  project: projectReducer
});
