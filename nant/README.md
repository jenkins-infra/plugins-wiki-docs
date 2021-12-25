This plugin allows for the execution of a
[NAnt](http://nant.sourceforge.net/ "NAnt .NET Build Tool") build as a
build step.

This plugin provides functionality similar to the Ant features built in
to Jenkins. Windows environments and non-Windows environments, running
NAnt via Mono, are supported.

# Usage

### Using the plugin without any configuration (recommended)

If the NAnt executable is in your system's path, then you can use the
default executable without any further configuration. Unless there is a
need to use multiple versions of NAnt, this approach is recommended
rather than configuring an installation.

-   **Windows**: the default executable is
        NAnt.exe

-   **Other OS's**: the default executable is
        nant

### Configuring a NAnt installation (optional)

1.  Go to the Jenkins configuration page (i.e.
    http(s)://\<your-jenkins-url\>/configure)
2.  Add a new NAnt installation in the **NAnt Builder** section
3.  Enter a name for the installation (i.e. nant-0.86-beta1)
4.  Enter the NAnt home directory.
    -   **Windows**: this must be a directory where the nant executable
        can be found from the relative path
            .\bin\NAnt.exe

    -   **Other OS's (Mac, Linux, etc.)**: this must be a directory
        where the NAnt executable can be found from the relative path
            ./bin/nant

**Note**: If you have a master-slave configuration where one node is
running on Windows and the other running on a Unix-based platform, you
can configure a NAnt installation based on the node you wish to target.
Even if the plugin shows validation errors, you will still be able to
save the configuration. There are future plans to clean this
functionality up, but for now you will just have to ignore any
validation errors.

### Adding a NAnt build step

1.  Open the configuration for a new or existing Jenkins freestyle build
    job
2.  In the "Build" section, add a new "Top Level NAnt Target" build step
3.  Choose a NAnt installation from the dropdown
4.  Optionally enter a build file
    -   The build file path, if entered, is relative to the workspace
        root directory
5.  Optionally enter targets (separate multiple targets by a space)
6.  Click the "Advanced" button to enter optional property definitions.
    -   Property definitions are entered 1 per line, in the following
        format:
            property1=value1
            property2=value2
            ...
            propertyN=valueN

    -   Use of build parameters is supported when setting property
        values
            build.config=$buildConfiguration

# Changelog

### Version 1.4.3 (Nov 1, 2012)

-   integrated [pull
    \#1](https://github.com/jenkinsci/nant-plugin/pull/1) allow nant
    plugin to be seen as a valid builder in the ﻿[Conditional BuildStep
    Plugin](https://wiki.jenkins.io/display/JENKINS/Conditional+BuildStep+Plugin)  

### Version 1.4.2 (Aug 5, 2011)

-   Update for Jenkins

### Version 1.4.1 (Mar 4, 2010)

-   The default executable will now be chosen based on the platform of
    the node that NAnt is running on. Previously, the default executable
    was being chosen based on the platform that the master node was
    running on, even if a build was being done on a slave node.

### Version 1.4

-   Resolved an issue regarding the configuration and execution of the
    NAnt plugin on non-Windows pltforms (i.e. Linux, Mac, etc.)
    ([JENKINS-4504](https://issues.jenkins-ci.org/browse/JENKINS-4504))

### Version 1.3.1

-   Changed the supported/dependent Hudson version to 1.347

### Version 1.3

-   Added the ability to set property values that will be passed to a
    NAnt build.
    -   This is equivalent to the functionality provided by the Ant
        task.

### Version 1.2

-   Fixed a bug in using multiple NAnt
    ([JENKINS-1977](https://issues.jenkins-ci.org/browse/JENKINS-1977))
