| Plugin Information                                                                                              |
|-----------------------------------------------------------------------------------------------------------------|
| View jenkins-reviewbot [on the plugin site](https://plugins.jenkins.io/jenkins-reviewbot) for more information. |

The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [CSRF vulnerability and missing permission check allow
    SSRF](https://jenkins.io/security/advisory/2019-04-03/#SECURITY-1091)

**This plugin is up for adoption.** Want to help improve this plugin?
[Click here to learn
more](http://localhost:8085/display/JENKINS/Adopt+a+Plugin "Adopt a Plugin")!

This plugin pulls a diff from reviewboard request, applies the patch,
builds it and reports the build status as a review comment

# Source Code

<https://github.com/vmware/jenkins-reviewbot>

# Motivation

The project integrates Jenkins with Reviewboard code review tool
(<http://www.reviewboard.org/>). Jenkins will pick a diff submitted to
Reviewboard, run a build, and report build results on the review
request: either blessing the request or warning that it will break
mainline if committed. This essentially allows to validate commits
before they reach mainline, a feature available in GitHub pull requests
(CloudBees), TeamCity and Gerrit. Unlike these tools, this project
supports any source control system that Reviewboard supports (Git, SVN,
Perforce), any hosting, and will require only Jenkins server
configuration.

See [the
presentation](http://www.cloudbees.com/jenkins/juc2013/juc2013-israel-abstracts.cb#YardenaMeymann)
at JUG Israel 2013.

# How to use this plugin

## Prerequisites

Install [Patch Parameter
Plugin](http://localhost:8085/display/JENKINS/Patch+Parameter+Plugin)

## Configuration

1\. In Jenkins configuration set URL of the reviewboard (just the name of
the site, no /dashboard or any other suffixes, e.g.
<http://reviewboard.mycompany.com/>), username and password. You can
test the connection before saving.
![](docs/images/jenkins_rb1.jpg)

2\. Create or clone a job that you wish to run for each review request.

3\. Check "This build is parameterized" and add review parameter

![](docs/images/jenkins_rb2.jpg)

4\. Also add a post-build action of posting build result to reviewboard

![](docs/images/jenkins_rb3.jpg)

Save the configuration.

## Custom patch application command

Since version 2.2 it is possible to use a different method to apply the
patch (instead of the default diff4j). In the **Reviewboard** section of
Jenkins global settings page, check "Disable Auto-Apply Patch"

![](docs/images/jenkins_settings_adv.png)

Now the plugin will download the diff from Reviewboard and save it in
the workspace file called patch.diff (as it did before). But unlike
earlier versions, now the plugin **will not apply** the patch,
**unless** you also add Apply Patch build step

![](docs/images/jenkins_apply_action.png)

This allows you to apply the patch differently, for example with a
**command line specific to your source control**. This also allows you
to perform actions between patch download and apply.

## Configuration with Perforce

-   Because reviewboard includes the full Perforce path (i.e.
    //depot/project/branch/...) the Jenkins project checkout must
    include the full path in the workspace.

    ``` syntaxhighlighter-pre
    //depot/project/branch/... //${JOB_NAME}-workspace/depot/project/branch/...
    ```

&nbsp;

-   To allow the files to be patched, change the Perforce Option default
    of "noallwrite" to "allwrite".

## Using the plugin

Now when you run the job, you will need to provide the URL for review
request or review number, e.g.
<http://reviewboard.mycompany.com/r/12345/> or just 12345.

![](docs/images/jenkins_rb4.jpg)

After the job completes, the result of the run will be posted to review
request like this:

![](docs/images/jenkins_rb5.jpg)

## Triggering the job

### Curl

``` syntaxhighlighter-pre
JENKINS=... e.g. http://jenkins.mycompany.com
JOBNAME=... e.g. Reviewbot
USER=...
PASSWORD=...
REVIEW=... e.g. http://reviewboard.mycompany.com/r/12345/

curl -G -u $USER:$PASSWORD -d delay=0sec --data-urlencode review.url=$REVIEW $JENKINS/job/$JOBNAME/buildWithParameters
```

### Webhooks

With Reviewboard 1.7 you should be able to use [webhooks
extension](http://www.youtube.com/watch?v=yE3CcLs0HQo), but I didn't
test it.

### Polling with Jenkins

Create another job (free-style) and add a build step "Check for
reviews..." to poll reviewboard

#### After version 2.0

The job will check for reviews in the specified repositories and/or
targeted to Jenkins user. The invoked job must take review url
parameter.

![](docs/images/reviewbot_poller_snap.jpg)

#### Prior to version 2.0

The job will check for reviews that are targeted to jenkins user
directly or to groups to which the jenkins user belongs and have been
updated in the X hours since the most recently updated review (relative
time is used to work around the timezone problem of pre-1.7
Reviewboard). The reviews in which the diff has been changed, but the
Jenkins user did not comment on since the last diff, will be tested with
the job name provided here.

#### Backwards compatbility

To achieve the same behavior post 2.0, turn on  "Jenkins User" and leave
repository selection at "any" option.

## Configuring downstream jobs

When using review url parameter in a job, you can refer to its value by
**$REVIEW\_URL**, and use it with [Parameterized Trigger
Plugin](http://localhost:8085/display/JENKINS/Parameterized+Trigger+Plugin).

## Patch in Unified Format and multiple files support

If the diffs downloaded from Reviewboard are in the [Unified
Format](http://www.gnu.org/software/diffutils/manual/html_node/Example-Unified.html)
(as is probably the case for Perforce using RBtools) the default patch
option will fail  for reviews with multiple files. This is currently a
limitation in [diff4j](https://github.com/cloudbees/diff4j). To solve
that, use a Custom patch application (see above) such as the shell
command "patch -p1 -u -i patch.diff"

## patch(1) shell command sometimes return "...hunk FAILED"

There are legitimate reasons for this, for example if the file in the
review was already changed on trunk, but Review Board also has a
limitation where the CR/CRLF characters in the patch file are converted
into LF. This makes patching fail in files with non Linux newline
characters.

This Review Board bug is tracked in [Issue
2916](https://hellosplat.com/s/beanbag/tickets/2916/). Until it's fixed,
one work around can be to convert the code with something
like [this](http://stackoverflow.com/a/7533652) before running the
patch.

## Working with branches

You can refer to **$REVIEW\_BRANCH** to find out what branch was
specified in the review. If none was specified, the value will be
*master*.

## Working with repositories

You can refer to **$REVIEW\_REPOSITORY** to find out what repository the
review was filed in. If none was specified, the value will be *unknown*.

# Known limitations

-   It is recommended to run the polling job on master (didn't test on
    slave, suspect it might not work)
-   The internal custom patch application does not support patched in
    Unified Format with multiple files (it's a limitation in diff4j),
    see workaround above.\* The internal custom patch application does
    not support patched in Unified Format with multiple files (it's a
    limitation in diff4j), see workaround above.

# Changes

## Version 2.2.x

Several enhancements were added:

-   support
    [markdown](https://www.reviewboard.org/docs/manual/2.0/users/markdown/)
    in Reviewboard messages, instead of URL it will post Jenkins job
    name and number with a link - configurable per job;
-   repositories list cache in poller job can be disabled (useful if you
    add repositories after starting Jenkins) - configurable globally;
-   biggest improvement is probably the separation of diff download and
    patch application (has to be enabled with a global setting). What
    you can do now is apply the patch with an alternative command that
    you can define yourself as a build step. You can also combine other
    actions with the default
    [diff4j](https://github.com/cloudbees/diff4j) patch application
    which is now available as a standard build action, so you can
    perform other steps before it.

## Version 2.1

Ahead of build notification message is now optional, and can be disabled
per job. The job now holds in memory which reviews has been already
processed (builds spawned) in order to avoid build duplication.

## Version 2.0

Option to poll for reviews in a specific repositories and more issues
closed. Special thanks to [Damien Nozay](https://github.com/dnozay) for
his contributions!

## Version 1.4.1 & 1.4.2

Authentication tweaks, fixed a bug with port number in preemptive
authentication

## Version 1.4

Fixed polling task to support Reviewboard 1.7 date format

## Version 1.3

Support for concurrent builds, ahead of build notification message to
reviewboard (from poller job) eliminates duplicate builds of same
review 

## Version 1.2

Support built-in polling

## Version 1.1

Fixed several bugs (misplaced temp file caused permissions problem on
Linux, improved API use and authentication, injected review url and
branch parameters)

## Version 1.0

Initial

# Miscellaneous

The plugin was tested against Reviewboard version 1.6.13 and 1.7.6
