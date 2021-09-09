This plugin lets you run an
[Xvnc](http://www.hep.phy.cam.ac.uk/vnc_docs/xvnc.html) session during a
build. This is handy if your build includes UI testing that needs a
display available.

Each build using the plugin gets its own display allocated from a free
list, by default starting with :10 and ending with :99.  
(The $DISPLAY environment variable is set for the build by the
plugin.)  
Thus you can freely run builds on multiple executors without fear of
interference.

If there is some problem starting a display server with a given number,
that number will be blacklisted  
for the remainder of the Hudson session and the plugin will try ten more
times before giving up.  
This is commonly due to stale locks that did not get cleaned up
properly.  
There is also an option to clean up locks when starting the first
Xvnc-enabled build in a given session.  
You can record your vnc session with [VncRecorder
Plugin](http://localhost:8085/display/JENKINS/VncRecorder+Plugin).

Note: you must have started the vncserver at least one time before you
use it with hudson. This is to create a password. Otherwise Jenkins
fails. [This blog
post](http://blog.dahanne.net/2011/07/18/run-ui-tests-on-a-headless-jenkins-hudson-continuous-integration-server-running-ubuntu/)
describes how.

If you are running Windows you probably do not want this plugin. [This
blog
post](http://forgetfulprogrammer.wordpress.com/2011/09/21/netbeans-gui-tests-on-jenkins-windows/)
offers an alternative suggestion.

# Version History

### Version 1.24 (Jul 22 2015)

-   [JENKINS-36845](https://issues.jenkins-ci.org/browse/JENKINS-36845):
    ConcurrentModificationException when using Xvnc plugin on Pipeline.

### Version 1.23 (Aug 28 2015)

-   A small bugfix when overwriting the XAUTHORITY env var during vnc
    setup retry.
-   A workaround for
    [JENKINS-19139](https://issues.jenkins-ci.org/browse/JENKINS-19139)
    where the xautority file is placed in the slave fs root if the
    build's workspace contains a space, or in tmp if that also contains
    a space.

### Version 1.22 (Jun 10 2015)

-   Requires 1.609.1+.
-   [JENKINS-26477](https://issues.jenkins-ci.org/browse/JENKINS-26477)
    Workflow plugin support.

### Version 1.20 (Nov 12 2014)

-   [JENKINS-25424](https://issues.jenkins-ci.org/browse/JENKINS-25424) Exception
    when editing nodes

### Version 1.19 (skipped)

### Version 1.18 (Oct 15 2014)

-   [JENKINS-24773](https://issues.jenkins-ci.org/browse/JENKINS-24773) Allocated
    and blacklisted display number are shared accross all slaves

### Version 1.17 (Mar 16 2014)

-   [JENKINS-22105](https://issues.jenkins-ci.org/browse/JENKINS-22105) Client
    is not authorized to connect to Server.  
    This will reintroduce the problem with spaces in job names. To avoid
    that bug:
    -   avoid using spaces in job names, or
    -   fix the vncserver script: add qoutes around the xauthority
        filename when xauth is called, or
    -   turn off per job xauthority file generation.

### Version 1.16 (Mar 5 2014)

-   [JENKINS-19139](https://issues.jenkins-ci.org/browse/JENKINS-19139) Xvnc
    plugin fails if the job has a space in the name
-   [JENKINS-18108](https://issues.jenkins-ci.org/browse/JENKINS-18108) "Unrecognized
    option: UI" in v1.14

### Version 1.14 (Apr 10 2013)

-   [JENKINS-17280](https://issues.jenkins-ci.org/browse/JENKINS-17280)
    Display number out of bounds, no way to reset
-   [JENKINS-17550](https://issues.jenkins-ci.org/browse/JENKINS-17550)
    Xvnc plugin tries to use already allocated displays

### Version 1.13 (Apr 9 2013)

-   Automatic clearing of blacklist when run out of available ports

### Version 1.12 (Apr 4 2013)

-   Changed the configurable base display number to a configurable range
    of display numbers.
-   Randomly retry ten times to find a working display number before
    giving up.
-   [JENKINS-16879](https://issues.jenkins-ci.org/browse/JENKINS-16879)
    More robust display detection needed - builds fail when many builds
    require Xvnc

### Version 1.11 (Jan 14 2012)

-   [JENKINS-8670](https://issues.jenkins-ci.org/browse/JENKINS-8670)
    Bind vncserver to localhost for enhanced security.

### Version 1.10 (Jul 19 2010)

-   [JENKINS-3285](https://issues.jenkins-ci.org/browse/JENKINS-3285)
    Option to clean up stale locks & processes.
-   [JENKINS-3680](https://issues.jenkins-ci.org/browse/JENKINS-3680) Do
    not run `vncserver -kill` in workspace directory.

### Version 1.9 (Jun 21 2010)

-   Added a mechanism to exclude Xvnc execution on specific nodes
-   Added an option to skip Xvnc execution on all Windows machines

### Version 1.8 (Jan 9 2010)

-   Ensure screenshot is taken when selected
-   Update code for more recent Hudson

### Version 1.7 (Apr 15 2009)

-   Retry several times before giving up on attempt to get a display,
    blacklisting displays each time.

### Version 1.6 (Apr 14 2009)

-   If the user forgot to put `:$DISPLAY_NUMBER` in the command line,
    issue a warning
    ([report](http://www.nabble.com/one-moe-vnc-issue-td19141343.html))
-   Better help.
-   Updated to new form validation style.

### Version 1.5 (August 11, 2008)

-   Can be configured to take a screenshot of the X session upon build
    completion. These screenshots are treated as build artifacts. This
    functionality requires [Imagemagick](http://www.imagemagick.org/)

### Version 1.4

-   Updated to work with the latest Hudson
    [patch](http://www.nabble.com/BuildWrapper-plugin-support-for-m2-jobs--tt16728753.html)
