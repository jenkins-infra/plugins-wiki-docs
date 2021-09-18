
Remove stalled items waiting in Jenkins queue.Plugin allows
administrator to configure queue wait timeout and item regex pattern.
All items matching *pattern* and waiting longer than *timeout* hours
will be removed from the queue.

Operation of the cleanup task is logged in
`org.jenkinsci.plugins.queuecleanup`. Task checking period can be
configured using
`org.jenkinsci.plugins.queuecleanup.QueueCleanup.period` (default 1h).
