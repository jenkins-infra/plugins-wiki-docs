This plugin allows you to add columns to your Views with data from the
[Violations
Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Violations).

  
With the help of this plugin you can create columns containing data for
the following types taken from the Violations Plugin:

-checkstyle

-codenarc

-cpd

-cpplint

-csslint

-findbugs

-fxcop

-gendarme

-jcreport

-jslint

-pep8

-perlcritic

-pmd

-pylint

-simian

-stylecop

This plugin can also add a column that counts the number of failed tests
for every job in the View.

## Usage

Create a brand new View or edit an old one and just add the columns you
need from the list.

If data cannot be obtained for a certain job, then N/A will stand in the
corresponding row and column.

Important - in order to use this plugin you must have the Violations
Plugin installed.

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
Jira](https://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project=Jenkins%20AND%20component=violation-columns-plugin%20AND%20status%20in%20%28%22In%20Progress%22,%20Open,%20Reopened%29%20ORDER%20BY%20priority,%20status,%20createdDate%20ASC&src=confmacro)

## Change log

#### Version 1.6 - (02.10.2013)

-   Fixed a reported issue with the pylint column:
    [JENKINS-19742](https://issues.jenkins-ci.org/browse/JENKINS-19742)

#### Version 1.5 - (25.04.2013)

-   Package rename - this will lead to NoClassFound exceptions, columns
    should be added one more time to the views. Sorry for the
    inconvenience.
-   All columns that show data from ViolationsPlugin are now listed
    under "Violation \*name\*" in order to be found easier.

#### Version 1.3 - (12.03.2013)

-   Required core version changes 1.500- \>1.409

#### Version 1.0 - (06.03.2013)

-   First release.

# About

  The plugin is open source.
