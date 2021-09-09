Jenkins plugin that triggers builds on events from CodeCommit that are
published via Amazon Simple Queue Service (SQS)

## SCM SQS Plugin for Jenkins

A Jenkins plugin that allows to use the Amazon Simple Queue Service
(SQS) as a build trigger. Currently supports messages sent by Git
repositories hosted on Amazon's CodeCommit. In the future additional
services may be supported.

To use this plugin you will need to have the following:

1\. An Amazon Web Services (AWS) account  
2. A Git repository that is hosted on CodeCommit  
3. A Simple Notification Service (SNS) topic  
4. A Simple Queue Service (SQS) queue  
5. A user that is allowed to access the queue

You can find the documentation on how to configure your Amazon account
and the plugin on the plugin's GitHub page:  
<https://github.com/jenkinsci/scm-sqs-plugin>
