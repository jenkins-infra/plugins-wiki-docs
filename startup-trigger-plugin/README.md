The Startup Trigger plugin allows you to trigger a build when Jenkins
nodes (master/slave) start.See GitHub for more usage info:
<https://github.com/jenkinsci/startup-trigger-plugin>

# Version History

Version 2.9.3 (April 13, 2018)

-   Fix
    [JENKINS-50681](https://issues.jenkins-ci.org/browse/JENKINS-50681) -
    Startup Trigger label list doesn't work with master
-   Fix
    [JENKINS-45444](https://issues.jenkins-ci.org/browse/JENKINS-45444) -
    Node parameter can no longer be a NodeParameter, it must be a
    LabelParameter
-   Minor code cleanup/updates

Version 2.8 (2017-01-12)

-   Fix
    [JENKINS-40823](https://issues.jenkins-ci.org/browse/JENKINS-40823) -
    Pipeline job isn't triggered by startup-trigger
-   Fix
    [JENKINS-40831](https://issues.jenkins-ci.org/browse/JENKINS-40831) -
    Node parameter can be StringParameter

Version 2.7 (2016-10-10)

-   Fix
    [JENKINS-38582](https://issues.jenkins-ci.org/browse/JENKINS-38582) -
    Added "Run when temporarily online" support (Advanced option)

Version 2.6.3 (2016-09-16)

-   Fix
    [JENKINS-22422](https://issues.jenkins-ci.org/browse/JENKINS-22422) -
    Added node to build cause
-   Fix
    [JENKINS-32659](https://issues.jenkins-ci.org/browse/JENKINS-32659) -
    Added support for Cloudbees folders
-   Enabled use of label expressions in the trigger label field
-   Triggering node's name can be passed to jobs as a NodeLabel
    Parameter
-   No longer running disabled jobs
-   One single job can now be triggered by a list of labels

*2.6-2.6.2 are omitted because they only contain updates to Maven
configuration...*

Version 2.5 (2015-12-02)

-   Fix
    [JENKINS-31761](https://issues.jenkins-ci.org/browse/JENKINS-31761) -
    No license specified

Version 2.4 (2013-04-28)

-   Enable to specify a string for the trigger label as a substring of
    the node label.

Version 2.3 (2013-02-13)

-   Fix
    [JENKINS-16841](https://issues.jenkins-ci.org/browse/JENKINS-16841) -
    Add delay to startup trigger

Version 2.2 (2013-02-07)

-   Fix label and log message

Version 2.1 (2013-01-26)

-   Fix NullPointerException
-   Refactoring

Version 2.0 (2013-01-19)

-   Enable to trigger a build at node startup

Version 1.1 (2011-02-08)

-   Update the cause and plugin description to Jenkins.

Version 0.1 (2009-12-30)

-   Initial release
