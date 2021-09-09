This plugin makes it possible to periodically restart failed jobs
according to a number of conditions. Its main purpose is to fix
infrastructure failures.

## Cron Restart

Using a cron time format the user can specify at which exact time(s) the
plugin should schedule failed jobs for a new build. In addition to that
he/she can also specify a list of regular expressions in order to
restrict which failed jobs exactly should be picked up for restart.
There is a global cron tab and also every regular expression has its own
such that can be individually configured. The global one is used when
the cron tab for a certain regular expression is empty or cannot be
compiled.

## Unchanged Restart

There is also the option to restart a job (independently from the
regular expressions) if the following conditions hold:

1.  The last build has failed.
2.  The second last was a success.
3.  There were no SCM or configuration changes between these two builds.

Basically if these conditions hold it means that it is very possible
that the code or the configuration of the job are not responsible for
the failure of the last build. This leaves a infrastructure problem and
PeriodicReincarnation will automatically try to build the project again.

In order to check if there was a configuration change
PeriodicReincarnation uses
[jobConfigHistory](https://wiki.jenkins-ci.org/display/JENKINS/JobConfigHistory+Plugin)
plugin. It is an optional dependency so the plugin will continue to work
if jobConfigHistory is not installed, but won't be able to tell if there
was a configuration change and will always assume there wasn't one.

## Afterbuild Restart

This feature was introduced in 1.2 and allows the immediate restart
after a build failure occurs. It can be enabled globally for all
projects or configured locally for every project alone. In order to
prevent endless restarting there is a maximal restart depth that can
also be set locally or globally. For projects where "Configure
PeriodicReincarnation locally" has not been enabled restart happens like
in the cron restart option - there must be a regex hit or an unchanged
project that fails for the first time. For projects which have this
option enabled (it can be found in the configuration page of every
project, should be in the top) the restart will happen also if there is
no regular expression that covers this project.

## Usage

This plugin can be useful when something temporary may be causing a
build to fail. its main purpose is to fix infrastructure problems
preventing jobs to build successfully. For instance

-   there was not enough space on the hard disk - (here a disk-cleanup
    script can be automatically executed before the job is scheduled for
    restart)
-   there was a communication problem with a slave - (here a script that
    disconnects such agent can be executed before the job is scheduled
    for restart)
-   there was some incompatibility of some kind

It is easy to periodically restart all jobs that have failed because of
some arbitrary "error\_failing\_the\_build". Just activate the plugin,
set the cron time ("\* \* \* \* \*" for every minute or "\*/5 \* \* \*
\*" for every 5 minutes) and add this "error\_failing\_the\_build" as
regular expression.

If you want jobs failing because of this "error\_failing\_the\_build" to
be scheduled for restart right away then use the afterbuild restart
option. Just enabled it and leave the regular expression in the list.

If you want different regular expressions to be triggered at different
times, just configure the cron time in the regular expression itself. It
is very easy, just go to the global configuration page.

## Configuration

The configuration for this plugin can be found in the global
configuration page of Jenkins under "Periodic Reincarnation of failed
builds". Each option there has a help page, so it is easier to
understand and use every feature presented in the configuration of this
plugin.

For individual jobs: the local configuration reveals after clicking the
box "Configure PeriodicReincarnation locally" and contains just the
parameters for the afterbuild restart - whether it is enabled or not and
the maximal restart depth.

## Scripts execution

This feature was introduced in 1.2 and allows binding regular
expressions with groovy scripts. Each time a reg ex hit occurs and a
failed job is about to be restarted because of it these Groovy scripts
will be executed before the restart. This can be very useful in
correcting infrastructure errors like full disk or slave problems.

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
Jira](https://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project=Jenkins%20AND%20component=periodic-reincarnation%20AND%20status%20in%20%28%22In%20Progress%22,%20Open,%20Reopened%29%20ORDER%20BY%20priority,%20status,%20createdDate%20ASC&src=confmacro)

## Change log

#### Version 1.13 - (April 5 2019)

-   Do not retrigger MavenModules ([PR
    \#28](https://github.com/jenkinsci/periodic-reincarnation-plugin/pull/28))

#### Version 1.12.1 - (October 2 2017)

-   Fixed loop in afterbuild reincarnation.
-   Fixed ClassCastException in case non-AbstractProject items are in
    Folders. ([Issue
    \#22](https://github.com/jenkinsci/periodic-reincarnation-plugin/issues/22))

#### Version 1.12 - (September 22 2017)

-   Fixed ClassCastException in case non-AbstractProject items are in
    Folders. ([Issue
    \#22](https://github.com/jenkinsci/periodic-reincarnation-plugin/issues/22))

#### Version 1.11 - (August 18 2017)

-   \[JENKINS-42797\] Fixed issue.
-   Upgraded parent pom version.
-   Fixed some findbugs issues.

#### Version 1.10 - (April 19 2017)

-   Use Build Failure Analyser to search for failure causes.

#### Version 1.9 - (July 18 2014)

-   Spam entries from log file removed
    ([JENKINS-22132](https://issues.jenkins-ci.org/browse/JENKINS-22132))
-   Possibility to disable global reincarnation for single job via job
    configuration

#### Version 1.8.1 - (03.02.2014)

-   HOTFIX: Pluin now handles MultiModuleProjects.

#### Version 1.8 - (04.12.2013)

-   Issue <https://issues.jenkins-ci.org/browse/JENKINS-20205> now fixed
    and local job configuration enabled again.
-   Fixed a NPE occuring when no regular expressions are configured.
-   Removed spam Warning and Info messages from the console.Using Fine
    logging instead.
-   Improved unchanged restart. See above.
-   Afterbuild restart now has a delay period of 5 minutes. This
    prevents unnecessary overloading of Jenkins and improves the chances
    that a build will be a success.

#### Version 1.7 - (15.11.2013)

-   temporary workaround for
    <https://issues.jenkins-ci.org/browse/JENKINS-20205>. Local
    configuration is temporarily disabled. If you are using version
    before 1.34 you can still use the old version without problems.

#### Version 1.6 - failed release

#### Version 1.5 - (21.10.2013)

-   fixed bugs with regex validation:
    <https://issues.jenkins-ci.org/browse/JENKINS-19687>
-   fixed a problem where too much log information is printed every
    minute
-   improved log information
-   fixed bug with global cron time validation:
    <https://issues.jenkins-ci.org/browse/JENKINS-19688>

#### Version 1.4 - (*20.09.2013*)

-   added a missing help page(see
    <https://issues.jenkins-ci.org/browse/JENKINS-19599>)
-   small code improvements and better use explanations in the help
    pages

#### Version 1.3 - (*18.07.2013*)

-   cron time can also be defined for every regular expression
    separately
-   added description to every regular expression that is also stated in
    the cause for the restart
-   internal changes, allowing a better restart summary in log

#### Version 1.2 - (*25.03.2013*)

-   added afterbuild trigger that automatically schedules a restart
    after a build failure
-   added the possibility to execute scripts when restarting jobs with
    regular expressions

#### Version 1.1 - (*19.11.2012*)

-   removed git as dependency
-   added a missing help page

#### Version 1.0 - (*29.10.2012*)

-   First release.

# About

  The plugin is open source. Feel free to make suggestions, requests and
contributions!
