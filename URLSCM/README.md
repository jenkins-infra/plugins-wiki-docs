This plugin allows the use of URLs as an SCM.

This is an SCM plugin for Jenkins. While URLs are not actually a proper
SCM, the two main behaviors of an SCM are supported - checkout and
polling. Polling is accomplished by checking the last-modified property
of the URL. Checkout is accomplished by copying the content of the URL
into the workspace as a file.  The file is given the same name as the
final filename component of the URL.  URLs without a filename component
cannot be used at this time.    
This does duplicate some of what the [URLChange Trigger
plugin](https://wiki.jenkins.io/display/JENKINS/URL+Change+Trigger) does.

Benefits this plugin over the URLChange Trigger are:  
1. You can choose your own polling schedule via the SCM Polling
trigger.  
2. Less resource intensive polling mechanism, since checking
last-modified requires few bytes to transfer, regardless of the amount
of data in the URL.

Benefits of URLChange Trigger over this plugin:  
1. Jenkins only supports one SCM plugin per project. If you want to
trigger an SCM checkout via a URL, then URLChange Trigger is a better
choice.  
2. The last-modified property of a URL is not the right trigger for your
builds, instead you need the content of the URL to change to trigger a
build.

## Change Log

##### Version 1.6 (Nov 2, 2011)

-   JENKINS-11572

##### Version 1.5 (Jan 27, 2010)

-   Update code for more recent Hudson

##### Version 1.4 (Jun 24, 2008)
