# AWS Codedeploy plugin

The [AWS CodeDeploy](https://aws.amazon.com/codedeploy) Jenkins plugin
provides a post-build step for your Jenkins project. Upon a successful
build, it will zip the workspace, upload to S3, and  
start a new deployment. Optionally, you can set it to wait for the
deployment to finish, making the final success contingent on the success
of the deployment.

### Setting up

After building and installing the plugin, some simple configuration is
needed for your project.

1.  Open up your project configuration
2.  In the **Post-build Actions** section, select **Deploy an
    application to AWS CodeDeploy**
3.  Application Name, Deployment Group, Deployment Config, and region
    are all required options.
4.  For authentication, there are two options. Either option requires
    that the associated role has, at minimum, a policy that permits
    `codedeploy:*` and `s3:Put*`.
    1.  Access/Secret key pair. For example, the keys associated with a
        specific IAM user. If left blank, the default chain of
        credentials will be checked.
    2.  Temporary access keys. These will use the global keys from the
        Jenkins instance.

### License

This plugin is licensed under Apache 2.0. See the [LICENSE
file](https://github.com/jenkinsci/aws-codedeploy-plugin/blob/master/LICENSE)
in the source repository for more information.
