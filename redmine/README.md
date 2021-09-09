# Redmine Plugin

This plugin integrates [Redmine](http://www.redmine.org/) into Jenkins
(there's a [plugin for Redmine](http://d.hatena.ne.jp/couger/20090727)
that integrates Jenkins from the Redmine side, too.)Redmine is a
flexible project management web application.  
This plugin decorates Hudson "Changes" HTML to create links to your
Redmine ticket.  
As an example, if you committed a change with the following log message:

``` syntaxhighlighter-pre
refs 123
```

Keyword that can be used( nnn is ticket number)

-   refs nnn

&nbsp;

-   references nnn

&nbsp;

-   IssueID nnn

&nbsp;

-   fixes nnn

&nbsp;

-   closes nnn

&nbsp;

-   \#nnn

&nbsp;

-   refs nnn,nnn,nnn

### Redmine REST API

This plugin uses Redmine REST API - to enable it, login into your
Redmine, navigate to Administration -\> Settings -\> Authentication,
check "Enable REST web service" and Save.

To use "Aggregate Redmine ticket metrics" you should provide API key
assigned to existing Redmine user. Login as desired user, visit
<http://redmine/my/account>, copy key from "API access key" and paste it
into job on Jenkins.

# Changelog

### Version 0.21 (2017/08/20)

-   JENKINS-39887 - redmine plugin crashes blue ocean show more link -
    thanks @i386
-   Fix typo in help files - thanks @kryger
-   Add Jenkinsfile to the plugin - thanks @ljader

### Version 0.20 (2016/10/25)

-   Encrypt db password and API key using Secret class - thanks @ljader
-   Allow empty Redmine version, which assumes latest version - thanks
    @yoichi
-   Look for a project by it's identifier and then by name - thanks
    @eivindt and @deveth0
-   Improve description of fields in help files - thanks @ljader
-   Improve handling of self-signed Redmine sites - thanks @deveth0 and
    @ljader

### Version 0.15 (2013/08/31)

**Ths version is NOT compatibile with previous version - jobs need to be
reconfigured. Sorry!**

-   Redmine websites are now globally configured and only referenced in
    job settings - thanks @ljader
-   Redmine Repository browser path problem - thanks @ando-masaki &
    @yoichi
-   PostgreSQL isField fix - thanks @akallabeth

### Version 0.13 (2013/04/30)

-   Workaround to fix error with https connection
-   add redmine user auth

### Version 0.12 (2013/04/14)

-   include project name in redmine link
-   improve error message on invalid project name

### Version 0.11 (2012/10/28)

-   support latest redmine ( fix ticket url bug )
-   add RedmineMetrics function

### Version 0.10

-   move github

### Version 0.9 (2010/10/11)

-   fixed
    [JENKINS-5368](http://issues.jenkins-ci.org/browse/JENKINS-5368)

### Version 0.8 (2009/12/28)

-   Update uses of deprecated APIs

### Version 0.7 (2009/03/08)

-   compliant Redmine 0.8.1
-   don't link to \#1,\#2,\#3 style bug fix

### Version 0.6 (2008/12/23)

-   don't link to redmine repository at repository browser

### Version 0.5 (2008/12/07)

-   compliant ticket number delimiter by &
-   don't use repository browser bug fix

### Version 0.4 (2008/11/19)

-   compliant ticket number delimiter by ,

### Version 0.3 (2008/11/09)

-   add matching keyword fixes and closes

### Version 0.2 (2008/11/04)

-   first release

# Ruby Logo

This plugin use [ruby offical
logo](http://www.ruby-assn.org/ruby-logo.html.en).  
Copyright (C) 2008 Ruby Association LLC
