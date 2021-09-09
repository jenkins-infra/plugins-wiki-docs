Allows embedding various statistics available from Jenkins in your via
javascript-snippets ala ohloh.net.

With this plugin, you can integrate the output of some Jenkins
statistics to external sites by including either a `javascript`
snippet,  
an open social gadget or using an `iframe`.

For examples follow the **JS Widgets** link at
<http://huschteguzzel.de/hudson/job/jenkinsci-jswidgets-plugin/jswidgets/>

huschteguzzel.de

## Changelog

### Version 1.11-SNAPSHOT (Not released)

### Version 1.10 (Apr 27 2013)

-   Ported to latest LTS (1.480.3)
-   Fix for wrong URLs in JSWidgets which would show the servlet
    container's URL even if the proxy url was configured in Jenkins.
-   Switched to Jacoco for coverage.

### Version 1.9 (Jun 15 2012)

-   Strip trailing slash as this will not work anymore.
-   Add open social gadgets via e.g.
    <http://huschteguzzel.de/hudson/job/jenkinsci-jswidgets-plugin/jswidgets/health-gadget.xml>

### Version 1.8 (Feb 15 2011)

-   Fixes
    [JENKINS-4889](https://issues.jenkins-ci.org/browse/JENKINS-4889).
    For Maven2 builds the RunListeners seem to be invoked multiple
    times.

### Version 1.7, Version 1.6 (Feb 04 2011)

-   Rename references from Hudson to Jenkins.

### Version 1.5 (Dec 05 2010)

-   Fix recurring JSWidgets buttons in Maven2 builds, better fix for
    [JENKINS-6164](https://issues.jenkins-ci.org/browse/JENKINS-6164).
-   Introduce parameter `skipDescription`, which will skip writing the
    description of a job, so  
    using the `script` output is possible in the description of a job as
    well.

### Version 1.4 (Apr 05 2010)

-   Fix for
    [JENKINS-6164](https://issues.jenkins-ci.org/browse/JENKINS-6164):
    JSWidgets badge is lost with newer versions of Jenkins.

### Version 1.3 (Dec 16 2009)

-   Fixes
    [JENKINS-5106](https://issues.jenkins-ci.org/browse/JENKINS-5106)
    Apostroph should be quoted
-   Use released checkstyle-plugin 2.4
-   Do not use empty tag for script, as this will break sometimes.

### Version 1.2 (Nov 21 2009)

-   Include version 1.124 of stapler as provided by war with scope
    provided, otherwise a great number of dependant jars are included in
    the hpi.

### Version 1.1 (Nov 21 2009)

-   Fixes
    [JENKINS-4889](https://issues.jenkins-ci.org/browse/JENKINS-4889).
-   Updates to newest dependency versions and parent.

### Version 1.0 (Oct 19 2009)

-   First version.
