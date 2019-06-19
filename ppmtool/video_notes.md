Video 86:

- Inside of our filter vs in the controller when we are creating our authentication object..
    - In the controller we're just making sure we have the right user (the proper credentials) and then we assign that
    user a token.
    - In the filter, the user has a token and then we just need to ensure the token is valid and then set our security
    context.
