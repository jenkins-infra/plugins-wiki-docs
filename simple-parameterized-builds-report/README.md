This Jenkins plugin makes it easy to visualize the various builds for a
parameterized project that were run using the same set of parameters.

Allows one to visualize the parameterized builds as:

![](docs/images/screenshot_72.png)

## Usage

Once installed, a new link "Parameterized Builds Report" should show up
in the sidebar for all parameterized jobs. Following that link will
display a table where (at max, latest 10) builds for a given parameter
set are displayed, grouped together based on the parameters used to
invoke the builds.

Users can also configure the parameters displayed in the list. Passwords
are never displayed in the report, but more passwords can be filtered by
setting either the inclusions or exclusions list. Configure a job to
enable "Customize Simple ParameterizedBuild Report" option and set a
comma separated list of parameters for inclusion or exclusion.

Only the builds that match the parameter set used in the latest build
are considered for inclusion in the table.

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
Jira](https://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project=Jenkins%20AND%20component=simple-parameterized-builds-report-plugin%20AND%20status%20in%20%28%22In%20Progress%22,%20Open,%20Reopened%29%20ORDER%20BY%20priority,%20status,%20createdDate%20ASC&src=confmacro)

## Release Notes

### 1.5 (5/8/2016)

-   Fixed:
    [JENKINS-34525](https://wiki.jenkins.io/display/JENKINS/Simple+Parameterized+Builds+Report+plugin#)
    Work around Groovy bug in Jenkins 2 (jglick)
-   Added: Support for Matrix Jobs (JeremyMarshall)

### 1.4 (10/5/2014)

-   Fixed: JENKINS-24928 - Spelling mistake
-   Fixed: JENKINS-24927 - No table background colors

### 1.3 (7/20/2014)

-   Fixed: Fix possible NPE reported in JENKINS-23841

### 1.2 (6/28/2014)

-   Added: Configuration options for report
-   Fixed: JENKINS-23604 - NPE when all builds are not parameterized

### 1.1 (08/17/2013)

-   Fixed: JENKINS-19085 - Mask password properties
-   Fixed: JENKINS-18565 - Only show build parameters and not all the
    user defined build variables
-   Fixed: Only display completed builds in the table

### 1.0 (01/01/2013)

-   Initial release
