Finds jobs by their SCM URL.

  
  

This plugin finds all jobs that use a certain Git or Subversion
repository URL.

**Given** you have a lot of jobs (say 2000) organised in 20 team
masters  
**and** the jobs poll about 30 SVN repositories every minute located on
one SVN server  
**and** you are not allowed or able to install post-commit hooks,  
**then** each job will execute at least 15 WEBDAV commands per poll,
resulting 30,000 HTTP requests per second.

**Most of the status updates return with a "nothing changed" and are
useless**

So instead of hitting the server to death:

-   create a cron timed job running every minute which polls the root of
    the 30 repositories
-   compares the revision to the previous run
-   and only when something changed, calls `svn log`, retrieves SCM
    information from the 20 team masters via this plugin and starts
    polling individually.

## Changelog

### Version 2.5 (Aug 3 2016)

-   Bug fix: NPE if any job isn't an AbstractProject

### Version 2.4 (Sep 27 2013)

-   Enhancement: find jobs also if the search url is shorter than the
    scm url

### Version 2.3 (May 8 2013)

-   Bug fix (Partly identical scm paths lead to false positives.)

### Version 2.2 (Sep 20 2012)

-   Bug fix (Submit button didn't work with WebKit browsers)

### Version 2.1 (Sep 19 2012)

-   First public version of this plugin (versions before were for
    internal use only)
