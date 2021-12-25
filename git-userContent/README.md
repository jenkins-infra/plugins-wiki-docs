Jenkins has a mechanism known as "[User
Content](https://wiki.jenkins.io/display/JENKINS/User+Content)", where
administrators can place files inside `$JENKINS_HOME/userContent`, and
these files are served from `http://yourhost/jenkins/userContent`. This
can be thought of as a mini HTTP server to serve images, stylesheets,
and other static resources that you can use from various description
fields inside Jenkins.

This plugin exposes this `$JENKINS_HOME/userContent` directory as a Git
repository, allowing administrators to use git to push/pull changes and
manage them with history.

Once this plugin is installed, see
<http://yourserver/jenkins/userContent.git> in your browser for how to
access this repository.

# Changelog

### Version 1.4 (Oct 14 2014)

-   Decoupled the dependency from [Git Client
    Plugin](https://wiki.jenkins.io/display/JENKINS/Git+Client+Plugin) to
    avoid LinkageErrors due to version incompatibility.

### Version 1.1 (August 29)

-   Initial release
