package tran.example.ppmtool.services.projecttasks;

import org.springframework.stereotype.Service;
import tran.example.ppmtool.domain.ProjectTask;
import tran.example.ppmtool.repositories.BacklogRepository;
import tran.example.ppmtool.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskServiceImpl implements ProjectTaskService {

    private BacklogRepository backlogRepository;

    private ProjectTaskRepository projectTaskRepository;

    public ProjectTaskServiceImpl(BacklogRepository backlogRepository, ProjectTaskRepository projectTaskRepository) {
        this.backlogRepository = backlogRepository;
        this.projectTaskRepository = projectTaskRepository;
    }

    @Override
    public ProjectTask addProjectTask() {

        /*
         * project tasks to be added to a specific project where project != null (project must exist!!) and Backlog must
         * already exist.
         * set the backlog to the project task (set the relationship at the db layer).
         * we want our project sequence to be something such as: IDPR1, IDPR2, not like.. IDPR1, IDPR100.
         * if we delete the project task we would want our sequence to be IDPR1, IDPR2 then we delete IDPR2 then when we
         * add in the next task we want the sequence to be IDPR1, IDPR3 NOT IDPR1, IDPR2.
         * after creating our project task we want to update the backlog sequence.
         * create an initial priority (low, medium, high) when the priority is null and also group the tasks based on
         * priority (high --> low).
         * also create an initial status when status is null
         */
        return null;
    }
}
