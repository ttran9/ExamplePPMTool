Video 58:

- We do not need the CascadeType.REFRESH...
    - What the CascadeType.REFRESH does is it retrieves or reloads the managed object from the database.
    - We need to refresh the owning side of the ProjectTask not at the child side.
        - So we need to do CascadeType.REFRESH on the Backlog as well.
        - We also need to do orphanRemoval = true on the owning side.
            - orphanRemoval makes it so that once the child entity is no longer referenced from the parent then
            jpa also gets rid of the child.
- Note for the other owning side, our Project entity/object...
    - When we delete the Project object we want the Backlog to be deleted and then the Project Task(s) associated with it.
    - Without the orphanRemoval we would not be able to delete all of the project tasks because our cascade would not go downstream
    all the way to the Project Task child entities.
        
            
