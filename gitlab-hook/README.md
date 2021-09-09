The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Reflected XSS
    vulnerability](https://jenkins.io/security/advisory/2020-01-15/#SECURITY-1683)
-   [Gitlab API token stored and displayed in plain
    text](https://jenkins.io/security/advisory/2018-05-09/#SECURITY-263)

Enables Gitlab web hooks to be used to trigger SMC polling on Gitlab
projects

# Why?

For [Gitlab](http://gitlabhq.com/) there is an existing solution that
might work for you.  
You can just use the notifyCommit hook on [Git
plugin](https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin) like
this:

``` syntaxhighlighter-pre
http://your-jenkins-server/git/notifyCommit?url=<URL of the Git repository for the Gitlab project>
```

But, with a large number of projects that are mostly polling (no hooks),
the project might actually be built with a great delay (5 to 20
minutes).  
You can find more details about notifyCommit and this issue
[here](http://kohsuke.org/2011/12/01/polling-must-die-triggering-jenkins-builds-from-a-git-hook).

That is where this plugin comes in.  
It gives you the option to use
[build\_now](https://github.com/elvanja/jenkins-gitlab-hook-plugin#build-now-hook) or
[notify\_commit](https://github.com/elvanja/jenkins-gitlab-hook-plugin#notify-commit-hook) hook,
whichever suits your needs better.

# Version history

### Open issues

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
Jira](https://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=status%20in%20%28Open,%22In%20Progress%22,Reopened%29%20AND%20component=gitlab-hook-plugin&tempMax=50&src=confmacro)

### Version 1.4.2 (Apr 2016)

-   Full support recent GitLab 8.x releases
-   Support for GitLab 8.1 commit statuses
-   [JENKINS-33836](https://issues.jenkins-ci.org/browse/JENKINS-33836),
    remove merge request projects even when merged branches triggering
    is disabled
-   [JENKINS-33252](https://issues.jenkins-ci.org/browse/JENKINS-33252),
    skip reporting if gitlab url/token not configured
-   [JENKINS-29317](https://issues.jenkins-ci.org/browse/JENKINS-29317),
    implemented endpoint for triggering a specific jenkins project
-   [JENKINS-30322](https://issues.jenkins-ci.org/browse/JENKINS-30322),
    report on job log about communications through gitlab API
-   [JENKINS-28808](https://issues.jenkins-ci.org/browse/JENKINS-28808),
    fixed *Multiple SCMs* projects
-   Avoid tag building projects to be elected as candidates to
    automatically create projects
-   Improved acceptance tests & documentation

### Version 1.4.1.1 (Jan 2016)

-   [JENKINS-28327](https://issues.jenkins-ci.org/browse/JENKINS-28327),
    uncaptured exception on malformed congiguration file
-   [JENKINS-28452](https://issues.jenkins-ci.org/browse/JENKINS-28452),
    configurable triggering for projects with pre-build merges
-   Fixed parameter serialization for tag builds

### Version 1.4.0 (May 2015)

-   [JENKINS-23992](https://issues.jenkins-ci.org/browse/JENKINS-23992),
    HTML on build reason
-   [JENKINS-25267](https://issues.jenkins-ci.org/browse/JENKINS-25267),
    building merge request objects
-   [JENKINS-27101](https://issues.jenkins-ci.org/browse/JENKINS-27101),
    undefined method isOlderThan on automatic project creation

### Version 1.3.1 (Feb 27 2015)

-   [JENKINS-27101](https://issues.jenkins-ci.org/browse/JENKINS-27101),
    exception happens when creating a project from a template
-   [Issue
    \#56](https://github.com/javiplx/jenkins-gitlab-hook-plugin/issues/56),
    elevated privileges required for automatic project creation

### Version 1.3.0 (Feb 19 2015)

-   Template based automatic project creation
-   Improved branch matching. Mainly allow exact matches for *\*/master*
    and allow branch specifications starting with *refs/*

### Version 1.2.1 (Feb 3 2015)

-   [Issue \#3](https://github.com/jenkinsci/gitlab-hook-plugin/pull/3)
    allowing also choice parameter type for branch name parameter

### Version 1.2.0 (Jan 19 2015)

-   [Issue
    \#44](https://github.com/elvanja/jenkins-gitlab-hook-plugin/pull/44) global
    configuration for automatic project per branch creation
-   [Issue
    \#50](https://github.com/elvanja/jenkins-gitlab-hook-plugin/issues/50) trigger
    the build only for multi configuration project, not it's axis
-   [Issue
    \#31](https://github.com/elvanja/jenkins-gitlab-hook-plugin/pull/31) payload
    data is auto-filled to job parameters
-   [Issue
    \#41](https://github.com/elvanja/jenkins-gitlab-hook-plugin/pull/41) supporting
    refspec matching (if refspec present in job configuration)
-   [Issue
    \#39](https://github.com/elvanja/jenkins-gitlab-hook-plugin/pull/39) multiple
    smc's support
-   [Issue \#42](https://github.com/elvanja/jenkins-gitlab-hook-plugin/pull/42) git
    2 support
-   [Issue
    \#43](https://github.com/elvanja/jenkins-gitlab-hook-plugin/pull/43) better
    error handling, exceptions converted to java RuntimeException
-   [\#JENKINS-24232](https://issues.jenkins-ci.org/browse/JENKINS-24232) fix
    for branch specifier that is not of String type, now just skipping
    such projects instead of raising exception
-   [Issue
    \#45](https://github.com/elvanja/jenkins-gitlab-hook-plugin/pull/45) fix
    for getting branch name from payload, did not work correctly for
    tags
-   fix for invalid or empty payload, returns the actual payload sent
    and a more meaningful description
-   catching invalid route, displaying known routes and link to wiki
-   improved logging for request details, payload, matching projects
-   displaying stack trace on exception, nicely formatted for api
    response or in log

### Version 1.1.0 (Jul 13 2014)

-   [Issue
    \#30](https://github.com/elvanja/jenkins-gitlab-hook-plugin/issues/30) supporting
    crumb exclusion
-   [Issue
    \#26](https://github.com/elvanja/jenkins-gitlab-hook-plugin/issues/26) automatic
    detection and filling of parameters from payload
-   RSpec 3.0 compliance
