Video 12:

- BindingResult: An interface that invokes the validator on an object (in our case Project) and determines if there are
errors.
- We change our return type in createNewProject from ResponseEntity<Project> to a generic type, ResponseEntity<?>.
