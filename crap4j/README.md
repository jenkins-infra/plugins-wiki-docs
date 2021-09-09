  
This plugin reads the "crappy methods" report from
[Crap4J](http://crap4j.org/). Jenkins will generate the trend report of
crap percentage and provide detailed information about changes. Users
will be able to track which methods are crappy and when they entered and
left the code base.  
  
  
  

# Restrictions

Currently, this plugin is restricted to use with **freestyle (ant)**
jobs. Future releases might support all kinds of jobs. Let me know your
needs by filing a request for enhancement [in the issue
tracker](https://hudson.dev.java.net/issues/enter_bug.cgi?subcomponent=crap4j&issue_type=FEATURE).

# Description

The crap4j plugin scans the Crap4J report data and reports trends.  
These features are currently implemented:

-   Crap report page for jobs
    -   Trend charts for Crappyness, Crap Method Count, Crap Load and
        Crap
    -   List of all current crap methods of the job
-   Crappyness trend chart on job overview page
-   Crap report page for builds
    -   List of all current crap methods of the build
    -   List of new and fixed crap methods in comparison to the previous
        build
-   Crap report summary in the build report column
    -   Statistical summary and links to current, new and fixed crap
        methods  
        ![](docs/images/crap-summary.png)

# Configuring the Crap4J Plugin

1.  Get the [crap4j
    plugin](https://hudson.dev.java.net/servlets/ProjectDocumentList?folderID=9231&expandFolder=9231&folderID=5818),
    preferably using Jenkins plugin manager
2.  Install the crap4j plugin in your Jenkins, if downloaded manually
3.  Configure your project's build script to generate crap4j XML reports
    (This happens along with the HTML report)
4.  Enable the "Publish Crap" publisher on the job configuration page
5.  Specify the directory where the crap4j report (report.xml) is
    generated
6.  Perform some builds to receive a trend

The crap4j plugin currently has no configurable parameters. The build
health indicator is set to the [Crap4J quality
suggestion](http://crap4j.org/faq.html), with 15% crappy methods being
0% build health.

# Feedback

This plugin is developed and maintained by Daniel Lindner with kind
support from [Softwareschneiderei
GmbH](http://www.softwareschneiderei.de/). Please feel free to contact
me for feedback. If you have suggestions for new features or you've
found a bug, please use the [issue
tracker](https://hudson.dev.java.net/issues/enter_bug.cgi?subcomponent=crap4j)
or the [mailing
lists](https://hudson.dev.java.net/servlets/ProjectMailingListList). If
you use the issue tracker, assign the issue directly to java.net ID
dlindner.

# Changelog

Release 0.9 (2014-10-22):

-   Fail-fast behaviour by explicitly signaling missing report files
    (see Issue
    [24912](https://issues.jenkins-ci.org/browse/JENKINS-24912))
-   Uses Jenkins URL instead of server name now (see Issue
    [22279](https://issues.jenkins-ci.org/browse/JENKINS-22279))

Release 0.8 (2010-08-01):

-   Fix incompatibility with hudson core version 1.368 (see Issue
    [7088](http://issues.jenkins-ci.org/browse/JENKINS-7088))
-   Job configuration is stored again (see Issue
    [5493](http://issues.jenkins-ci.org/browse/JENKINS-5493))
    -   **Attention!** This requires you to **re-configure all your
        crap4j-enabled jobs** once. Sorry for the inconvenience!

Release 0.7 (2009-12-30):

-   Fix links for installs with context path (see Issue
    [4361](https://issues.jenkins-ci.org/browse/JENKINS-4361))
-   Decrease parsing effort of not crappy methods
-   Remove dependency on maven plugin
-   Update code for more recent Hudson

Release 0.6.1 (2009-03-15):

-   Restored compatibility with Java 5 (see Issue
    [3282](https://issues.jenkins-ci.org/browse/JENKINS-3282), reported
    by felixdrueke)

Release 0.6 (2009-02-25):

-   Several report.xml files can be merged into one report now (see
    Issue [2995](https://issues.jenkins-ci.org/browse/JENKINS-2995),
    suggested by Oliver Imlinger)
-   Report parsing takes locale into account (see Issue
    [2953](https://issues.jenkins-ci.org/browse/JENKINS-2953), reported
    by Oliver Imlinger)
-   Report path pattern now supports space characters (see Issue
    [2963](https://issues.jenkins-ci.org/browse/JENKINS-2963), reported
    by Mihael Vrbanec)
    -   **Attention!** This **breaks backward compatibility** for
        patterns using **spaces as separators**. Use commas instead.

Release 0.5 (2008-12-31):

-   Enabled use in Master/Slave setups (see Issue
    [2385](https://issues.jenkins-ci.org/browse/JENKINS-2385))

Release 0.4 (2008-07-03):

-   Identical on features to version 0.3
-   Added missing documentation
-   Corrected misleading configuration section title

Release 0.3 (2008-07-03) - please use 0.4 instead.

-   Bugfix: crappyness trend chart missing scale on y-axis if lower than
    1.0 (Issue
    [1952](https://issues.jenkins-ci.org/browse/JENKINS-1952), reported
    by Nigel Charman)
-   Enhancement: Adjustable build health indicator (Issue
    [1985](https://issues.jenkins-ci.org/browse/JENKINS-1985))

Release 0.2 (2008-06-03):

-   Compatible to Java5 VMs. Improvement request by Leon Oosterwijk.

Release 0.1 (2008-05-17):

-   Initial release. Please feel free to suggest new features.
