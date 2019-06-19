package tran.example.ppmtool.services.projects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tran.example.ppmtool.domain.applicationuser.ApplicationUser;
import tran.example.ppmtool.domain.project.Backlog;
import tran.example.ppmtool.domain.project.Project;
import tran.example.ppmtool.exceptions.projects.ProjectIdException;
import tran.example.ppmtool.repositories.applicationusers.ApplicationUserRepository;
import tran.example.ppmtool.repositories.project.BacklogRepository;
import tran.example.ppmtool.repositories.project.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {

    private ProjectRepository projectRepository;
    private BacklogRepository backlogRepository;
    private ApplicationUserRepository applicationUserRepository;

    @Autowired
    public ProjectServiceImpl(ProjectRepository projectRepository, BacklogRepository backlogRepository,
                              ApplicationUserRepository applicationUserRepository) {
        this.projectRepository = projectRepository;
        this.backlogRepository = backlogRepository;
        this.applicationUserRepository = applicationUserRepository;
    }

    /**
     * saves or updates a project.
     * @param project The project to be saved or updated.
     * @param username The name of the user that created the project used to set the relationship between project and application user.
     * @return Returns the saved or updated object.
     */
    @Override
    public Project saveOrUpdateProject(Project project, String username) {
        try {
            ApplicationUser user = applicationUserRepository.findByUsername(username);
            project.setUser(user);
            project.setProjectLeader(user.getUsername());

            String projectIdentifierUpperCase = project.getProjectIdentifier().toUpperCase();
            project.setProjectIdentifier(projectIdentifierUpperCase);

            if(project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(projectIdentifierUpperCase);
            }

            if(project.getId() != null) {
                // since we are only updating the relevant project information info just grab our existing back log.
                Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifierUpperCase);
                project.setBacklog(backlog);
            }

            return projectRepository.save(project);
        } catch(Exception ex) {
            throw new ProjectIdException("Project ID '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
        }
    }

    /**
     * retrieves the project by the projectIdentifier
     * @param projectId The project's projectIdentifier field.
     * @return Returns the project with the specified projectIdentifier.
     */
    @Override
    public Project findProjectByIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if(project == null) {
            throw new ProjectIdException("Project ID '" + projectId + "' doesn't exist");
        }

        return projectRepository.findByProjectIdentifier(projectId.toUpperCase());
    }

    /**
     * A method to retrieve all the objects in our database.
     * @return Returns all the projects.
     */
    @Override
    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }

    /**
     * deletes a project with the specified identifier
     * @param projectId The project's identifier.
     */
    @Override
    public void deleteProjectByIdentifier(String projectId) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if(project == null) {
            throw new ProjectIdException("Cannot Delete Project with ID '" + projectId + "'. This project doesn't exist");
        }

        projectRepository.delete(project);
    }
}
