This plugin integrates [SourceGear
Vault/Fortress™](http://www.sourcegear.com/) version control with
Jenkins.

Currently the plugin supports polling SCM for changes, triggering build
if there is changes and keeping the changelog.

This is an unofficial plugin - neither the plugin or the developer are
affiliated with SourceGear.

# Basic Usage

Once this plugin is installed, you'll see SourceGear Vault as one of the
options in the SCM. See inline help for more information about how to
use it.

#### Known issues

type

key

summary

assignee

reporter

priority

status

resolution

created

updated

due

Data cannot be retrieved due to an unexpected error.

[View these issues in
Jira](http://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=component%20=%20vault-scm%20AND%20project%20=%20JENKINS%20AND%20resolution%20=%20Unresolved%20ORDER%20BY%20updated%20DESC&tempMax=1000&src=confmacro)

### Thank You

A huge thanks to Antti Relander for his original work and for granting
permission to fork. All the cleaver parts should be considered Antii's,
and the bugs should be considered mine.

# Change Log

### Version 1.1 (September 12, 2012)

-   Forked development with permission of original author.
-   New Feature - Added a set files writable option.
-   New Feature - Updated dependencies to more recent versions of
    Jenkins.
-   New Feature - Updated password handling to encrypt stored password
    and mask password use on command line.
-   Fixed bug - Change log annotations are now correctly displayed.
-   Fixed bug - Merge option is now set correctly to the current value
    when editing a project.
-   Fixed bug - Temp files created during polling are now cleaned up.

### Version 1.0 (December 1, 2011)

-   Initial version committed by Antti Relander (
    <https://github.com/rellu/vault-scm-plugin>)

# Trademarks

SourceGear, Vault and Fortress are trademarks of SourceGear, LLC

Apache, Apache Subversion and Subversion are trademarks of the Apache
Software Foundation
