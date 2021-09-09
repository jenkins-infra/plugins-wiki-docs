## Introduction

This plugin provides a "post-build" step for your Jenkins project. Upon
a successful build, it will tar the workspace, upload to Jdcloud Object
Storage Service, and start a new deployment on Jdcloud Codedeploy. Also,
you can start the deployment with the package provied by a Url.
Optionally, you can chose to wait for the deployment to finish, making
the final success contingent on the success of the deployment.

## Requirements

Jenkins [version 2.7.3](https://jenkins.io/changelog#v2.32) or newer is
required.

## Setup

After building and installing the plugin, some simple configuration is
needed for your project.

1.  Open up your project configure
2.  In the **Post-build Actions** section, select **Deploy to JDCloud
    CodeDeploy**
3.  AppName, GroupName, and region are all required options.
4.  For authentication, there are two options. 
    1.  Access/Secret key pair.
    2.  Temporary access keys. These will use the global keys from the
        Jenkins instance.

&nbsp;


