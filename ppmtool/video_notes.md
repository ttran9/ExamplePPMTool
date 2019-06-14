video 19:

- The solution shown in the video uses the fact that if we pass in the "id" data member and not the projectIdentifier within
the body of our Project object then JPA will know to just override an existing Project.
- It is also pointed out that the createdAt and updatedAt fields are null but when working with React we will not be passing in
null values.
