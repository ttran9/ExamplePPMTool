package tran.example.ppmtool.services.projects;

import tran.example.ppmtool.domain.project.Project;

public interface ProjectService {

    /**
     * saves or updates a project.
     * @param project The project to be saved or updated.
     * @param username The name of the user that created the project used to set the relationship between project and application user.
     * @return Returns the saved or updated object.
     */
    Project saveOrUpdateProject(Project project, String username);

    /**
     * retrieves the project by the projectIdentifier
     * @param projectId The project's projectIdentifier field.
     * @return Returns the project with the specified projectIdentifier.
     */
    Project findProjectByIdentifier(String projectId);

    /**
     * A method to retrieve all the objects in our database.
     * @return Returns all the projects.
     */
    Iterable<Project> findAllProjects();

    /**
     * deletes a project with the specified identifier
     * @param projectId The project's identifier.
     */
    void deleteProjectByIdentifier(String projectId);
}
