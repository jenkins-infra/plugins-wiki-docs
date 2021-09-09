Lets one project track the Git revisions that are built for another
project.

  
When building, the TRACKING\_GIT\_BUILD environment variable will
contain the URL of the tracked build.

It is generally useless to use SCM polling if Git tracking is enabled.
Instead, trigger this project from the tracked project.

## Change Log

##### Version 1.0 (February 18, 2014)

-   Initial release
