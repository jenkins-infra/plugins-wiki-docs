This plugin builds on top of [Deployment Notification
Plugin](http://localhost:8085/display/JENKINS/Deployment+Notification+Plugin)
and lets Chef users track when/where/what files are deployed, and
trigger other activities after deployments have happened.

The plugin works by having `chef-solo` or `chef-client` submit
information about what it has deployed. We do this by running
[chef-handler-jenkins](https://github.com/jenkinsci/chef-handler-jenkins)
inside chef, which monitors Chef's activities and find out which files
have been updated.

That custom handler submits this information to Jenkins in the end, and
this Jenkins plugin takes it from there and adds appropriate information
to the Jenkins fingerprints.

![](docs/images/chef.png)

### Recognized resource type

This plugin currently tracks the use of
[file](http://docs.opscode.com/resource_file.html) resource and all its
subtypes.

# Changelog

### Version 1.0 (Mar 31, 2014)

-   Initial release
