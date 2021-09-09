| Plugin Information                                                                                      |
|---------------------------------------------------------------------------------------------------------|
| View AbsInt Astrée [on the plugin site](https://plugins.jenkins.io/absint-astree) for more information. |

Older versions of this plugin may not be safe to use. Please review the
following warnings before using an older version:

-   [Arbitrary file execution
    vulnerability](https://jenkins.io/security/advisory/2018-06-04/#SECURITY-807)

Integration of AbsInt's static code analyzer
[Astrée](https://www.absint.com/astree) into the Jenkins continuous
integration system

**Compatibility with Astrée**

| Plugin version | Astrée version                         |
|----------------|----------------------------------------|
| **1.0.8**      | **18.10** Build **3429976** and higher |
| **1.0.2**      | **16.10** Build **269715** and higher  |
| **1.0.1**      | **16.10** Build **269715** and higher  |
| **1.0.0**      | **16.04i** Build **265552** and higher |

## Features

[TABLE]

![(tick)](docs/images/check.svg)
Configure an analyzer run as a Jenkins build step  
![(tick)](docs/images/check.svg)
Launch an Astrée analysis as a newly created analysis revision  
![(tick)](docs/images/check.svg)
Automatically mark a build step as erroneous depending on the categories
of findings  
![(tick)](docs/images/check.svg)
Generate analysis reports directly in your Jenkins workspace  
![(tick)](docs/images/check.svg)
Access analysis results via the Jenkins web interface

## Functions

The AbsInt Astrée plugin for Jenkins performs the following functions:

-   It transparently invokes Astrée during your build.
-   It can fail the build for different analysis outcomes (only on
    errors, also on alarms or also on data-flow anomalies reported).

## Getting Started

-   Install the plugin using the Plugin Manager, then restart Jenkins.
-   Go to the global configuration page (Manage Jenkins \> Configure
    System).
-   Find the Astrée Configuration Section and specify the location of
    the AbsInt Launcher (alauncher) program and the Astrée server
    (hostname and port).

## Project Setup and Project Configuration Settings

-   Create a Jenkins project, by creating it from scratch or by copying
    an existing project.
-   Under Configure, add a build step ‘Astrée Analysis Run.’

####  Basic Settings

Specify an analysis setup by providing an absolute path to the DAX file
containing the analysis specification and configuration.  
You may also provide the ID of an existing, preconfigured analysis on
the Astrée server that serves as a revisioning base for the analyses of
the current Jenkins project.  
The analysis, as configured via the supported DAX file, of a build is
imported as a new revision into the project with this ID on the server,
if such a project exists.  
Furthermore, specify on which analysis outcome, Astrée may fail a build.

[TABLE]

####  Options

You may furthermore configure your analysis run to:

-   Delete the project from the server after the analysis run
-   Generate text report containing the detailed preprocessing output in
    project workspace

Now start your build.  
After the build has completed,

![(plus)](docs/images/add.svg)
a summary with the analysis results will be printed to the console
output in Jenkins and  
![(plus)](docs/images/add.svg)
analysis reports can be found at the location specified in the Astrée
build step configuration or in the Jenkins project workspace in case no
other location has been configured.

## **Troubleshooting**

When you encounter problems while using the plugin, please provide the  
following information:

-   The error message from the Console Output.
-   The Jenkins server log file (the location is dependent on the
    container  
    you use)
-   The content of ‘Manage Jenkins \> System Information’ (\_Jenkins  
    root\_/systemInfo)
-   The configuration file for the job (*Jenkins root*/jobs/\_job  
    name\_/config.xml)
-   The global configuration file for Jenkins (*Jenkins
    root*/config.xml)
-   The Astrée analysis report and XML report files (if available).
-   In case of problems while saving the job configuration, a
    screenshot  
    before submitting, the error message afterwards and the browser you
    are  
    using.

## Known Issues

## Upgrading

When upgrading, make sure that all jobs using the Astrée plugin are
finished  
and not running during upgrade. For best results, restart your Jenkins  
after upgrade.

## Changelog

#### **Version 1.0.8 (October 11, 2018)**

-   Add support for distributed Jenkins environments

#### **Version 1.0.2 (October 14, 2016)**

-   Minor updates of help texts and warning messages

#### **Version 1.0.1 (September 30, 2016)**

-   Enable use of environment variables in user settings
-   Add skip-analysis button

#### **Version 1.0.0 (August 18, 2016)**

-   Initial release of the Astrée Jenkins Plugin.
