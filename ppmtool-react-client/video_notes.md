Video 31

- The only reducer action we're working with would be "get" errors.
- For errorReducer:
  - we will always have a state.
  - in the case of "GET_ERRORS:, " we have errors from our back-end and we just want to return our errors.
    - After returning our errors the payload gets dispatched to our redux store.
- by adding "errors:errorReducer" to the index.js inside of the reducers directory we are bringing the errors to the root reducer.
- for the createProject action:
  - the history parameter allows us to redirect after we submit the form to create a project.
    - this history parameter will be passed to our AddProjectComponent.
      - this history parameter will be one of the objects inside of its params.
- for async dispatch:
  - we will always return a promise
  - since we are returning a promise JavaScript will always wait for the promise to return its result.
- We must use connect to get access to the state.
- Inside of the "onSubmit" function inside of AddProject.js since we rendered the AddProject component with the Router then we have access to the "history" object inside of props.
