Video 74:

- While doing the update I made a typo that was leading to an error that took me a while to figure out..
  - The error was.. "index.js:1375 Warning: Failed prop type: Invalid prop `errors` of type `string` supplied to `UpdateProjectTask`, expected `object`."
    - The fix is below.
  - [event.target.name]: event.target.value
    - instead I had [event.target.name]: [event.target.value]
    - I had to do the former and not the latter.
