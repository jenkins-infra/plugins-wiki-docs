# Kafkalogs Plugin

This plugin adds support for streaming build console output to a kafka
server and topic. 

### Using in pipeline workflows

The build wrapper can be used to ship logs to kafka server and topic.

E.g., pipeline job "test" with build 40 ran with the following pipeline
script:

**Usage**

``` syntaxhighlighter-pre
node {
    wrap([$class: 'KafkaBuildWrapper', kafkaServers: 'host1.example.com:9092,host2.example.com:9092', kafkaTopic: 'buildlogs', metadata:'Other info to send..']) {
        echo 'Hello World'
        echo 'Oh Hello'
        echo 'Finally'
    }
}
```

Or you can use `withKafkaLog` structs syntax:

**Usage**

``` syntaxhighlighter-pre
node {
    withKafkaLog(kafkaServers: 'host1.example.com:9092,host2.example.com:9092', kafkaTopic: 'buildlogs', metadata:'Other info to send..') {
        echo 'Hello World'
        echo 'Oh Hello'
        echo 'Finally'
    }
}
```

 

Would produce messages on kafka topic "buildlogs":

**Output**

``` syntaxhighlighter-pre
{"build":40,"job":"test","message":"Hello World","metadata":"Other info to send.."}
{"build":40,"job":"test","message":"Oh Hello","metadata":"Other info to send.."}
{"build":40,"job":"test","message":"Finally","metadata":"Other info to send.."}
```

### Contribute

Fork me on Github at <https://github.com/jenkinsci/kafkalogs-plugin>

 
