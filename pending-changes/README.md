A plugin to detect changes not part of the most recent build

### Usage

The plugin adds a link to the sidepanel of projects and a column icon to
indicate pending changes. There you can view all changes made in SCM
after the last successful build. Currently only subversion is supported
but the plugin provides extension points for additional SCM
implementations. No configuration besides setting subversion options for
the project is necessary.

### Changelog

##### Version 0.3.0 (2013-02-25):

Added a tooltip to the column list view icon that lists all pending
changes, updated the icons to be more consistent, minor performance
enhancements

##### Version 0.2.0 (2013-01-29):

Added a list column icon to show when a job has pending changes.

##### Version 0.1.0 (2013-01-23):

Initial release. Basic functionality for subversion.
