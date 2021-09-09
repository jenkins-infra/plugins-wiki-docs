# Description

This plugin connects to RabbitMQ, consumes messages in queue, then
notifies it to listener.

Causion

This plugin has global configuration only, so any features for user are
not provided. You should need other plugins to provide features to user.
c.f. [RabbitMQ Build Trigger
Plugin](http://localhost:8085/display/JENKINS/RabbitMQ+Build+Trigger+Plugin)

# Develop listener plugin

This plugin provides convenient extension point to listen application
messages. To implement listener to your plugin, you can user the blows:

**pom.xml**

``` syntaxhighlighter-pre
<project>

  <dependencies>
    <dependency>
      <groupId>org.jenkins-ci.plugins</groupId>
      <artifactId>rabbitmq-consumer</artifactId>
      <version>VERSION</version>
    </dependency>
  </dependencies>

</project>
```

**org.jenkinsci.plugins.rabbitmqconsumer.extensions**

``` syntaxhighlighter-pre
public abstract class MessageQueueListener implements ExtensionPoint {
    String getName();
    String getAppId();
    void onBind(String queueName);
    void onUnbind(String queueName);
    void onReceive(String queueName, String contentType, Map<String, Object> headers, byte[] body);
}
```

# Publish messages from your plugin

This plugin registers extension to publish messages to RabbitMQ.  
If you want to use them from your plugin, please see the implementation
of [RabbitMQ Build Trigger
Plugin](http://localhost:8085/display/JENKINS/RabbitMQ+Build+Trigger+Plugin).

### Implementation class

-   org.jenkinsci.plugins.rabbitmqbuildtrigger.RemoteBuildPublisher

### Extension

-   org.jenkinsci.plugins.rabbitmqconsumer.extensions.MessagePublisher

# Customize server operation

This plugin provides extension to customize server operation.

### Extension

-   org.jenkinsci.plugins.rabbitmqconsumer.extensions.ServerOperation

# Remote API

Since 2.7, this plugin has [Remote access
API](http://localhost:8085/display/JENKINS/Remote+access+API). You can
get plugin status via API.

|              |                                |
|--------------|--------------------------------|
| **Endpoint** | /plugin/rabbitmq-consumer/api/ |

# Notice

This plugin does not generates any queues in RabbitMQ. So you should
prepare them by yourself.

# License

MIT License.

# Version history

## Version 2.8 (01/24/2018)

-   [ JENKINS-49083](https://issues.jenkins.io/browse/JENKINS-49083) -
    Getting issue details... STATUS
-   Drop support Jenkins 1.x
-   Add RabbitMQ connection monitor as AdministrativeMonitor
-   Set system security to callback threads

## Version 2.7 (11/06/2014)

-   Bump amqp-client to 3.4.1
-   Cleanup code
-   Change logger to SLF4J
-   Add remote API

## Version 2.6

-   Skip

## Version 2.5 (08/07/2014)

-   Catch exception when called extension interfaces
-   Configure the period of supervisory timer
-   Fix NPE during reconnection

## Version 2.3-2.4

-   Sorry, missed release. no exist in repository.

## Version 2.2 (03/24/2014)

-   Refactor shutdown logic
-   Bump Java to 1.6
-   Improve logs
-   Improve channel handling
-   Add extension to control channel

## Version 2.1 (01/27/2014)

-   Bumped Jenkins version to 1.532.1
-   Remove recursive reference
-   Stop Heartbeat setting
    -   should follow given setting from server
-   Fix unnecessary callback
-   Cleanup code
-   Add tests

## Version 2.0 (01/14/2014)

-   Fix NPE potential issue
-   Add new extension points to consume/publish message.
-   Deprecate interfaces
    -   1.0 style interfaces are no longer called. So you should not
        bump this easily.

## Version 1.9 (07/23/2013)

-   Fix: Service URI with userinfo is not valid in spite of fully
    following amqp uri spec.
    -   Isolate userinfo from Service URI
    -   Add new field to set username and password

## Version 1.8 (07/18/2013)

-   Add some interfaces for publish
    -   Add/Remove channle listener
    -   Setup method (Exchange declaration / Bind queue)
    -   Expand PublishResult

## Version 1.7 (07/17/2013)

-   Add publish feature

## Version 1.6 (07/11/2013)

-   Improve locking opportunity
-   Bumped amqp-client to 3.1.4

## Version 1.5 (05/30/2013)

-   Prevent to terminate connection when RuntimeException is raised in
    message handler

## Version 1.4 (04/16/2013)

-   Fix "Undelete queue item" issue
-   Fix "Never open channel" issue due to missing condition check
-   Improve channel update handling and logging messages

## Version 1.3 (04/09/2013)

-   Fix "Cannot update queue parameters" issue

## Version 1.2 (04/09/2013)

-   Fix "Parameters with checkbox cannot be saved" issue
-   Fix localization
-   Bumped amqp-client to 3.0.4

## Version 1.1 (04/01/2013)

Re-release

## Version 1.0 (04/01/2013)

Initial release
