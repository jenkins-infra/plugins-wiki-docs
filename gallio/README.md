This plugin makes it possible to publish
[Gallio](http://www.gallio.org/)/[MbUnit](http://www.mbunit.com/) test
results.

Gallio/Mbunit reports are imported from each build into Jenkins so they
are displayed with a trend graph and details about which tests that
failed.

## Change Log

##### Version 1.8

\* Fix
[JENKINS-11599](https://issues.jenkins-ci.org/browse/JENKINS-11599) -
The error message is not reported when running MsTest with Gallio

##### Version 1.7

\* Upgrade to xUnit 1.90

##### Version 1.6

\* Upgraded to xUnit 1.23  
\* Merge pull request - add standard output

##### Version 1.5

-   Upgrade to xUnit 1.17
-   Built for Jenkins 1.410
-   Changed packaging procedure

##### Version 1.4.1

-   Upgraded to xUnit 1.16.1 for fixing the usage on a slave mode

##### Version 1.4

-   Upgraded to latest xUnit API 1.16

##### Version 1.3 (January 24, 2011)

-   Fixed
    [JENKINS-8207](https://issues.jenkins-ci.org/browse/JENKINS-8207) -
    Gallio/MbUnit 3.2.603 generated report is not being correctly parsed
    by the Gallio plugin.

##### Version 1.2 (January 23, 2011)

-   Updated to [xUnit
    1.13](https://wiki.jenkins.io/display/JENKINS/xUnit+Plugin) and its
    new new public API

##### Version 1.1 (September 08, 2010)

-   Updated to [xUnit
    1.8](https://wiki.jenkins.io/display/JENKINS/xUnit+Plugin)

##### Version 1.0 (July 14, 2010)

-   Updated to the new [xUnit
    plugin](https://wiki.jenkins.io/display/JENKINS/xUnit+Plugin)
    architecture.  
    Gallio Hudson plugin uses xUnit 1.6

##### Version 0.70 (Feb 21, 2010)

-   Currenlty, the Gallio plugin extends the [xUnit
    Hudson](https://wiki.jenkins.io/display/JENKINS/xUnit+Plugin) plugin

##### Version 0.60 (Jan 31, 2010)

-   Update code for more recent Hudson

##### Version 0.52 (Apr 18, 2009)

-   First version (don't ask me why this version number
    ![(smile)](docs/images/smile.svg)
    )
