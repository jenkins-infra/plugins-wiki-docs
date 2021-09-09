Older versions of this plugin may not be safe to use. Please review the
following warnings before using an older version:

-   [Credentials stored in plain
    text](https://jenkins.io/security/advisory/2019-07-11/#SECURITY-1438)

Allows users to use the [Gogs](https://gogs.io/) Webhook

# Gogs-Webhook Plugin

This plugin integrates [Gogs](https://gogs.io/) to Jenkins.

In Gogs configure your webhook like this:

``` syntaxhighlighter-pre
http(s)://<< jenkins-server >>/gogs-webhook/?job=<< jobname >>
```

Example how your the webhook in Gogs should look like:  
![](docs/images/gogs-webhook-screenshot.png)

## Change Log

##### Version 1.0.14 (Apr 4, 2018)

-   Fixes \`job not found\` if slashes are used in
    branch \[[GH\_ISSUE\#36](https://github.com/jenkinsci/gogs-webhook-plugin/issues/36)/[PR\#40](https://github.com/jenkinsci/gogs-webhook-plugin/pull/40)\].

##### Version 1.0.13 (Mar 16, 2018)

-   Fixes \`job not found\` if folders are
    used \[[GH\_ISSUE\#36](https://github.com/jenkinsci/gogs-webhook-plugin/issues/36)/[PR\#37](https://github.com/jenkinsci/gogs-webhook-plugin/pull/37)\].

##### Version 1.0.12 (Mar 8, 2018)

-   Expose REF and BEFORE payload to environment variables (GOGS\_REF
    and GOGS\_BEFORE) 

##### Version 1.0.11 (Feb 26, 2018)

-   Use \`\[IGNORE\]\` at start of commit subject to ignore the push
-   Multibranch pipeline support (untested)

##### Version 1.0.10 (Apr 10, 2017)

-   Allow empty
    password \[[PR\#19](https://github.com/jenkinsci/gogs-webhook-plugin/pull/19)\]

##### Version 1.0.9 (Mar 8, 2017)

-   Added new Gogs authentication but keeps it compatible with old
    version \[[PR\#16](https://github.com/jenkinsci/gogs-webhook-plugin/pull/16)\]
-   Added folder
    support \[[PR\#12](https://github.com/jenkinsci/gogs-webhook-plugin/pull/12)\]

##### Version 1.0.8 (Dec 20, 2016)

-   Fixes impersonation problem of v1.0.7

##### Version 1.0.7 (Dec 6, 2016)

-   Added Gogs secret per
    job \[[PR\#3](https://github.com/jenkinsci/gogs-webhook-plugin/pull/3)\]

##### Version 1.0.6 (Sep 5, 2016)

-   Added pipeline support.

##### Version 1.0.4 (Jul 4, 2016)

-   Added CSRF
    protection [\[JENKINS-37149\]](https://issues.jenkins-ci.org/browse/JENKINS-37149)

##### Version 1.0 (Jul 21, 2016)

-   First release
