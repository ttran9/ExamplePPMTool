package tran.example.ppmtool.services.projecttasks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tran.example.ppmtool.constants.projecttask.ProjectTaskPriority;
import tran.example.ppmtool.constants.projecttask.ProjectTaskStatus;
import tran.example.ppmtool.domain.Backlog;
import tran.example.ppmtool.domain.ProjectTask;
import tran.example.ppmtool.repositories.BacklogRepository;
import tran.example.ppmtool.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskServiceImpl implements ProjectTaskService {

    private BacklogRepository backlogRepository;

    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    public ProjectTaskServiceImpl(BacklogRepository backlogRepository, ProjectTaskRepository projectTaskRepository) {
        this.backlogRepository = backlogRepository;
        this.projectTaskRepository = projectTaskRepository;
    }

    @Override
    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {

        // Exceptions: Project not found

        // Project Tasks to be added to a specific project, project != null, and backlog must exist.
        Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);

        // set the backLog to projectTask.
        projectTask.setBacklog(backlog);

        // we want our project sequence to be like this: IDP1, IDP2, ..., IDP100.
        Integer backlogSequence = backlog.getPTSequence();
        // update the backlog sequence (before we set the projectTask project sequence b/c we start at 0 in the Backlog object).
        backlogSequence++;

        backlog.setPTSequence(backlogSequence);

        // Add Sequence to Project Task.
        projectTask.setProjectSequence(projectIdentifier + "-" + backlogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);

        // INITIAL priority when priority null
        if(projectTask.getPriority() == null /* || projectTask.getPriority() == 0 */) {
            // we will need projectTask.getPriority() == 0 to handle our form in a later video.
            projectTask.setPriority(ProjectTaskPriority.LOW.getValue());
        }

        // INITIAL status when status is null
        if(projectTask.getStatus() == null || projectTask.getStatus().equals("")) {
            projectTask.setStatus(ProjectTaskStatus.TO_DO.getStatus());
        }

        return projectTaskRepository.save(projectTask);
    }
}
