package tran.example.ppmtool.services;

import tran.example.ppmtool.domain.Project;

public interface ProjectService {

    /**
     * saves or updates a project.
     * @param project The project to be saved or updated.
     * @return Returns the saved or updated object.
     */
    Project saveOrUpdateProject(Project project);
}
