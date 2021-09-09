#### Developed by

![](docs/images/praqmalogo.png)

#### Sponsored by

![](docs/images/atp.png)

 This plugin can monitor memory related programming errors using the
[Dr. Memory](http://www.drmemory.org/) application. 

## Setup

This plugin is divided into two sections:

1.  A build step
2.  A post build step

#### Build step

First a build step must be set up, providing information about the
executable to be executed with Dr. Memory. This path is relative to the
Jenkins workspace. This can, for example, be some output executable from
a previous build step.

![](docs/images/build-step.png)  
Secondly, arguments of the executable can be provided. The log path is
where Dr. Memory puts its log files, needed by the post build step.

#### Post build step

In the post build step, the processing of the Dr. Memory log files are
processed.

It is also possible to enable graphs, visualizing the progress.

Currently graphs visualizing

-   Total leaks
-   Possible leaks
-   Bytes of leak
-   Uninitialized accesses
-   Invalid heap arguments
-   Warnings
-   Still reachable allocations
-   Unaddressable accesses

are available.

## Issues

type

key

summary

Data cannot be retrieved due to an unexpected error.

[View these issues in
Jira](http://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project%20=%20JENKINS%20AND%20status%20in%20%28Open,%20%22In%20Progress%22,%20Reopened%29%20AND%20component%20=%20%27drmemory%27&src=confmacro)

## Changes

#### 1.5(Jun, 2018)

-   Fixed JEP-200 compatibility issues

#### 1.4(Jul, 2015)

-   Added support for JobDSL

#### 1.3(Jul, 2014)

-   Changed maintainer.

#### 1.2(Jan 7, 2014)

-   Fixed issue with invisible graph list
    ([JENKINS-17464](https://issues.jenkins-ci.org/browse/JENKINS-17464))
-   Publisher would not work without Builder -\> now you can specify a
    result path in the publisher
-   Multiple Builders could be added but not published
-   Concatenating multiple result files to single result
-   Fixed the platform specific separator fix
-   Fixed one wrong reference to a help page
-   Minor code cleanups

#### 1.1(Nov 27, 2013)

-   Implemented option to allow dr-memory to continue even when
    dr-memory returns a non-zero exit code
    ([JENKINS-20222](https://issues.jenkins-ci.org/browse/JENKINS-20222))

#### 1.0(Nov 5, 2013)

-   Allowing for spaces in log directory
    ([JENKINS-20141](https://issues.jenkins-ci.org/browse/JENKINS-20141))

#### 0.1.1(Feb 25, 2012)

-   Initial version
