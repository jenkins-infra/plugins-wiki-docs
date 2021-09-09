This plugin supports extended configuration for triggering downstream
builds:

-   trigger build only if downstream job has SCM changes
-   trigger build if upstream build result is better/equal/worse than
    any given result (SUCCESS, UNSTABLE, FAILURE, ABORTED)
-   for Matrix (alias multi-configuration) jobs you can decide which
    part of the job should trigger the downstream job: parent only,
    configurations only or both

### Changelog

#### Version 1.8

-   Fixed incompatibility with newer Jenkins versions
    [JENKINS-16917](https://issues.jenkins-ci.org/browse/JENKINS-16917)

#### Version 1.7

-   Improved to work with hierarchical projects, such as folders plugin
-   Build dowsntreams only when this job itself is triggered via SCM
    change ([pull
    \#1](https://github.com/jenkinsci/downstream-ext-plugin/pull/1))

#### Version 1.6

-   fixed: (this time for real - well I certainly hope so): upstream
    build can block if downstream uses a SCM which 'locks' the workspace
    (e.g. CVS or Perforce)
    \[[JENKINS-5406](http://issues.jenkins-ci.org/browse/JENKINS-5406)\]
-   added: you can now configure wich part of a matrix job (parent,
    configuration, both) should trigger a downstream build
    \[[JENKINS-6049](http://issues.jenkins-ci.org/browse/JENKINS-6049)**\]**

#### Version 1.5

-   fixed again (hope the fix works this time): upstream build can block
    if downstream uses a SCM which 'locks' the workspace (e.g. CVS or
    Perforce)
    \[[JENKINS-5406](http://issues.jenkins-ci.org/browse/JENKINS-5406)
    \]

#### Version 1.4

-   fixed: upstream build can block if downstream uses a SCM which
    'locks' the workspace (e.g. CVS or Perforce)
    \[[JENKINS-5406](http://issues.jenkins-ci.org/browse/JENKINS-5406)
    \]
-   fixed: workaround for matrix build not being triggered since 1.2
    \[[JENKINS-5508](http://issues.jenkins-ci.org/browse/JENKINS-5508)**\]**

#### Version 1.3

-   allow triggering for aborted jobs
    \[[JENKINS-5215](http://issues.jenkins-ci.org/browse/JENKINS-5215)\]
-   allow triggering if build result is *exactly equal* or *equal or
    under* the specified threshold
    \[[JENKINS-5215](http://issues.jenkins-ci.org/browse/JENKINS-5215)\]

#### Version 1.2 (*requires Hudson 1.341 or higher*)

-   show dependency to downstream jobs in build overview page (uses
    enhancements done to job dependency management introduced in Hudson
    1.341)

#### Version 1.1 (*requires Hudson 1.321 or higher*)

-   allow triggering of downstream job if upstream's build result was
    *failure.*

#### Version 1.0

-   initial release. Optionally, restrict triggering to downstream jobs
    with SCM changes.  
