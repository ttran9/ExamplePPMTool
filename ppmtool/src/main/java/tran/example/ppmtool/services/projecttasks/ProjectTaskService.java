package tran.example.ppmtool.services.projecttasks;

import tran.example.ppmtool.domain.ProjectTask;

public interface ProjectTaskService {

    /**
     * Add a project task to an existing Project and Backlog.
     * @param projectIdentifier The projectIdentifier to grab the associated Backlog.
     * @param projectTask The projectTask to be added to a backlog identified by the projectIdentifier.
     * @return Return a new Project Task.
     */
    ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask);

    /**
     * Gets a list of Project Tasks associated with a specific Backlog.
     * @param backlog_id The backlog's projectIdentifier.
     * @return Gets a list of Project Tasks ordered by priority.
     */
    Iterable<ProjectTask> findBacklogById(String backlog_id);
}
