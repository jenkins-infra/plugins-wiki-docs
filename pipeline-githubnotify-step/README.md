Older versions of this plugin may not be safe to use. Please review the
following warnings before using an older version:

-   [CSRF vulnerability and missing permission checks allows capturing
    credentials](https://jenkins.io/security/advisory/2020-02-12/#SECURITY-812%20(1))
-   [Users with Overall/Read access can enumerate credential
    IDs](https://jenkins.io/security/advisory/2020-02-12/#SECURITY-812%20(2))

This step allows a pipeline job to notify a status for any GitHub
commit.

Intended for jobs that want to notify GitHub of any desired event with
complete control over the notification content. Including context,
status or target url.

## Introduction

This plugin provides the *githubnotify* build step, this step can be
used to create a status in Github.

The available parameters are:

> -   *credentialsId*: The id of the github's credentials to use, must
>     be of type UsernameAndPassword. **Make sure the credentials have
>     write access, as [stated by
>     doc](https://developer.github.com/v3/repos/statuses/) *Users with
>     push access can create commit statuses for a given ref***
> -   *status*: The status to send, one of SUCCESS, FAILURE, ERROR or
>     PENDING
> -   *description*: The description that will appear at the
>     notification
> -   *context*: The notifications context, GH uses the context to
>     diferentiate notifications (optional, jenkins/githubnotify is used
>     by default)
> -   *sha*: The sha that identifies the commit to notify status
> -   *repo*: The repo that ows the commit we want to notify
> -   *account*: The account that owns the repository
> -   *gitApiUrl*: GitHub's Enterprise instance API url (optional,
>     [https://api.github.com](https://api.github.com/) is used by
>     default)
> -   *targetUrl*: The targetUrl for the notification
>
>     ``` syntaxhighlighter-pre
>     githubNotify account: 'raul-arabaolaza', context: 'Final Test', credentialsId: 'raul-github',
>         description: 'This is an example', repo: 'acceptance-test-harness', sha: '0b5936eb903d439ac0c0bf84940d73128d5e9487'
>         , status: 'SUCCESS', targetUrl: 'http://www.cloudbees.com'
>     ```
>
>     Aditionally the step is able to infer most of this data when
>     running from a pipeline multibranch job, in that the call is
>     greatly simplified:
>
``` syntaxhighlighter-pre
githubNotify context: 'Notification key', description: 'This is a shorted example',  status: 'SUCCESS'
```

Please go to the
[README](https://github.com/jenkinsci/pipeline-githubnotify-step-plugin)
of the plugin to find more details about how the inferring process works
and when you cann use it 

## Changelog

### Version 1.0.3 (2017-08-16)

-   [JENKINS-43370](https://issues.jenkins-ci.org/browse/JENKINS-43370)
    The step now is able to use a proxy if defined. (Thanks to Markus
    Heberling for the fix)

### Version 1.0.2 (2016-04-09)

-   [JENKINS-42955](https://issues.jenkins-ci.org/browse/JENKINS-42955) The
    step now uses the scan credentials over the checkout credentials for
    inferring

### Version 1.0.1 (2016-12-24)

-   [JENKINS-40422](https://issues.jenkins-ci.org/browse/JENKINS-40422) The
    step now uses the scan credentials over the checkout credentials for
    inferring

### Version 1.0.0 (2016-11-30)

-   Initial version
