This plugin forces the built-in SVNKit library to use the Subversion 1.4
working copy format (instead of the most recent one it supports).

# Description

As of version 1.243, Hudson now uses Subversion 1.4 compatible format
when creating a new workspace, while still supporting Subversion 1.5
compatible format if it's already there. This eliminates the need for
the SVNCompat14 Plugin.

As of version 1.238, Hudson started to bundle SVNKit 1.2.0-beta-2 to
support svn:// access to Subversion 1.5 servers.

This also meant that working copies created by Hudson when checking out
were in the version 1.5 working copy format. This caused problems, if a
build process involved some external tools that were still based on the
Subversion 1.4.x line (e.g. "Client too old" warnings, see comments in
[issue 1856](https://hudson.dev.java.net/issues/show_bug.cgi?id=1856)).
Updating these external tools did solve the problems, but sometimes this
was not an option.

-   When this plugin is installed, SVNKit will act as a Subversion 1.4
    client.
-   To return to Hudson's default behaviour (i.e. let SVNKit choose the
    most recent working copy file format it supports), just uninstall
    the plugin.
-   This plugin has no user interface - you won't notice any new GUI
    gagdet.
-   Currently, this is a global setting, affecting all projects hosted
    within a single Hudson instance. 

# Changelog

Release 1.1 (2011-11-19)

-   JENKINS-11805

Release 1.0

-   Initial version, based on the `svncompat13` plugin by [Jean-Baptiste
    Quenot](mailto:jbq@caraldi.com).
