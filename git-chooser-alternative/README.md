An alternative build chooser plugin for the Jenkins git plugin.

This plugin provides an alternative way for the [Git
Plugin](https://wiki.jenkins.io/display/JENKINS/Git+Plugin) to select a
branch to build. Instead of building all specified branches, the list of
branches is treated as a priority list: if the first specified branch
exists, it will be built; otherwise, if the second specified branch
exists, it will be built, and so on.

------------------------------------------------------------------------

## Change Log

##### Version 1.1 (Oct 21, 2013)

-   ![(error)](docs/images/error.svg)
    Support variable expansion in branch specifiers
    ([JENKINS-19239](https://issues.jenkins-ci.org/browse/JENKINS-19239))

##### Version 1.0 (Jun 28, 2013)

-   Initial release.
