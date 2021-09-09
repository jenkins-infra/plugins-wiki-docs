``` conf-macro
This plugin allows you to send messages from Jenkins jobs to Telegram chat.
```

## Setup

#### Create a Telegram bot

1.  Find BotFather in Telegram (*@BotFather*)
2.  Send */newbot* command
3.  Enter bot name and bot username

#### Jenkins Global configuration

1.  Open the Jenkins global config
2.  Paste your bot name and username to according textfields
3.  In filed Usernames fill names of users who can get Jenkins messages
    (separated by spaces)
4.  Save

#### Subscribe for Jenkins messages

1.  In telegram find your bot and send */start* command
2.  Send */sub *command

## Configuration

#### Manage your job

1.  Add build-step (or post build-step)
2.  Fill the message (you can use environment variables and simple
    Markdown)
3.  Save your job
