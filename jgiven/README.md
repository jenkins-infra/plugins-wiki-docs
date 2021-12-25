This plugin lets you generate [JGiven](http://jgiven.org/) reports as a
post-build action.

# Job DSL

The current supported dsl is as follows:

``` syntaxhighlighter-pre
freeStyleJob('test-job') {
  publishers {
    jgivenReports {
      excludeEmptyScenarios() // Since 0.10
      html {
        customCss 'some.css'
        customJs 'some.js'
        title 'My Custom Title'
      }
      results '**/*.json'
    }
  }
}
```

# Changelog

### 0.10.0 (25.12.2015)

-   ![(warning)](docs/images/warning.svg)
    Custom Files (js/css) are now taken from the workspace of the build
    and the path is interpreted relative to the workspace of the build
    ([JENKINS-30981](https://issues.jenkins-ci.org/browse/JENKINS-30981))
-   Updated JGiven to 0.10.1 and added support to configure to exclude
    empty scenarios
    ([JENKINS-31337](https://issues.jenkins-ci.org/browse/JENKINS-31337))

### 0.9.1 (14.10.2015)

-   Updated JGiven to 0.9.1
-   First two digits of the version now indicate the version of JGiven
    used

### 0.9.0 (11.10.2015)

-   Release failed - only SNAPSHOT was published

### 0.2 (25.9.2015)

-   Added support for the [Job DSL
    Plugin](https://wiki.jenkins.io/display/JENKINS/Job+DSL+Plugin).
-   Upgraded JGiven to 0.8.2
-   Only one Html Report (= previously called Html5 report) is supported

### 0.1.1 (21.02.2015)

-   Renamed Plugin from jgiven-plugin to jgiven - existing installations
    need to install the new plugin and deinstall the old one.

### 0.1 (18.02.2015)

-   Initial Release
