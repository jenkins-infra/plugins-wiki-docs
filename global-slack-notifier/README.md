 

 This plugin adds the function to automatically notify completion to
Slack to all jobs. 

## Setup

1.  Setup [Slack Plugin](https://github.com/jenkinsci/slack-plugin)
2.  Setup Global Slack Messages in Global Configuration
3.  ``` tw-data-text
    Any build notifies slack completion without any job configuration 
    ```

### Global Slack Messages

1.  Set XXXMessage
2.  Check notify on build XXX
3.  Set channel notifying, if necessary.(Default channel is Slack
    Plugin's Channel)

-   XXX is build result

![image](https://github.com/jenkinsci/global-slack-notifier-plugin/raw/master/img/globalslackmessage.png)

 

 
