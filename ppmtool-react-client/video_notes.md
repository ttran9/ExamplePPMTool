Video 97:

- In the securityActions, in the login action we are putting the token into our Authorization header
- We are also calling the setJWTToken method again in the App.js because whenever we refresh our page, or when we make another API call our token is going away/getting destroyed.
  - However, App.js is the 'meeting place' for all of our components so that is why we set it there.
    - So, any time we load anything through App.js then we will grab the token from our localStorage and check if it is present. If it is present we will set it so we don't lose our 'state' when we have a valid user.
