This plugin allows to manage a [JBoss Application
Server](http://en.wikipedia.org/wiki/JBoss_application_server) during
build procedure.  
With the plugin we can start/stop JBoss AS. It's very useful if we need
to run some integration tests against of the server. There is also
operation allows verification if artifacts are deployable.

The plugin is using JMX to communicate with JBoss AS so there is
possible to implement other features.

## Supported versions

The plugin was tested on JBoss AS versions:

-   4.0.5.GA
-   4.2.2.GA

I'm looking for feedback if the plugin works with other versions as
well.

## Requirements

Recommended version of the Hudson is 1.355.

## Known issues

-   There is a problem to add more then one step in build procedure at
    once. This problem is related to
    [JENKINS-5028](https://issues.jenkins-ci.org/browse/JENKINS-5028)
    and be managed in jboss component
    [JENKINS-5635](https://issues.jenkins-ci.org/browse/JENKINS-5635).
    Current workaround is to create one step save configuration and add
    another step by edit job configuration and again. Sorry for that but
    couldn't find quicker solution at this moment. (It looks like the
    problem not occuring in 1.355 version of Hudson)
-   There is a problem with version of log4j. The issue is related to
    [JENKINS-4433](https://issues.jenkins-ci.org/browse/JENKINS-4433)
    and be managed in jboss component in
    [JENKINS-5709](https://issues.jenkins-ci.org/browse/JENKINS-5709)**.**
    (This issue is not occuring in Hudson 1.355)

## Changelog

##### Version 1.0.5 (4-Nov-2011)

-   added bind address option

##### Version 1.0.4 (20-Aug-2011)

-   remote server functionality added
-   do not cache global configuration
    ([JENKINS-6306](https://issues.jenkins-ci.org/browse/JENKINS-6306))
-   remove unnecessary stacktraces logging
    ([JENKINS-6305](https://issues.jenkins-ci.org/browse/JENKINS-6305))

##### Version 1.0.3 (20-Apr-2010)

-   added timeout to global server configuration, it will be honor
    during START\_AND\_WAIT operation
-   added support to verify WARs by CHECK\_DEPLOYMENT operation

##### Version 1.0.2 (18-Feb-2010)

-   fixes in build step configuration

##### Version 1.0.1 (12-Feb-2010)

-   javadoc-ing, wiki page created

##### Version 1.0 (10-Feb-2010)

-   Initial release.
