A Simple Jenkins Build Status Notifier for IFTTT Maker Channel
TriggerPosts build status to IFTTT Maker Channel to trigger actions with
all other Channels available on IFTTT. For example notify build status
via a tweet or add trello card or Light-up a IoT connected device.

Let's setup a notification trigger with following steps. This will send
a direct twitter message when a build job is completed:

Login to [https://ifttt.com](https://ifttt.com/) and perform the
following steps:

1\. Create a new Recipe  
2. Click on **this** part  
3. Enter or select **Maker Channel** in **Choose Trigger Channel**  
4. Select **Receive a Web Request** in **Choose a Trigger**  
5. Enter an Event name (for example build\_notification)  
6.Click on **Create Trigger**** **button  
7. Next, click on **that** part  
8. Enter or select **Twitter** in **Choose Action Channel**  
9. Select **Send a direct message to yourself** in **Choose an
Action**  
10. Enter following message in **Message field** in** ****Complete
Action Fields**

``` syntaxhighlighter-pre
Jenkins Build Status for Project: {{Value1}}, Build Number:{{Value2}}, Status: {{Value3}}
```

Note: IFTTT Maker Channel **Receive a Web Request**** **trigger accepts
three values and plugin sends Project Name as Value1, Build Number as
Value2 and Status as Value3

11\. Finally click on **Create Action** button  
12.Give a name to newly created recipe  
13. Click on **Create Recipe** button to create the recipe  
14. Now, navigate to <https://ifttt.com/maker>  
15. Copy the Key from **Your key is:** section

You can also use template recipe from
here <https://ifttt.com/recipes/336376-send-a-direct-tweet-when-jenkins-build-is-completed> (see
more recipes below)

Back in Jenkins setup a project to send build notifications:

1\. Configure a Job or Project for which you want to enable IFTTT
trigger  
2. Add **IFTTT Build Notifier** action from **Add Post Build
Action**** **list  
3. Enter **Event Name** specified in Step\#4 above (for
example **build\_notification**)  
4. Enter **Key** copied from Step\#14 above  
5. Save the configuration  
6. That's it

Now whenever a build is triggered and completed, you will see a Twitter
message with build status

More Recipe Templates:

-   Sending build notification to your smartphone (requires IF app)
    - <https://ifttt.com/recipes/336400-jenkins-build-notification-to-phone>
-   Sending build notification to your Android Smart
    Watch <https://ifttt.com/recipes/336401-jenkins-build-notification-to-android-watch>

Examples:

-   Cozmo, IFTTT and Jenkins Build Notifications
    - <https://unmesh.me/2017/06/26/cozmo-ifttt-and-jenkins-build-notifications/>
