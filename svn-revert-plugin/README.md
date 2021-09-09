Automatically reverts SVN commits for a build if build status is changed
from successful to unstable.

Commits are only reverted if all files in the commit can be reverted,
and if no files in the commit are changed during the build.

## Known limitations

-   It currently only works for jobs with a **single module**, or with
    multiple modules from the **same repository**.
-   If version controlled files are **changed** in the workspace, they
    may be **committed** when files are reverted.

## Configuration

To enable for a job, add (or check) the post-build action "Revert
commits that breaks the build".

To disable reverting of multiple commits, check the option "Revert even
if failing build contains multiple commits" in the global Jenkins
configuration.

## Change Log

### 1.3 (September 10, 2012)

-   Claim plugin integration is optional, the plugin is no longer a
    required dependency

### 1.2 (September 5, 2012)

-   Added option to revert changes only if a broken build contains
    exactly one commit

### 1.1 (August 29, 2012)

-   Builds with a commit having "revert" somewhere in the commit message
    will no longer revert anything

### 1.0 (May 11, 2012)

-   First public release
