Add BitKeeper support to Jenkins  
This BitKeeper plugin supports polling, checkout and changeset parsing.

For polling, the plugin queries the parent repo for the latest CSETKEY.
Any change there triggers a build.

For checkout, there is a configuration option to use 'pull' or 'clone'
In a clean workspace, a clone is always performed. For pull, the
repository is preserved between runs, and only a pull is performed. If
'pull' is not used, the target repository directory is deleted before
performing a new clone.

ChangeSet parsing is done with a custom 'log' format. It tracks
individual changesets, and retrieves the comment and user associated
with the changeset. It does not yet display the file names that were
changed in a changeset.

Tagging the parent repo via Jenkins is not supported.

## Change Log

##### Version 1.5 (Jan 27, 2010)

-   Update code for more recent Hudson

##### Version 1.4 (Jun 24, 2008)
