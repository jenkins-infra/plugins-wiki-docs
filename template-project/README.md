This plugin lets you use builders, publishers and SCM settings from
another project.

### A short set up guide

-   Set up a template project that has all the settings you want to
    share. E.g. you could create one with no SCM filled in, but with all
    the builders and publishers you want for all your projects. Its best
    to mark this project as disabled, since you are not actually going
    to run it.
-   Then set up a concrete project. Configure the SCM as you want. Then
    select 'use all the publishers from this project' and pick the
    template project. Ditto for the builders.

### Limitations

-   It may be using some plugins in ways that were not intended.
    Compatibility with all plugins is not guaranteed.
-   It does not support project actions. That means that links that
    should be on the project page (e.g. 'latest test results') will not
    be there.
-   It has had virtually no testing.
-   "Use SCM from another project" may be missing unless you install the
    [multiple-scms](https://plugins.jenkins.io/multiple-scms) plugin.
    See
    [JENKINS-31712](https://issues.jenkins-ci.org/browse/JENKINS-31712).

### To do list

-   Support project actions. This depends on being able to make some
    changes in jenkins-core in a backward compatible way.
-   Parametrize the templates.
-   (Maybe) Create a separate list of template projects, so you don't
    have to put them in your main list and can clearly identify them.

### Change Log

##### Version 1.5.1 (Sep 3, 2015)

-   Re-fix for [issue
    \#24404](https://issues.jenkins-ci.org/browse/JENKINS-24404)

##### Version 1.5 (Aug 31, 2015)

-   Expand parameter values, some limitations may apply to SCM ([issue
    \#28249](https://issues.jenkins-ci.org/browse/JENKINS-28249))
-   Support Cloudbees folder plugin ([issue
    \#24396](https://issues.jenkins-ci.org/browse/JENKINS-24396))
-   Support for build environment variables ([issue
    \#24404](https://issues.jenkins-ci.org/browse/JENKINS-24404))
-   Support for Multiple-SCM when using paramater value

##### Version 1.4.2 (July 9, 2014)

-   Support of dependency declarations interface from included
    templates.

##### Version 1.4.1 (Mar 12, 2014)

-   Fixed performance issue when Use SCM is not checked ([issue
    \#22150](https://issues.jenkins-ci.org/browse/JENKINS-22150))

##### Version 1.3 (Aug 15, 2011)

-   Updated SCM proxy for latest Jenkins

##### Version 1.2 (Feb 11, 2010)

-   Fix Hudson-breaking 1.1 release.
    ([JENKINS-5612](https://issues.jenkins-ci.org/browse/JENKINS-5612))
-   Fix to allow using build steps from a matrix project.
    ([JENKINS-5146](https://issues.jenkins-ci.org/browse/JENKINS-5146))
-   Get form field validators working again.

##### Version 1.1 (Feb 10, 2010)

-   Update code for more recent Hudson

##### Version 1.0 (Feb 13, 2009)

-   Initial release
