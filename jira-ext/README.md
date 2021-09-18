# Summary

A plugin for Jenkins CI to update JIRA tickets in an extensible way:
both what to update and how to up date are exposed as Extension Points

# Release Notes

0.8 March 23 2019

-   ![(plus)](docs/images/add.svg)Modify
    MentionedInCommitStrategy to use the comment of the
    change // [pull\#10](https://github.com/jenkinsci/jira-ext-plugin/pull/10)
-   ![(plus)](docs/images/add.svg)Add
    option to add label to a custom field // [pull
    \#17](https://github.com/jenkinsci/jira-ext-plugin/pull/17)
-   ![(minus)](docs/images/forbidden.svg) Fix
    issue with non-standard JIRA issue keys // [pull
    \#16](https://github.com/jenkinsci/jira-ext-plugin/pull/16)
-   ![(minus)](docs/images/forbidden.svg) Fix
    regex search for JIRA issue key in first word of commit // [pull
    \#15](https://github.com/jenkinsci/jira-ext-plugin/pull/15)
-   ![(plus)](docs/images/add.svg) Add
    Jenkinsfile // [pull
    \#11](https://github.com/jenkinsci/jira-ext-plugin/pull/11)
-   ![(minus)](docs/images/forbidden.svg) Fix
    MentionedInCommitStrategy for tickets in multiple lines // [pull
    \#9](https://github.com/jenkinsci/jira-ext-plugin/pull/9)

0.7 June 15 2017

