Video 79:

- authenticationEntryPoint:
    - is an interface that provides the implementation for method call "commence."
        - this is called whenever an exception is thrown because a user is trying to access a resource that requires 
        authentication.
            - in our case, whenever we go to Postman and try to create a project we expect the users to already be 
            logged in so we can associate a user and a project.
                - we want the user to have to be logged in when trying to update the project as well.
             
- sessionCreationPolicy:
    - we will hold no state on our server.
    - we will use redux to hold the state for us.
        - redux will allow us to know if we're logged in or not.
