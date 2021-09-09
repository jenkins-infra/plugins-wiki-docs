# Trac Plugin

  
This plugin creates links from Jenkins projects to
[Trac](http://trac.edgewall.com/) instances. Trac is a wiki-based issue
tracking system written in Python and supported by [Edgewall
Software](http://edgewall.com/).  
The Trac plugin decorates Jenkins "Changes" HTML to create links to your
Trac wiki, tickets, changesets, and source browser.  
As an example, if you committed a change with the following log
message:  

    Reverted changeset:123 to close ticket #456.

your Jenkins job changes page would make changeset:123 and \#456
hyperlinks to the appropriate Trac changeset and ticket pages,
respectively.

In the Jenkins change details, there would be a link to the Trac pages
for the:

-   changeset committed,
-   files changed, and
-   diff of the changes for each changed file.
    Integrating Jenkins into Trac

    Since you are interested in using Jenkins with Trac, you'll likely
    find [this](http://trac-hacks.org/wiki/HudsonTracPlugin) would be
    useful, which adds the Jenkins build history to the Trac time line.

# Configuration

-   Navigate to the Configuration page for your job.
-   In the top section find the setting for "Trac website" and enter the
    url of your trac instance, eg. <http://devserver.company.com/trac>.
-   In the Source Code Management section, choose for "Trac" for the
    "Repository browser" when you use subversion or if you use git
    choose "TracGit".
-   Save your changes.

# Change Log

### Version 1.13 (Jan 9, 2012)

-   Support of the Git SourceCode Browser in Trac.
    ([JENKINS-11887](https://issues.jenkins-ci.org/browse/JENKINS-11887))

### Version 1.12 (Nov 4, 2011)

-   [JENKINS-11616](https://issues.jenkins-ci.org/browse/JENKINS-11616)

### Version 1.11 (Nov 4, 2011)

-   botched release, sorry

### Version 1.10 (Mar 3, 2010)

-   Update code for more recent Hudson.

### Version 1.9 (Sep 2, 2009)

-   Simplify regular expressions so it doesn't tickle a Java regular
    expression problem.

### Version 1.8 (Feb 19, 2009)

-   Add support for [Trac InterTrac
    links](http://trac.edgewall.org/wiki/InterTrac).
    ([JENKINS-2707](https://issues.jenkins-ci.org/browse/JENKINS-2707))

### Version 1.7 (Jul 2, 2008)

-   Trying to configure Trac as a repository browser with Hudson 1.231
    results in 500
    ([JENKINS-1966](https://issues.jenkins-ci.org/browse/JENKINS-1966))

### Version 1.6 (Jun 12, 2008)

-   Added a link to Trac in the sidebar
    ([discussion](http://www.nabble.com/Trac-Repository-Browser-tt17782068.html))
