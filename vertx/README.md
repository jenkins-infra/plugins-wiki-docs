[Vert.x](http://vertx.io/) embedder for Jenkins.

Reporting Bugs

Do **not** use Jira to report issues. Instead use [GitHub Issues for
this project](https://github.com/jenkinsci/vertx-plugin/issues). Feel
free to also ask questions via Issues, as comments on this page are not
monitored.

This plugin enables an embedded, clustered [Vert.x](http://vertx.io/)
instance within Jenkins. It exposes various events – such as run
completions, item creates and updates, etc. – as messages on the Vert.x
EventBus. It also allows verticles to act as
[QueueTaskDispatchers](http://javadoc.jenkins-ci.org/byShortName/QueueTaskDispatcher).

See the [README](https://github.com/jenkinsci/vertx-plugin#readme) and
[wiki](https://github.com/jenkinsci/vertx-plugin/wiki) for more
information.

## Requirements

Vert.x requires Java 7, therefore the Jenkins instance must be running
on Java 7. Given that support for Java 6 ends in about 3 months, this
shouldn't be a major concern.

## History

### 1.0.1 – 2012-Nov-24

[Issues closed for
1.0.1](https://github.com/jenkinsci/vertx-plugin/issues?milestone=1&state=closed)

### 1.0.0 – 2012-Nov-19

-   Initial release
-   Embeds Vert.x 1.2.3
