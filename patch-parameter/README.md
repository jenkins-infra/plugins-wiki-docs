This plugin adds a new parameter type to a parameterized build, where
the user can optionally submit a patch file. This patch file will be
then applied to the workspace before the build commences.

# Motivation

This plugin is developed to enable server-side testing of a change
that's not yet committed (also known as [pre-tested
commit](http://www.jetbrains.com/teamcity/features/delayed_commit.html)).
In this workflow, a developer works on a change locally, and before he
checks in the changes, he'd take the diff, submit it to Jenkins, and
verify that it builds OK. Once the patch is verified by Jenkins, the
user will then actually commit the change.

This can be also useful for situations where a proper test environment
is tricky to replicate locally, or where your Jenkins can run tests
considerably faster than developers' local computers.

Note that on distributed version control systems, there's often a better
way to do this. See [Gerrit
Trigger](https://wiki.jenkins.io/display/JENKINS/Gerrit+Trigger) or
[Subversion Merge
Plugin](https://wiki.jenkins.io/display/JENKINS/Subversion+Merge+Plugin)
or [validated merge feature from
CloudBees](http://jenkins-enterprise.cloudbees.com/docs/user-guide-bundle/validated-merge.html).

# Usage

In the job configuration screen, click "This build is parameterized",
then add "patch as a parameter".

# Changelog

### Version 1.2 (Jul 8, 2014)

-   Fixed the handling of patch produced by Mercurial ([pull
    request](https://github.com/cloudbees/diff4j/pull/2))

### Version 1.1 (Aug 16, 2013)

-   Small change to make it more clear why a patch failed to apply

    ### Version 1.0 (Oct 7, 2012)

&nbsp;

-   Initial release
