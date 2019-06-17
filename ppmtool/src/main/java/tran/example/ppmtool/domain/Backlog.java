package tran.example.ppmtool.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Backlog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer PTSequence = 0; // the sequence of project tasks within each back log.
    private String projectIdentifier;

    // OneToOne with project
    // FetchType.LAZY doesn't load the relationships unless the relationships are 'requested for'
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="project_id", nullable=false)
    @JsonIgnore // break infinite recursion issue.
    private Project project;

    // OneToMany projecttasks


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPTSequence() {
        return PTSequence;
    }

    public void setPTSequence(Integer PTSequence) {
        this.PTSequence = PTSequence;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
