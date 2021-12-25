# Features

This plugin implements a text finder condition to be used by the [Run
Condition
Plugin](https://wiki.jenkins.io/display/JENKINS/Run+Condition+Plugin).  
This is a condition based on the [Text-finder
Plugin](https://wiki.jenkins.io/display/JENKINS/Text-finder+Plugin) with
some minor changes.

-   It always returns true on the first occurrence of the match,
-   The console log is checked before the files, if enabled.
-   If no files are found returns False.

# Change log

#### 0.1 (13/7/2012)

-   Initial release

Questions, Comments, Bugs and Feature Requests

Please post questions or comments about this plugin to the [Jenkins User
mailing list](http://jenkins-ci.org/content/mailing-lists).  
To report a bug or request an enhancement to this plugin please create a
ticket in JIRA.
