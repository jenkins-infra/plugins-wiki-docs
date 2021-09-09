  

  
Shows past and future builds in a calendar view.

[TABLE]

## Features

-   Provides a month, week and day view of past and future builds
-   Indicates status of past builds by color
-   Displays when future scheduled builds will happen
-   Shows estimated duration of future scheduled builds
-   Configurable date and time settings

## Usage

### 1. Create a new view

Select the *Calendar View* option and give the view a name.

[TABLE]

### 2. Configure the view

Select the jobs whose builds should be displayed in the view and
customize the view to your liking:

Tip: to be more flexible in selecting the jobs use the [View Job Filters
Plugin](https://github.com/jenkinsci/view-job-filters-plugin).

[TABLE]

### 3. Open the view

This will show all the past and future builds for the jobs that you have
selected in the previous step.

Note: there is currently no auto refresh available.

#### Paste builds

Past builds will appear in four different colors:

-   *Successfull* builds will be *blue*
-   *Failed* builds will be *red*
-   *Unstable* builds will be *yellow*
-   *Aborted* builds will be *dark gray*

Clicking on a past build will lead to that specific build's detail page.

#### Future builds

*Future* builds are *light gray with a dashed border*.

Clicking on a future build will lead to the job's detail page.

[TABLE]

## Development

Clone the repository then execute the following in the project's root
directory:

``` syntaxhighlighter-pre
$ mvn install
```

This will install Java dependencies as well as a local node installation
and npm dependencies.

You can now run the plugin in a Jenkins instance by executing the
following:

``` syntaxhighlighter-pre
$ mvn hpi:run
```

## Changelog

v0.3.1 (released 2018-09-04)

-   Fix: [\[JENKINS-53312\]](https://issues.jenkins-ci.org/browse/JENKINS-53312) Future
    scheduled builds for pipeline jobs were missing

v0.3.0 (released 2018-08-24)

-   Feature: add option to show week numbers
-   Feature: navigate to day and week views via day and week numbers
-   Feature: show successful builds as green when the [Green Balls
    Plugin](https://plugins.jenkins.io/greenballs) is installed
-   Feature: highlight selected builds
-   Fix: delay popups to prevent them from showing up unwanted
-   Fix: scroll to builds that are outside of viewport when navigating
    back and forth between builds
-   Fix: builds that last the entire visible time range are now included
-   Fix: start time for future builds used current seconds instead of
    always starting at zero seconds
-   Fix: scheduled builds with hashes in cron expression had wrong start
    time
-   Fix: builds showed up as past and future builds while they were
    running

v0.2.1 (released 2018-08-06)

-   Fix: [\[JENKINS-52797\]](https://issues.jenkins-ci.org/browse/JENKINS-52797) ClassCastException
    for Matrix Projects
-   Fix: calcution of next start date was wrong when there were multiple
    cron expressions
-   Fix: builds overlapping the edge of the date range were not being
    shown

v0.2.0 (released 2018-07-25)

-   Feature: show popup with more information when hovering over a past
    or future build

v0.1.1 (released 2018-07-13)

-   Fix: special HTML characters in custom date/time formats were
    escaped twice
-   Fix: some typos and other minor issues in documentation
-   Fix: better validation for view configuration options

v0.1.0 (released 2018-07-11)

-   Initial release

## License

MIT License

## Links

-   [Jenkins
    CI](https://ci.jenkins.io/job/Plugins/job/calendar-view-plugin/) ([Blue
    Ocean](https://ci.jenkins.io/blue/organizations/jenkins/Plugins%2Fcalendar-view-plugin/branches))
-   [Github](https://github.com/jenkinsci/calendar-view-plugin)
-   [Plugin Site](https://plugins.jenkins.io/calendar-view)
-   JIRA: [Unresolved
    Issues](https://issues.jenkins-ci.org/issues/?filter=18648) \| [All
    Issues](https://issues.jenkins-ci.org/issues/?filter=18647)

  

  
