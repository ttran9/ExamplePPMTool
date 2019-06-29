import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import * as Constants from "./Constants";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecuredRoutes from "./securityUtils/SecuredRoutes";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_token = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_token
  });

  const currentTime = Date.now() / 1000;
  if (decoded_token.exp < currentTime) {
    // handle logout
    store.dispatch(logout());
    window.location.href = `${Constants.HOME_URL}`;
  } else {
    console.log("token not yet expired..");
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              {
                // Public Routes
              }
              <Route exact path={`${Constants.HOME_URL}`} component={Landing} />
              <Route
                exact
                path={`${Constants.REGISTER_URL}`}
                component={Register}
              />
              <Route exact path={`${Constants.LOGIN_URL}`} component={Login} />
              {
                // Private Routes
              }
              <SecuredRoutes
                exact
                path={`${Constants.DASHBOARD_URL}`}
                component={Dashboard}
              />
              <SecuredRoutes exact path="/addProject" component={AddProject} />
              <SecuredRoutes
                exact
                path="/updateProject/:id"
                component={UpdateProject}
              />
              <SecuredRoutes
                exact
                path="/projectBoard/:id"
                component={ProjectBoard}
              />
              <SecuredRoutes
                exact
                path="/addProjectTask/:id"
                component={AddProjectTask}
              />
              <SecuredRoutes
                exact
                path="/updateProjectTask/:backlogId/:projectTaskId"
                component={UpdateProjectTask}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
