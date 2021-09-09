Replaces any spaces in a job name when it is created on a Jenkins agent.
This allows Job names to have spaces without spaces being used in the
workspace folder.

## Overview

Workspace Whitespace Replacement is a simple Jenkins plug-in that allows
job to be created with spaces in their name, but when the job is carried
out on a slave node, the path used will have all spaces replaced by an
underscore.

Out of the box, Jenkins offers a couple of ways to limit or restrict
characters such as spaces in workspace paths that are not ideal in a
number of situations

-   Restrict Project Naming - inconvenient because it removes the
    ability to have spaces in job names, making them harder to read,
    especially if you have a large number of them
-   Custom Workspaces - inconvenient because the requirement for
    uniqueness is on the user, and it requires much more thought when
    creating projects if you have a high number of them

The Whitespace Replacement plug-in still allows the Job name to be the
unique identifer for the project, keeps them easy to read and requires
no additional work to create job paths that will work with scripts or
processes that cannot handle spaces in path names.

## Set Up and Install

To use WS WS Replacement, simply install the plug-in and at that point
forward all workspace folders will be created with spaces replaced with
underscores.  No additional set up or configuration is required.

## Additional Notes

-   Assumes a master/slave structure and only modifies workspace folders
    on slave machines
-   Replaces spaces with in workspace folders only and cannot replace
    spaces in a slaces 'Remote FS Root'
-   Works seamlessly with [Cloudbees Folder
    Plug-in](http://localhost:8085/display/JENKINS/CloudBees+Folders+Plugin)

## Change Log

#### 1.0.1 (17th June 2016)

-   Initial release
