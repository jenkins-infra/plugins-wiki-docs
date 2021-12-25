This plugin allows other Jenkins plugins to take advantage of the
\<l:icon\> tag.

This plugin allows other Jenkins plugins to take advantage of the
\<l:icon\> tag, while at the same time maintaining backward
compatibility with versions of Jenkins that do not have the \<l:icon\>
tag (Jenkins before 1.576).  Plugins need to add this plugin as a
dependency.

See the [documentation](https://github.com/jenkinsci/icon-shim-plugin)
to use the plugin.

## Changelog

### 2.0.3 (Feb 23 2016)

-   [JENKINS-33095](https://issues.jenkins-ci.org/browse/JENKINS-33095)
    Working around fatal error occurring when upgrading [CloudBees
    Folders
    plugin](https://wiki.jenkins.io/display/JENKINS/CloudBees+Folders+Plugin)
    and [Matrix Authorization Strategy
    Plugin](https://wiki.jenkins.io/display/JENKINS/Matrix+Authorization+Strategy+Plugin).
