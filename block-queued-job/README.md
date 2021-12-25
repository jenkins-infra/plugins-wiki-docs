## ﻿Description

Plugin for blocking/unblocking job in queue by some conditions
configured in this job.

**Features**

Built in conditions:

-   Block job when last build of defined target project is in building
    status
-   Block job when last build of defined target project has result

Note: conditions has **waterfall priority** so if "unblock" conditions
get matching first - job will be unblocked, if not - then next condition
will be verified.

Provides
[@ExtensionPoint ](https://wiki.jenkins.io/display/JENKINS/Extension+points)so
other plugins can provide other block/unblock features

## Changelog

[In git
repository](https://github.com/jenkinsci/block-queued-job-plugin/blob/master/CHANGELOG.md)

## Configuration

##### 1. Enable job property

a\) Open job configuration

![](docs/images/Screenshot_2015-04-28_16.40.46.png)

b\) Press checkbox "Block/Unblock task in queue"

![](docs/images/Screenshot_2015-04-28_16.44.14.png)

##### 2. Add conditions

![](docs/images/Screenshot_2015-04-28_16.47.19.png)

##### 3. Save job
