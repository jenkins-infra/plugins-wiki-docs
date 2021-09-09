Allows a job to be executed when no other jobs are running.

## Possible uses

Execute a backup job: because backup-plugin cannot be scheduled, then I
have created my own Jenkins backup script. To run it from Jenkins I
crated a 'maintenance' job that must execute when there are no other job
running, so this plugin can help perform this backup procedure.

## How it works

When this option is enabled, then for every build one pre-build and one
post-build steps are executed:

**pre-build steps**:

1.  The plugin will initiate a shutdown mode which means that no other
    jobs can be started.
2.  It waits until every job except this one has finished, unless it is
    indicated not to wait through optional flag. 
3.  Then it starts to execute the job.

**post-build steps** (executed always even if the build is not
succesful):

1.  Jenkins shutdown mode is canceled

## Version History

### Development

### Version 0.8 (Feb 4, 2015)

-   [issue \#26175](https://issues.jenkins-ci.org/browse/JENKINS-26175)
    Optional lenient mode added. If activated exclusive-execution job
    will not wait for currently running jobs to perform build steps
    (i.e. activate shutdown mode immediately).
-   [issue \#26351](https://issues.jenkins-ci.org/browse/JENKINS-26351)
    Spanish translation added.
-   [issue \#24854](https://issues.jenkins-ci.org/browse/JENKINS-24854)
    Shutdown mode is interrupted now if job is canceled in pre-build
    phase.
-   Fernando Miguélez becomes maintainer of the plugin

### Version 0.7 (Jul 31, 2011)

-   Major refactoring by Sam Tavakoli

### Version 0.6 (Feb 25, 2011)

-   Improve error handling
-   Translation update (Japanese)

### Version 0.2 (Apr 15, 2010)

-   Removed limitation of execution on master
-   Removed useless dependencies from pom.xml that create a huge hpi
    file

### Version 0.1 (Apr 13, 2010)

-   Initial release

Warning

Unfortunately the hpi file is huge (\~17 MByte)... sorry

-   Job must be executed on master
