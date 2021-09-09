| Plugin Information                                                                                      |
|---------------------------------------------------------------------------------------------------------|
| View Queue cleanup [on the plugin site](https://plugins.jenkins.io/queue-cleanup) for more information. |

Older versions of this plugin may not be safe to use. Please review the
following warnings before using an older version:

-   [Reflected XSS
    vulnerability](https://jenkins.io/security/advisory/2020-03-25/#SECURITY-1724)

Remove stalled items waiting in Jenkins queue.Plugin allows
administrator to configure queue wait timeout and item regex pattern.
All items matching *pattern* and waiting longer than *timeout* hours
will be removed from the queue.

Operation of the cleanup task is logged in
`org.jenkinsci.plugins.queuecleanup`. Task checking period can be
configured using
`org.jenkinsci.plugins.queuecleanup.QueueCleanup.period` (default 1h).
