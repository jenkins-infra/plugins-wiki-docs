  

Adds a Marathon Deployment post-build item that updates an application
within a target Marathon instance.This can also be used within a
workflow or pipeline plugin job.

# Background

Marathon is a production-grade container orchestration platform for
Mesosphere's Datacenter Operating System (DCOS) and Apache Mesos.
Marathon is a meta framework: you can start other Mesos frameworks such
as Chronos or Storm with it to ensure they survive machine failures. It
can launch anything that can be launched in a standard shell. In fact,
you can even start other Marathon instances via Marathon.

# Requirements

This plugin requires a "marathon.json" file within a Job's working
directory. It is recommended that this file be present within a
project's code repository.

``` syntaxhighlighter-pre
{
    "id": "/product/service/myApp",
    "cmd": "env && sleep 300",
    "cpus": 0.25,
    "mem": 16.0
}
```

# Workflow/Pipeline Plugin Support

This plugin can be called as marathon(...) within a workflow job.

``` syntaxhighlighter-pre
marathon(
    url: 'http://marathon-instance',
    id: 'someid',
    docker: 'mesosphere/jenkins-dev')
```

url is required and this still depends on a local "marathon.json" file.

# Changelog

See [Release
Notes](https://github.com/jenkinsci/marathon-plugin/releases) in the
github wiki.
