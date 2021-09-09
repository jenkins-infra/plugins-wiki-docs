Every time you trigger a build, you don't have to log in to your build
server to see if it passed or failed. Now you will be able to know when
your build is passing right within the Bitbucket UI.   

![](docs/images/CommitList.png)

# Features

Notify to Bitbucket Cloud for the following build events:

-   Build start
-   Build finish

  

This plugin aims at the Atlassian-hosted BitBucket Cloud solution, not
BitBucket Server (formerly known as Stash).

# Configuration

#### Create a OAuth Consumer

First you need to get a OAuth consumer key/secret from Bitbucket.

1.  Login into your Bitbucket account.
2.  Click your account name and then in **Settings** from the menu bar.
3.  Click **OAuth** from the menu bar.
4.  Press the **Add consumer** button.
5.  The system requests the following information:
    1.  Give a representative **name** to the consumer e.g. Jenkins
        build status notifier.
    2.  Although is not used, a **Callback URL** must be set e.g.
        ci.your-domain.com.
    3.  Leave blank the **URL** field.
    4.  Add **Read** and **Write** permissions to **Repositories**.
    5.  Click **Save** button and a **Key** and **Secret** will be
        automatically generated.

#### Ensure Jenkins URL is set

Second, ensure that Jenkins URL is properly set:

1.  Open Jenkins **Manage Jenkins** page.
2.  Click **Configure System** page.
3.  Go to the section **Jenkins Location**.
4.  Set the correct URL to **Jenkins URL**.
5.  Click **Save** button.

#### Add OAuth Credentials to Jenkins

Third, you need to add the Bitbucket OAuth Consumer credentials. You
have two ways to configure it globally or locally:

##### Global

1.  Open Jenkins **Manage Jenkins** page.
2.  Click **Configure System**.
3.  Go to the section **Bitbucket Build Status Notifier plugin**.
4.  If you still don't have stored the credentials click **Add**,
    otherwise you can skip this step.
    1.  Select **Username with password**.
    2.  Set the the OAuth consumer **key** in **Username**.
    3.  Set the the OAuth consumer **secret** in **Password**.
    4.  Click **Add** button.
5.  Select the desired credentials.
6.  Click **Save** button.

##### Local

1.  Go to the Job you want notifies the builds to Bitbucket.
2.  Click **Configure**.
3.  Click **Add post-build action**.
4.  Select **Bitbucket notify build status**.
5.  Click **Advanced** button.
6.  If you still don't have stored the credentials click **Add**,
    otherwise you can skip this step.
    1.  Select **Username with password**.
    2.  Set the the OAuth consumer **key** in **Username**.
    3.  Set the the OAuth consumer **secret** in **Password**.
    4.  Click **Add** button.
7.  Select the desired credentials.

## Pipeline Projects

Once you have configured the credential, you can notify BitBucket from
your Pipeline script through the bitbucketStatusNotify step.

#### Usage

