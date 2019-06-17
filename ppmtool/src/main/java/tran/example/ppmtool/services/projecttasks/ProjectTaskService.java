package tran.example.ppmtool.services.projecttasks;

import tran.example.ppmtool.domain.ProjectTask;

public interface ProjectTaskService {

    /**
     * Add a project task to ane xisting Project and Backlog.
     * @return Return a new Project Task.
     */
    ProjectTask addProjectTask();
}
