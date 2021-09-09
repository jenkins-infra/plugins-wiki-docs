This plugin extends [Credentials
Plugin](http://localhost:8085/display/JENKINS/Credentials+Plugin) and
allow Jenkins to store your [CloudBees](http://www.cloudbees.com/)
account information and its password. This is normally not a plugin that
you'll choose to install on its own. Rather, it gets installed as a
dependency of other plugins.

If you are writing a plugin that interacts with CloudBees service and
wants to share the same credentials with other plugins. Consider
depending on [CloudBees Registration
plugin](http://localhost:8085/display/JENKINS/CloudBees+Registration+Plugin)
that provides UI and concrete implementation. This plugin just defines
contracts of the CB credentials.

# Changelog

### Version 3.3 (Mar 17, 2014)

-   Initial OSS release
