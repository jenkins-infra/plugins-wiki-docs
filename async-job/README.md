Library plugin for custom job types that model external asynchronous
processes

This is a library plugin, meaning it doesn't expose user-visible
features by itself. Instead, it's meant to be used by other plugins as a
dependency.

This plugin defines the `AsyncJob/AsyncRun` classes, which are abstract
subtypes of [Job](http://javadoc.jenkins-ci.org/byShortName/Job) and
[Run](http://javadoc.jenkins-ci.org/byShortName/Run). These subtypes are
convenient for modeling asynchronous executions that are happening
outside Jenkins. Unlike
[AbstractBuild](http://javadoc.jenkins-ci.org/byShortName/AbstractBuild),
where the duration of a build is tied to a life of an
[Executor](http://javadoc.jenkins-ci.org/byShortName/Executor) thread,
the completion of `AsyncBuild` is set by invoking a callback
`AsyncBuild.markCompleted()`. Because of this, a `AsyncBuild` can stay
in the "building" state across Jenkins restarts.

To make this extension possible, we bend Jenkins core a bit. As far as
the core is concerned, `AsyncBuild` completes right away, but it fakes
various state retrieval getter methods to make it look like it's still
in progress. This will likely confuse some other plugins, but we hope to
improve this faking as we go.

See
[`TestAsyncJob`](https://github.com/jenkinsci/async-job-plugin/blob/master/src/test/java/org/jenkinsci/plugins/asyncjob/TestAsyncJob.java)
and
[`TestAsyncRun`](https://github.com/jenkinsci/async-job-plugin/blob/master/src/test/java/org/jenkinsci/plugins/asyncjob/TestAsyncRun.java)
in the `src/test/java` for an example of how to use this plugin. To test
it in action, run `mvn -Dtest=Main test`, wait for the line "Started
SocketConnector@0.0.0.0:8888" to appear, and then open
<http://localhost:8888/>

# Changelog

### Version 1.0 (Oct 26, 2012)

-   Initial release
