| Plugin Information                                                                                          |
|-------------------------------------------------------------------------------------------------------------|
| View Build-Publisher [on the plugin site](https://plugins.jenkins.io/build-publisher) for more information. |

Older versions of this plugin may not be safe to use. Please review the
following warnings before using an older version:

-   [Insecure credential storage and
    transmission](https://jenkins.io/security/advisory/2017-10-23/)

# What does it do?

 This plugin allows records from one Jenkins to be published on another
Jenkins.The typical use case is for you to run builds within the
firewall, then send the results to another Jenkins which is facing the
outside world.

# How it works?

For the convention, let's call the Jenkins that's doing builds **private
Jenkins**, and let's call the Jenkins that's just broadcasting build
results as **public Jenkins**. The following pieces are involved to make
this work:

-   Both private and public Jenkins need to have the build-publisher
    plugin installed. This plugin makes Jenkins capable of sending
    records to public Jenkins.
-   Private Jenkins is configured with information about public Jenkins
    instance(s) that it wants to send data to.
-   Jobs on private Jenkins need to opt-in to the publication (through
    the job configuration.)

Once this is set up, build records from private Jenkins is sent to
public Jenkins, through HTTP. If a corresponding job does not exist, it
will be automatically created on the public Jenkins and kept in sync
with the private Jenkins.

For this arrangement to work correctly, two Jenkins need to have more or
less the same version of plugins.

# Configuration and usage

Public Jenkins instance is configured on the global configuration page.
You have to specify name, URL, administrator username and password, as
shown on the following screenshot.

  
![](docs/images/bp-global.png)

Check "Publish build" on the job configuration page int the "Post-build
Actions" section to mark the project for publishing:

  
![](docs/images/bp-project.png)

To check the status of publishing go to "Dashboard" -\> "Manage Jenkins"
-\> "Build publishing status". In case of any problem during build
transmission, you can restart the publishing thread or reschedule
interrupted transmission (otherwise the thread waits for 10 minutes and
tries again).

  
![](docs/images/bp-status.png)

### Proxy

Proxy support is available since ver. 1.12. Proxy settings is loaded
from Update center setup. If you do any changed to proxy setup, you need
to reload proxy setup in Build publisher section global Jenkins
configuration page in order to Build publisher reflect the changes (or
restart Jenkins:-).

## Missing features and known bugs

-   Views don't get synchronized automatically
-   The plugin isn't able to deal with matrix projects whose
    configurations (axis) have changed (I had problems reproducing this
    lately)

## Change Log

##### Upcoming changes

##### Version 1.22 (2017/10/23)

-   [Fix security
    vulnerability](https://jenkins.io/security/advisory/2017-10-23/)

##### Version 1.20 (2015/01/28)

-   Doesn't use time zones and create symlinks any more, uses only
    `buiild-number`, see [JENKINS-24380
    Migration](https://wiki.jenkins-ci.org/display/JENKINS/JENKINS-24380+Migration)
    for details ([pull
    \#7](https://github.com/jenkinsci/build-publisher-plugin/pull/7))

##### Version 1.19 (2014/05/10)

-   Create and update symlinks on the disk
    ([JENKINS-18238](https://issues.jenkins-ci.org/browse/JENKINS-18238),
    [JENKINS-6096](https://issues.jenkins-ci.org/browse/JENKINS-6096))

##### Version 1.18 (2014/04/09)

-   BuildPublisher reports "URL doesn't exist" after upgrade Remote
    Jenkins to 1.535
    ([JENKINS-20067](https://issues.jenkins-ci.org/browse/JENKINS-20067))

##### Version 1.17 (2013/05/14)

-   Fixed NPE when publishing a build
    ([JENKINS-17944](https://issues.jenkins-ci.org/browse/JENKINS-17944))

##### Version 1.16 (2013/04/30)

-   Create matrix sub-job if doesn't exists ([pull
    \#2](https://github.com/jenkinsci/build-publisher-plugin/pull/2))
-   Proper encoding of URLs of jobs ([pull
    \#3](https://github.com/jenkinsci/build-publisher-plugin/pull/3))

##### Version 1.15 (2013/02/28)

-   Update for changes required by Jenkins core 1.503
    ([JENKINS-16993](https://issues.jenkins-ci.org/browse/JENKINS-16993))

##### Version 1.14 (2013/02/26)

-   Handle error states when job was already deleted or matrix
    configuration doesn't exists yet ([pull
    \#2](https://github.com/jenkinsci/build-publisher-plugin/pull/2))
-   Proper URL encoding ([pull
    \#1](https://github.com/jenkinsci/build-publisher-plugin/pull/1))

##### Version 1.13 (2012/09/05)

-   Update for changes required by Jenkins core 1.463
    ([JENKINS-13857](https://issues.jenkins-ci.org/browse/JENKINS-13857))
-   Close output stream if some exception happens

##### Version 1.12 (2012/03/28)

-   Proxy support
    ([JENKINS-8806](https://issues.jenkins-ci.org/browse/JENKINS-8806))
-   Allow publishing into custom builds directory
    ([JENKINS-11692](https://issues.jenkins-ci.org/browse/JENKINS-11692))

##### Version 1.11 (2011/09/21)

-   Fixed NPE
    ([JENKINS-11003](https://issues.jenkins-ci.org/browse/JENKINS-11003))

##### Version 1.10 (2010/09/08)

-   Fix for JENKINS-7330

##### Version 1.9 (2010/08/05)

-   Added option to disable triggers on public Hudson (JENKINS-3802)

##### Version 1.8 (2009/12/28)

-   Fix link to matrix configuration
-   Update uses of deprecated APIs
