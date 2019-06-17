Video 43:

- Inside of the reducer for DELETE_PROJECT:
  - We will return the projects but we want the newer projects but without needing to refresh the page.
    - In this video the instructor goes through an approach that he says is more cumbersome than if we use a redux approach.
    - After we dispatch to our reducer after performing a successful delete request we will use the filter which will also remove the project from our state and this saves us from having to refresh which will attempt to grab all the projects.
