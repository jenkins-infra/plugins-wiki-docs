This plugin makes it possible to capture the build context to ensure
traceability and auditability.

# Introduction

Knowing build information is indispensable to keep traceability. Build
information enables use to reproduce the build process and deployment
process on demand.  
This plugin enables you to capture the build context by defining several
predefined captured types and lets you define some custom capture
elements (from script execution).  
After the capture, you are able to export the build context and attach
it to your artifacts.

# Features

-   Captures build context used by a build
-   Knows build context elements used for each job run

# Some use cases

-   To capture environment variables used by the build  
    Note: It is suggested to use [EnvInject
    plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) for
    managing environment variables  
    and there is a connector between EnvInject plugin and
    BuildContextCapture plugin.
-   To capture the build log
-   To capture infrastructure information (plugins information, jenkins
    version, and so on)
-   To capture the job configuration file (config.xml)
-   To execute a script and capture any recorded file from the build  
    Note: For example, you can execute the cleartool command 'setcs' to
    capture the Clearcase config spec of your project used by the build.

# Changelog

## 0.6

\* Fix
[JENKINS-14822](https://issues.jenkins-ci.org/browse/JENKINS-14822) -
Jenkins BuildContext Capture Plug-in's configuration wizard gets
duplicated

## 0.5

\* Add a build action and a project action

## 0.4

\* Add build time type  
\* Introduce a BuildContextCapture publisher type

## 0.3

\* Add the ability to capture elements through a script

## 0.2

\* Add support of different exported format

## 0.1

\* Initial version
