package tran.example.ppmtool.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import tran.example.ppmtool.domain.ProjectTask;

import java.util.List;

@Repository
public interface ProjectTaskRepository extends CrudRepository<ProjectTask, Long> {

    List<ProjectTask> findByProjectIdentifierOrderByPriority(String projectIdentifier);
}
