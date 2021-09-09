Adds a new list view, which allows to dynamically specify additional
filters.

| Plugin Information                                                                                                  |
|---------------------------------------------------------------------------------------------------------------------|
| View Dynamic Search View [on the plugin site](https://plugins.jenkins.io/dynamic-search-view) for more information. |

**This plugin is up for adoption.** Want to help improve this plugin?
[Click here to learn
more](http://localhost:8085/display/JENKINS/Adopt+a+Plugin "Adopt a Plugin")!

# About this plugin

Dynamic Search View allows setting of additional filters at the view’s
main page, which will be applied after clicking on the "Submit" button.
So, user is able to filter and search jobs without creation of new
Views.

Warning!

Current version of the plugin is a "proof of concept" and has several
significant issues (see below). They will be fixed in future versions.
Anyway, feel free to contribute...

# Usage

1.  Create a new view (version 0.1 - "SimpleSearchView")
2.  Configure the view as a typical ListView.
    1.  You can able to setup implicit filters and columns.
    2.  The plugin also supports standard JobFilter and ListViewColumn
        extensions
    3.  If you want to filter all jobs, just set a regexp filter with
        ".\*" mask
3.  Use your view
    1.  You can set additional filters at the view's main page
    2.  Filters will be updated after clicking on "Submit" button

The New View creation page:

![](docs/images/CreateView.png)

View with additional filters:

![](docs/images/MainPage.png)

 

# Version history

## Version 0.3.0 (Feb 27, 2018)

-   ![(info)](docs/images/information.svg) Update
    Jenkins core minimum requirement to 1.625.3
-   ![(info)](docs/images/information.svg) Cleanup
    minor issues reported by the recent Jenkins Test Harness

## Version 0.2.2 (09/27/2015)

-   ![(error)](docs/images/error.svg)
    Jelly exception in Dynamic Search Views after the restart
    ([JENKINS-27613](https://issues.jenkins-ci.org/browse/JENKINS-27613))
-   ![(error)](docs/images/error.svg)
    Potential NPE in the plugin if the full view configuration is not
    saved
    ([JENKINS-30663](https://issues.jenkins-ci.org/browse/JENKINS-30663))
-   ![(error)](docs/images/error.svg)
    Potential concurrency issues during the parallel access to Views
    ([JENKINS-30662](https://issues.jenkins-ci.org/browse/JENKINS-30662))

## Version 0.2.1 (06/28/2014)

-   ![(error)](docs/images/error.svg)
    Jenkins prints warning about
    [JENKINS-19588](https://issues.jenkins-ci.org/browse/JENKINS-19588)
    till the version 1.557. Newer core versions provide a fix (see
    [JENKINS-21190](https://issues.jenkins-ci.org/browse/JENKINS-21190)
    and
    [JENKINS-21191](https://issues.jenkins-ci.org/browse/JENKINS-21191))

## Version 0.2 (01/02/2014)

-   ![(error)](docs/images/error.svg)
    Major bugfix: All sessions use their own session IDs
    ([JENKINS-18975](https://issues.jenkins-ci.org/browse/JENKINS-18975))
-   ![(plus)](docs/images/add.svg)
    Support of default values for the view's form
    ([JENKINS-21192](https://issues.jenkins-ci.org/browse/JENKINS-21192))
-   ![(info)](docs/images/information.svg)
    Added a warning message for
    [JENKINS-19588](https://issues.jenkins-ci.org/browse/JENKINS-19588).
    The complete fix will be available after fix of
    [JENKINS-21191](https://issues.jenkins-ci.org/browse/JENKINS-21191)
    in Jenkins core
-   ![(info)](docs/images/information.svg)
    A better layout of the search panel

## Version 0.1 (07/07/2013)

-   ![(plus)](docs/images/add.svg)
    Implemented a List View with dynamically-configurable filters
