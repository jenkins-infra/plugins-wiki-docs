# Summary

This plugin provides a watch on upstream projects to trigger downstream
projects once all the upstream projects are build & have stable status.
Easier to join multiple project to trigger single downstream project.
This plugin can be used with Build Pipeline, Delivery Pipeline etc. It
solves complexity of merging pipeline flows from multiple branches to
single.

# Description

-   Trigger downstream projects based on build stability of multiple
    upstream projects.  
    Example: 'Job Z' will be triggered if and only if 'Job A', 'Job B'
    and 'Job C' are build and stable

![](docs/images/fanin.png)

-   Trigger can check stability of upstream jobs **recursively**.   
    Example: 'Job Z' will be triggered if and only if Job A, B, C, P1,
    P2, P3 and P4 are build and stable

![](docs/images/fanin-hierarchy.png)

-   Configuration is done on downstream job very simple. For downstream
    projects which depends on multiple upstream project to be build and
    stable.  
    Example: Following is the configuration for downstream project for
    it to trigger once both upstream projects F2, B2 are build stable

![](docs/images/job-fan-in-plugin.png)

Since the plugin keeps DependencyGraph intact, it is compatible with
delivery pipeline & Build pipeline.

# Important

This plugin can't detect if other Upstream projects were never build
after first trigger from any of the upstream project.

e.g. Consider Project A , B, C all have last build's A1, B1, C1 and all
are successful. Now if Project A was trigger and **Job A2** of Project A
was Successful So this will trigger Project Z **considering Project B
and Project C has last builds ****successful**. However if any of
Project B or C is currently running this will not trigger Project Z
until this run is completed and finishes successfully (Depending on your
trigger configuration)

This is a shortfall of this plugin.

# Release Notes

1.1.4    Fixed
issue: [JENKINS-52296](https://issues.jenkins-ci.org/browse/JENKINS-52296)
- Do not persist Upstream Job list and DependencyGraph

1.1.3    Fixed issue:
[JENKINS-40151](https://issues.jenkins-ci.org/browse/JENKINS-40151) -
JobFanIn plugin "FATAL: null java.lang.NullPointerException". when new
job is added as upstream dependency which never had build, Causing
trigger from other jobs to through null pointer

1.1.2    Fixed issue: [JENKINS-38267 - UI always shows default
configuration](https://issues.jenkins-ci.org/browse/JENKINS-38267)

1.1.1    Fixed issue: Downstream jobs get triggered even when parent
jobs are in queue

1.0       Initial release
