
Full screen dashboard view featuring job history, build queue, and
current status of jobs and nodes.

### Setting up

Open any Jenkins view, click **+** tab, select **Mission Control** view
type, change UI settings if needed and click **OK**.

*Note:* If Build History section is empty, reload Jenkins configuration
(**Manage Jenkins** -\> **Reload Configuration from Disk**).

### Screenshot

![](https://raw.githubusercontent.com/jenkinsci/mission-control-view-plugin/screenshots/Fullscreen.png){width="85%"
height="85%"}

### Changelog

#### 0.9.15 (September 17, 2019)

-   Merged [pull request
    \#7](https://github.com/jenkinsci/mission-control-view-plugin/pull/7)
    by [roel0](https://github.com/roel0) - Add links to jobs and builds

#### 0.9.14 (July 20, 2018)

-   Add links to job status buttons

#### 0.9.13 (October 24, 2017)

-   Filter jobs by full name (folder and job names)
    ([JENKINS-47527](https://issues.jenkins-ci.org/browse/JENKINS-47527))

#### 0.9.12 (July 27, 2017)

-   Merged [pull request
    \#6](https://github.com/jenkinsci/mission-control-view-plugin/pull/6) by [jnutzman](https://github.com/jnutzman) - Change
    filter to look in full job name instead of the base name

#### 0.9.11 (July 13, 2017)

-   Merged [pull request
    \#5](https://github.com/jenkinsci/mission-control-view-plugin/pull/5) by [jaggs6](https://github.com/jaggs6) -
    Fix incorrect display of jobs with names containing URL special
    characters

#### 0.9.10 (May 31, 2017)

-   Merged [pull request
    \#4](https://github.com/jenkinsci/mission-control-view-plugin/pull/4) by [willdeberry](https://github.com/willdeberry) - Add
    options to filter Build History and Job Status individually

#### 0.9.9 (February 13, 2017)

-   Merged [pull request
    \#3](https://github.com/jenkinsci/mission-control-view-plugin/pull/3)
    by [willdeberry](https://github.com/willdeberry) - Add hide options
    for each section

#### 0.9.8 (November 24, 2016)

-   Display disabled jobs in grey color

#### 0.9.7 (October 18, 2016)

-   Merged [pull request
    \#1](https://github.com/jenkinsci/mission-control-view-plugin/pull/1)
    by [SamDeBlock](https://github.com/SamDeBlock) - Better name for
    jobs in job status name list

#### 0.9.2 (August 11, 2016)

-   Add job filtering feature
    ([JENKINS-34373](https://issues.jenkins-ci.org/browse/JENKINS-34373)
    and
    [JENKINS-37179](https://issues.jenkins-ci.org/browse/JENKINS-37179))

#### 0.9.0 (May 3, 2016)

-   Display nodes as buttons
-   Add links to node buttons

#### 0.8.3 (January 7, 2016)

-   Add UI controls (font size, button and table row height, grid ratio,
    number of records to show in build history and build queue)
-   Add support for [CloudBees Folders
    plugin](https://wiki.jenkins-ci.org/display/JENKINS/CloudBees+Folders+Plugin)
-   Fix incorrect formatting of month and day in dates

#### 0.8.2 (December 28, 2015)

-   Initial release
