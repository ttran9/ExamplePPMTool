import React from "react";
import Backlog from "../Backlog";

export const boardAlgorithm = (errors, project_tasks) => {
  if (project_tasks.length < 1) {
    if (errors.projectNotFound) {
      return (
        <div className="alert alert-danger text-center" role="alert">
          {errors.projectNotFound}
        </div>
      );
    } else if (errors.projectIdentifier) {
      return (
        <div className="alert alert-info text-center" role="alert">
          {errors.projectIdentifier}
        </div>
      );
    } else {
      return (
        <div className="alert alert-info text-center" role="alert">
          No Project Tasks on this board
        </div>
      );
    }
  } else {
    return <Backlog project_tasks_prop={project_tasks} />;
  }
};
