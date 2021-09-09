Jenkins plugin which allows to transfer settings from a POM to a job
configuration.  

The plugin parses a given POM and gives you afterwards the opportunity
to replace different job settings like project description or the SCM
URL with the found values from the POM.

The plugin shows up in the left bar of a job. There are three
possibilities to give the plugin a POM file to parse, you can either use
an existing POM in the workspace of the current job, get it from an URL
or just upload one.
![](docs/images/pom2config.png){width="849"
height="505"}

**The following functions are supported**

-   Project description
-   [Editable Email Notification (recipient list
    only)](http://localhost:8085/display/JENKINS/Email-ext+plugin)
-   [Git SCM URL](http://localhost:8085/display/JENKINS/Git+Plugin)
-   [SVN SCM
    URL](http://localhost:8085/display/JENKINS/Subversion+Plugin)

## Changelog

### Version 1.2 (Dez 11 2013)

-   First version of this plugin

### Version 1.0 / 1.1 failed release
