Sends build notifications to a buddycloud instance.

# buddycloud for Jenkins

This buddycloud
([http://www.buddycloud.org](http://www.buddycloud.org/)) plugin for
Jenkins CI ([http://jenkinsci.org](http://jenkinsci.org/)) enables
notifcation to be sent to a buddycloud channel on the success and
failure of a build or to notify of an unstable build.

The success and fail messages can be customised for each project.

## Installation

Install the plugin from the Jenkins Plugin Manager. It should be listed
as **buddycloud Plugin** under **Build Notifiers**.

### Manual Install

-   Install the ruby-runtime plugin.
-   Install the Token Macro Plugin. It may already be installed.
-   Download the latest buddycloud plugin .hpi file from:
    <http://maven.jenkins-ci.org/content/repositories/releases/org/jenkins-ci/ruby-plugins/buddycloud>.
-   Upload the .hpi file into Jenkins from Plugin Manager \> Advanced.
-   Restart Jenkins.

## Enable buddycloud notifications

In the job configuration, under Post-build actions, select **buddycloud
Notification**.

Enter an API base URL (e.g.
[https://api.buddycloud.org](https://api.buddycloud.org/) - **no ending
slash**), a valid username and password, and the channel to wish you
want the posts to go. Note: The user must have post rights to that
channel.

You can also update the status message of a channel dependent on build
success, you must have write permission to this node also.

## Todo

-   Add the ability to update a channels status line depending on the
    status of the last build
-   Add example messages
-   Add some images to README.md

## Feedback

To [raise an
issue](https://github.com/lloydwatkin/buddycloud-for-jenkins/issues) or
send an email to lloyd@evilprofessor.co.uk.

## Notes

For more information on the buddycloud HTTP API please see
<https://buddycloud.org/wiki/Buddycloud_HTTP_API>.  
Inspiration from
<https://github.com/mattriley/yammer-plugin-for-jenkins>

## Version

-   **0.3.0**

– Added support for unstable build notifications

-   **0.2.3**

– Bundled nokogiri  
– Bugs fixed from deployment to a third party server

-   **0.2.2**

– Update to support latest Jenkins instance  
– Nokogiri not bundled do not use

-   **0.2.1**

– Fixed endpoint  
– Nokogiri not bundled do not use

-   **0.2.0**

– Update to new API end points
<https://buddycloud.org/wiki/Buddycloud_HTTP_API#API_Endpoints>  
– %s/Buddycloud/buddycloud/g
<https://github.com/lloydwatkin/buddycloud-for-jenkins/issues/1>

-   **0.1.0**

– Initial working version

[![Bitdeli
Badge](https://d2weczhvl823v0.cloudfront.net/lloydwatkin/buddycloud-for-jenkins/trend.png)](https://bitdeli.com/free)

Last updated: 2014-06-05 22:27:58 UTC
