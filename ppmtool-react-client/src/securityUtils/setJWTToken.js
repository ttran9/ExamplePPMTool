import axios from "axios";
import * as Constants from "../Constants";

const setJWTToken = token => {
  if (token) {
    // have a token present.
    axios.defaults.headers.common[`${Constants.AUTHORIZATION_HEADER}`] = token;
  } else {
    delete axios.defaults.headers.common[`${Constants.AUTHORIZATION_HEADER}`];
  }
};

export default setJWTToken;
