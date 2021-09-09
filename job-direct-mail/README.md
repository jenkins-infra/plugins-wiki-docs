This plugin makes it possible to send emails directly from a Job/Build
View.

  
The Job Direct Mail Plugin makes it easy to send a custom email from a
Job or Build right away to the people involved in the project(the ones
configured in the email-ext-plugin and the last committers). Using
templates, things like project name, build number, project url, build
url, build status can be included automatically in the content of the
email.

## Usage

Just click on the icon "Send Mail" in the left bar of a Job or Build and
the sample email will pop.

The plugin can be configured from the global configuration page, where
you can add templates and a signature in order to save time when
constructing the email. A template has a name and specifies what the
conent of the email will look like.

The Job Direct Mail Plugin can be useful in situations like:

-   A job has to be deleted and the last committers should be notified
-   A job has many error or has none and the people responsible should
    be notified or praised.

Important! The plugin uses information from the Email-ext plugin in
order to configure the SMTP server and SMTP port of the current mail
session. Generally, if email-ext-plugin is able to send emails, so can
this plugin. Generally, if email-ext-plugin is able to send emails, so
can this plugin. The default recipients are also retrieved from the
configuration of email-ext plugin. E-mail encoding is UTF-8(since 1.5).
E-mail encoding is UTF-8(since 1.5).

**Important - in order to use this plugin you must have the**
**[Email-ext
plugin](https://wiki.jenkins-ci.org/display/JENKINS/Email-ext+plugin)**
**installed.**

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
Jira](https://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project=Jenkins%20AND%20component=job-direct-mail%20AND%20status%20in%20%28%22In%20Progress%22,%20Open,%20Reopened%29%20ORDER%20BY%20priority,%20status,%20createdDate%20ASC&src=confmacro)

## Change log

#### Version 1.5(small charset bugfix) - (17.05.2013)

-   Fixed bug, where characters like öäüß are not displayed correctly in
    the email.
-   EmptyTemplate is no longer default, now the default template
    contains the project/build url and information.
-   Added a help-page for the signature configuration.

#### Version 1.4 - (23.04.2013)

-   Fixed bugs with recipients retrieval
-   Changed name of the section in the global configuration so that it
    is easier to find it
-   Refractoring, code cleaning, help-page added
-   Plugin now visible only for users with CONFIGURE permission

#### Version 1.3 - (11.04.2013)

-   Fixed bugs with recipients retrieval
-   Fixed property file missing for other languages than English
-   ClassCastException now fixed for all kind of projects

#### Version 1.2 - (12.03.2013)

-   Recipients being retrieved from email-ext plugin
-   ClassCastException with MavenModuleSetBuil projects fixed

#### Version 1.1 - (12.03.2013)

-   First release

# About

  The plugin is open source.
