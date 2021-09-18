
BuildResultTrigger makes it possible to monitor the build results of
other jobs.  

# Features

When you you have two jobs jobA and jobB and you want Jenkins to
schedule jobB after the jobA execution (whatever the build result of
jobA), you can configure Jenkins to say that jobB is the downstream job
of jobA. The drawback with this approach is that jobA has the knowledge
of its dependencies.  
With the BuildResultPlugin, you configure jobB to monitor jobA build
result. A build is scheduled if there is a new build result matches your
criteria (unstable, failure, ...)

Note: The plug-in uses only persistence in memory. There is no impact on
the Jenkins infrastructure (no new files created).  
This plugin provides a polling typology among the [XTrigger
Plugin](http://localhost:8085/display/JENKINS/XTrigger+Plugin).

# Some use cases

\* Having dedicated jobs (such as cleaning an environment, backing up a
database, ...) that are scheduled if other jobs are in failure.  
The other jobs don't depend on these dedicated jobs.  
\* Implementing a build pipeline (or a build chain) in which each step
of the build pipeline is implemented with a Jenkins job.

# Configuration

![](docs/images/buildResultTrigger_conf1.png)

# Comparison with other plugins

This plugin provides the inverse mechanism of the core feature
(downstream/upstream) and the [Parameterized Trigger
Plugin](http://localhost:8085/display/JENKINS/Parameterized+Trigger+Plugin).

# Changelog

## Release 0.17

-   Show upstream project in dependency graph

## Release 0.16

-   Fix
    [JENKINS-18888](https://issues.jenkins-ci.org/browse/JENKINS-18888) -
    Add AND of build results instead of OR

## Release 0.15

-   Fix
    [JENKINS-18889](https://issues.jenkins-ci.org/browse/JENKINS-18889) -
    BuildResultTrigger should not need to check for available nodes

## Release 0.14

-   Fix
    [JENKINS-18667](https://issues.jenkins-ci.org/browse/JENKINS-18667) -
    NullPointerException when saving job config

## Release 0.13

-   Fix
    [JENKINS-18931](https://issues.jenkins-ci.org/browse/JENKINS-18931) -
    Build is triggered incorrectly when a triggered build starts running

## Release 0.12

-   Fix
    [JENKINS-18389](https://issues.jenkins-ci.org/browse/JENKINS-18389) -
    BuildResult constantly triggers job

## Release 0.11

\* Fix poll with at least two checked jobs

## Release 0.10

\* Fix
[JENKINS-17641](https://issues.jenkins-ci.org/browse/JENKINS-17641) -
Unknown field 'logEnabled' in org.jenkinsci.lib.xtrigger.XTriggerCause

## Version 0.9

\* Fix
[JENKINS-14580](https://issues.jenkins-ci.org/browse/JENKINS-14580) -
Configuration of Buildresult-Trigger remains unchanged, when saved.

## Version 0.8 (Jenkins 1.461+)

\* Fix
[JENKINS-13746](https://issues.jenkins-ci.org/browse/JENKINS-13746) -
Buildresult trigger plugin does not support hierachical folders  
\* Fix Security issues

## Version 0.7

\* Fix the restriction to READ elements

## Version 0.6

\* Fix
[JENKINS-13182](https://issues.jenkins-ci.org/browse/JENKINS-13182) -
Add parent job name to the list of multi-configuration project child
jobs

## Version 0.5

\* Migrate to xtrigger-lib 0.8

## Version 0.4

\* Updated parent version to 1.409 so it can be used in a LTS version

## Version 0.3

\* Fix Button labels

## Version 0.2

\* Changed detection processing, based on build number

## Version 0.1

\* Initial version
