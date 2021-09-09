Most critical issues found with Bitbucket pullrequest builder plugin is
no control in triggering builds by open pull requests. When the plugin
is initially installed & configured, all open pull requests will be
triggered, which might crash the system when there are many open PRs.
Besides, whenever a user creates a PR or commits a change, the build
will be triggered, causing massive unnecessary build processes and
failures. Users like to control the triggering of builds when it's
ready.

Suggestion: add a checkbox like below

|                                           |     |
|-------------------------------------------|-----|
| Only build if asked with the build phrase |     |

This plugin builds pull requests from Bitbucket.org and will report the
test results.Basic documentation can be found on
[GitHub](https://github.com/jenkinsci/bitbucket-pullrequest-builder-plugin#readme).

  
