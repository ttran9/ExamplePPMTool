package tran.example.ppmtool.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import tran.example.ppmtool.domain.Project;
import tran.example.ppmtool.services.ProjectService;
import tran.example.ppmtool.services.validations.MapValidationErrorService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    private ProjectService projectService;
    private MapValidationErrorService mapValidationErrorService;

    @Autowired
    public ProjectController(ProjectService projectService, MapValidationErrorService mapValidationErrorService) {
        this.projectService = projectService;
        this.mapValidationErrorService = mapValidationErrorService;
    }

    @PostMapping
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult bindingResult) {
        // we should return a generic type so we can return a ResponseEntity with more than just Project.

        ResponseEntity<?> errorMap = mapValidationErrorService.outputCustomError(bindingResult);
        if (errorMap != null) return errorMap;

        Project project1 = this.projectService.saveOrUpdateProject(project);
        return new ResponseEntity<>(project1, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectByProjectIdentifier(@PathVariable String projectId) {

        Project project = this.projectService.findProjectByIdentifier(projectId);

        return new ResponseEntity<>(project, HttpStatus.FOUND);
    }
}
