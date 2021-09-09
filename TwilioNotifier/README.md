The Twilio Notifier Plugin is a plugin that can send build status
notifications as Text messages and phone calls using
[Twilio](http://www.twilio.com/).

## Features

-   Send text messages with build notifications
-   Call phones and have build notifications read to the callee
-   Customized messages
-   Send explicit messages to those whose check-ins resulted in build
    breakage

## Installation and configuration of the plugin

-   **Download** and install the Twilio Notifier plugin from the Plugin
    Manager within Jenkins.
-   Go to **[www.twilio.com](http://www.twilio.com/)** and sign up for
    an account AND purchase a phone number
-   Go to **Jenkins-\>Manage Jenkins-\>Configure System** and set the
    following attributes
    -   **Account SID** - the SID for your Twilio Account can be found
        on your [Twilio account
        page](https://www.twilio.com/user/account)
    -   **Auth token** - can be found on the same page
    -   **From phone number** - set the phone number you just purchased
        as the From phone number

## Per job configuration

Go to your job configuration page.

-   Select the **TwilioNotifier** checkbox
-   In the **To** field, add phonenumbers that always will receive
    messages
-   In the **Message** field write the message you want to send. Special
    variables you can use:
    -   %PROJECT% - references the name of the current project
    -   %STATUS% - the current status of the project
    -   %CULPRITS% - lists the display names of the users who did the
        check-ins associated with the current build.
-   If you want to send text messages, check the **Send Text (SMS)
    message?** checkbox
-   If you want to receive a call and have the message read to you,
    check the **Call?** checkbox
-   If you only want to send messages on failures and recovery, check
    the **Only send message on failure or recovery?** checkbox
-   If you want to send to the **culprits** who made the build fail
    through a check-in, check this box
-   And you can also specify a special **Culprit message** for the
    culprits
    -   %PROJECT% - references the name of the current project
    -   %STATUS% - the current status of the project
    -   %CULPRITS% - lists the display names of the users who did the
        check-ins associated with the current build.
    -   %CULPRIT-NAME% - the display name of the culprit that the
        current message is being sent to.
-   For the text message, you can elect to add the build url by checking
    the **Include the Build URL in the message?** checkbox
-   The **User list** is used to map check-in identifiers (typically
    user names from a scm system) to phone numbers and display names.
    The format to use is the following:
    **user-name:phone-number:display-name,user-name2:phone-number2:display-name2**
