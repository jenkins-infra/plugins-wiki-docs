[Features](https://wiki.jenkins.io/display/JENKINS/Fail+The+Build+Plugin#FailTheBuildPlugin-features)  
[Compatibility](https://wiki.jenkins.io/display/JENKINS/Fail+The+Build+Plugin#FailTheBuildPlugin-compatibility)  
[Install](https://wiki.jenkins.io/display/JENKINS/Fail+The+Build+Plugin#FailTheBuildPlugin-install)  
[Configure](https://wiki.jenkins.io/display/JENKINS/Fail+The+Build+Plugin#FailTheBuildPlugin-configuration)  
[Change
log](https://wiki.jenkins.io/display/JENKINS/Fail+The+Build+Plugin#FailTheBuildPlugin-changelog)

# Features

-   Set or change the status of a build  
    This plugin is provided to help test the behaviour of your Jenkins
    configuration.  
    Use this plugin to test notifiers, publishers, promotions, build
    pipelines ...

You can only make the build result worse than it is at the point the
build step runs!

# Compatibility

This plugin is compatible with any version of **Jenkins** (1.396+)

# Install

Install from the Plugin Manager (Manage Jenkins \> Manage Plugins) under
"Build Tools".

To install manually, download the latest plugin from
<http://mirrors.jenkins-ci.org/plugins/fail-the-build-plugin/> and use
the Upload Plugin option in the Advanced tab of the Plugin Manager.

# Configure

Add the build step, by clicking "Add build step" and selecting "Set the
build result"

![](docs/images/failTheBuild-added.png)

###### Result

Select the status that you want. Options are Success, Unstable, Failed,
Aborted, and Cycle.

Selecting Cycle will cause the result to cycle based on the build
number. Image of Build history with Cycle selected below.

![](docs/images/failTheBuild-cycle.png)

##### Advanced options

Click the Advanced button to enable the results to be set for specific
build numbers.

![](docs/images/failTheBuild-advanced.png)

###### Success, Unstable, Failed, Aborted

For each result, a list of build numbers for which it should be set
instead of the value in the Result drop down.

# Change log

#### 1.0 (18/07/2011)

-   Initial release

Questions, Comments, Bugs and Feature Requests

Please post questions or comments about this plugin to the [Jenkins User
mailing list](http://jenkins-ci.org/content/mailing-lists).  
To report a bug or request an enhancement to this plugin please [create
a ticket in
JIRA](http://issues.jenkins-ci.org/browse/JENKINS/component/15895).
