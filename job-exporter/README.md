Adds a build step that exports runtime parameters into a properties file
(e.g who triggered the build, what is her email address...). This
information can be read by other build steps.

#  job-exporter plugin

## Enabling

To use it, edit the configuration of a particular job, go to "Build" and
click "Add build step", in the list select "Export Job runtime
parameters", this will create the files at the point in the build where
this step is executed.

## Details

This plugin exports Jenkins (runtime) job parameters into a
".properties" file. So other build steps (e.g. ant scripts) can read
those parameters and work with them. For example: send some information
via email to the user who triggered a job.

The property file is named "hudsonBuild.properties" and will be created
in the project workspace. This file contains the following informations:

| Property                 | Meaning                                                                                                                        |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| build.jobName            | Name of running job.                                                                                                           |
| build.id                 | Build ID.                                                                                                                      |
| build.number             | Number of running job.                                                                                                         |
| build.host               | Job runs on this host.                                                                                                         |
| build.slave              | Job runs on this slave.                                                                                                        |
| build.result             | Job result til this build step.                                                                                                |
| build.started            | Job started at this time.                                                                                                      |
| build.elapsedTime        | Milliseconds the job is already running.                                                                                       |
| build.duration           | Human readable elapsed time.                                                                                                   |
| build.executor           | Executor number.                                                                                                               |
| build.cvsBranch          | CVS branch, if configured.                                                                                                     |
| build.svnRevision        | SVN revision, if configured.                                                                                                   |
| build.gitBranch          | GIT branch, if configured.                                                                                                     |
| build.user.id            | ID of user that triggered this job. Has value of "null" for anonymous user. Only filled if the build was triggered by an user. |
| build.user.name          | User that triggered this job. Only filled if the build was triggered by an user.                                               |
| build.user.fullName      | Full name of user that triggered this job. Mostly identical with value of "build.user.name" (if ID is not null).               |
| build.user.emailAddress  | Email address of user that triggered this job. If no user with email address was found, the admin email address stands here.   |
| build.upstream.number    | Number of upstream job that triggered this job. Only filled if the build was triggered by an upstream project.                 |
| build.upstream.project   | Upstream project that triggered this job.                                                                                      |
| build.remote.host        | Remote host that triggered this job. Only filled if the build was triggered by a remote host.                                  |
| build.remote.note        | Host note for remotely triggered job.                                                                                          |
| build.admin.emailAddress | This is the current administrator email address.                                                                               |
| build.summary            | Build summary like "Executor \#3 for master : executing MyJob \#28"                                                            |
| build.hudson.version     | Running Jenkins version.                                                                                                       |

#  Version History

### Version 0.4 (27 Jan 2012)

-   Now working with current Jenkins version again.
-   Some more properties are exported.

### Version 0.3.1 (22 Mar 2011)

-   Rerelease 0.3 to properly set required core version.

### Version 0.3 (31 Jan 2011)

-   This is just a bugfix release that should work as described before.

### Version 0.2 (29 Jan 2011)

-   User triggered build now has correct user email address again
-   Upstream and remote build causes also provide some informations

### Version 0.1 (01 Dec 2009)

-   Initial release
