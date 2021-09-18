# Async Http Client Plugin

This plugin provides a shared dependency on the ning.com
async-http-client library so that other plugins can co-operate when
using this library.  
Beside the dependency to the async library
(<https://github.com/AsyncHttpClient/async-http-client>), this plugin
also provides a utility class to help you get the proxyserver instance
that is correct for the current jenkins instance.

**Typical config setup**

``` syntaxhighlighter-pre
  AsyncHttpClientConfig.Builder httpClientConfig =
          new AsyncHttpClientConfig.Builder().setRequestTimeoutInMs(25000)
               .setProxyServer(AHCUtils.getProxyServer());
```

For code which is running on the master and is happy to use a shared
instance that will be shut down with Jenkins, as of 1.7.8, there is a
singleton which keeps an instance configured for the current proxy
server:

``` syntaxhighlighter-pre
AHC.instance()
```

There is also a responsive mailing list for using the base
async-http-client library
at: https://groups.google.com/forum/?fromgroups\#\\!forum/asynchttpclient\\\|https://groups.google.com/forum/?fromgroups\#\\!forum/asynchttpclient
(https://groups.google.com/forum/?fromgroups\#\\!forum/asynchttpclient)

## Change Log

### Version 1.7.24.2 (Nov 2018)

-   Updated async-http-client dependency to 1.7.24-jenkins-1, which
    includes some of the security fixes from 1.9.40.

### Version 1.9.40.0 (Oct 2017)

-   Updated async-http-client dependency to 1.9.40.
-   Updated java level to 7.
-   Updated jenkins baseline to 1.625.3.

### Version 1.7.24.1 (Jun 2016)

-   Upgraded to 2.9 parent POM.
-   Fixed SECURITY-305.

### Version 1.7.24 (Dec 2015)

-   Updated async-http-client dependency to 1.7.24
-   Bump core version to 1.466 and stop bundling slf4j in the hpi file
-   Pick up noProxyHosts configuration from Jenkins proxy settings
    ([issue 31823](https://issues.jenkins-ci.org/browse/JENKINS-31823))

### Version 1.7.8 (Dec 2012)

-   Added AHC.instance() to provide a shared instance for use on the
    master.
-   Updated async-http-client dependency to 1.7.8

### Version 1.7.4-1 (May 2012)

-   Fixed plugin description when the plugin is installed.

### Version 1.7.4 (May 2012)

-   Updated async-http-client dependency to 1.7.4.

### Version 1.7.2-1 (April 2012)

-   Changed required core from 1.424 to 1.398 to allow for greater
    uptake

### Version 1.7.2 (April 2012)

-   Initial release, based on com.ning:async-http-client:1.7.2
