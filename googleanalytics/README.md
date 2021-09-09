This plugin decorates all web pages with the Google Analytics tracking
script

Use this plugin to add the google analytics tracking script to all web
pages that are served by the Jenkins installation.

## Configuring

To configure it, you just need to specify the profile id. The profile id
can be found within the google analytics web site. If you already have
the tracking script, look at the tracking code and copy the value within
the `_getTracker()` as shown in this example:
`_gat.getTracker("AA-123456-2");` *\_(the profile id is AA-123456-2)*.

If you want to track subdomains in one profile, you can specify the
domain name in the configuration. For more details about tracking
subdomains in one profile [go
here](http://www.google.com/support/googleanalytics/bin/answer.py?hl=en&answer=55524).

![](docs/images/ga-global.png)

## Change log

### 1.2 - (*23 november 2011*)

-   Updated Google analytics script so it used to the asynchronous
    method.
    *([JENKINS-11686](https://issues.jenkins-ci.org/browse/JENKINS-11686))*

### 1.2 - (*24 august 2009*)

-   Added support for tracking subdomains in one profile. *[Patch from
    Davide
    Mendolia](http://www.nabble.com/Re:-Google-Analytics-Plugin-for-Hudson-td25114229.html)*

### 1.1 - (*19 september 2008*)

### 1.0 - (*5 september 2008*)

-   Initial revision
