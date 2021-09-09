## About

The Compress Build Log Plugin allows to configure jobs to have their
build logs compressed. For a long time, Jenkins has supported showing
gzipped build logs on the UI and through its APIs, but had no facility
to compress build logs. This plugin implements that.

## Configuring build log compression

In a job configuration, check "Compress Build Log" and save. You're
done! From then on, when builds finish, their build log will be
compressed to a `log.gz` file, after which the original `log` file will
be removed. Jenkins will transparently access the `log.gz` file when the
build log is viewed or downloaded.

## Pipeline Compatibility

From version 1.1, the Compress Build Log Plugin supports compressing
full pipeline build logs.

Note: [Pipeline: Job](https://plugins.jenkins.io/workflow-job) plugin
prior to version 2.26 stored per-step build logs. This plugin does not
support compressing these, only the main log file. As of version 2.26
there is now only 1 log file for pipeline jobs.

It can be configured either through the UI, or by
adding `compressBuildLog()` to the `properties()` defined in the
Pipeline DSL or Jenkinsfile.

Changes effective immediately

Due to how this plugin is implemented, the change to the property will
be effective immediately, so that the current build's log will be
compressed after it completes. This is different from some other
properties that only take effect for subsequent builds (e.g. defining
build parameters).

## Known Issues

Some plugins may assume that the build log is a text file and just
append to it. If that happens after this plugin rewrites the build log,
the `log.gz` file will contain invalid contents. Examples:

[ JENKINS-24171](https://issues.jenkins.io/browse/JENKINS-24171) -
Getting issue details... STATUS

As of Pipeline: Job plugin version 2.26, this plugin appears to be
broken

[ JENKINS-54678](https://issues.jenkins.io/browse/JENKINS-54678) -
Getting issue details... STATUS

## Changelog

### Version 1.2 (2017-08-14)

-   **Requires Jenkins 2.7.4**
-   Add support for compressing full Pipeline build logs (but not
    per-step logs)
-   Add `compressBuildLog()` symbol for use in Pipeline DSL
-   Add support for compressing the logs of matrix configuration builds
    (i.e. those doing the actual work)

### Version 1.1 – release was skipped

### Version 1.0 (2014-10-13)

-   Initial release to address the request [
    JENKINS-2551](https://issues.jenkins.io/browse/JENKINS-2551) -
    Getting issue details... STATUS
