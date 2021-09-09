This plugin copies change log data to a later build when a build is
deleted.Whenever builds are deleted the change log data is lost too. If
you save some builds with "keep forever" you only retain the change log
of that particular build, but not other interim builds that have been
deleted. This plugin watches for deleted builds and copies the change
log data to the next existing build. It adds links to view the old
change log data in the build page sidebar and in the changes view for
projects/builds.

## Changelog

##### Version 1.7 (Oct 24, 2017)

-   [\[PR-1\]](https://github.com/jenkinsci/changelog-history-plugin/pull/1) Don't
    accumulate changelog entries on oldest build.

##### Version 1.6 (Aug 17, 2016)

-   [\[JENKINS-37131\]](https://issues.jenkins-ci.org/browse/JENKINS-37131) Wrong
    SVN plugin version dependency.
-   [\[JENKINS-37473\]](https://issues.jenkins-ci.org/browse/JENKINS-37473) Upgrade
    plugin pom to 2.13. 

##### Version 1.4 (Jun 22, 2016)

-   [\[JENKINS-34795\]](https://issues.jenkins-ci.org/browse/JENKINS-34795) You
    must override the newer overload of annotate.

##### Version 1.3 (Mar 29, 2011)

-   Update for Jenkins.

##### Version 1.2 (Jan 17, 2011)

-   Added Japanese translation.

##### Version 1.1 (Aug 19, 2009)

-   Add "More change log history" links in changes view for
    projects/builds.

##### Version 1.0 (Mar 6, 2009)

-   Initial release.
