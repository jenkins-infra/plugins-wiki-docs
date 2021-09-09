| Plugin Information                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------|
| View Azure Event Grid Build Notifier [on the plugin site](https://plugins.jenkins.io/azure-event-grid-notifier) for more information. |

The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Credentials stored in plain
    text](https://jenkins.io/security/advisory/2019-09-25/#SECURITY-1544)

Send build notifications to an Azure Event Grid Topic

## How to Install

You can install/update this plugin in Jenkins update center (Manage
Jenkins -\> Manage Plugins, search Azure Event Grid Notifier Plugin).

You can also manually install the plugin if you want to try the latest
feature before it's officially released. To manually install the plugin:

1.  Clone the repo and build:

        mvn package

2.  Open your Jenkins dashboard, go to Manage Jenkins -\> Manage
    Plugins.
3.  Go to Advanced tab, under Upload Plugin section, click Choose File.
4.  Select `azure-event-grid-notifer.hpi` in `target` folder of your
    repo, click Upload.
5.  Restart your Jenkins instance after install is completed.

### Prerequisites

To use this plugin, first you need to create an [Azure Event Grid
Topic](https://docs.microsoft.com/en-us/azure/event-grid/custom-event-quickstart)

### How to use

You can define a custom subject and a custom message using environment
variables such as:

${BUILD\_PHASE\_NAME}

${BUILD\_PHASE}

${BUILD\_DURATION}

${BUILD\_ARTIFACTS}

or just leave the default message and subject.

## Changelog

### Version 0.1 (2017-8-22)

-   Initial release
