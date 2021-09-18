Eliminate running processes before or after build.

With this plugin user can decide to clean the processes either before or
after the build. It can either kill all processes started by the user
that runs Jenkins agent (except of that process) or all child processes
of Jenkins agent (note this will not affect processes running on
background).

Note the plugin can decide not to perform the cleanup in case there is a
chance it will affect other jobs on the same machine. In other words, it
will be skipped when there is another build running on the same slave.

 

## Changelog

## 2.0

Renew the plugin distribution after
[SECURITY-489.](https://issues.jenkins-ci.org/browse/SECURITY-489)

-   The *Groovy script process cleaner* is no longer supported by
    plugin.
    -   Upgrading from older version is safe in a sense the scripts are
        preserved for users to migrate them to different solutions but
        **scripts are no longer executed**.