The bitbucketStatusNotify step notifies the status of a build identified
by a build key and build name to BitBucket (see all options under API).
If buildKey and buildName parameters are not provided, a standard name
will be assigned to the build (NameOfYourJob \#numberOfBuild - eg.
MyProject \#32).

``` syntaxhighlighter-pre
...


bitbucketStatusNotify(buildState: 'INPROGRESS')


try {
  // do your job logic
} catch (Exception e) {
  bitbucketStatusNotify(buildState: 'FAILED')
}


bitbucketStatusNotify(buildState: 'SUCCESSFUL')

...
```

#### API

The bitbucketStatusNotifiy step allows the following parameters:

| Name             | Type                                 | Optional | Description                                        |
|------------------|--------------------------------------|----------|----------------------------------------------------|
| buildState       | "INPROGRESS"\|"SUCCESSFUL"\|"FAILED" | no       | The status of the current build phase              |
| buildKey         | String                               | yes      | The unique key identifying the current build phase |
| buildName        | String                               | yes      | The build phase's name shown on BitBucket          |
| buildDescription | String                               | yes      | The build phase's description shown on BitBucket   |

## Freestyle Projects

Once you have configured the credentials, configure jenkins to notify
Bitbucket.

1.  Go to the Job you want notifies the builds to Bitbucket.
2.  Click **Configure**.
3.  Select **Bitbucket notify build status**.
4.  Choose whether you want to notify the build status on Jenkins to
    Bitbucket.
5.  Choose whether given a same scm revision you want to notify a new
    build status for every job build or to override the latest one.

# Change Log

##### Version 1.4.0 (May 29, 2018)

-   ![(plus)](docs/images/add.svg) Add
    optional parameters for the bitbucket repo slug and the commit id.
    ([PR
    \#37](https://github.com/jenkinsci/bitbucket-build-status-notifier-plugin/pull/37))

##### Version 1.3.3 (Feb 15, 2017)

-   ![(error)](docs/images/error.svg)
     Fix bug on pipeline avoid exception whenever failure is notified.

##### Version 1.3.1 (Dec 20, 2016)

-   ![(plus)](docs/images/add.svg)
    Add documentation for overriding latest build status
-   ![(plus)](docs/images/add.svg)
    Folders/Multibranch support. Refactored all
    project.getFullDisplayName() calls to project.getFullName() calls in
    order to support job inside folders.
-   ![(error)](docs/images/error.svg)
    Fix for username same as repository name
-   ![(plus)](docs/images/add.svg)
    Use MercurialTagAction.class to retrive Mercurial revision

##### Version 1.3.0 (Juli 13, 2016)

-   ![(plus)](docs/images/add.svg)
      Add support for pipeline plugin.
    ([JENKINS-33841](https://issues.jenkins-ci.org/browse/JENKINS-33841))
-   ![(plus)](docs/images/add.svg)
      Add configuration for show only latest build status on Bitbucket.
    ([JENKINS-35083](https://issues.jenkins-ci.org/browse/JENKINS-35083))

##### Version 1.2.2 (Juni 16, 2016)

-   ![(plus)](docs/images/add.svg)
      Improve documentation.
-   ![(error)](docs/images/error.svg)
      Fix some issues related to plugin deployment.

##### Version 1.2.1 (Juni 1, 2016)

-   ![(plus)](docs/images/add.svg)
      Add Junit test results to Bitbucket build status description.
    ([JENKINS-34619](https://issues.jenkins-ci.org/browse/JENKINS-34619))
-   ![(error)](docs/images/error.svg)
      Fix minor issues.
    ([JENKINS-33901](https://issues.jenkins-ci.org/browse/JENKINS-33901))
-   ![(plus)](docs/images/add.svg)
      Increase logging verbosity.
    ([JENKINS-34788](https://issues.jenkins-ci.org/browse/JENKINS-34788))

##### Version 1.2.0 (April 22, 2016)

-   ![(plus)](docs/images/add.svg)
      Add support for parameterized repository URLs.
    ([JENKINS-33276](https://issues.jenkins-ci.org/browse/JENKINS-33276))
-   ![(plus)](docs/images/add.svg)
      Add support for multi SCM.

##### Version 1.1.0 (March 13, 2016)

-   ![(plus)](docs/images/add.svg)
     Add support for updating the Bitbucket build status for a previous
    aborted build.
    ([JENKINS-32940](https://issues.jenkins-ci.org/browse/JENKINS-32940))
-   ![(error)](docs/images/error.svg)
     Fix bug build abortion not notified.
    ([JENKINS-32940](https://issues.jenkins-ci.org/browse/JENKINS-32940))
-   ![(plus)](docs/images/add.svg)
     Add support for single and global API credentials.
    ([JENKINS-32574](https://issues.jenkins-ci.org/browse/JENKINS-32574))
-   ![(error)](docs/images/error.svg)
     Fix bug max Bitbucker key lenght.
    ([JENKINS-32781](https://issues.jenkins-ci.org/browse/JENKINS-32781))
-   ![(plus)](docs/images/add.svg)
     Add support for mercurial repositories.
    ([JENKINS-32548](https://issues.jenkins-ci.org/browse/JENKINS-32548))

##### Version 1.0.3 (Jan 29, 2016)

-   ![(error)](docs/images/error.svg)
     Fix bug parsing repository URI.
    ([JENKINS-32498](https://issues.jenkins-ci.org/browse/JENKINS-32498))
-   ![(error)](docs/images/error.svg)
     Mark UNSTABLE builds as FAILED on Bitbucket.

##### Version 1.0.1 (Jan 22, 2016)

-   ![(error)](docs/images/error.svg)
     Fix problem finding current revision.
    ([JENKINS-32519](https://issues.jenkins-ci.org/browse/JENKINS-32519))
-   ![(plus)](docs/images/add.svg)
     Improve logging for exceptions in order to easy debugging.

##### Version 1.0 (Jan 15, 2016)
