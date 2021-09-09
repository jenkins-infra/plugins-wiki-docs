This plugin integrates [Bazaar](http://bazaar-vcs.org/) version control
system to Jenkins. The plugin requires the Bazaar binary (bzr) to be
installed on the target machine.

With this plugin, you can designate a Bazaar repository as the
"upstream" repository. Every build will then run "bzr pull" to bring the
tip of this upstream repository. In a similar manner, polling will check
if the upstream repository contains any new changes, and use that as the
triggering condition of the new build.

## Changelog

#### Version 1.22 (Feb 19, 2013)

-   Checkboxes for "Clean Tree" and "lightweight checkout" were not
    correctly showing as ticked (thanks to Ryan Herbert for the patch)

#### Version 1.21 (October 12, 2012)

-   Fix possible Null Pointer Exception when failing to get current
    remote revision

#### Version 1.20 (August 27, 2012)

-   Do a lightweight checkout instead of a heavyweight checkout
-   Fix bug: lightweight checkout "update" would always fail as bzr
    update didn't accept a repository argument. Switch to using bzr
    update followed by bzr switch. This should massively improve
    performance for those not doing a full branch.
-   Remove "Clean Branch" advanced option (replaced with "Clean Tree"
    option)
-   Add a "Clean Tree" advanced option. This will run "bzr clean-tree
    --quiet --ignored --unknown --detritus", preserving the .bzr
    directory but doing the equivalent of wiping the workspace (starting
    with a fresh slate). This should massively improve performance for
    projects that do not have a clean build.
-   Clarify that Loggerhead is the repository browser used by Launchpad,
    and have a complete example of how to configure it.

#### Version 1.19 (July 2, 2012)

-   Clarify license in source files
-   run "bzr revert" after a pull, as if you have a directory that is
    removed and re-added while having unknown files in said directory
    (e.g. build artifacts), you would end up in a very bad place (this
    is a BZR bug, so we work-around it with a "bzr revert").
-   add a README file in sources, update maintainers list in pom.xml

#### Version 1.18 (June 28, 2012)

-   UI fix for checkout option
    ([JENKINS-12261](https://issues.jenkins-ci.org/browse/JENKINS-12261))
-   Auto-recover from corrupt BZR branches (e.g. bzr branch/checkout
    killed at inopportune moment) by cleaning the workspace and trying
    again (this is now default behaviour, best used with the Jenkins SCM
    retry count feature being \> 1)
-   New maintainer! Stewart Smith (me!)

#### Version 1.17 (Aug 11, 2011)

-   Fix file descriptor leak in parsing ChangeLog.
-   Added support for lightweight checkouts.

#### Version 1.16 (Feb 24, 2011)

-   Rerelease 1.15 to properly set required Jenkins version.

### Version 1.15 (Feb 19, 2011)

-   Fixed an issue with class cast in BazaarTagListner
    ([JENKINS-8519](http://issues.jenkins-ci.org/browse/JENKINS-8519))
-   Extract email address of the committer and set it for user if it's a
    new one
    ([JENKINS-8575](http://issues.jenkins-ci.org/browse/JENKINS-8575))

### Version 1.10 (Jan 9, 2011)

-   Fixed an issue with parsing of revno for merge revisions
    ([JENKINS-8454](http://issues.jenkins-ci.org/browse/JENKINS-8454))
-   Add tag action

### Version 1.9 (Jan 5, 2011)

-   Add RepositoryBrowser with Loggerhead and OpenGrok implementation
    ([JENKINS-7905](http://issues.jenkins-ci.org/browse/JENKINS-7905),
    [JENKINS-7044](http://issues.jenkins-ci.org/browse/JENKINS-7044))
-   Fixed empty build changelog issue when using "clean build" option
    ([JENKINS-6761](http://issues.jenkins-ci.org/browse/JENKINS-6761))
-   Fixed an issue with author parsing
    ([JENKINS-6510](http://issues.jenkins-ci.org/browse/JENKINS-6510))
-   Add BZR\_REVISION and BZR\_REVID env var during build.
    ([JENKINS-4985](http://issues.jenkins-ci.org/browse/JENKINS-4985))

### Version 1.6

-   Don't set master env variables on slaves for bazaar's getRevId;
    parse only stdout when running revision-info -d, as stderr may get
    warnings.

### Version 1.5

-   Updated plugin to use newer SCM API
-   Fixed an issue with bzr probing on cloud-based builders where the
    system needs to determine if it needs to create a builder, so it
    doesn't have a builder, so it can't test against the state of the
    workspace on the builder.

### Version 1.4

-   Patch from zigarn. Prunes extraneous revision from changeset list.
-   Fixes NPE on commit without changes. Patch from zigarn.

### Version 1.3

-   Updated plugin to use revision id's instead of revision numbers to
    determine if a revision should be built or not.

### Version 1.0

-   Initial version
