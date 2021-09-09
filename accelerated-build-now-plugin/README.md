The Jenkins Accelerated Build Now Plugin allows Jenkins users to launch
a project's build right away, even if the queue is long (moving it to
the top of the queue) and even if no executor is available (killing and
rescheduling builds not launched by "humans")

| Plugin Information                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------|
| View accelerated-build-now-plugin [on the plugin site](https://plugins.jenkins.io/accelerated-build-now-plugin) for more information. |

**This plugin is up for adoption.** Want to help improve this plugin?
[Click here to learn
more](http://localhost:8085/display/JENKINS/Adopt+a+Plugin "Adopt a Plugin")!

## How to install :

Download the [latest
release](https://github.com/Terracotta-OSS/accelerated-build-now-plugin/releases)
and use Jenkins installer advanced tab to upload and install it to
Jenkins.

## How to use :

When your Jenkins cluster is overloaded with jobs (a queue with 10+
builds, all the executors busy with nightly builds that take ages), you
know you will wait ages before the job you want to run effectively
starts running. Relax ! With the Accelerated Build Now Plugin, your job
will run right away !

-   The queue is full of automatically (not user launched) scheduled
    jobs, and the only executor available is busy ...

![](https://raw.github.com/Terracotta-OSS/accelerated-build-now-plugin/gh-pages/screenshots/queue_is_long.png)

-   You want your job maven-surefire to run ASAP, so you click on the
    Accelerated Build Now button

![](https://raw.github.com/Terracotta-OSS/accelerated-build-now-plugin/gh-pages/screenshots/accelerated_button.png)

-   Your maven-surefire job just got prioritized to the top of the queue
    and just started running (it had to kill the quartz job, but it
    rescheduled it already)

![](https://raw.github.com/Terracotta-OSS/accelerated-build-now-plugin/gh-pages/screenshots/job_running.png)

-   A nice rhyno badge was added to your build that got "acceleratedly
    built" ; if you click on it you will see the killed build got a
    killed rhyno badge

![](https://raw.github.com/Terracotta-OSS/accelerated-build-now-plugin/gh-pages/screenshots/build_prioritized.png)

![](https://raw.github.com/Terracotta-OSS/accelerated-build-now-plugin/gh-pages/screenshots/build_aborted.png)

## How does that work ?

When you click on the Accelerated Build Now button, the plugin will :

-   make sure the queue is not empty and all the executors are busy ( if
    not, it will normally schedule the build and exit)
-   sort the queue using a QueueSorter wrapping any existing QueueSorter
    (such as the Priority Sorter Plugin queue sorter)
-   look for any executors compatible with this job (checking labels)
    and running a job not scheduled by a "human" (SCM triggered, cron
    style triggered, etc..); if none is found, exit
-   if a compatible executor is found: abort the build (and re schedule
    it for later) and mark it as killed by the plugin, wait for the
    accelerated build to start, mark it as accelerated

## Authors :

This plugin was developed by [Terracotta](http://www.terracotta.org/),
by

-   [Anthony Dahanne](https://github.com/anthonydahanne/)

## License

Apache 2 licensed (see LICENSE.txt)
