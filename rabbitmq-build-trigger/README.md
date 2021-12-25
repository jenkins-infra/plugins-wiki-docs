# Description

This plugin triggers build using remote build message in RabbitMQ queue.

# Usage

This plugin needs [RabbitMQ Consumer
Plugin](https://wiki.jenkins.io/display/JENKINS/RabbitMQ+Consumer+Plugin).
It would be installed by dependency for this plugin. Then you need to
configure it before using this plugin.

If you install this, **RabbitMQ Build Trigger** setting is added into
your job project's build trigger section. please enable it then set your
token. So build would be triggered if appropriate application message
arrives.

Also adds **Publish build result to RabbitMQ** to Post-build Actions in
your job's configuration. If you set this action, build result message
is published to your specified exchange or queue in RabbitMQ. Published
message is the below:

A published message has 3 properties.

``` syntaxhighlighter-pre
content_type: application/json
app_id: remote-build
routingkey: ROUTINGKEY or org.jenkinsci.plugins.rabbitmqbuildtrigger
```

And has 1 key in message header.

``` syntaxhighlighter-pre
jenkins-url: JENKINS_ROOT_URL
```

``` syntaxhighlighter-pre
{
    "project": "PROJECTNAME",
    "number": "BUILDNUMBER",
    "status": "SUCCESS|FAILURE|UNSTABLE.."
}
```

# Application Message Format

A message must have two properties.

``` syntaxhighlighter-pre
content_type: application/json
app_id: remote-build
```

``` syntaxhighlighter-pre
{
  "project": "RPROJECTNAME",
  "token": "TOKEN",
  "parameter": [
    {
      "name": "PARAMETERNAME",
      "value": "VALUE"
    },
    {
      "name": "PARAMETERNAME2",
      "value": "VALUE2"
    }
  ]
}
```

name in each parameters is compared with existing parameter name by
case-insensitive.

# License

MIT License.

# Version history

## Version 2.5 (10/12/2017)

-   [PR\#5](https://github.com/jenkinsci/rabbitmq-build-trigger-plugin/pull/5): Add
    NullPointerException protection to the getProjectName in
    RemoteBuildTrigger
-   [PR\#7](https://github.com/jenkinsci/rabbitmq-build-trigger-plugin/pull/7): Workflow
    Job compatibility

## Version 2.4 (10/12/2017)

-   Deployment failed. skip.

## Version 2.3 (08/19/2014)

-   Add tests
-   Bump rabbitmq-consumer to 2.5
-   Bump maven-release-plugin to 2.5
-   Add dependency: Junit and JMockit
-   Remove feature which publishes message to queue directly
    -   Publisher supports exchange type broker only
-   Trigger build with no parameter in message
-   Add routing key field to job config
    -   If empty, default key will be used
-   Add Jenkins URL to published message header
    -   Key: "jenkins-url"

## Version 2.2 (03/24/2014)

-   Bumped consumer-plugin to 2.2
-   Bumped Java to 1.6

## Version 2.1 (01/27/2014)

-   Bumped consumer-plugin to 2.1
-   Bumped Jenkins to 1.532.1

## Version 2.0 (01/14/2014)

-   Bumped consumer-plugin to 2.0
-   Replace old interfaces to new one.

## Version 1.9 (07/23/2013)

-   Bumped consumer-plugin to 1.9

## Version 1.8 (07/18/2013)

-   Bumped consumer-plugin to 1.8
-   Add feature: publish message to queue directly

## Version 1.7 (07/17/2013)

-   Bumped consumer-plugin to 1.7
-   Add RemoteBuildPublisher

## Version 1.6 (05/30/2013)

-   Bumped consumer-plugin to 1.6
-   Improve locking opportunity

## Version 1.5 (05/30/2013)

-   Bumped consumer-plugin to 1.5
-   More tolerant behavior on empty token

## Version 1.4 (04/16/2013)

-   Bumped consumer-plugin to 1.4
-   Cleanup logging messages

## Version 1.3 (04/09/2013)

-   Bumped consumer-plugin to 1.3

## Version 1.2 (04/09/2013)

-   Fix "Cannot update token" issue.
-   Bumped consumer-plugin to 1.2

## Version 1.1 (04/01/2013)

Re-release

## Version 1.0 (04/01/2013)

Initial release
