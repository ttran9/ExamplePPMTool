package tran.example.ppmtool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tran.example.ppmtool.domain.Project;
import tran.example.ppmtool.repositories.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {

    private ProjectRepository projectRepository;

    @Autowired
    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    /**
     * saves or updates a project.
     * @param project The project to be saved or updated.
     * @return Returns the saved or updated object.
     */
    @Override
    public Project saveOrUpdateProject(Project project) {

        // logic here later.

        return projectRepository.save(project);
    }
}
