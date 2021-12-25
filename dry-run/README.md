This plug-in makes it possible to show all the job tasks (builders,
publishers, ...) to be executed as part of a build job.

# Features

This plugin enables you to run your job in a dry-run mode.  
If build step are dry-run aware (implements DryRun extension point), the
dry-run execution is delegated to the build step.  
At the moment, the [Gradle
Plugin](https://wiki.jenkins.io/display/JENKINS/Gradle+Plugin) and the
[xUnit Plugin](https://wiki.jenkins.io/display/JENKINS/xUnit+Plugin)
provide the dry-run feature.  
And we strongly recommend other plugins to implement the DryRun
extension point.

# Changelog

## 0.9

\* Fix
[JENKINS-15171](https://issues.jenkins-ci.org/browse/JENKINS-15171) -
The run button must respect the configured rights

## 0.8

\* Add a default Jenkins Result as SUCCESS for plugin using dry-un

## 0.7

\* Fix dry-run builders

## 0.6

\* Add a job property (Enable to choice different types of dry-run for
the the job: runlisteners, buildwrappers, builders, ...)

## 0.5

\* Remove the dry-run for the maven job type (the maven job type Jenkins
implementation is not suitable for a well dry-run)

## 0.4

\* Added dry-run for publishers

## 0.3

\* Added a badge action to the build history

## 0.2

\* Delegate dry-un to the build step if the build step extends DryRun
extension point.

## 0.1

\* Initial version
