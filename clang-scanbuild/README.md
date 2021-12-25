This plugin allows you to execute Clang scan-build against Mac or iPhone
XCode projects or other scan-build compatible build tools.

# Description

This plugin allows you configure a build step that will execute
the [Clang
scan-build](http://clang-analyzer.llvm.org/scan-build.html) static
analysis tool against an XCode project. This plugin also provides a
Post-build Action that will archive the HTML reports and generate a
trend graph.

The following features are provided by this plug-in:

-   Clang tool installations so you can configure locations differently
    on slaves
-   Clang scan-build build step which allows you to provide XCode
    settings such as: target, SDK, & configuration
-   Dashboard trend chart which details the bug count over time visible
    on your job's dashboard page
-   New bugs since the last build are highlighted so they are easy to
    identify
-   A publisher which will archive the scan-build HTML reports and will
    optionally fail the build if the bug count exceeds the configured
    threshold

Please use the [mailing
lists](https://wiki.jenkins.io/display/JENKINS/Mailing+Lists) or [issue
tracker](http://issues.jenkins-ci.org/) to ask questions, create feature
request, or create bug reports.

# Installation

-   First install Clang scan-build onto the Jenkins master or slave
    which will be executing your XCode builds. You can download clang at
    the following
    url: <http://clang-analyzer.llvm.org/installation.html>
-   Setup a Clang scan-build installation in the Jenkins main
    configuration. (Manage Jenkins). You should give your installation a
    unique name and provide a path to the scan-build folder unless your
    master will never execute Clang scan-build jobs.
-   Edit your Job configuration by adding a 'Clang scan-build' Build
    Step.
-   Choose the installation you wish to use (likely the one you just
    added).
-   Provide the appropriate XCode build settings (target, SDK, &
    configuration).

# Sample job using make

-   To invoke scan-build from the command-line using make, create a job
    with **Build Step - Execute Shell** such as:
    ``` syntaxhighlighter-pre
    make clean
    rm -rf ${WORKSPACE}/clangScanBuildReports
    scan-build -o ${WORKSPACE}/clangScanBuildReports -v -v --use-cc clang --use-analyzer=/usr/bin/clang make
    ```

&nbsp;

-   If you wish to have results published, add the **Post-build Action -
    Publish Clang scan-build reports**.

# Changelog

**Release 1.7**

-   [JENKINS-18941](https://issues.jenkins-ci.org/browse/JENKINS-18941)
    allow specifying output directory for scan-build reports
-   [JENKINS-31679](https://issues.jenkins-ci.org/browse/JENKINS-31679)
    fix logging

**Release 1.6**

-   Remove obsolete "-activetarget" flag
    ([JENKINS-23008](https://issues.jenkins-ci.org/browse/JENKINS-23008))
-   Fix null pointer exception in getClangexcludedpaths
    ([JENKINS-28130](https://issues.jenkins-ci.org/browse/JENKINS-28130))

**Release 1.5**

-   Update to Jenkins core parent dependency to 1.580.1
-   Change minimum isApplicable() level to AbstractProject, for
    compatibility with [inheritance
    plugin](https://wiki.jenkins-ci.org/display/JENKINS/inheritance-plugin).
-   Add support for clang static analyzer \>= 270
-   Add the ability to exclude files from scan-build analysis.
-   Update the publisher to copy all available reports.
-   Remove hardcoded "Xcode 4".
-   Add default arguments for xcodebuild and scan-build.
-   Update e-mail address for Josh Kennedy.

**Release 1.4**

-   Added code to
    implement [JENKINS-15902](https://issues.jenkins-ci.org/browse/JENKINS-15902) -
    xcode build arguments can now be specified. They will be added to
    the end of the command.

**Release 1.3.1**

-   Fixed [JENKINS-9251](https://issues.jenkins-ci.org/browse/JENKINS-9251) -
    If you are using a master/slave configuration the clang scan-build
    tool home can now be left blank on the master and configured on each
    slave.
-   Fixed another bug which was causing a 500 error when saving the
    scan-build tool configuration.

**Release 1.3**

-   Merged patch provided by github user 'tru' which passes Jenkins
    environment variables through the plugin and makes them available to
    scan-build.  This enables passing down variables such as
    BUILD\_NUMBER and other Jenkins environment variables.
-   Added the ability to provide arbitrary arguments in the build action
    configuration which are passed to scan-build.  

**Release 1.2**

-   Patch provided by Kenji21 to fix a bug when building on a slave.
-   Bug reports are now created on the slave and copied to the master so
    that they are accessible in your browser

**Release 1.1**

-   Support for X-Code 4

**Release 1.0**

-   Initial Release
-   Clang scan-build build step
-   Clang scan-build report publisher
-   Supports XCode projects within workspace subfolders
