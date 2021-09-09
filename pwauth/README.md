# About

This plug-in adds authentication via pwauth and supports both \*nix
system users and groups through PAM.  
If you're running Jenkins on a Linux system, chances are that your
systems already include a centralized user management that is based on
PAM, especially in larger organizations. PAM itself is a very versatile
system for user authentication and offers many different modules to
authenticate against, like for examle Samba, LDAP, MySQL, and many more
(see more at
[kernel.org](http://www.kernel.org/pub/linux/libs/pam/Linux-PAM-html/Linux-PAM_SAG.html "Overview over common PAM modules")).
The problem with many solutions working with PAM is that they still need
access to super user rights to actually use the authentication system.
This is where PWauth comes into play.

[PWauth](http://code.google.com/p/pwauth/ "PWauth at google code") is a
system usually used in connection with authnz\_external, an
Apache2-module, but which can be used by any system wanting to
authenticate against PAM, without needing super user rights. This way
the user running the Jenkins instance can authenticate against any PAM
system, without needing special rights, and this leaving security
intact.

This plug in uses PWauth to authenticate against whatever PAM
configuration you may have set up and supports users and groups in
Jenkins. Additionally the plug in allows you to define a white list of
IPs that can access the system without needing to authenticate. This is
useful when using a post-commit triggers for example, that tries to
start a build via a URL, that would usually need authentication.

# Changelog

## Version 0.5 (planned)

-   Allow host names in white list
-   Internationalization of all messages
-   Fix broken "Remember me"
-   Make plugin only available under \*nix systems

## Version 0.4 (2010-12-21)

-   Allow authentication via GET/POST parameters
    ([http://hudson.url](http://username:password@hudson.url/)?username=\<username\>&password=\<password\>)
-   Fixed potential security flaw in Filter

## Version 0.3 (2010-12-20)

-   Botched release due to problems with migration to new java.net svn
    repository

## Version 0.2 (2010-11-05)

-   Official release to public

##  Version 0.1

-   First implementation

# How to setup PWauth

TBD.

Until then check the [tutorial for
authnz\_external](http://www.pyxzl.net/store/authnz.php) or the projects
[tutorial](http://code.google.com/p/pwauth/wiki/InstallMain) on getting
things set up.

To use the authentication via Request, you have to send the credentials
as either POST or GET parameters. Currently accepted parameters are
"user", "username", "login" and "pass", "password", "passwd", "key". Any
combination of these should be able to let you authenticate any request
to the server.

**Example:**  
http:**/**/[my.hudson.url/job/My\_Project/build?delay=0sec&user=myUser&pass=myPass](http://my.hudson.url/job/My_Project/build?delay=0sec&user=myUser&pass=myPass)
