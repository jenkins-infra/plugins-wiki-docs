# Usage

Traditionally Jenkins created symbolic links to build directories. For
example, `$JENKINS_HOME/jobs/someprj/builds/lastStable` might have been
a link to `23`  if that was the number of the most recent build which
was stable, with the target resolving
to `$JENKINS_HOME/jobs/someprj/builds/23/` as the physical directory.
This functionality was rarely used in practice (most access to build
metadata and products from other tools would come from the REST API
rather than by directly accessing the Jenkins filesystem), and caused
problems in many environments where symlink support is spotty
(especially Windows), and complicated things like backup scripts.
Jenkins 2.185 and newer no longer make these symlinks ( [
JENKINS-37862](https://issues.jenkins.io/browse/JENKINS-37862) - Getting
issue details... STATUS ), so this plugin exists as an option for people
who really needed that functionality. There is nothing to configure or
do after installing the plugin—it should just restore the symlink
functionality.

# Changelog

See [GitHub
releases](https://github.com/jenkinsci/build-symlink-plugin/releases).
