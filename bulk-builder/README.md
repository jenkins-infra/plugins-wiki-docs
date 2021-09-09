Trigger multiple builds with ease. Designed for users with many jobs.

# Screenshot

![](docs/images/Screen_shot_2011-11-13_at_12.45.25.png)

# Development

Offical [CI
Server](http://ci.jenkins-ci.org/view/Plugins/job/plugins_bulk-builder/)  
*Backstage* [CI
Server](https://swestcott.ci.cloudbees.com//job/Jenkins%20Bulk%20Builder/)
(more stats available)

Both track the official repository at
[github.com/jenkinsci/bulk-builder-plugin](http://github.com/jenkinsci/bulk-builder-plugin).

## Bugs

Please [raise an
issue](http://issues.jenkins-ci.org/secure/CreateIssueDetails.jspa?pid=10172&issuetype=1&components=15774&priority=3)
for any bugs you find, and ensure the component is set to
*bulk-builder*. Please include details about your Jenkins setup and
plugin version number.

## Integration with external systems

Bulk builds can be easily triggered by external scripts or processes,

``` syntaxhighlighter-pre
curl -u username:password -X POST http://localhost:8080/bulkbuilder/build -d action=immediate_build -d build=all

curl -u username:password -X POST http://localhost:8080/bulkbuilder/build -d action=immediate_build -d build=failed

curl -u username:password -X POST http://localhost:8080/bulkbuilder/build -d action=immediate_build -d build=all -d pattern=*foo*
```

Patterns accepts wildcard
![(star)](docs/images/star_yellow.svg)  
If any curl requests does not have the expected outcome it is
recommended to test by executing the plugin manually in Jenkins and then
check the browser log via the browser development mode.  
F.ex. in Chrome. Press F12 to enter dev mode. Select 'Preserve log' and
then select Network. After you push the Build button you can examine the
actual request sent by the bulk builder plugin.

# Changelog

## Version 1.5 (2012-04-04)

-   Fixed regression whereby user supplied parameters were ignored
    ([JENKINS-12968](https://issues.jenkins-ci.org/browse/JENKINS-12968))

## Version 1.4 (2011-11-14)

-   Added support for bulk polling. This includes significant internal
    refactoring of the plugin
    ([JENKINS-10930](https://issues.jenkins-ci.org/browse/JENKINS-10930))
-   Allow wildcards in patterns
    ([JENKINS-11712](https://issues.jenkins-ci.org/browse/JENKINS-11712))

## Version 1.3 (2011-09-04)

-   Added ability to build all jobs by View
    ([JENKINS-8807](https://issues.jenkins-ci.org/browse/JENKINS-8807))

## Version 1.2 (2011-06-22)

-   Moved radio buttons introduced in 1.1 behind 'Advanced' button.

## Version 1.1 (2011-06-20)

-   Prevent bulk builder index.jelly automatically reloading (which
    wipes out form changes not submitted)
-   Added additional radio buttons to build unstable builds, aborted
    builds, etc.

## Version 1.0 (2011-05-13)

-   Fixed NPE when initiating bulk builds via curl/external scripts
    ([JENKINS-8743](https://issues.jenkins-ci.org/browse/JENKINS-8743))

## Version 0.8 (2011-03-23)

-   Fixed form bug in Chrome/Safari
    ([JENKINS-9136](https://issues.jenkins-ci.org/browse/JENKINS-9136))
-   Obey security policy
    ([JENKINS-8936](https://issues.jenkins-ci.org/browse/JENKINS-8936))
-   Fixed NPE

## Version 0.7 (2011-02-25)

-   Add support for parameterised builds
    ([JENKINS-8456](https://issues.jenkins-ci.org/browse/JENKINS-8456))
-   Small internal refactoring and content tweaks

## Version 0.6 (2011-02-06)

-   Create build/slave stats side bar
    ([JENKINS-8534](https://issues.jenkins-ci.org/browse/JENKINS-8534))
-   License update
-   Hudson \> Jenkins migration

## Version 0.5 (2010-12-09)

-   Build pattern field auto-suggests previous patterns.

## Version 0.4 (2010-11-17)

-   Internationalised content. Translations are welcome!

## Version 0.3 (2010-11-17)

-   Added *"build jobs by pattern"* feature
-   Added licensing to source files
-   Put more detail into pom file
-   Refactored code to separate view/model logic

## Version 0.2.1 (2010-11-04)

-   Corrected package naming as per Hudson plugin docs

## Version 0.2 (2010-11-04)

-   Broken release (hey, I'm still new to the release process
    ![(smile)](docs/images/smile.svg)
    )

## Version 0.1 (2010-10-01)

-   Initial release
