  

  
Benchmark plugin to compare boolean and numerical results over the
history of builds.  

## About

This plug-in adds a post-build capability.  
This plug-in purpose is to benchmark over all of a job builds, boolean
and numerical results through tables and graphs.  
This plug-in has also a mechanism of thresholds over numerical values to
control a build success or failure.

This plug-in is also designed to load any type of JSON or XML result
file format.  
This plug-in works best in combination with an automated notification
plug-in.  
This plug-in works also as a result viewer for the ['jUnit
Plug-in'](https://wiki.jenkins.io/display/JENKINS/JUnit+Plugin) and
the ['xUnit
Plug-in'](https://wiki.jenkins.io/display/JENKINS/xUnit+Plugin).

This plug-in is accessible as a Jenkins pipeline component.

  

**The documentation on how to use the plugin is located inside the
[Github repository](https://github.com/jenkinsci/benchmark-plugin).**

**  
**

For the plug-in one slide features,
click [HERE](https://github.com/jenkinsci/benchmark-plugin/blob/master/doc/170821_Benchmark_Plugin_OneSlide.pdf).

If you are interested in why this plug-in was created, please find the
original
proposal [HERE](https://github.com/jenkinsci/benchmark-plugin/blob/master/doc/170515_Benchmark_Plugin_Proposal.pdf).

## Simple mode - Two steps use

The Benchmark plug-in in its simplest form works as a result viewer for
the ['jUnit
Plug-in'](https://wiki.jenkins.io/display/JENKINS/JUnit+Plugin) and
the ['xUnit
Plug-in'](https://wiki.jenkins.io/display/JENKINS/xUnit+Plugin). 

1.  Add the benchmark plugin after a xUnit or jUnit post build step in
    the job configuration,
2.  Run the build.

The icon to access the plug-in result viewer should appear on the job
main window.

## Standard mode - Use registered schema

Here are the links to the standard schema:

-   Simplest
    [JSON](https://raw.githubusercontent.com/jenkinsci/benchmark-plugin/master/src/main/resources/schemas/simplest.json)
    /
    [XML](https://raw.githubusercontent.com/jenkinsci/benchmark-plugin/master/src/main/resources/schemas/simplest.xml)
-   Default
    [JSON](https://raw.githubusercontent.com/jenkinsci/benchmark-plugin/master/src/main/resources/schemas/default.json)
    /
    [XML](https://raw.githubusercontent.com/jenkinsci/benchmark-plugin/master/src/main/resources/schemas/default.xml)

To use one, just select it in the dropdown menu of the plug-in
configuration. The necessary schema format (JSON or XML) will be
automatically detected. 

## Advanced mode - Create your own schema

Use the manual to build a custom
schema: [HERE](https://github.com/jenkinsci/benchmark-plugin/blob/master/doc/BUILD_CUSTOM_SCHEMA.md)

A custom schema can be either present in the workspace or added to a
text field during the job configuration.

## Changelog

1.0.11

Closed InputStreams that led to threads being kept alive during import
operations (Thank you Artalus S.).

1.0.10

Fixed detected XML parsing security issue.

1.0.9

Fixed issue where processing failed if the number of cores detected is 1
(Thank you Nick Charsley).

1.0.8

Fixed issue where values of String parameters appeared as N/A.  

1.0.7

Removed hyphens from the main tables to allow numerical sorting.  
Removed text versions (true/false) of Boolean results from the raw table
to allow numerical sorting.  
Adjusted left the Group/Result/Unit names for readability and prevent
the awkward display.  
Fixed a bug that occurred when changing schema content where old
parameters ended as results and crashed the display of the main tables.

If the table display is frozen due to this bug, the workaround is:

-   Update the plugin,
-   Go where the job is stored on the master node \[requires access
    rights\],
-   And, delete the file 'BenchmarkCondensed.json' in the job folder.

The file 'BenchmarkCondensed.json' will be recomposed during the next
build.  
**Warning:** Any result from past builds, absent in the new result
file(s) will not be considered.

1.0.6

Following fixes by magik6k (Thank you).  
Fixed issue with pipeline support.  
Improved failure mechanism.  
Added link inside README to a page on how to write the plugin script for
pipeline.

1.0.5

Issues for last 3 updates identified by Shay Gal-on (Thank you)  
Fixed issue with additional thresholds.  
Fixed issue with result display.  
Updated help text.

1.0.4

Fixed issue with multi-file processing.  
Fixed issue with log content.

1.0.3

Fixed issue with ResultFull and ParameterFull for JSON.  
Fixed issue with merge system.  
Fixed issue with log content.

1.0.2

Switched loading of schema file from File to String; to InputStream to
String.  
Fixed issue preventing the link between condensed table and individual
result pages.

1.0.1

First official release.

0.8.4

Initial commit as OpenSource under MIT license.  
Added pipeline support.  
Added Jenkinsfile for the plugin to be built by the Jenkins CI
Infrastructure and check pull requests.  
Activated SCM.  
Fixed Findbugs warnings.  
Added Findbugs exclude filter for specific warnings (see
/src/findbugs/excludesFilter.xml for details).

  
