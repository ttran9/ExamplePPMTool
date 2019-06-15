Video 29

- When we use axios and we get an error then there is a dispatch that occurs and we will use "thunk" to help with dealing with errors.
- An error will be dispatched and after getting an error there is a reducer that comes into play takes action and payload with the errors and update our Redux Store.
- Redux Store:
  - At the center of Redux because it is a "store" that contains the state of our current application.
    - So for example the reducer will put the errors into this "store."
  - Once the errors are in the store we need to connect the AddProject component to the store in order to access the state which will allow us to get "props" which will allow us to get access to the errors.
