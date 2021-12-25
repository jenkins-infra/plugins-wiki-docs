Adds the ability to execute Jython script. What makes this plugin
special, as opposed to the [Python
Plugin](https://wiki.jenkins.io/display/JENKINS/Python+Plugin) is that it
ships with the Jython runtime, instead of actually requiring Python to
be installed on the machine.

*Note that as of version 1.4, the Jython script no longer executes
within the Jenkins JVM process, but forks its own JVM. This is more
consistent with how other plug-ins work, and ensures that in distributed
deployments, the Jython script will execute in the node that a build is
running on (instead of always running on the master).*

## Changelog

##### Version 1.9 (Dec 18 2011)

-   Set up the Jython build step environment so that a Jenkins HTTP
    proxy, if it's defined, will be used by urllib and urllib2. More
    specifically, it defines the "http\_proxy" environment variable for
    the build step. To override this, define your own "http\_proxy"
    environment variable (either at the global/slave/job level).

##### Version 1.8 (Dec 16 2011)

-   Made syntax highlighting configuration a little more sensible.

##### Version 1.7 (Jul 20 2011)

-   Used the CodeMirror editor for the script field, which provides,
    amongst other things, syntax highlighting, and more control over the
    tab key behavior.

##### Version 1.6 (Jul 13 2011)

-   Added support for installation of third party Python libraries
    (eggs/zip/etc) from the global settings page.

##### Version 1.5 (Jun 17 2011)

-   No functional change. The source directory structure was re-factored
    to support future releases.

##### Version 1.4 (Jun 6 2011)

-   Modified builder to execute Jython script in a forked process so
    that it executes on the slave when a build is scheduled to run on
    the slave (before, the Jython script always execute on the master
    regardless of where the build is running).

##### Version 1.3 (Mar 21 2011)

-   Upgraded runtime to Jython 2.5.2.

##### Version 1.2 (Mar 4 2011)

-   Included the [Python Standard
    Library](http://www.jython.org/docs/library/indexprogress.html)
-   Exposed Hudson environment variables (build number etc) to the
    context of the Jython script

##### Version 1.1 (Dec 29 2009)

-   Form text area always came up empty, not showing saved script
-   Don't share state across jython scripts
-   Set current directory to the workspace before running scripts
-   Update uses of deprecated APIs

##### Version 1.0 (Jul 18 2009)

-   Initial version
