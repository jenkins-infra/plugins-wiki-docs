This plugin offers two Node Monitors: one for the version of the
*Remoting* library, and one for the JVM. This helps be aware and
possibility automatically disconnect agents that don't comply to
configuration and avoid issues.

**This plugin has changed its display name for 2.0, is now "Versions
Node Monitors plugin", and was formerly known as "Version Column
plugin".**

**[See also the plugin's README for
documentation.](https://github.com/jenkinsci/versioncolumn-plugin/blob/master/README.adoc)**

## Version History

#### Version 2.1 (2019, January 29th)

-    [JENKINS-53445](https://issues.jenkins-ci.org/browse/JENKINS-53445):
    Add support for Java 11 and Java 12 runtimes

#### Version 2.0 (2017, June 29th)

-   [\[JENKINS-41763\] ](https://issues.jenkins-ci.org/browse/JENKINS-41763)Add
    agent JVM version node monitor
-   Internal refactoring to share logic between the *historical* monitor
    for the Remoting version and the newly introduced one.

#### Version 0.2 (2 September, 2011)

-   make a node offline if it uses old slave.jar.

#### Version 0.1 (19 March, 2011)

-   First release
