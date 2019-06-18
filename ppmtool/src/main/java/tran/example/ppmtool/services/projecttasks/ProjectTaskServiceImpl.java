package tran.example.ppmtool.services.projecttasks;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tran.example.ppmtool.constants.projecttask.ProjectTaskPriority;
import tran.example.ppmtool.constants.projecttask.ProjectTaskStatus;
import tran.example.ppmtool.domain.Backlog;
import tran.example.ppmtool.domain.Project;
import tran.example.ppmtool.domain.ProjectTask;
import tran.example.ppmtool.exceptions.projects.ProjectNotFoundException;
import tran.example.ppmtool.repositories.BacklogRepository;
import tran.example.ppmtool.repositories.ProjectRepository;
import tran.example.ppmtool.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskServiceImpl implements ProjectTaskService {

    private BacklogRepository backlogRepository;

    private ProjectTaskRepository projectTaskRepository;

    private ProjectRepository projectRepository;

    @Autowired
    public ProjectTaskServiceImpl(BacklogRepository backlogRepository, ProjectTaskRepository projectTaskRepository,
                                  ProjectRepository projectRepository) {
        this.backlogRepository = backlogRepository;
        this.projectTaskRepository = projectTaskRepository;
        this.projectRepository = projectRepository;
    }

    @Override
    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask) {
        try {
        // Exceptions: Project not found
        /*
         {
            ProjectNotFound: "Project Not Found"
         }
         */
            // Project Tasks to be added to a specific project, project != null, and backlog must exist.
            Backlog backlog = backlogRepository.findByProjectIdentifier(projectIdentifier);

            // set the backLog to projectTask.
            projectTask.setBacklog(backlog);

            // we want our project sequence to be like this: IDP1, IDP2, ..., IDP100.
            Integer backlogSequence = backlog.getPtSequence();
            // update the backlog sequence (before we set the projectTask project sequence b/c we start at 0 in the Backlog object).
            backlogSequence++;

            backlog.setPtSequence(backlogSequence);

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
        } catch(Exception ex) {
            throw new ProjectNotFoundException("Project Not found");
        }
    }

    @Override
    public Iterable<ProjectTask> findBacklogById(String backlogId) {

        Project project = projectRepository.findByProjectIdentifier(backlogId);

        if(project == null) {
            throw new ProjectNotFoundException("Project with ID: '" + backlogId + "' does not exist");
        }

        return projectTaskRepository.findByProjectIdentifierOrderByPriority(backlogId);
    }

    @Override
    public ProjectTask findProjectTaskByBackLogIdAndProjectSequence(String backlogId, String projectSequence) {

        // make sure we are searching on the right backlog.
        Backlog backlog = backlogRepository.findByProjectIdentifier(backlogId);
        if(backlog == null) {
            throw new ProjectNotFoundException("Project with ID: '" + backlogId + "' does not exist");
        }

        // make sure that our project task exists.
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(projectSequence);
        if(projectTask == null) {
            throw new ProjectNotFoundException("Project Task '" + projectSequence + "' not found");
        }

        // make sure that the backlog/project id in the path corresponds to the right project.
        if(!projectTask.getProjectIdentifier().equals(backlogId)) {
            throw new ProjectNotFoundException("Project Task '" + projectSequence + "' does not exist in project: '" + backlogId);
        }

        return projectTask;
    }

    @Override
    public ProjectTask updateProjectTaskByProjectSequenceAndBacklogId(ProjectTask updatedProjectTask, String backlogId, String projectSequence) {
        // update project task
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(projectSequence);

//         the below stub is just to eliminate a warning from the compiler stating our findByProjectSequence is redundant.
//        if(projectTask == null) {
//            throw new ProjectNotFoundException("some logic here");
//        }

        projectTask = updatedProjectTask;
        return projectTaskRepository.save(projectTask);
    }

    // find existing project task

    // replace it with updated task

    // save update.
}
