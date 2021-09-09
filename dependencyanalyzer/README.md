# Description

This plugin parses dependency:analyze goal from maven build logs and
generates a dependency report

# Configuration

-   This plugin is only available for maven project

1.  Activate dependency:analyze on the maven build configuration of your
    job
2.  Check the dependency analysis option on your job configuration
3.  Launch a new build

# Project page

Global dependency reports are not yet implemented. Only the build part
is available.

# Build page

Clicking on the dependency analysis link opens the dependency reports.  
Dependency problems detected by dependency:analyze goal are summarized
in this page.

# Version History

-   Not planified
    -   Graph for dependency problems evolution on job main page
-   Next Release
    -   Summarize dependency problems count
    -   Global dependency report on job main page

#### Version 0.7 (Oct 2, 2014)

-   Maintenance release. Works with new version of Jenkins.
-   Organize artifact display into array.
-   Comit and move to Github

#### Version 0.6 (Feb 14, 2011)

-   Translation update (French)

#### Version 0.5 (Feb 15, 2010)

-   Update code for more recent Hudson

#### Version 0.4 (Sep 16, 2009)

-   Supports maven 2.1 (patch from mfriedenhagen
    [JENKINS-4273](https://issues.jenkins-ci.org/browse/JENKINS-4273))

#### Version 0.3

-   Add support to dependency:analyze-only goal (patch from
    [JENKINS-4277](https://issues.jenkins-ci.org/browse/JENKINS-4277))

#### Version 0.2

-   No NPE when the build has old modules
    ([JENKINS-2833](https://issues.jenkins-ci.org/browse/JENKINS-2833))

#### Version 0.1

-   Initial release
-   List of dependency problems, build centric
