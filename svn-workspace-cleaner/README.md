Automatically removes SVN modules from workspaces when the modules are
removed from the job's SVN configuration.

Actually, any folder in the workspace root which is *not* configured as
an SVN module but contains a `.svn` folder will be removed.

## Configuration

To enable for a job, check "Clean up unused Subversion modules" under
Build Environment.

## Change log

### 1.1 (August 26, 2014)

-   Added support for removing unused Subversion modules in
    subdirectories of the build workspace.

### 1.0 (May 11, 2012)

-   First public release.
