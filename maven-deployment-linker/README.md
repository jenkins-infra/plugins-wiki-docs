This plugin will add a summary on the build of the artifacts uploaded to
your maven repository and a builder to download the uploaded artifacts
to other projects.

## Deployment Summery

The deployment summery adds a list of all the deployed maven artifacts
of the job to the status page. You can activate it in the 'Post build
actions' of your job and also restrict the listed artifacts by defining
a regular expression.

## Download linked artifacts

The build step "Get linked maven deployments" allows you to download
linked artifacts of an other project into your jobs workspace.

# Help and Support

For Help and support please use the issue tracker and/or [Jenkins
Users](http://jenkins-ci.org/content/mailing-lists) mailing list.

type

key

summary

Data cannot be retrieved due to an unexpected error.

[View these issues in
Jira](http://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project%20=%20JENKINS%20AND%20status%20in%20%28Open,%20%22In%20Progress%22,%20Reopened%29%20AND%20component%20=%20%27maven-deployment-linker-plugin%27&src=confmacro)

# Change Log

###    V1.5.1 @ 03-15-2013

-   fix [JENKINS-14637](https://issues.jenkins-ci.org/browse/JENKINS-14637)
    support all all permalinks found on target project
-   fix
    [JENKINS-14978](https://issues.jenkins-ci.org/browse/JENKINS-14978)
    expand project name with TokenMacro

###    V1.5 @ 05-11-2012

-   add builder to download artifacts to a workspace from where they
    have been uploaded to ([pull
    \#2](https://github.com/jenkinsci/maven-deployment-linker-plugin/pull/2))

###    V1.4 @ 11-30-2011

-   JENKINS-9114 changes by [Unknown User
    (aheritier)](https://wiki.jenkins.io/display/~aheritier)

###    V1.3 @ 10-20-2010

-   Fixed a small localization issue
-   The latest deployments now display correctly for Maven2 projects
-   On the project page, the latest deployments, and the latest release
    deployments are displayed

###    V1.2 @ 10-16-2010

-   [JENKINS-7814](https://issues.jenkins-ci.org/browse/JENKINS-7814) :
    Several improvements for maven-deployment-linker plugin
    -   i18n (extract to properties, addition of fr locale)
    -   The user can input a regular expression to filter artifacts that
        are displayed
    -   Excludes by default maven-metadata.xml (under maven3, the
        deployment of this file is logged, which wasn't the case under
        maven2)
    -   Displays on the project page the latest Maven deployments

###    V1.1 @ 09-28-2010

-   Fix bug in linking.

###    V1.0 @ 09-27-2010

-   initial release

# Author

Larry Shatzer
