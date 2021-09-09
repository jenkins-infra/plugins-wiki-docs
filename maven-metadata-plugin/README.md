 

 This plugin adds a new build parameter type for resolving artifact
versions reading the repository
[maven-metadata.xml](http://docs.codehaus.org/display/MAVEN/Repository+Metadata). 

## Description

In any jenkins job enable the "This build is parametrerized" checkbox,
from the drop-down that appears select the "List maven artifact
versions", configure the artifact you want to retrieve the versions for
and voilà.

## Parameters

Because there are multiple aspects that can be of interest about an
artifact in a maven repository this plugin will not set the parameter
name you give in the configuration of your job, but will rather use that
name as a seed for a set of parameters. Example:

In your configuration you have created a parameter named "MY\_JAR" and
have configured all values correctly. Then the following parameters will
be set for the build step:

-   MY\_JAR\_VERSION - the version you selected in the dropdown or that
    was selected as part of an automated build
-   MY\_JAR\_ARTIFACT\_URL - the full URL to the actual artifact
    selected. You can use something like "wget" to download that
    artifact and do something with it.
-   MY\_JAR\_GROUP\_ID - echoes back your configuration
-   MY\_JAR\_ARTIFACT\_ID - echoes back your configuration
-   MY\_JAR\_CLASSIFIER - echoes back your configuration
-   MY\_JAR\_PACKAGING - echoes back your configuration

## Known issues

-   None at the moment.

# Upgrade Information

## Repository Username and Password

With release 1.3, the *Repository Username* and *Repository Password*
have been migrated to *Repository Credentials*. Now, repository
credentials are stored in the global credentials. Usernames and
Passwords of previous plugin versions are automatically migrated: For
each *Repository Base URL* and *Repository Username* combination, a new
global credentials object will be created and referenced.

## Version History

### 2.0.0 (10. January 2018)

-   Return param value to pipeline
-   Update to Jenkins 2 to address SECURITY-170

### 1.5.0 (31. May 2016)

-   Added support for rebuilding

### 1.4.1 (14. March 2016)

-   Fixed severe bug that was introduced with version 1.4.0 - SORRY for
    that.

### 1.4.0 (04. March 2016)

-   Added classifier support.

### 1.3.0 (10. November 2015)

-   Added optional configurations that allows to download and display
    information about currently used artifact.
-   Use Jenkins credentials to store repository username and password.
    With this, passwords are encrypted and no longer stored as plain
    text in the jobs *config.xml* file.
-   Bugfix: Invalid artifact URL when packaging is not specified.

### 1.2.0 (26. November 2014)

-   Added support for SNAPSHOTs. The plugin should now properly resolve
    SNAPSHOT versions to their timestamped
    URLs.[JENKINS-23206](https://issues.jenkins-ci.org/browse/JENKINS-23206)
-   Thanks to [Mathieu Pousse](https://github.com/mathieu-pousse) for
    providing the pull request for this change.

### 1.1.1 (14. February 2014)

-   Added support for the command line interface. If you have a property
    named MY\_JAR you should now be able to append -p MY\_JAR=1.3.42 and
    the job will be started for version "1.3.42" without scanning the
    maven repository. All of the above mentioned parameters should still
    be set for your build steps using the version you provided on the
    command line.
-   Thanks to [David Portabella](https://github.com/dportabella) for
    providing the pull request for this change.

### 1.1.0 (13. February 2014)

-   Corrected the help message. (Was copy-pasted from another plugin).
-   Added a username and password fields which will override the
    previous way of specifying username:password as part of URL - no
    need to add them in url-encoded, plain-text to the URL.
-   Thanks to [Robert
    Kleinschmager](https://github.com/barclay-reg) and [Dominik
    Bartholdi](https://github.com/imod) for providing the pull requests
    for these changes.

### 1.0.0 (16. April 2012)

-   Initial version.

# Help and Support

 

For help and support please use the [Jenkins
Users](http://jenkins-ci.org/content/mailing-lists) mailing list.  
The comment list below is not monitored.

type

key

summary

Data cannot be retrieved due to an unexpected error.

[View these issues in
Jira](http://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project%20=%20JENKINS%20AND%20status%20in%20%28Open,%20%22In%20Progress%22,%20Reopened%29%20AND%20component%20=%20%27maven-metadata-plugin%27&src=confmacro)
