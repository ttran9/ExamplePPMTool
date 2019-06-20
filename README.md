# Personal Management Tool
- I'm creating this repository to follow along with [this course](https://www.udemy.com/full-stack-project-spring-boot-20-react-redux)
using React and Spring Boot. 


# Directory Structure
- The directory "ppmtool" will house the back-end code (i.e the API and Java based code).
- The directory "ppmtooldesign" is there and houses the templates that we used to build our components.

# Video notes
- If the video_notes.md file is empty for a commit then that means for the video I did not upload any notes for it.

# Naming convention
- As of video 80 I decided to make another package for the ApplicationUser called "applicationuser," I'm not sure if this
is a proper "good practice" but since I put the Project (earlier contents of the course) into its own sub-directory I felt
that it would make more sense to put the ApplicationUser object, repository, and services into their own relative subpackages.
    - I decided to do a lot of refactoring of packages on this branch (sec6/video80).
    
# Other Notes
- When setting up the JWT Token generation we are using a secret key that will be pushed to the repo. After I complete
this Udemy course I will go back and look into using Spring Vault or perhaps look into private and public key JWT implementation
    - I realize the initial upload is insecure and that I also have this same issue when uploading the database credentials
    although when I push to Heroku I plan to use environment variables for that.    
    
# Progress
- At this point/commit the master branch has changes up to the end of section 6.
