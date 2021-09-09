Publish zip files to Amazon Web Service Elastic Beanstalk Applications.

| Plugin Information                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------|
| View AWS Elastic Beanstalk Publisher [on the plugin site](https://plugins.jenkins.io/aws-beanstalk-publisher-plugin) for more information. |

The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Credentials stored in plain
    text](https://jenkins.io/security/advisory/2019-04-03/#SECURITY-831)

# Amazon Web Services Elastic Beanstalk Publisher

### Master status:

[![](https://jenkins.ci.cloudbees.com/buildStatus/icon?job=plugins/aws-beanstalk-publisher-plugin)](https://jenkins.ci.cloudbees.com/job/plugins/job/aws-beanstalk-publisher-plugin/)

This plugin allows for publishing to an Elastic Beanstalk application as
either a Build or Post Build step.

Amazon credentials are set in the global configuration.  
IAM credentials need to be able to read and upload to S3, and to read
and configure Elastic Beanstalk.

#### Example Credentials

``` syntaxhighlighter-pre
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "elasticbeanstalk:*",
        "s3:*"
      ],
      "Resource": "*"
    }
  ]
}
```

After adding the Access Key ID and Secret Key in to the Jenkins master
configuration, click Advanced and choose a region to see what
applications your credentials actually see.

#### Screenshot:

##### Global Configuration

![](https://raw.githubusercontent.com/jenkinsci/aws-beanstalk-publisher-plugin/master/globalConfig.png)

##### Job Configuration

![](https://raw.githubusercontent.com/jenkinsci/aws-beanstalk-publisher-plugin/master/job%20config.png)

### Updates

#### -\> 1.0

-   Multithreading the update environment process, in case there are
    multiple environments to be updated.
-   Added test buttons to see which applications your credentials can
    see, both in the global and job config.
-   Added a test button to see currently available environment names for
    the given application.
-   Verify that environment completed updating.
-   Bug fixes regarding duplicate AWS credentials.

### Attribution

This is a fork of Aldrin Leal's [Elastic Beanstalk Deployment
plugin](https://github.com/ingenieux/awseb-deployment-plugin)

type

key

summary

Data cannot be retrieved due to an unexpected error.

[View these issues in
Jira](http://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project%20=%20JENKINS%20AND%20status%20in%20%28Open,%20%22In%20Progress%22,%20Reopened%29%20AND%20component%20=%20%27aws-beanstalk-publisher-plugin%27&src=confmacro)
