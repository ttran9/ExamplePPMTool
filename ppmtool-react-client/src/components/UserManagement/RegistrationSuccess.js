import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import * as Constants from "../../Constants";
import { Link } from "react-router-dom";

class RegistrationSuccess extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push(`${Constants.DASHBOARD_URL}`);
    }
  }

  render() {
    return (
      <div className="registration-success">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="lead">
                  Congratulations! Your account is now active.
                </p>
                <hr />
                <Link
                  className="btn btn-lg btn-primary"
                  to={`${Constants.LOGIN_URL}`}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RegistrationSuccess.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps)(RegistrationSuccess);
