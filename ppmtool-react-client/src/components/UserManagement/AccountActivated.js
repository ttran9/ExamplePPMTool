import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Constants from "../../Constants";

class AccountActivated extends Component {
  componentDidMount() {
    if (this.props.security.validToken) {
      this.props.history.push(`${Constants.DASHBOARD_URL}`);
    }
  }

  render() {
    return (
      <div className="account-activated">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="lead">
                  Before logging in you must activate your account. <br />
                  Please check your e-mail account.
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AccountActivated.propTypes = {
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

export default connect(mapStateToProps)(AccountActivated);
