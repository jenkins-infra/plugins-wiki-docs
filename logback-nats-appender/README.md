# Overview

Provides the ability to send logs to
[LOGBack](https://logback.qos.ch/) and off-load to an
external [NATS](https://nats.io/) pub/sub topic.

# How to use it

This is a pure library plugin which includes the following
dependencies:  
  

-   [LOGBack](https://search.maven.org/#artifactdetails%7Cch.qos.logback%7Clogback-classic%7C1.2.3%7Cjar) classic
-   [LOGBack nats
    appender](https://search.maven.org/#artifactdetails%7Ccom.gerritforge%7Clogback-nats-appender%7C0.2.2%7Cjar)

-   [NATS Java
    client](https://search.maven.org/#artifactdetails%7Cio.nats%7Cjnats%7C1.0%7Cbundle)

It does not provide any end-user functionality but it is designed to be
used as a dependency on other plugins that are willing to post  
events through LOGBack.  
  
See below a sample list of plugins that are providing events to
LOGBack:  
  
- [Statistics
Gatherer](https://wiki.jenkins.io/display/JENKINS/Statistics+Gatherer+Plugin)

# How to configure a NATS appender in LOGBack

LOGBack assumes that you have a logback.xml configuration in your
classpath.

See below a minimal logback.xml configuration that would send all the
logging events to the output console and to a NATS topic called
'jenkins' to a local broker running on the localhost at port 4222.

**config.xml**

``` syntaxhighlighter-pre
<configuration>
    <appender name="NATS" class="com.gerritforge.logback.nats.NatsTopicAppender">
        <url>nats://localhost:4222</url>
        <topic>jenkins</topic>
    </appender>
 
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
      <!-- encoders are assigned the type
           ch.qos.logback.classic.encoder.PatternLayoutEncoder by default -->
      <encoder>
        <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
      </encoder>
    </appender>

    <root level="INFO">
        <appender-ref ref="STDOUT"/>
        <appender-ref ref="NATS"/>
    </root>
</configuration>
```

 

 

 
