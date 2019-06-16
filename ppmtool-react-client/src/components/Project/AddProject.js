import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from "../../actions/projectActions";

class AddProject extends Component {
  constructor() {
    super();

    // set initial state for input fields.
    this.state = {
      projectName: "",
      projectIdentifier: "",
      description: "",
      start_date: "",
      end_date: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    // create a function to update the state later on.
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      description: this.state.description,
      start_date: this.state.start_date,
      end_date: this.state.end_date
    };

    this.props.createProject(newProject, this.props.history);
  }

  render() {
    return (
      <div>
        {
          // check name attribute input fields
          // create constructor
          // set state
          // set value on input fields
          // create onChange function
          // set onChange on each input field
          // bind on constructor
          // check state change in the react extension
        }

        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Project form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="start_date"
                      value={this.state.start_date}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="end_date"
                      value={this.state.end_date}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// note that "propTypes" is not the same as the import, "PropTypes"
AddProject.propTypes = {
  /*
   * the below is similar to a constraint
   * we are ensuring that the createProject action is required propType for this component to work properly.
   */
  createProject: PropTypes.func.isRequired
};

// first parameter is how we map the state to our props.
export default connect(
  null,
  { createProject }
)(AddProject);
