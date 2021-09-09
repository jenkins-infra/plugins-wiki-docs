The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Secret stored in plain
    text](https://jenkins.io/security/advisory/2020-07-02/#SECURITY-1627)

Allows users to upload files to [Slack](https://slack.com/)

# Summary

Jenkins is a wonderful continuous integration system which automates
your build process for you. Frequently artifacts and files are generated
during the build process which one may want to share with their team.
This plugin was born out of that necessity and streamlines the process
of posting such files to Slack, the popular chat messenger for companies
and teams. With bare minimum configuration, you get a slack uploader!

## Wiki

Check the wiki page: -
<https://github.com/jenkinsci/slack-uploader-plugin> to post issues or
to check release notes.

# Setup

-   Create a Slack account and obtain your token.
-   Install the plugin on Jenkins server.
-   Configure your Jenkins job as a Post-Build action.
-   Enter the channel and the file path of the files you want to upload.
-   Start a build and watch as the magic happens.
