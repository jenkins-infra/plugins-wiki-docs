Adds a column showing last failed version that can be configured in
views.

This simple plugin adds a `Last Failure Version` selection when
configuring the columns for views. The idea is that it parses the
description of the last failed build for \[version\] and uses the text
after that as the version number of the build. It also shows the date
the event happened on (rather then the time since the last one). If the
build description does not have a version number in it then it shows the
Jenkins build number.

To set the build description use [Description Setter
Plugin](https://wiki.jenkins.io/display/JENKINS/Description+Setter+Plugin).

## Changelog

##### Version 1.1 (02/Nov/2011)

-   JENKINS-11853

##### Version 1.0 (25/Nov/2009)

-   Initial release.
