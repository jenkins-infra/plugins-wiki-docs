This plugin allows you to use a user-written custom script to
authenticate the username and password. This is useful if you need to
plug into a custom authentication scheme, but don't want to write your
own plugin.

This plugin now supports group resolving for a user loging in. One can
define two scripts:

-   script to authenticate the user.  
    Each time the authentication is attemped (which is once per
    session), the specified script will be invoked with the username in
    the 'U' environment variable and the password in the 'P' environment
    variable. If the script returns exit code 0, the authentication is
    considered successful, and otherwise failure.

**simple authentication script**

``` syntaxhighlighter-pre
#!/bin/sh
if [ "$U" == "domi" ] && [ "$P" == "imod" ]; then
   exit 0
fi
exit 1
```

-   a second script to resolve the groups for a user loging in.  
    The specified script will be invoked with the username in the 'U'
    environment variable.  
    If the script returns exit code 0, the output will be tokenized by
    the delimiter (default: ',') to create a groups with each token.

**simple group command script**

``` syntaxhighlighter-pre
#!/bin/sh
if [ "$U" == "domi" ]; then
 echo "admin,superuser"
fi
```

# Help and Support

type

key

summary

Data cannot be retrieved due to an unexpected error.

[View these issues in
Jira](http://issues.jenkins-ci.org/secure/IssueNavigator.jspa?reset=true&jqlQuery=project%20=%20JENKINS%20AND%20status%20in%20%28Open,%20%22In%20Progress%22,%20Reopened%29%20AND%20component%20=%20%27script-realm%27&src=confmacro)

For Help and support please use the [Jenkins
Users](http://jenkins-ci.org/content/mailing-lists) mailing list.  
The comment list below is not monitored.

# Changelog

### Version 1.5 (June 24, 2012)

-   fix issue while resolving groups through the UI

### Version 1.4 (Jul 29, 2011)

-   define 'SystemRoot' variable on Windows to prevent SocketException

### Version 1.3 (Jan 16, 2011)

-   fix [JENKINS-8172](http://issues.jenkins-ci.org/browse/JENKINS-8172)

### Version 1.2 (Nov 7, 2010)

-   adding support for groups

### Version 1.0 (Nov 5, 2009)

-   Initial release
