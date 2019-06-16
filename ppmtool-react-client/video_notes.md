Video 32

- Remember when we do the createStore we actually pass in the "rootReducer" which is actually passing in the "combineReducers" which is the meeting point for all the reducers and "combineReducers" comes from redux.
- In order to get the errors to show from redux and on to our form we must map the contents of our "state" to the props so we can then display it onto the form.
- Since we have the errors in our state we need a way for our AddProject component to be able to receive these errors.
  - To do this we will use a lifecycle hook, "componentWillReceiveProps."
    - This hook is called when the component may possibly be receiving new props.
