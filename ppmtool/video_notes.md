Video 14:

- Since we will be outputting custom errors we will need to refactor and move the logic inside of the createNewProject method
out of the controller because other controllers will need to print out errors.
    - Instead we will put this logic into a service that can be injected into other controllers.
