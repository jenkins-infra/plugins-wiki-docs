The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Credentials stored in plain
    text](https://jenkins.io/security/advisory/2019-04-30/#SECURITY-1143)

This plugin posts build results to Twitter.Each Twitter update will
contain build result, its build number, and job name. Optionally, the
build URL can be included in which case it will be run through
tinyurl.com. See [the demo user](http://twitter.com/mtvn_builds)
([other](https://twitter.com/jhudson_bot)).

The Twitter plugin uses the configuration of the core Mailer in order to
determine the build URL.

This plugin uses
[Twitter4J](http://yusuke.homeip.net/twitter4j/en/index.html), created
by [Yusuke Yamamoto](http://yusuke.homeip.net/diary/).

[Download](https://hudson.dev.java.net/servlets/ProjectDocumentList?folderID=9184&expandFolder=9184&folderID=5818)
.

**Setup**

After the plugin is installed you will need to get an OAuth token and
token secret. These can be gotten by logging into Twitter as the user
you want Hudson to tweet as and then download

[auth-0.8.jar](http://localhost:8085/download/attachments/25591848/auth-0.8.jar?version=1&modificationDate=1404317428000&api=v2)

Then execute ***java -jar auth.jar***. This will give you a URL to
authorize Hudson to tweet with this user account. Twitter will then give
you a pin to give to auth.jar. Then you will be presented with a Token
and TokenSecret. Copy these into the appropriate fields in your Hudson
setup.

# Version History

## Version 0.7 (June 18, 2013)

-   Updated to Twitter4J 3.0.3

## Version 0.6 (September 16, 2010)

-   support OAuth.
    [JENKINS-7365](https://hudson.dev.java.net/issues/show_bug.cgi?id=7365)
    .

## Version 0.4 (October 31, 2009)

-   Change build number mark　to "$" from "\#".
-   Fixed validation of input form.
-   Fixed
    [JENKINS-4476](https://hudson.dev.java.net/issues/show_bug.cgi?id=4476)
    .

## Version 0.3 (October 18, 2009)

-   Upgraded to Twitter4J 2.0.10.
-   Fixed Maven Project Job can use Twitter Plugin.

## Version 0.2 (July 03, 2008)

-   Upgraded to Twitter4J 1.0.4.
-   Tweets are now sent asynchronously.
-   Can now specify a different username/password per project.
-   Tweets can optionally include the build URL.
-   Tweets can be restricted to only be sent when a build fails or
    recovers.

## Version 0.1 (May 13, 2008)

-   Initial release
