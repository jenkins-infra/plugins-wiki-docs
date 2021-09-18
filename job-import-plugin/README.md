# Job Import Plugin

Import jobs from another Jenkins instance.  

------------------------------------------------------------------------

  

### Changelog

#### 3.3 (Sep 19 2019)

-   [JENKINS-57991](https://issues.jenkins-ci.org/browse/JENKINS-57991)
    Improve the error message when any issue happens while communicating
    to the target Jenkins

#### 3.2 (Mar 19 2019)

-   [JENKINS-55957](https://issues.jenkins-ci.org/browse/JENKINS-55957)
    Remove JAXB dependency / Java 11 support

#### 3.1 (Jan28 2019)

-   [Fix security
    issue](https://jenkins.io/security/advisory/2019-01-28/)

#### 3.0 (May 30 2018)

-   Requires 2.107.3 Jenkins
-   Replaces URL by Apache Http Client
-   [JENKINS-48174](https://issues.jenkins-ci.org/browse/JENKINS-48174) Request
    scope instead of global
-   [JENKINS-48173](https://issues.jenkins-ci.org/browse/JENKINS-48173) Overall/write
    or write access at the top folder level is not required anymore
-   [JENKINS-20877](https://issues.jenkins-ci.org/browse/JENKINS-20877) Automatically
    install necessary plugins when importing jobs
-   [JENKINS-51119](https://issues.jenkins-ci.org/browse/JENKINS-51119) Permit
    updating of existing jobs on target server
-   [JENKINS-10964](https://issues.jenkins-ci.org/browse/JENKINS-10964) Allow
    picking the Jenkins instance from which jobs have to be imported
    from a drop-down list (configured at global configuration)
-   [Fix security
    issues](https://jenkins.io/security/advisory/2019-01-28/)

#### 2.1 (Oct 26 2017)

-   [JENKINS-35540](https://issues.jenkins-ci.org/browse/JENKINS-35540) Upgrade
    to Credentials 2.1.0+ API for populating credentials drop-down

#### 2.0 (Oct 10 2017)

-   [JENKINS-23809](https://issues.jenkins-ci.org/browse/JENKINS-23809)
    Allow selection of a destination folder
-   Import folders and jobs inside
-   Improved performance after saving remote jobs
-   Minor fixes

#### 1.8 (Jul 11 2017)

-   [JENKINS-45195](https://issues.jenkins-ci.org/browse/JENKINS-45195)
    Import job fails when user lacks overall / administer.

#### 1.7 (Jun 09 2017)

-   [JENKINS-40577](https://issues.jenkins-ci.org/browse/JENKINS-40577) Error
    on Import - java.lang.NoClassDefFoundError:
    com/google/inject/internal/guava/base/$Preconditions. Credentials.

#### 1.6 (Dic 01 2016)

-   [JENKINS-35983](https://issues.jenkins-ci.org/browse/JENKINS-35983) Add
    support to job import jobs in folders.
-   Better testing utilities.

#### 1.5 (Sep 13 2016)

-   [JENKINS-38084](https://issues.jenkins-ci.org/browse/JENKINS-38084) Add
    support to mark jobs as disabled on import.
-   [PR7](https://github.com/jenkinsci/job-import-plugin/pull/7) Credentials.
-   [PR14](https://github.com/jenkinsci/job-import-plugin/pull/14)
    Parent pom upgraded

#### 1.3.1 (Apr 01 2016)

-   [JENKINS-33379](https://issues.jenkins-ci.org/browse/JENKINS-33379) Importing
    jobs doesnt do anything since version 1.3.
-   [JENKINS-22942](https://issues.jenkins-ci.org/browse/JENKINS-22942) Job
    Import Plugin: Password field is cleartext

#### 1.3 (Feb 25 2016)

-   [JENKINS-33104](https://issues.jenkins-ci.org/browse/JENKINS-33104) Upgrade
    to plugin-pom 2.3.

#### 1.2 (Dec 04 2013)

-   [JENKINS-10460](https://issues.jenkins-ci.org/browse/JENKINS-10460)
    Escape descriptions of remote jobs.
-   [JENKINS-11185](https://issues.jenkins-ci.org/browse/JENKINS-11185)
    NPE masked real problems.
-   [JENKINS-15040](https://issues.jenkins-ci.org/browse/JENKINS-15040)
    Allow credentials to be specified for authenticated remote Jenkins.
-   [JENKINS-15421](https://issues.jenkins-ci.org/browse/JENKINS-15421)
    Support all job types.
-   Much faster and more robust listing of jobs.

#### 1.1 (botched)

#### 1.0 (released 2011-07-20)

-   fully I18N
-   initial implementation
