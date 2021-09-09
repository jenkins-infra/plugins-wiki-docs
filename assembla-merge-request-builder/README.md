Allows Jenkins to build merge requests from
[Assembla](https://assembla.com/).

This plugin fetches the source and target branches of a
[Assembla](https://assembla.com/) merge request and makes them available
to your build via build parameters. Once the build completes, Jenkins
will leave a comment on the merge request and related tickets indicating
whether the merge request was successful.

## Required Jenkins Plugins

-   git plugin
    (<https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin>)

## Installation

-   Ensure that a Jenkins user exists within your Assembla space, has
    access to the repository and has permissions to leave comments.
    Ensure that the user has **Member** level access to the project.
-   Install the plugin in Jenkins.
    -   The plugin is hosted on the [Jenkins Plugin
        repository](https://wiki.jenkins-ci.org/display/JENKINS/Assembla+Merge+Request+Builder+Plugin)
    -   Go to Jenkins -\> Manage Plugins -\> Available
    -   Search for Assembla Merge Request Builder
    -   And install it
    -   Ensure you restart Jenkins
-   Go to Manage Jenkins -\> Configure System -\> Assembla Merge Request
    Builder
-   Set your User API key key for the Jenkins user. This can be found by
    logging into Assembla as Jenkins and going to the [account
    page](https://www.assembla.com/user/edit/manage_clients)
-   Set your User API secret secret for the Jenkins user. This can be
    found the same way as API key.
-   Click Test credentials button
-   Set/change any of the other available parameters as necessary.
-   Save to preserve your changes.
-   Go to Manage Jenkins -\> Configure Global Security and set Markup
    Formatter to *Safe HTML*. It will make Jenkins display links in
    build history properly.

## Webhooks

-   Make sure that you have Webhook Tool installed and you have a git
    repository in your space. If no, go to Admin -\> Tools -\> More -\>
    Webhook section and click "Add" button.
-   You need to configure the Webhook Tool only once per each space.
-   Set Assembla webhook to trigger your Jenkins server. Go
    to<https://www.assembla.com/spaces/%60your_space_name%60/webhooks>.
    Create new webhook, select "Assembla Jenkins plugin" from template
    (Make sure "Code comments" and "Code commits" are checked in Post
    updates aboutsection).

## Creating a Job

-   Create a new job by going to New Job
-   Set the Project Name
-   In the Source Code Management section:
    -   Click Git, enter your Repository URL and in Advanced set its
        Name to origin
    -   In Branch to build enter
        **${assemblaSourceRepositoryName}/${assemblaSourceBranch}**
    -   OPTIONAL: For merge requests from forked repositories, add
        another repository with Repository URL
        **${assemblaSourceRepositoryUrl}** and name
        **${assemblaSourceRepositoryName}**.
    -   OPTIONAL: You can configure Jenkins to merge source with target
        branch before build. In the Additional Behaviours section:
        -   Click the Add drop down button and the Merge before build
            item
        -   Specify the name of the repository as origin and enter the
            Branch to merge to as **${assemblaTargetBranch}**
        -   NOTE: **${assemblaTargetBranch}** parameter is not available
            when using "Push trigger"
        -   **Ensure Prune stale remote-tracking branches** is not added
-   In the Build Triggers section:
    -   Check the Assembla Triggers checkbox and Assembla Merge Request
        Builder configuration section will appear.
    -   Enter Space name and Repository name and click Check settings
        button. (For example: If your code browser url is
        <https://www.assembla.com/spaces/pavel-test/git/source>, space
        name will be **pavel-test** and repo name - **git**.
    -   Check Comment and vote merge request to allow Jenkins to post a
        comment about build result and upvote/downvote merge request
    -   If you want to be notified when Jenkins starts the build, check
        Comment after job start checkbox. Jenkins will post a comment to
        a merge request and related tickets (if Comment related tickets
        checkbox is checked).
-   Configure any other pre build, build or post build actions as
    necessary
-   Save to preserve your changes

## Manual Triggers

You can trigger a job a manually by clicking This build is parameterized
and adding the relevant build parameters. These include:

-   $assemblaSourceRepositoryUrl - assembla repository url
-   $assemblaTargetBranch - merge request target branch
-   $assemblaSourceBranch - merge request source branch

\*Note: A manually triggered build will not add build
triggered/succeeded/failed comments to the merge request.  
\*Note: You should ensure that the 'Global Config user.name Value' and
'Global Config user.email Value' are both set for your git plugin. In
some cases, you will get an error indicating that a branch cannot be
merged if these are not set.

## Message templates

Plugin allows to customize build messages using templates (Manage
Jenkins -\> Configure System -\> Assembla Merge Request Builder). You
can use any env variables or build parameters in templates. For example,
you can mention your QA team to test changes or mention merge request
author about build result etc. Additionally plugin provides:

-   $mrTitle - merge request title
-   $mrAbbrTitle - merge request title truncated to 30 chars
-   $mrUrl - merge request url
-   $mrId - merge request id
-   $jobName - jenkins job name
-   $buildStatus - build status (available only if build is completed)
-   $buildUrl - build url
-   $assemblaSourceSpaceId - assembla space id
-   $assemblaDescription - merge request description
-   $assemblaSourceRepositoryUrl - assembla repository url
-   $assemblaTargetBranch - merge request target branch
-   $assemblaSourceBranch - merge request source branch
-   $assemblaMergeRequestId - assembla merge request id
-   $assemblaRefName - build git revision

## Contributing

-   Check out the latest master to make sure the feature hasn't been
    implemented or the bug hasn't been fixed yet
-   Check out the issue tracker to make sure someone already hasn't
    requested it and/or contributed it
-   Fork the project
-   Start a feature/bugfix branch
-   Commit and push until you are happy with your contribution
-   Make sure to add tests for it. This is important so I don't break it
    in a future version unintentionally.
-   Please try not to mess with the version, or history. If you want to
    have your own version, or is otherwise necessary, that is fine, but
    please isolate to its own commit so I can cherry-pick around it.

## Copyright

Copyright (c) 2016 Assembla Inc. See LICENSE for further details.
