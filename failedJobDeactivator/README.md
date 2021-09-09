Allows admins to detect orphaned jobs automatically and deactivate or
delete these jobs.This is a management tool that helps Jenkins admins to
detect orphaned jobs and deletes or disables chosen jobs.

 

## Open issues

type

key

summary

assignee

reporter

priority

status

resolution

created

updated

due

Data cannot be retrieved due to an unexpected error.

[View these issues in
Jira](https://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project=Jenkins%20AND%20component=failedJobDeactivator-plugin%20AND%20status%20in%20%28%22In%20Progress%22,%20Open,%20Reopened%29%20ORDER%20BY%20priority,%20status,%20createdDate%20ASC&src=confmacro)

## Changelog

### Release 2.0 (upcoming)

-   Complete reengineering.
-   Spport for Pipelines and Folders.
-   Huge performance improvement.
-   No more global and job configuration needed.
-   Filter jobs by regex.
-   ...and much more!

### Release 1.2.1 (8 September 2015)

-   ![(error)](docs/images/error.svg)
    Bugfix: CSV export

### Release 1.2 (27 August 2015)

-   ![(tick)](docs/images/check.svg)
    Possibility to change detection rules on start page
    -   Ignore individual deadlines of job config
    -   Also show deactivated jobs
    -   Also show excluded jobs
    -   Reconfigure deadlines

&nbsp;

-   ![(tick)](docs/images/check.svg)
    Export detected jobs (including all information of overview page) to
    CSV.
-   ![(tick)](docs/images/check.svg)
    Detect responsible users (using JobConfigHistory).
-   ![(error)](docs/images/error.svg)
    Fix bug if there are other items than instances of AbstractProject.

### Release 1.1.2 (13 August 2015)

-   ![(error)](docs/images/error.svg)
    Deactivated date of first job config (buggy)

### Release 1.1 (3 August 2015)

-   ![(tick)](docs/images/check.svg)
    In the overview page of detected jobs: Possibility to switch to
    deactivation, to deletion or to ignore of each job retrospectively.
-   When performing first job configuration after plugin installation:
    save timestamp in job config (used in detection of jobs that have
    never been built).

### Release 1.0 (24 July 2015)

-   Initial release

## Possible future features

-   Possibility of adding additional detection rules

## See also

Other plugins powered by 1&1:

-   [Build Environment
    Plugin](http://localhost:8085/display/JENKINS/Build+Environment+Plugin)
-   [Email Ext Recipients Column
    Plugin](http://localhost:8085/display/JENKINS/Email+Ext+Recipients+Column+Plugin)
-   [JobConfigHistory
    Plugin](http://localhost:8085/display/JENKINS/JobConfigHistory+Plugin)
-   [Job Direct Mail
    Plugin](http://localhost:8085/display/JENKINS/Job+Direct+Mail+Plugin)
-   [jobtemplates
    Plugin](http://localhost:8085/display/JENKINS/jobtemplates+Plugin)
-   [JQS Monitoring
    Plugin](http://localhost:8085/display/JENKINS/JQS+Monitoring+Plugin)
-   [JSWidgets
    Plugin](http://localhost:8085/display/JENKINS/JSWidgets+Plugin)
-   [Logfilesizechecker
    Plugin](http://localhost:8085/display/JENKINS/Logfilesizechecker+Plugin)
-   [Periodic Reincarnation
    Plugin](http://localhost:8085/display/JENKINS/Periodic+Reincarnation+Plugin)
-   [Pom2Config
    Plugin](http://localhost:8085/display/JENKINS/Pom2Config+Plugin)
-   [SCM2Job
    Plugin](http://localhost:8085/display/JENKINS/SCM2Job+Plugin)
-   [System Load Average Monitor
    Plugin](http://localhost:8085/display/JENKINS/System+Load+Average+Monitor+Plugin)
-   [Violation Columns
    Plugin](http://localhost:8085/display/JENKINS/Violation+Columns+Plugin)
