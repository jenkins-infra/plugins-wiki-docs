Lets one project track the Subversion revisions that are checked out for
another project.

  
More than one module may be used, and the revision tracking will happen
for any URL in this project that exactly matches the tracked project.
For all other modules, the latest revision will be used.

When building, the TRACKING\_SVN\_BUILD environment variable will
contain the URL of the tracked build.

It is generally useless to use SCM polling if SVN tracking is enabled.
Instead, trigger this project from the tracked project.

## Change Log

##### Version 1.1 (Jan 3, 2011)

-   Fixed env var
-   Link to tracked project on main page
-   Add option to ignore certain URLs from tracking

##### Version 1.0 (Nov 28, 2009)

-   Initial release
