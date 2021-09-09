| Plugin Information                                                                                                                      |
|-----------------------------------------------------------------------------------------------------------------------------------------|
| View AWS CloudWatch Logs Publisher [on the plugin site](https://plugins.jenkins.io/aws-cloudwatch-logs-publisher) for more information. |

The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [AWS CloudWatch Logs Publisher Plugin stores credentials in plain
    text](https://jenkins.io/security/advisory/2019-04-03/#SECURITY-830)

  

Publishes build logs to Amazon CloudWatch Logs

  
Allows Jenkins to send the console log of your builds to [Amazon
CloudWatch
Logs](https://aws.amazon.com/about-aws/whats-new/2014/07/10/introducing-amazon-cloudwatch-logs/%20Amazon%20CloudWatch%20Logs).

## Configuring your job

In your job configuration page, go to the section **Post-build
Actions**, click the **Add post-build action** button and select the
item **AWS CloudWatch Logs Publisher**.

## System configuration

In **Manage Jenkins \> Configure System \> AWS Logs Publisher**, you
have to configure the **AWS Access Key Id** and **AWS Secret Key** of an
account with *logs:CreateLogStream* and *logs:PutLogEvents* rights.
