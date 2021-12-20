Deprecated: The SCM Sync plugin is deprecated

-   Users of this plugin are encouraged to migrate their jobs to
    [Pipeline
    Plugin](http://localhost:8085/display/JENKINS/Pipeline+Plugin), so
    that their jobs will be specified in pipeline code that can be
    checked into an SCM, all without using the SCM Sync confguration
    plugin.
-   Users of this plugin are also encouraged to use the [Configuration
    as Code
    Plugin](http://localhost:8085/display/JENKINS/Configuration+as+Code+Plugin)
    to specify the configuration of their Jenkins server in a file which
    can be checked into an SCM, all without using the SCM Sync
    configuration plugin.

# Introduction

Syncs configuration files to a SCM repository and tracks changes done to
them

SCM Sync Configuration Jenkins/Hudson plugin is aimed at 2 main features
:

-   Keep sync'ed your config.xml (and other ressources) jenkins/hudson
    files with a SCM repository
-   Track changes (and author) made on every file with commit messages

ATTN: [JENKINS-32124](https://issues.jenkins-ci.org/browse/JENKINS-32124) details
an issue with the 0.0.9 version causing the UI to appear blank after
Jenkins restart in both Windows and Linux environments.

# Installation

To install SCM Sync Configuration Plugin, Go to the "plugin management"
section in the administration Panel.  
Latest released version will be available. Install it from there (you
should need to restart Jenkins/Hudson after that).

To verify that the plugin is well installed, go to the Administration
panel, then in the "System configuration" section : you should notice a
"SCM Sync Configuration" section :  
![](docs/images/Jenkins_-_scm-sync-configuration_-_Enter_your_synchronized_SCM2.png)

# Usage

On the System configuration panel (seen above), you'll be prompted for a
SCM type (as of this writing, Subversion or Git) and a repository URL
for your SCM type.

When you'll complete this form section, and validate the form, the SCM
Sync Configuration will compute every configuration file he is able to
synchronize, and commit them, for initialization, on your SCM
repository.  
**Warning** : This first step can take a few minutes !

Once initialized, every time you'll submit a configuration view that can
be sync'ed by the SCM Sync Configuration plugin, you'll be prompted for
a comment that will be put on the commit message on your SCM
Repository.  
![](docs/images/Jenkins_-_scm-sync-configuration_-_Comment_prompt2.png)

For now, supported configuration files are the following ones :

-   Job configuration files (/jobs/\*/config.xml)
-   Global Jenkins/Hudson system configuration file (/config.xml)
-   Basic plugin configuration files (/hudson\*.xml,
    /scm-sync-configuration.xml)
-   User-defined manual includes (see [this dedicated
    page](https://wiki.jenkins-ci.org/display/JENKINS/SCM+Sync+Config+shared+additional+includes))

But more default configuration files are planned ! (see the Product
Backlog for further informations)

On every pages, you will have some scm sync config status at the bottom
of the page, saying if something went wrong :  
![](docs/images/Jenkins_-_scm-sync-config_-_Display_Status.png)

Warning

To use a Git server with SSH, you have to accept the server SSH key
before using the plugin (same for using Git in Jenkins jobs).

# Troubleshootings

A page dedicated to [Scm Sync Configuration
troubleshoots](http://localhost:8085/display/JENKINS/ScmSyncConfig+Troubleshootings)
has been created. Don't hesitate to participate on it by telling your
stories.

# What is synchronized, and when

| Constraint          | Target Configuration family                                   | Target configuration files | Modes            |
|---------------------|---------------------------------------------------------------|----------------------------|------------------|
| version \>= 0.0.1   | Job & children configuration                                  | /job/\*/config.xml         | Creation, Update |
| version \>= 0.0.2   | Jenkins/Hudson System configuration                           | /config.xml                | Creation, Update |
| version \>= 0.0.5   | Jenkins configuration files located directly in JENKINS\_HOME | /hudson\*.xml              | Creation, Update |
| version \>= 0.0.6   | Manual user-defined includes                                  | Whatever you want          | Creation, Update |
| version \>= 0.0.7.2 | Users config files                                            | /users/\*/config.xml       | Creation, Update |

# Known issues

type

key

summary

Data cannot be retrieved due to an unexpected error.

[View these issues in
Jira](http://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project%20=%20JENKINS%20AND%20resolution%20=%20unresolved%20AND%20component%20=%20%27scm-sync-configuration-plugin%27&src=confmacro)

# Product backlog

[TABLE]

\*Privileged user can be, for example, user having access to job
configuration update when job configuration is sync'ed.

# Releases

## 0.0.10 (August 3, 2016)

#### Bugfixes

-   [SCM-772](https://issues.apache.org/jira/browse/SCM-772) Improve Git
    handling of file paths with spaces

## 0.0.9 (December 11, 2015)

#### Bugfixes

-   [JENKINS-13593](https://issues.jenkins-ci.org/browse/JENKINS-13593)
    Seems to not handle having builds in separate folder
-   [JENKINS-15128](https://issues.jenkins-ci.org/browse/JENKINS-15128)
    Renaming job doesn't work with git
-   [JENKINS-16348](https://issues.jenkins-ci.org/browse/JENKINS-16348)
    Trim & validate repository URL obtained from user
-   [JENKINS-16378](https://issues.jenkins-ci.org/browse/JENKINS-16378)
    All build logs added and committed when renaming job
-   [JENKINS-16441](https://issues.jenkins-ci.org/browse/JENKINS-16441)
    Scm sync fails completely if folder name starts with a hyphen
-   [JENKINS-18401](https://issues.jenkins-ci.org/browse/JENKINS-18401)
    java.lang.NoClassDefFoundError: hudson/maven/MavenReporter
-   [JENKINS-19984](https://issues.jenkins-ci.org/browse/JENKINS-19984)
    Groovy Postbuild Plugin does not like Jenkins Option: "Build Record
    Root Directory"
-   [JENKINS-22540](https://issues.jenkins-ci.org/browse/JENKINS-22540)
    Jenkins config files are not tracked
-   [JENKINS-22666](https://issues.jenkins-ci.org/browse/JENKINS-22666)
    No popup window when committing changes to job config for putting in
    commit message
-   [JENKINS-24686](https://issues.jenkins-ci.org/browse/JENKINS-24686)
    scm-sync-configuration fails if job name contains whitespace
-   [JENKINS-24881](https://issues.jenkins-ci.org/browse/JENKINS-24881)
    Rename job starts to sync workspace
-   [JENKINS-24993](https://issues.jenkins-ci.org/browse/JENKINS-24993)
    scm-sync-configration plugin keeps on adding directory structure
    scm-sync-configuration/checkoutConfiguration  
    Many thanks to [tomwolf](https://github.com/tomwolf) who provided
    all the fixes in this release.

## 0.0.8 (August 24, 2014)

#### Tasks

-   Upgraded to maven scm api 1.9.1 (from 1.6)

#### Bugfixes

-   [JENKINS-22820](https://issues.jenkins-ci.org/browse/JENKINS-22820)
    (major) Changes are not commited when using a recent git client (\>=
    1.9)
-   [JENKINS-15128](https://issues.jenkins-ci.org/browse/JENKINS-15128)
    (major) Renaming job doesn't work with Git  
    Thanks to Roger Hu who fixed
    [JENKINS-22820](https://issues.jenkins-ci.org/browse/JENKINS-22820)
    and helped to fix
    [JENKINS-15128](https://issues.jenkins-ci.org/browse/JENKINS-15128)
    by upgrading git scm api to 1.9.1.

## 0.0.7.5 (July 5, 2014)

#### Bugfixes

-   [JENKINS-23036](https://issues.jenkins-ci.org/browse/JENKINS-23036)
    (major) : Fix root URL issue on reload link  
    Thanks to Kiana Tennyson for her contribution [PR
    \#20](https://github.com/jenkinsci/scm-sync-configuration-plugin/pull/20)

## 0.0.7.4 (February 12, 2014)

#### Improvements

-   Cloudbees folders support, thanks to ndeloof for his contribution
    [PR
    \#19](https://github.com/jenkinsci/scm-sync-configuration-plugin/pull/19)

## 0.0.7.3 (July 24, 2013)

#### Bugfixes

-   [JENKINS-18867](https://issues.jenkins-ci.org/browse/JENKINS-18867)
    (major) : New link allowing to purge fail logs for
    scm-sync-configuration was breaking the page if jquery plugin was
    pulled on the instance

#### Improvements

-   Synchronized users config files

## 0.0.7.2 (July 20, 2013)

#### Bugfixes

-   [JENKINS-18526](https://issues.jenkins-ci.org/browse/JENKINS-18526)
    (major) : Better implementation for
    [JENKINS-17545](https://issues.jenkins-ci.org/browse/JENKINS-17545),
    improving performance (thus, solving
    [JENKINS-18499](https://issues.jenkins-ci.org/browse/JENKINS-18499)
    and
    [JENKINS-18715](https://issues.jenkins-ci.org/browse/JENKINS-18715))
    when syncing files  
    Thanks to Jean-Jacques Lafay for his contribution in [PR
    \#15](https://github.com/jenkinsci/scm-sync-configuration-plugin/pull/15)
-   [JENKINS-15734](https://issues.jenkins-ci.org/browse/JENKINS-15734)
    (critical) : Being more defensive during http request filtering,
    avoiding NPE

#### Improvements

-   Allowing to reset scm sync status failing file, by clicking on an
    hyperlink (administrators only)  
    Thanks to Joey Jiao for his contribution in [PR
    \#16](https://github.com/jenkinsci/scm-sync-configuration-plugin/pull/16)

## 0.0.7.1 (May 24, 2013)

#### Bugfixes

-   [JENKINS-17545](https://issues.jenkins-ci.org/browse/JENKINS-17545)
    (critical) : On multimodules jobs, submodules' config.xml were
    constantly (on every build) commited on repository, resulting in
    lots of noise in commits history, and even [blacklistings on
    github](https://twitter.com/aheritier/status/337180792356732929)

## 0.0.7 (January 25, 2013)

*This release should likely have been tagged 0.0.6.2 instead of 0.7.0,
there isn't any big step by upgrading.*

#### Bugfixes

-   [JENKINS-14893](https://issues.jenkins-ci.org/browse/JENKINS-14893)
    : scm sync configuration causes memory leak (thanks mhelff)
-   Not nesting RuntimeException into ServletException, fixing spring
    security redirection to login page (thanks ndeloof)

## 0.0.6.1 (October 28, 2012)

#### Bugfixes

-   [JENKINS-14640](https://issues.jenkins-ci.org/browse/JENKINS-14640)
    : Create view form was not handled correctly on 1.466 and above
-   [JENKINS-15266](https://issues.jenkins-ci.org/browse/JENKINS-15266)
    : Reducing SCM Sync commits logs to FINEST level (instead of INFO)
-   [JENKINS-15285](https://issues.jenkins-ci.org/browse/JENKINS-15285)
    : Fixed blocking bug on Windows installations where plugin didn't
    start correctly

## 0.0.6 (September 18, 2012)

#### Improvements

-   **User defined files being
    committed** ([JENKINS-8225](https://issues.jenkins-ci.org/browse/JENKINS-8225)
    which implies
    [JENKINS-14642](https://issues.jenkins-ci.org/browse/JENKINS-14642),
    [JENKINS-14812](https://issues.jenkins-ci.org/browse/JENKINS-14812),
    [JENKINS-15018](https://issues.jenkins-ci.org/browse/JENKINS-15018))
    : Now, you can add user-defined custom paths to synchronize on the
    system page. Don't hesitate to [share
    yours](https://wiki.jenkins-ci.org/display/JENKINS/SCM+Sync+Config+shared+additionnal+includes)
    on the dedicated page.
-   **Commits should be made asynchronously**
    ([JENKINS-14214](https://issues.jenkins-ci.org/browse/JENKINS-14214)
    which implies, I think,
    [JENKINS-9166](https://issues.jenkins-ci.org/browse/JENKINS-9166)
    and
    [JENKINS-10967](https://issues.jenkins-ci.org/browse/JENKINS-10967))
    : now, commiting files is not blocking but postponed into an
    asynchronous queue. This will lead in performance improvements on
    large jenkins instance + lower the chance to have concurrent
    modifications on files (file content to commit is saved).
-   **Bulk transactional commit**
    ([JENKINS-13613](https://issues.jenkins-ci.org/browse/JENKINS-13613))
    : before v0.0.6, 1 file modified = 1 commit. Prior to 0.0.6, if
    during an HTTP request, you modify several files, they will all be
    committed into a single commit.  
    It should greatly improve the commit readability, and lead to atomic
    commits.  
    Note that "automatic" (ie "non manual") file changes will remain
    commited one by one (this is difficult to identify a "system-wide
    transaction").
-   **Allowing to reload configuration files from SCM** : added an
    hyperling on global Jenkins configuration page for doing this
-   Commit messages improved
    ([JENKINS-14568](https://issues.jenkins-ci.org/browse/JENKINS-14568))
    : now, deleted / renamed / updated files are labeled into the commit
    "technical part" of the message

#### Bugs

-   [JENKINS-14582](https://issues.jenkins-ci.org/browse/JENKINS-14582)
    : Fix issue when your jenkins webapp has a context path (not the
    context root)

#### Known Bugs on this release

-   If you're using Git, job rename won't work as expected. This is
    related to
    [JENKINS-15128](https://issues.jenkins-ci.org/browse/JENKINS-15128)
    which relies on [a bug in maven scm
    api](http://jira.codehaus.org/browse/SCM-694). Once the bug will be
    fixed in maven scm api, I'll align on it and it will fix the problem
    in the plugin.
-   A regression has been identified
    ([JENKINS-15221](https://issues.jenkins-ci.org/browse/JENKINS-15221))
    concerning the initial check in when jenkins starts.  
    In previous version, if some files in jenkins\_home were not present
    in the scm, these files were added. In 0.0.6 it isn't the case and
    should considered as a major regression.

## 0.0.5 (April 25, 2012)

#### Improvements

-   **Added Git support** – Big thanks to Bertrand Paquet
-   \*Allowing to display latest synchronization status \* (configurable
    in jenkins configuration screen) – thanks to Bertrand Paquet
-   **Saving every Jenkins configuration files located directly in
    JENKINS\_HOME** – thanks to Bertrand Paquet
-   Allowing to use a repository without credentials – thanks to
    Bertrand Paquet
-   Added checkbox to disable commit prompt, forever – thanks to
    Bertrand Paquet
-   Fixed
    [JENKINS-11817](https://issues.jenkins-ci.org/browse/JENKINS-11817)
    and
    [JENKINS-10858](https://issues.jenkins-ci.org/browse/JENKINS-10858)
    : Allow to provide a commit message formatter (you will be able to
    add prefixes to your commit messages, with issue id for example)
-   Fixed
    [JENKINS-10802](https://issues.jenkins-ci.org/browse/JENKINS-10802)
    : In relation to previous bugfix, provide a commit message on
    initial upload of config.  
    Note that you will have to make a trick to make this work, as I
    described in [this
    comment](https://issues.jenkins-ci.org/browse/JENKINS-10802?focusedCommentId=162000&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-162000)
-   Fixed
    [JENKINS-11106](https://issues.jenkins-ci.org/browse/JENKINS-11106)
    : Automatically set focus to commit message field when prompt appear

#### Tasks

-   Welcome Bertrand Paquet aboard !
    ![(smile)](docs/images/smile.svg)

## 0.0.4 (March 9, 2011)

#### Bugfixes

-   Fixed
    [JENKINS-8453](https://issues.jenkins-ci.org/browse/JENKINS-8453) :
    **NPE after updating to 0.0.3 (data migration problem)**
-   Fixed
    [JENKINS-8890](https://issues.jenkins-ci.org/browse/JENKINS-8890) :
    SCM Sync plugins 0.0.3 throws NPE when called before having been
    initialized (for example when using shelve plugin in correlation
    with scm-sync-configuration plugin)

#### Improvements

-   [JENKINS-8259](https://issues.jenkins-ci.org/browse/JENKINS-8259)
    **Added "don't bother me" checkbox on commit message popup**
-   **Added log when credentials have not been entered when trying to
    connect to scm**
-   **Provided Data migration layer allowing to migrate
    scm-sync-configuration.xml data** from 0.0.2 -\> 0.0.3 -\> 0.0.4 -\>
    ...
-   Replaced use of Embedder by DefaultPlexusContainer to ensure
    compliance of the plugin with Hudson/Jenkins versions greater than
    1.395 (apparition of sisu)
-   Replaced "\<" and "\>" by "\[" and "\]" (the ones are hidden when
    used in log console)

#### Tasks

-   **Moved sources to Github !**
-   **Lots of Unit tests added (especially about data migration between
    plugin versions)**
-   Refactored unit tests to use Mockito instead of EasyMock

## 0.0.3 (January 4, 2011)

#### Bugfixes

-   [JENKINS-8197](https://issues.jenkins-ci.org/browse/JENKINS-8197)
    **Using jenkins/hudson SVN credentials to authenticate against
    subversion server instead of the ones in your .subversion cache
    !**  
    This is more relevant with the UI, prompting for scm credentials and
    storing them in jenkins/hudson credentials.
-   [JENKINS-7762](https://issues.jenkins-ci.org/browse/JENKINS-7762)
    Only /jobs/**/config.xml are commited (instead of
    /jobs/**\*/config.xml) – This fixes some plugin files (example :
    M2Release plugin files) which were unintentionally synchronized with
    scm
-   [JENKINS-7982](https://issues.jenkins-ci.org/browse/JENKINS-7982)
    Fixed NPE around ScmSyncConfigurationPlugin:59

#### Improvements

-   **Deleting svn hierarchy on job deletion**
-   **Renaming svn hierarchy on job renaming**
-   Comment message prompted on "configure" job screen .. even if
    configuring a job through a view
-   **Improved logging**
-   [JENKINS-8259](https://issues.jenkins-ci.org/browse/JENKINS-8259)
    Provided "no synchronisation" radio in system configuration page,
    allowing to disable scm synchronisation after having enabled it
-   Changed scm-sync-configuration.xml file representation (SCM is no
    more an enum type, and become an abstract classes with subclasses) +
    provided data migrator from 0.0.2 & 0.0.1 file representations

#### Tasks

-   Provided plugin description for plugin rss feed
-   Provided unit tests harness for testing scm synchronizations (\~50%
    test coverage) + refactored code to improve testability

## 0.0.2 (October 15, 2010)

#### Bugfixes

-   [JENKINS-7241](https://issues.jenkins-ci.org/browse/JENKINS-7241) :
    Critical bug: IE8 users wasn't able to submit their configuration
    form due to a JS error.

#### Improvements

-   **Jenkins/Hudson System configuration** is now sync'ed
-   scm-sync-configuration v0.0.2 has been tested with IE8, Chrome 5, FF
    2 under windows 7
-   Added JS exception catching in order to not block the process if a
    JS error occurs (because of an incompat with non tested browser)
-   Some little refactorings on config files initialization in scm
    repository

#### Tasks

-   Provided name & wiki url to the POM. These information are used on
    several pages of jenkins-ci/hudson-ci (especially RSS feeds)

## 0.0.1 (October 12, 2010)

Warning

This is an alpha release ! Don't use it in production, [especially if
you are using M2Release jenkins/hudson
plugin](http://issues.jenkins-ci.org/browse/JENKINS-7762)

#### Improvements

-   SCM Repository configuration in system panel
-   Prompt for commit message each time a Job Configuration is modified

# Roadmap (future versions)

## v0.1

-   (done) Provide a "commit everything modified with following comment"
    button on system page (Will be useful if you want to globally edit
    your config files (via a groovy console script for example) and
    commit everything with a comment)
-   Provide first strategy implementation allowing to backup every of
    your job configuration files (when submitting job configuration
    form) with a personnal commit message
-   Refactor the SCM access layer, dropping usage of maven scm api in
    favour to jenkins scm API which will allow credentials sharing

## v0.2

-   Provide up-to-date checker for the first implementation, allowing to
    replace current job configuration with a newer one commited on the
    SCM
-   (done) Provide several new strategies to sync various configuration
    files : views, system, users related :
    [JENKINS-8225](https://issues.jenkins-ci.org/browse/JENKINS-8225)
-   (done) Allow administrator to select which of configuration type
    should be sync'ed (or not)

## v0.3

-   Provide configuration history on each configuration type page
-   (done) Provide new SCM connection implementations : cvs, git,
    others?

## Current bugs to solve before v0.1

-   Replace special linux characters ( " for example) when syncing
-   Check if updated repository on system config page is empty and
    display a warning if not

# Greetings to our sponsors

I'm a proud user of
[![](docs/images/idea120x30_white.gif)](https://www.jetbrains.com/idea/).  
Feel free to download and test this IDE, it's worth a try !
