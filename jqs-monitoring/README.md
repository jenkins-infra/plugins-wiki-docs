  

This plugin show information about jobs, slaves and the queue in
Jenkins.

The JQS-Monitoring Plugin makes it possible to monitor what is happening
in the job queue, what is the status of each slave or each job that is
being build at the moment. You can also get information about the number
of failed builds for the last 24 hours in a histogram graphic. With the
plugin you can easily detect if a job is stuck in the queue or being
built for too long. The information for the different components can be
viewed separately in single pages or simultaneously in one big page. The
links to this pages can be found in the left menu-panel of the plugin.

This menu-panel also contains a link to the configuration page, where a
number of options can be configured to change the way information is
shown(size, color, hide/show options).

## Usage

The plugin can be used to show information on small or big monitors, the
different components can be added to other pages using the links.

For example you can use iframes to continuously monitor several Jenkins
instances.

The plugin will appear in the left-side panel of the jenkins homepage.
Its icon and links are available only for users with administrator
permission.

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
Jira](https://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project=Jenkins%20AND%20component=jqs-monitoring%20AND%20status%20in%20%28%22In%20Progress%22,%20Open,%20Reopened%29%20ORDER%20BY%20priority,%20status,%20createdDate%20ASC&src=confmacro)

## Change log

#### Version 1.4 - (*07.10.2013*)

-   Show count for offline slaves

#### Version 1.3 - (*19.07.2013*)

-   REST API shows more information

#### Version 1.2 - (*26.06.2013*)

-   Fixed problem where in some cases the number of failed jobs was
    lower that the actual.
-   Fixed problem when retrieving the jenkins root path.
-   Unnecessary code deleted.

#### Version 1.0 - (*18.04.2013*)

-   First release.

# About

  The plugin is open source.
