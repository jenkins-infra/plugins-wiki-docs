 

Integration of AbsInt's [aiT](https://www.absint.com/ait),
[TimingProfiler](https://www.absint.com/timingprofiler), [TimeWeaver](https://www.absint.com/timeweaver)
and [StackAnalyzer](https://www.absint.com/stackanalyzer) (a³) into the
Jenkins continuous integration system

**Compatibility with a³**

[TABLE]

## Functions

[TABLE]

The AbsInt a³ plugin for Jenkins performs the following functions:

![(tick)](docs/images/check.svg)
It transparently invokes the a³ (AbsInt Advanced Analyzer) tool during
your build.  
![(tick)](docs/images/check.svg)
It can fail the build if expectations in the analysis results are
violated.  
![(tick)](docs/images/check.svg)
It can fail the build if warnings resp. errors are detected during
analysis (optionally).  
![(tick)](docs/images/check.svg)
It prints a compact result table and lists failed analysis items.  
![(tick)](docs/images/check.svg)
It can generate an a³ analysis workspace to investigate the analysis
results later interactively.  
![(tick)](docs/images/check.svg)
It can copy the complete analysis reports and results into Jenkins
workspace.  
![(tick)](docs/images/check.svg)
It collects the specified analysis HTML-Report files into Jenkins
workspace and directly links them from console output.

## How does it work? A Video Tutorial

[![](docs/images/JenkinsYoutube.jpg){height="250"}](https://www.youtube.com/watch?v=TGLlAF_1-hM)

## Getting Started

-   Install the plugin using the Plugin Manager, and restart Jenkins.
-   Go to the global configuration page (Manage Jenkins \> Configure
    System).
-   Find the a³ Configuration Section and specify  
    1.  the location for the AbsInt Launcher (alauncher) program *  OR *
            
    2.  a path where the a³ installer packages are stored.  
        The plugin will identify the corresponding installer for your
        target CPU with the highest build number, copy & unpack that
        into the Jenkins workspace so that you do not have to install an
        a³ copy on every jenkins node.

    ( In both cases you may use environment variables like
    ${ALAUNCHER\_DIR} which you can set on every jenkins node
    individually! ).
-   Optionally: Provide the server address/name for the AbsInt License
    Manager (ALM) with it's port. This complements the non-installation
    variant (see 2. above) for a³ in a perfect way.

## Job Setup and Project Configuration Settings

-   Create the job, by creating it from scratch or copying from an
    existing job.
-   Under Build actions, check ‘a³ Analysis Run.’

####  Basic Settings

-   Select the a³ analysis project file (with .apx suffix) that shall be
    analyzed at the end of the build process.
-   You may restrict the analysis to the list of given analysis IDs
    (comma separated). The specified analysis IDs must be part of the a³
    analysis project. (optional)
-   The build will always fail if at least one expectation specified in
    the a³ analysis project was violated. Note that if there is no
    expectation specified in an analysis ID, it's expectation always
    succeeds.
-   Additionally you may let the build fail depending on the projects
    '''Pedantic Level'''. You can chose from the following options:

    | Option                                          | Description                                                                                                                                                                      |
    |-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Pedantic level defined in project configuration | Extract the pedantic level from a³ Project Configuration (.apx file) - Default                                                                                                   |
    | Errors and Warnings                             | Pedantic level High, i.e. a³ will let the build step fail iff at least one warning (or error) was issued during analysis.                                                        |
    | Errors                                          | Pedantic level middle, i.e. a³ will let the build step fail iff at least one error was issued during analysis. Warnings won't turn the build to be failed.                       |
    | Fatal Errors                                    | Pedantic level low, i.e. a³ will let the build step fail iff at least one fatal error was issued during analysis. Neither warnings nor errors won't turn the build to be failed. |

####  Options

-   You may want to export an a³ analysis workspace to either the
    Jenkins workspace directory or to the analysis project directory.
-   You may want to optionally copy the a³ analysis report file to the
    Jenkins project workspace. File will be named as
    '''a3-report-b\<BUILDNUMBER\>-copy.txt'.
-   You may want to optionally copy the a³ analysis XML result file to
    the Jenkins project workspace. File will be named as
    '''a3-xml-result-b\<BUILDNUMBER\>-copy.xml'.
-   You may want to skip the a³ analysis run to temporarily deactivate
    the a³ analysis build step (for debugging).

Now start your build. After the build has completed, a summary with the
analysis results will be printed to the console output in Jenkins.  
The analysis project report and XML result file can be found at the
location specified in the a³ analysis project (.apx) file or
alternatively in the Jenkins project workspace.

## **Troubleshooting**

When you encounter problems while using the plugin, please provide the
following information:

-   The error message from the Console Output.
-   The Jenkins server log file (the location is dependent on the
    container you use)
-   The content of ‘Manage Jenkins \> System Information’ (*Jenkins
    root*/systemInfo)
-   The configuration file for the job (*Jenkins root*/jobs/*job
    name*/config.xml)
-   The global configuration file for Jenkins (*Jenkins
    root*/config.xml)
-   The a³ analysis report and XML result file (if available).
-   In case of problems while saving the job configuration, a screenshot
    before submitting, the error message afterwards and the browser you
    are using.

## Known Issues

## Upgrading

When upgrading, make sure that all jobs using the a³ plugin are finished
and not running during upgrade. For best results, restart your Jenkins
after upgrade.

## Changelog

#### **Version 1.1.0 (October 05, 2017)**

-   Improved Support for Multi-Node Jenkins Build Systems (with Jenkins
    Masters and Slaves).
-   Automatic detection of the node OS (Windows OR Linux supported).
-   Support for automatic copy & unpacking of a³ installer packages into
    Jenkins Workspace. I.e. executing a³ analyses without a³ tool
    installation possible.
-   Support for new a³ Floating/Department License mechanism: One can
    specify the ALM server address and port directly in the a³ Jenkins
    System Configuration.

#### **Version 1.0.3 (August 08, 2017)**

-   Collect analysis HTML report files into Jenkins Workspace.
-   Analysis IDs are linked from build "Console Output".
-   Improved XML Result file processing.

#### **Version 1.0.2 (October 14, 2016)**

-   Improved structure of workspace output: Generate subdirectory
    'absint-a3-b\<JENKINS\_BUILD\_NR\>' in Jenkins workspace to place a³
    temporary and reporting files.
-   Introducing the "Skip a³ analysis run" option to temporarily
    deactivate the a³ analysis build step without the necessity to
    remove it from the Jenkins project.
-   Added a³ workspace support to the absint-a3 Plugin: The a³ workspace
    file allows to resume any a³ run after the project has been analyzed
    in batch mode.
-   Added support for expanding system environment variables like
    ${VARIABLE} in input paths.

#### **Version 1.0.1 (September 21, 2016)**

-   Improved compatibility check with installed a³ version

#### **Version 1.0.0 (August 16, 2016)**

-   Initial release of the a³ Jenkins Plugin.
