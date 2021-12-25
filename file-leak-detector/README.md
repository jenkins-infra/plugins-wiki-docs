Runtime diagnosis tool for "too many open files" problem.This plugin
watches file descriptor open/close activities of JVM and allow you to
see the list of what's currently opened, and Java call stack that opened
the file. If you are suffering from the [too many open
files](https://wiki.jenkins.io/display/JENKINS/I%27m+getting+too+many+open+files+error)
problem, this report enables the developers to fix the leak.

# Usage

This plugin adds "Open File Handles" item in the "Manage Jenkins" page.
Go to this page and click "activate" button to activate the monitoring.
Once this is done, a Java agent is installed on the JVM and starts
monitoring new file open/close activities. Revisit the "Open File
Handles" page and you'll see the currently opened files.

To help the developers, activate this, and let Jenkins run for a while,
then come back and capture the report and attach it to a ticket. Do get
a few reports with intervals of 10 mins or so, so that we can
distinguish real leaks from false positives.

# Changelog

### Version 1.6 (Nov 2, 2018)

-   Avoid killing Jenkins when the arguments are wrong \[ [
    JENKINS-53394](https://issues.jenkins.io/browse/JENKINS-53394) -
    Getting issue details... STATUS \]

### Version 1.5 (Apr 16, 2018)

-   Add support for detecting file descriptors used by the following
    resources: 
    -   Files opened via java.nio.channels.FileChannel\#open
    -   Selectors opened via `java.nio.channels.Selector#open`
    -   Pipes opened via `java.nio.channels.Pipe#open` (Unix only)

### Version 1.4 (Jun 08, 2015)

-   Metadata fixed.

### Version 1.3 (Sep 11, 2013)

-   ?

### Version 1.2 (Apr 3, 2012)

-   Improved the compatibility with the monitoring plugin by forking a
    separate JVM to do the attachment.

### Version 1.1 (Apr 3, 2012)

-   First public release
