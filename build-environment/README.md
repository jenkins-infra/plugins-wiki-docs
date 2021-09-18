This plugin shows information about the environment of a build and gives
the option to compare the environments of two builds.

## Usage

After installing the plugin you will see 3 blue lines on the main build
page - they contain various information about different aspects of the
build. By simply clicking on them the user can show or hide this
information.

In the left menu panel an link under the name "Compare environment"
should show up. There the user has the option to compare the information
recorded about two builds. This could be useful to figure out why the
same job builds differently on different machines.

The plugin can also prepare the environment variables used in the
current build for bash export. There is a link at the top-right corner
of the "Compare environment" page that leads to a list with all
environment variables ready to be exported.

Example:

if FOO had value 123 during the build, then the list will contain:

FOO=123

export FOO

## Open issues

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
Jira](https://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project=Jenkins%20AND%20component=build-environment%20AND%20status%20in%20%28%22In%20Progress%22,%20Open,%20Reopened%29%20ORDER%20BY%20priority,%20status,%20createdDate%20ASC&src=confmacro)

## Change log

#### Version 1.7 (16.09.2019)

-   [Fix XSS
    vulnerability](https://jenkins.io/security/advisory/2019-09-12/#SECURITY-1476)

#### Version 1.6 - (01.09.2015)

-   More deprecated function Run.getEnv() replaced

#### Version 1.5 - (28.04.2015)

-   Deprecated function Run.getEnv() replaced

#### Version 1.4 - (06.11.2013)

-   Fixed a security bug:
    <https://issues.jenkins-ci.org/browse/JENKINS-20002>

#### Version 1.3 - (*19.07.2013*)

-   HOTFIX fixed bug with environment variables export option where name
    and value were the same.

#### Version 1.2 - (*19.07.2013*)

-   Removed unnecessary objects so that the persistent action of the
    plugin would write only the environment information in build.xml
    file =\> results in a smaller build.xml

#### Version 1.0 - (*03.07.2013*)

-   Initial release

# About

  The plugin is open source.
