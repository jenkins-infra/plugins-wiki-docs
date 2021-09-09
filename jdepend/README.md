## Introduction

The JDepend Plugin is a plugin to generate JDepend reports for builds.

## Quickstart

1.  Download the JDepend plugin from the Update Center
2.  Enable for a project by checking "Report JDepend" under the
    "Post-build actions" of your project
3.  Run a build
4.  View the build page once it has completed, and you should see a
    "JDepend" entry on the left sidebar.

## Notes

The JDepend plugin does not currently report the health of a project, as
the sheer number of metrics available in a JDepend report makes it very
difficult to find any sort of reasonable estimate of what makes a
healthy project. This is one of the times when human intuition might be
best!

## Bug reporting

Please direct all bugs to the [issue
tracker](http://issues.jenkins-ci.org/), making sure to mention
"JDepend" somewhere in the heading or body. Bugs will continue to be
looked at and fixed (features will not). For faster resolution, assign
'lewisham' to the bug.

## Feature requests

Please direct all feature requests to the [issue
tracker](http://issues.jenkins-ci.org/), making sure to mention
"JDepend" somewhere in the heading or body. Please note that active
development on this plugin has ceased for the time being (the original
itch has been scratched), so if you have new features, it will be
quicker to try having a go yourself and make a commit to the SVN
repository. The code should be fairly good.

## Development history

### Version 1.3.0 (Feb 22, 2018)

-   [JENKINS-49586](https://issues.jenkins-ci.org/browse/JENKINS-49586) -
    Make the plugin compatible with Jenkins 2.102+  
    -   More info: [Plugins affected by fix for
        JEP-200](http://localhost:8085/display/JENKINS/Plugins+affected+by+fix+for+JEP-200)
-   [Commit](https://github.com/jenkinsci/jdepend-plugin/commit/0c8fbfa25f1dac94b1df242578b12da2cd4ac7ec)
    - Create JDepend temporary directory on master (reverts change in
    1.2.4)
    -   Note from [Unknown User
        (oleg\_nenashev)](http://localhost:8085/display/~oleg_nenashev):
        This was a pending commit in the master branch. If you
        experience any issues with that, raise a JIRA ticket

### Version 1.2.4 (Nov 03, 2014)

-   [Commit](https://github.com/jenkinsci/jdepend-plugin/commit/967b803b52c50d900408de10ad8535f4716af821) -
    Create JDepend temporary directory on agent instead of the master

### Version 1.2.3 (Feb 14, 2011)

-   Remove unused code.

### Version 1.2.2 (Sep 17, 2009)

-   Fixed config file growth.
    ([JENKINS-4494](https://issues.jenkins-ci.org/browse/JENKINS-4494))

### Version 1.2.1 (Aug 29, 2009)

-   Added relative path to workspace as a possible configuration. No
    compatibility for Ant-style FileSets though, there should only be
    one JDepend report.

### Version 1.2

-   Use existing JDepend XML file.
    ([JENKINS-4083](https://issues.jenkins-ci.org/browse/JENKINS-4083))

Version 1.0 was developed by Chris Lewis (lewisham). Development of
version 1.0 of this plugin was made possible by the National Science
Foundation and released under the BSD license from the University of
California, Santa Cruz. If you like it, remember to keep voting for the
public funding of scientific and educational facilities!
