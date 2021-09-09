Enables Jenkins to trigger jobs on repo update events by AWS CodeCommit
through SQS and SNS.

## Introduction

A Jenkins plugin that triggers jobs on repo update events by AWS
CodeCommit, through the AWS Simple Queue Service (SQS) and Simple
Notification Service (SNS).

 

The advantage over the [AWS SQS
Plugin](https://github.com/jenkinsci/aws-sqs-plugin) is that this plugin
allows:

-   subscribing to multiple branches using the same SQS queue
-   subscribing to multiple repos using the same SQS queue

There are several (advantageous) implications:

-   you no longer need to create a SQS queue per CodeCommit repo

-   an update to the `dev` branch will no longer trigger all jobs that
    subscribe to that CodeCommit repo.

Quick Setup With Terraform

Use
the [tf-codecommit-sqs](https://github.com/riboseinc/tf-codecommit-sqs) module
to create your CodeCommit repos created with provided linkage with
SQS/SNS.

## Authors

AWS CodeCommit Trigger Plugin is provided by [Ribose
Inc.](https://www.ribose.com/) (GitHub page: [Ribose
Inc.](https://github.com/riboseinc))

The original [AWS SQS
Plugin](https://github.com/jenkinsci/aws-sqs-plugin) was written (and
still maintained) by [Markus
Pfeiffer](https://github.com/mpfeiffermway) of M-Way Solutions GmbH.

 

More Details

See this link for
details: <https://github.com/riboseinc/aws-codecommit-trigger-plugin>
