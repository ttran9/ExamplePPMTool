Video 83:

- errors.rejectValue("confirmPassword", "Match", "Passwords must match");
    - the first parameter is matching the field in our class and should match what is on the "form".
    - the third parameter is the error that is displayed to the user.
    - the second parameter is an error code (we don't use this here because if we set it to be blank) nothing appears to
    happen for our current use case.
    
- for more reading...
    - go to [here](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/validation/AbstractErrors.html#rejectValue-java.lang.String-java.lang.String-java.lang.String-)
