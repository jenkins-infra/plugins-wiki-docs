This plugin allows to automatically generate [Allure
Report](http://allure.qatools.ru/) and attach it to build during Jenkins
job run.

Plugin builds are located
here: [https://ci.qameta.io/job/allure-plugin](https://ci.qameta.io/job/allure-plugin/)

## **Usage**

Read more at [plugin documentation
page](http://wiki.qatools.ru/display/AL/Allure+Jenkins+Plugin)

## **Changelog**

**Version 2.26.0 (Jan, 22, 2018)**

Improvements

-   Add classes to security whitelist
    (fixes [\#192](https://github.com/jenkinsci/allure-plugin/issues/192),
    via [\#195](https://github.com/jenkinsci/allure-plugin/pull/195))
-   Add pipeline trend
    (fixes [\#174](https://github.com/jenkinsci/allure-plugin/issues/174),
    via [\#191](https://github.com/jenkinsci/allure-plugin/pull/191))

Fixes

-   Fix matrix job report generation
    (fixes [\#190](https://github.com/jenkinsci/allure-plugin/issues/190),
    via [\#191](https://github.com/jenkinsci/allure-plugin/pull/191))

Links

[Commits since
2.25.1](https://github.com/jenkinsci/allure-plugin/compare/2.25.1...2.26.0)

 

**Version 2.25.1 (Dec, 18, 2017)** 

Improvements

-   Update dependencies
    (via [\#177](https://github.com/jenkinsci/allure-plugin/pull/177))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Fixes

-   Fix filepath serialization problem
    (via [\#188](https://github.com/jenkinsci/allure-plugin/pull/188))
    - [@vbragin](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)
-   Fix NPE in build summary
    (fixes [\#172](https://github.com/jenkinsci/allure-plugin/issues/172),
    via [\#179](https://github.com/jenkinsci/allure-plugin/pull/179))
    - [@vbragin](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.25](https://github.com/jenkinsci/allure-plugin/compare/2.25...2.25.1)

 

**Version 2.25 (Nov, 01, 2017)**

New Features

-   Add allure report property
    (fixes [\#106](https://github.com/jenkinsci/allure-plugin/issues/106),
    fixes [\#164](https://github.com/jenkinsci/allure-plugin/issues/164),
    via [\#170](https://github.com/jenkinsci/allure-plugin/pull/170))

Links

[Commits since
2.24](https://github.com/jenkinsci/allure-plugin/compare/2.24...2.25)

 

**Version 2.24 (Oct, 11, 2017)**

 

New Features

-   Add 'disable allure report' property
    (fixes [\#92](https://github.com/jenkinsci/allure-plugin/issues/92),
    via [\#165](https://github.com/jenkinsci/allure-plugin/pull/165))
    - [@vbragin](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Improvements

-   Add build results base on tests
    (fixes [\#13](https://github.com/jenkinsci/allure-plugin/issues/13),
    via [\#167](https://github.com/jenkinsci/allure-plugin/pull/167))
    - [@vbragin](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)
-   Add properties wrapping
    (fixes [\#162](https://github.com/jenkinsci/allure-plugin/issues/162),
    fixes [\#146](https://github.com/jenkinsci/allure-plugin/issues/146),
    via [\#166](https://github.com/jenkinsci/allure-plugin/pull/166))
    - [@vbragin](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.23](https://github.com/jenkinsci/allure-plugin/compare/2.23...2.24)

 

**Version 2.23 (Sep, 11, 2017) ** 

  

Improvements

-   Downgrade jenkins core version to 1.642.4
    (via [\#160](https://github.com/jenkinsci/allure-plugin/pull/160))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.22](https://github.com/jenkinsci/allure-plugin/compare/2.22...2.23)

 

**Version 2.22 (Aug, 03, 2017)** 

Fixes

-   Fix npe in build action
    (fixes [\#152](https://github.com/jenkinsci/allure-plugin/issues/152),
    fixes [\#153](https://github.com/jenkinsci/allure-plugin/issues/153),
    via [\#154](https://github.com/jenkinsci/allure-plugin/pull/154))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.21](https://github.com/jenkinsci/allure-plugin/compare/2.21...2.22)

 

**Version 2.21 (Aug, 02, 2017) **

Fixes

-   Fix duplicates
    (fixes [\#115](https://github.com/jenkinsci/allure-plugin/issues/115),
    via [\#149](https://github.com/jenkinsci/allure-plugin/pull/149))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)
-   Fix npe with build summary (fixes 147,
    via [\#150](https://github.com/jenkinsci/allure-plugin/pull/150))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.20](https://github.com/jenkinsci/allure-plugin/compare/2.20...2.21)

 

****Version 2.20 (Jul, 16, 2017)****

 New features

-   global properties
    (fixes [\#132](https://github.com/jenkinsci/allure-plugin/issues/132),
    via [\#143](https://github.com/jenkinsci/allure-plugin/pull/143))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)
-   add graph trend
    (fixes [\#46](https://github.com/jenkinsci/allure-plugin/issues/46),
    via [\#140](https://github.com/jenkinsci/allure-plugin/pull/140))
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Improvements

-   update executor json
    (fixes [\#137](https://github.com/jenkinsci/allure-plugin/issues/137),
    via [\#138](https://github.com/jenkinsci/allure-plugin/pull/138))
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Fixes

-   fix properties npe
    (fixes [\#125](https://github.com/jenkinsci/allure-plugin/issues/125),
    via [\#142](https://github.com/jenkinsci/allure-plugin/pull/142))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.19](https://github.com/jenkinsci/allure-plugin/compare/2.19...2.20)

**Version 2.19 (Jul, 01, 2017)**

Incompatibility

-   pipeline syntax changed from

        allure([results: [[path: 'allure-results']]])

    to more simple

        allure results: [[path: 'allure-results']]

Improvements

-   support glob syntax
    (via [\#134](https://github.com/jenkinsci/allure-plugin/pull/134))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)
-   build id to executor info
    (via [\#130](https://github.com/jenkinsci/allure-plugin/pull/130))
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)
-   use data bound setters
    (via [\#131](https://github.com/jenkinsci/allure-plugin/pull/131))
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Fixes

-   disable cache
    (fixes [\#113](https://github.com/jenkinsci/allure-plugin/issues/113),
    via [\#135](https://github.com/jenkinsci/allure-plugin/pull/135))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)
-   fix declarative pipeline
    (via [\#133](https://github.com/jenkinsci/allure-plugin/pull/133))
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.18](https://github.com/jenkinsci/allure-plugin/compare/2.18...2.19)

**  
**

**Version 2.18 (Jun, 03, 2017)**

 Fixes:

-   fix null config parameters
    ([\#125](https://github.com/jenkinsci/allure-plugin/issues/125))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Improvements:

-   variables in results path
    ([\#107](https://github.com/jenkinsci/allure-plugin/issues/107))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

-   variables in properties
    ([\#55](https://github.com/jenkinsci/allure-plugin/issues/55))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.17](https://github.com/jenkinsci/allure-plugin/compare/2.17...2.18)

**  
**

**Version 2.17 (May, 31, 2017)**

Fixes:

-   release version without snapshot
    ([\#121](https://github.com/jenkinsci/allure-plugin/issues/121))
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Improvements:

-   allure 2 distribution path
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.16](https://github.com/jenkinsci/allure-plugin/compare/2.16...2.17)

**  
**

**Version 2.16 (May, 29, 2017)** 

Fixes:

-   wait for artifact uploading
    ([\#73](https://github.com/jenkinsci/allure-plugin/issues/73))
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

-   allure home setting
    ([\#82](https://github.com/jenkinsci/allure-plugin/issues/82), [\#108](https://github.com/jenkinsci/allure-plugin/issues/108))
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)
-   allure properties setting
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Improvements:

-   switch to gradle
    - [@ehborisov](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)
-   migrate to jenkins pipeline
    - [@eroshenkoam](https://wiki.jenkins.io/display/JENKINS/Allure+Plugin)

Links

[Commits since
2.15](https://github.com/jenkinsci/allure-plugin/compare/allure-jenkins-plugin-2.15...2.16)

 

**Version 2.15 (April 13, 2017)**

-   [\#90](https://github.com/jenkinsci/allure-plugin/issues/90) fix npe
    when open absence file
-   [\#88](https://github.com/jenkinsci/allure-plugin/issues/88 "Allure plugin doesn't work with pipeline plugin ") fix
    pipeline cli installation
-   [\#93](https://github.com/jenkinsci/allure-plugin/issues/93) fix
    package name mistake
-   [\#95](https://github.com/jenkinsci/allure-plugin/issues/95) support
    target path that type is soft link

Improvements:

-   copy history directory \[beta7\]

#### **[Github Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.15)**

#### **Version 2.14 (March 23, 2017)**

-   fix zip error
-   add allure home variable

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.14)

#### **Version 2.13 (February 12, 2017)**

-   fix backward capability with 2.10
-   add issue template
-   allure 2 support

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.13)

#### **Version 2.12 (February 8, 2016)**

-   Remove artifact manager factory

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.12)

#### **Version 2.11 (January 22, 2016)**

Global refactoring

-   Add more tests (an example, tests for matrix jobs)
-   Fix sonar issues
-   Fix findbugs issues
-   Add history support
-   Add executor support
-   Change artifact coordinates
-   Bump Jenkins version to 2.7
-   Support pipeline
-   Add pipeline tests
-   Make sure that all Windows issues are fixed
-   Add more tests for different Jenkins locations and results paths
    (Windows escape issue)

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.11)

#### **Version 2.10 (December 2, 2016)**

-   Fix environment file creation problem

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.10)

#### **Version 2.9 (November 29, 2016)**

-   Global properties

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.9)

#### **Version 2.8 (October 30, 2015). Global refactoring. Backward compatibility missing.**

Backward Compatibility: 

-   Use allure-commandline tool instead of maven. You need configure it
    before use in Jenkins Global Configuration.
-   Ant glob syntax not supported anymore. Use new line separated list
    of results directories instead.
-   Each job need to configure jdk to use. You can do it in job settings
    or in plugin settings.

Read more at [plugin documentation
page](http://wiki.qatools.ru/display/AL/Allure+Jenkins+Plugin).

#### Version 2.5 (January 29, 2015)

-   Fix matrix report aggregation for dynamic slaves – [issue
    7](https://github.com/jenkinsci/allure-jenkins-plugin/issues/7)
-   Use jenkins proxy settings or own proxy settings to get remote
    artifacts – [issue
    32](https://github.com/allure-framework/allure-jenkins-plugin/issues/32)
-   Various minor fixes

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.5)

#### Version 2.3.2 (October 23, 2014)

-   Fix global options being reset to defaults after restart – [issue
    25](https://github.com/allure-framework/allure-jenkins-plugin/issues/25)
-   Fix matrix job aggregation - [Issue
    23](https://github.com/allure-framework/allure-jenkins-plugin/issues/23)
-   Fix raise condition at creating internal dirs

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.3.2)

#### Version 2.2 (September 15, 2014)

-   add possibility to skip build env-vars from report
-   rename LICENSE file
-   fix docs

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.2)

#### **Version 2.1 (August 13, 2014)**

-   Jenkins matrix-job collector fails
-   Remove by step synchronisation
-   Badge link is relative and follow to 404 page when you in the
    workspace

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.1)

#### Version 2.0 (August 08, 2014)

-   Add possibility to build any version of Allure Report for each job
-   Add default global settings with overriding support
-   Add build badge icon

[Github
Release](https://github.com/jenkinsci/allure-plugin/releases/tag/allure-jenkins-plugin-2.0)

#### Version 1.3 (May 28, 2014)

-   Internal fixes

#### Version 1.0 (May 23, 2014)

-   Initial version
