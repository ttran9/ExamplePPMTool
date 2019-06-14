Video 15:

- the @column annotation is setting a constraint at the database layer.
    - the 500 error we are seeing for duplicating the projectIdentifier occurs when we are trying to persist (insert) into
    the database and NOT when we passing the RequestBody (the project object) through our mapValidationErrorService.
- the custom validator we implemented in video 14 (last video) was ensuring the user entered in the proper data.
- @ControllerAdvice: this provides global control over exception handling.
