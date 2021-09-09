This plugin from Microsoft Corp. allows sending running Jobs status
notifications.

# Description

Plugin is used to send actionable messages in Outlook, Office 365
Groups, and Microsoft Teams.

[Read more about
it](https://docs.microsoft.com/en-us/outlook/actionable-messages/)

Once the Office 365 Connector plugin is installed, webhooks for
notifications are defined in **Job Notification** section of the
configuration of job. Here is the screenshot for that section
![](docs/images/Jenkins_Wiki.png)  
Here are the steps to configure a webhook

-   Click on the "Add Webhook" button.
-   Enter the webhook URL which is displayed when you create JenkinsCI
    connector in Office365.
-   Check the boxes for which you want to receive notifications.
-   Configure the timeout after which jenkins plugin would give on
    unavailable server.

Once you configure this plugin, build related messages will appear in
the workplace messaging system.

To send messages from inside pipeline script:

-   Configure the webhook you want to send message following the steps
    mentioned above.
-   In the Pipeline script use the following command:  
    **office365ConnectorSend message: "\<Your message\>",
    status:"\<Build status\>"**

To send message from inside Jenkinsfile:

-   In the script use the following command:  
    **office365ConnectorSend message: "\<Your message\>",
    status:"\<Build status\>", webhookUrl:'\<The connector webhook
    url\>'**

## Requirements

This plugin is created to work with Office 365 Groups.

## Release 4.5

1.  Added more logging and modified title of card to display branch name
    as well.

## Release 4.4

1.  Added support for macros that allow to define when the connection is
    triggered. User can define additional conditions that must be met to
    trigger the notification. For example having generic build that
    builds many envs it is possible to get notification only for one (eg
    based on build params).  
    ![](https://raw.githubusercontent.com/jenkinsci/office-365-connector-plugin/master/.README/config.png){height="250"}
2.  Allow additional parameter of "color" to be passed to
    office365ConnectorSend. This will allow specifying the HEX color
    code of the card used to display when the 'message' attribute is
    set.

    Example: office365ConnectorSend message: "My Message", status:
    "FAILURE", webhookUrl: "https://....", color: "d00000"  
    ![](https://raw.githubusercontent.com/jenkinsci/office-365-connector-plugin/master/.README/message.png)

## Release 3.0

1.  Allow webhook parameter to be expanded, so for a build you can
    define your webhook as `$webhook `and have the the ability to expand
    the `$webhook` value to an actual URL either by environment
    variables, build variables, build parameters and etc.
2.  Fix job name with slashes. Main cause branch names ie. feature/abc
3.  Add support for started card and completed card for pipeline.  

    `office365ConnectorSend status: "Started", webhookUrl: "${env.HOOK}"`  
    For messages  
    `office365ConnectorSend message: "Hello world", webhookUrl: "${env.HOOK}"`

4.  Made webhookUrl as new default.

5.  Add the colors to the cards.  
    See the effect in these screenshots:

    [![image](https://user-images.githubusercontent.com/1661688/29613785-d7f2bcaa-8807-11e7-9812-d7d99ef7f143.png)](https://user-images.githubusercontent.com/1661688/29613785-d7f2bcaa-8807-11e7-9812-d7d99ef7f143.png)  
    [![image](https://user-images.githubusercontent.com/1661688/29613794-e47b2c6e-8807-11e7-991e-78826d908a17.png)](https://user-images.githubusercontent.com/1661688/29613794-e47b2c6e-8807-11e7-991e-78826d908a17.png)  
    [![image](https://user-images.githubusercontent.com/1661688/29613808-f26fe256-8807-11e7-921a-5935cadbf94f.png)](https://user-images.githubusercontent.com/1661688/29613808-f26fe256-8807-11e7-921a-5935cadbf94f.png)

## Release 2.5

1.  When selected notification type as "Failure", then notification is
    sent only when previous build is success and current build failed.
    No notification would be sent for repeated failure. If user wants to
    receive notification for repeated failure, then he/she should select
    "Repeated Failure" notification type.
2.  Details about test cases and developers would be displayed in the
    card only if those details are availble, else they would not be
    displayed.

## Release 2.4.1

1.  Removed unwanted logging on the console.

## Release 2.4

1.  Removed Build Start Time from the office365ConnectorSend message
    card.

## Release 2.3

1.  Added support to set "Status" of the card from
    office365ConnectorSend command.
2.  Added facts culprits and developers when the build is triggered due
    to SCM commit.

## Release 2.2

1.  Added support to send notification from inside Jenkinsfile. 
2.  Added option webhookUrl for the office365ConnectorSend command.

## Release 2.1

1.  Fixed Back To Normal Time showing some invalid time issue.

## Release 2.0

1.  Added support to send notification from inside the pipeline script.
    The user can use office365ConnectorSend command to send any
    notification.

## Release 1.4

1.  Included author name and number of files changed if the build is due
    to SCM change.

## Release 1.3.3

1.  Tracks UNSTABLE to SUCCESS build status changes with Notify Back To
    Normal event.

## Release 1.3

1.  Supports notification for pipeline jobs.

## Release 1.2.1

1.  Initial version.
