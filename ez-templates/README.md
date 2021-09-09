Allows you to use any job as a template for other jobs.

# Usage

See the [GitHub home](https://github.com/jenkinsci/ez-templates-plugin)
for this plugin.

# Changelog

**1.3.2**

-   Feature: JENKINS-45257 EZ-Templates must rollback any error while
    applying template to a single child

**1.3.1**

-   Feature: JENKINS-45741 EZ-Templates support for nested templates

**1.3.0**

-   Feature: JENKINS-42886 Detect changes made by other plugins (not via
    Configure screen)

**1.2.6**

-   Feature: JENKINS-44805 Support Build Promotions plugin
-   Feature: ez-templates now announces itself on the job page
-   Bugfix: JENKINS-43293 Child loses ownership property if template was
    never owned

**1.2.5**

-   Bugfix: JENKINS-40024 Cannot use another job as a templat

**1.2.4**

-   Feature: JENKINS-38755 Merge Choice Parameter values more
    intelligently
-   Bugfix: JENKINS-38695 Adding promotions needs to exclude .svn
    directories
-   Bugfix: JENKINS-38308 Changing type of parameter doesn't propagate
    to child

**1.2.3**

-   Bugfix: JENKINS-38168 job-params being overwritten by template

**1.2.2**

-   Feature: JENKINS-37971 EZ-Templates support Github plugin
-   Bugfix: JENKINS-37399 Updates to a Choice Parameter are not
    synchronised

**1.2.1**

-   Bugfix: JENKINS-36749 Saves on templates don't propagate to
    implementing jobs after upgrading to 1.2

**1.2.0**

-   Refactored internals to make it far easier to provide more
    templating features in future versions

**1.1.2**

-   Bugfix: Sync Source Control Mgmt should be true by default

**1.1.1**

-   First release via Jenkins Update Centre

![](http://jenkins.ci.cloudbees.com/buildStatus/icon?job=plugins/ez-templates-plugin)
<https://github.com/jenkinsci/ez-templates-plugin>
