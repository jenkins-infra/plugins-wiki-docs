This plugin lists up all the iOS devices connected to the master and all
the Jenkins slaves, and provide operations to them.

Specifically, the current version provides the following
functionalities:

-   UI that lists all the connected devices and their properties.
-   Build step that lets you deploy \*.ipa to a device (a build running
    on one slave can deploy app to iOS connected to another slave.)
-   Web UI and CLI commands to deploy \*.ipa

[![](http://i.imgur.com/LB2Tb.png){width="400"}](http://i.imgur.com/LB2Tb.png)
[![](http://i.imgur.com/wTLVR.png){width="400"}](http://i.imgur.com/wTLVR.png)

# Feedback requested

This plugin came into being as a Kohsuke's post-JavaOne hobby project,
to explore what needs to be done in order to make iOS app development
properly automated. If you do iOS app development for real, please let
us know what needs to be done!

# Changelog

### Version 1.2 (Oct 10, 2012)

-   Devices can be attribuetd to a wrong computer
    ([JENKINS-15446](https://issues.jenkins-ci.org/browse/JENKINS-15446))

### Version 1.1 (Oct 8, 2012)

-   Icon images were broken
-   Ignore slaves that are marked offline.

### Version 1.0 (Oct 7, 2012)

-   Initial release
