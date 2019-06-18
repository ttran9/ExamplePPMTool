import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProjectTask from "./ProjectTasks/ProjectTask";
import * as Constants from "../../Constants";

class Backlog extends Component {
  render() {
    const { project_tasks_prop } = this.props;
    const tasks = project_tasks_prop.map(project_task => (
      <ProjectTask key={project_task.id} project_task={project_task} />
    ));

    let todoItems = [];
    let inProgressItems = [];
    let doneItems = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].props.project_task.status === Constants.TO_DO_STATUS) {
        todoItems.push(tasks[i]);
      } else if (
        tasks[i].props.project_task.status === Constants.IN_PROGRESS_STATUS
      ) {
        inProgressItems.push(tasks[i]);
      } else if (tasks[i].props.project_task.status === Constants.DONE_STATUS) {
        doneItems.push(tasks[i]);
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-secondary text-white">
                <h3>TO DO</h3>
              </div>
            </div>
            {todoItems}
            {
              // insert tasks here.
            }
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-primary text-white">
                <h3>In Progress</h3>
              </div>
            </div>
            {inProgressItems}
            {
              // <!-- SAMPLE PROJECT TASK STARTS HERE -->
              // <!-- SAMPLE PROJECT TASK ENDS HERE -->
            }
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-2">
              <div className="card-header bg-success text-white">
                <h3>Done</h3>
              </div>
            </div>
            {doneItems}
            {
              //  <!-- SAMPLE PROJECT TASK STARTS HERE -->
              //  <!-- SAMPLE PROJECT TASK ENDS HERE -->
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Backlog;