-   ![(plus)](docs/images/add.svg) Add
    support for conditional step
    plugin [JENKINS-35339](https://issues.jenkins-ci.org/browse/JENKINS-35339)

[0.6.1](https://github.com/jenkinsci/jira-ext-plugin/releases/tag/jira-ext-0.6.1)
December 15 2016

-   ![(plus)](docs/images/add.svg)
    Add a Publisher for jira-ext steps, so that they can be run as a
    post-build step

[0.5](https://github.com/jenkinsci/jira-ext-plugin/releases/tag/jira-ext-0.5)
May 24 2016

-   ![(minus)](docs/images/forbidden.svg)
    Add environment variable support for update field, add label, add
    fix version, single ticket strategy
    [JENKINS-33054](https://issues.jenkins-ci.org/browse/JENKINS-33054)

[0.4.1](https://github.com/jenkinsci/jira-ext-plugin/releases/tag/jira-ext-0.4.1)
March 4 2016

-   ![(minus)](docs/images/forbidden.svg)
    Fix issue with guice injection affecting job-dsl runs

[0.4](https://github.com/jenkinsci/jira-ext-plugin/releases/tag/jira-ext-0.4)
March 3 2016

-   ![(plus)](docs/images/add.svg)
    Add methods to JiraSvc to get field values, update multi-select
    values, and directly obtain a JiraClient
-   ![(plus)](docs/images/add.svg)
    Add UI control to discover fieldIds in 'Update a Field' JIRA
    operation
-   ![(plus)](docs/images/add.svg)
    Add socket and connection timeouts (10s default, configured in
    global config)
-   ![(plus)](docs/images/add.svg)
    Add ability set the Fix-Version of an issue
-   ![(minus)](docs/images/forbidden.svg)
    Fix bug with global config not persisting between restarts
    [JENKINS-33249](https://issues.jenkins-ci.org/browse/JENKINS-33249)
-   ![(minus)](docs/images/forbidden.svg)
    Fix docs for fieldIds
    [JENKINS-33055](https://issues.jenkins-ci.org/browse/JENKINS-33055)

[0.3](https://github.com/jenkinsci/jira-ext-plugin/releases/tag/jira-ext-0.3)
(Failed release - eaten by
[INFRA-588](https://issues.jenkins-ci.org/browse/INFRA-588))

[0.2](https://github.com/jenkinsci/jira-ext-plugin/releases/tag/jira-ext-0.2)
Feb 4 2016

-   ![(plus)](docs/images/add.svg)
    Add Job-DSL support
-   ![(plus)](docs/images/add.svg)
    Add 'Mentioned in commit message' Issue Strategy

[0.1](https://github.com/jenkinsci/jira-ext-plugin/releases/tag/jira-ext-0.1)
Jan 11 2016

-   ![(plus)](docs/images/add.svg)
    Initial release

# Overview

A plugin for Jenkins CI to update JIRA tickets in an extensible way:
both what to update and how to update are exposed as ExtensionPoints.

Out of the box, you may discover issues by:

-   The issue key as the first word of the commit message
-   The issue key as the first word of the upstream commit message
-   Manually specifying an issue
-   Looking for it being mentioned somewhere in the commit message

To all of these JIRA issues, you may:

-   Add a comment
-   Update a field
-   Add a label
-   Transition a ticket (Start Work, Resolve, etc..)

# Comparison to jira-plugin

The jira-ext plugin is meant to be extensible in ways that the
jira-plugin is not. Both Jenkins and JIRA are used as part of an
organizations workflow, and as such are highly customizable. The
jira-ext plugin continues this philosophy by making the actions (and
when to perform those actions) also customizable for your organization.

In terms of specific features:

jira-ext plugin:

1.  Specify issues manually
2.  Specify issues from upstream commits
3.  Transitions issues
4.  Add label to issues
5.  Update custom fields
6.  Customize comments on issues

jira-plugin:

1.  Perform release notes
2.  (Deprecated) support for SOAP
3.  Specify issues from JQL
4.  Automatically link back to jenkins builds (backpointers)
5.  Link JIRA issues in the Jenkins UI

# Extending the plugin

The jira-ext plugin is built with extension in mind. Both how to
discover issues and what action to take are customizable. They are
implemented as ExtensionPoint, meaning your plugin (or a custom plugin)
can contribute its own ticket discovery strategies or operations based
on logic specific to your installation or environment.

For example, a code review build could provide a link to the code review
server in the JIRA issue as a custom field, or as a comment.

Or another example, a production release build could update tickets
based on differences between tags, to keep track of what was deployed
last.

If you want to add an operation which should be part of any JIRA
install, please open a pull request.

## Add a custom 'Discover Issues By' option

You may update what tickets to update using
an IssueStrategyExtension and IssueStrategyExtensionDescriptor.
SeeSingleTicketStrategy for an example.

## Add a custom JIRA operation

You may add your own operations using
a JiraOperationExtension and JiraOperationExtensionDescriptor.
SeeAddComment for an example.

# FAQ:

## How does the plugin work?

The jira-ext plugin is a build step in Jenkins - it updates JIRA tickets
through a REST API:

-   The plugin works by parsing out changesets from your SCM - the "what
    changes". Using those, you can configure it to discover JIRA issue
    keys - for example, if the issue key is mentioned in the commit
    message.
-   Then, with each of those issues, you can do an operation on your
    JIRA server for each of those tickets, using JIRA's REST API, for
    example add an issue. Supported operations are listed in the README,
    and in the UI.

the 'ext' in the JIRA-ext plugin stands for 'extensible' - both of those
bullet points can be extended by writing your own plugin. Jenkins wiki
has docs on that:  
<https://wiki.jenkins-ci.org/display/JENKINS/Extend+Jenkins>

## I have a question, how should I ask it?

The jira-ext plugin is an open source project, and questions should be
transparent to benefit the community. In order of preference, please:

1.  Open a Pull Request in github
2.  Look for a JIRA issue or create a new one if one does not exist
3.  Ask on the jenkins user list

If those do not work or get a reply within a week, please contact the
author directly.

# Authors

Dan Alvizu <alvizu@gmail.com>

# License

Licensed under the Apache License, Version 2.0 (the “License”); you may
not use this file except in compliance with the License. You may obtain
a copy of the License athttp://www.apache.org/licenses/LICENSE-2.0  
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an “AS IS” BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
