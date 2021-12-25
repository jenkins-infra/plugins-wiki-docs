[Features](https://wiki.jenkins.io/display/JENKINS/Build+Keeper+Plugin#BuildKeeperPlugin-features)  
[Compatibility](https://wiki.jenkins.io/display/JENKINS/Build+Keeper+Plugin#BuildKeeperPlugin-compatibility)  
[Install](https://wiki.jenkins.io/display/JENKINS/Build+Keeper+Plugin#BuildKeeperPlugin-install)  
[Change
log](https://wiki.jenkins.io/display/JENKINS/Build+Keeper+Plugin#BuildKeeperPlugin-changelog)

# Features

-   Automatically mark builds as "keep forever" to prevent them from
    being removed when using "discard old builds"
-   Use the Policy extension point to define your own policies for
    selecting builds to keep

# Compatibility

This plugin is compatible with Jenkins 1.408+

# Install

This plugin can be installed from the Plugin Manager (Manage Jenkins \>
Manage Plugins) under "Build Wrappers".

To install manually, download the latest plugin from
<http://mirrors.jenkins-ci.org/plugins/build-keeper-plugin/> and use the
Upload Plugin option in the Advanced tab of the Plugin Manager.

# Change log

#### 1.3 (16/04/2012)

-   Add a policy that evaluates [Run
    Conditions](https://wiki.jenkins.io/display/JENKINS/Run+Condition+Plugin)
    and keeps the build if the build step would have run
-   Now requires Jenkins 1.408 (from 1.396)

#### 1.2 (11/01/2012)

-   Add a policy to keep the first failed build in a run of consecutive
    failed builds

#### 1.1 (19/07/2011)

-   Add "Keep the first successful build every x days" to keep at least
    one build every so many days

#### 1.0 (18/07/2011)

-   Initial release

Questions, Comments, Bugs and Feature Requests

Please post questions or comments about this plugin to the [Jenkins User
mailing list](http://jenkins-ci.org/content/mailing-lists).  
To report a bug or request an enhancement to this plugin please [create
a ticket in
JIRA](http://issues.jenkins-ci.org/browse/JENKINS/component/15894).
