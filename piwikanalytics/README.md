This plugin decorates all web pages with the Piwik Analytics tracking
script.

Use this plugin to add the [Piwik Analytics](http://www.piwik.org/)
tracking script to all web pages that are served by the Jenkins
installation.

### Configuring

To configure this plugin you will need a *Piwik Site Id*, the *piwik
server hostname* and the *piwik path* on this server.

In this sample of piwik tracker code:

``` syntaxhighlighter-pre
  var _paq = _paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//stats.mydomain.io/piwik/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', {6}]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
```

the Site Id is *6*, the piwik host is *stats.domain*.net and the piwik
path is */piwik/*

### Changelog

### 1.2.0 (20 May 2016)

-   Use the piwik 2.x javascript tracker code
-   Add an option to force the usage of https (by default, the protocol
    used to call the piwik tracker is the same as the one of the page
    from which the call is made)
-   Use the asynchronous piwik code for everyone

### 1.1.0 (17 Mar 2013)

-   Add the possibility to use the asynchronous piwik API call
    (available since Piwik 1.11)

### 1.0 (06 Nov 2013)

-   Initial release
