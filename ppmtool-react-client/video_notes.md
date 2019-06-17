Video 38:

- Not discussed in the video, the instructor actually changed the getProjectById back to return a status code of 200 but we originally started with status code of 302 which although means found will actually throw an error. I eventually realized this after debugging for a while and believing that I had a typo somewhere so then I decided to start adding then and catch blocks while making the axios get call.
