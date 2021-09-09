Simpler version of [Promoted Builds
Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Promoted+Builds+Plugin),
with only manual promotion of builds.

This plugin adds a `Promoted Builds` section in the main Jenkins
configuration page. Here you can configure the names of your promotion
levels and the icons to use in the Build History. All builds run after
the plugin is installed will show the promotion level on the build
status page, and users with "Update Run" permission will be able to
promote the build.

Unlike the [Promoted Builds
Plugin](http://localhost:8085/display/JENKINS/Promoted+Builds+Plugin),
this plugin defines metadata only; there is no action associated with
the promotion. It just shows the promotion level on the build page and a
badge icon in the Build History on the project page. You may use this
metadata however you like, such as using the Remote API to find
artifacts of a particular promotion level. The [Copy Artifact
Plugin](http://localhost:8085/display/JENKINS/Copy+Artifact+Plugin) can
also copy artifacts of a selected promotion level from other jobs.

Click the help icon for Promoted Builds in the main configuration page
for information on how to use the Remote API to query for promoted
builds, or how to promote builds that were run before installing the
plugin.

------------------------------------------------------------------------

## Change Log

##### Version 1.9 (Mar 29, 2011)

-   Japanese translation updates.

##### Version 1.8 (Feb 25, 2011)

-   Rerelease 1.7 to properly set required Jenkins version.

##### Version 1.7 (Feb 13, 2011)

-   Add configuration option for whether promotion to each level
    automatically marks the build as "keep forever".
    ([JENKINS-7284](https://issues.jenkins-ci.org/browse/JENKINS-7284))
-   When using [Copy Artifact
    Plugin](http://localhost:8085/display/JENKINS/Copy+Artifact+Plugin),
    check promotion level of parent build for maven or matrix project
    when copying artifacts from a particular maven module or matrix
    configuration.
    ([JENKINS-7900](https://issues.jenkins-ci.org/browse/JENKINS-7900))
-   Add ability to upload image files into JENKINS\_HOME/userContent
    directory from global config page.

##### Version 1.6 (May 12, 2010)

-   Avoid many exceptions in log when Copy Artifact plugin is not also
    installed.

##### Version 1.5 (May 8, 2010)

-   Fix setting in Copy Artifact build step so it shows the saved value
    for promotion level when returning to job config page.
-   Add support in Copy Artifact build step to get the promotion level
    from a build parameter or environment variable.

##### Version 1.4 (Apr 17, 2010)

-   Add support for selecting promoted builds with the [Copy Artifact
    Plugin](http://localhost:8085/display/JENKINS/Copy+Artifact+Plugin).

##### Version 1.3 (Apr 13, 2010)

-   Add Japanese localization
    ([JENKINS-6226](https://issues.jenkins-ci.org/browse/JENKINS-6226)).

##### Version 1.2 (Feb 10, 2010)

-   Update code for more recent Hudson.

##### Version 1.1 (Jul 14, 2009)

-   Set visibility of exported data to enable xpath query with depth=1
    instead of depth=2 (which exposes more data and slows down the
    query).

##### Version 1.0 (Jun 23, 2009)

-   Initial release.
