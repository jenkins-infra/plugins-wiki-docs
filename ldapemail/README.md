The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Plain text password shown in configuration
    form](https://jenkins.io/security/advisory/2019-10-01/#SECURITY-1515)

## LDAP Email plugin

This plugin resolves user email addresses from an LDAP directory.  
It is not needed if Jenkins uses LDAP as its authentication source and
user records have a standard "mail" attribute. In this case Jenkins will
already find user email addresses.

Configure the plugin in the `LDAP Email Lookup` section in the main
Jenkins settings page (Manage / Configure System).

Here's an example configuration file:

``` syntaxhighlighter-pre
<?xml version='1.0' encoding='UTF-8'?>
<com.mtvi.plateng.hudson.ldap.Configuration>
    <server>ldap://testserver:389</server>
    <baseDN>ou=People,dc=test,dc=com</baseDN>
    <bindDN>cn=Jenkins,ou=Internal,dc=test,dc=com</bindDN>
    <bindPassword>password</bindPassword>
    <emailAttribute>mail</emailAttribute>
    <searchAttribute>uid</searchAttribute>
</com.mtvi.plateng.hudson.ldap.Configuration>
```

The `bindDN` and `bindPassword` elements are only required if your LDAP
server does not support anonymous binding.

By default the plugin will form a distinguished name (DN) with this
pattern:

``` syntaxhighlighter-pre
<searchAttribute>=<userName>,<baseDN>
```

However, there are environments where you need to perform an LDAP
search. To do this, check the "Perform Search" checkbox in the config
settings, which adds a performSearch element to the configuration file:

``` syntaxhighlighter-pre
<?xml version='1.0' encoding='UTF-8'?>
<com.mtvi.plateng.hudson.ldap.Configuration>
    <server>ldap://testserver:389</server>
    <baseDN>dc=test,dc=com</baseDN>
    <bindDN>cn=Jenkins,ou=Internal,dc=test,dc=com</bindDN>
    <bindPassword>password</bindPassword>
    <emailAttribute>mail</emailAttribute>
    <searchAttribute>uid</searchAttribute>
        <performSearch>true</performSearch>
</com.mtvi.plateng.hudson.ldap.Configuration>
```

This will perform a subtree-scoped search within the baseDN with the
filter

``` syntaxhighlighter-pre
<searchAttribute>=<userName>
```

## Version History

##### Version 0.8 (July 9, 2014)

-   Add git(hub) scm support in pom; remove relativePath
-   Fix for Hide & encrypt Bind Password
    ([JENKINS-5492](https://issues.jenkins-ci.org/browse/JENKINS-5492))

##### Version 0.7 (February 14, 2011)

-   Translation update (French)

##### Version 0.6 (January 31, 2010)

-   Update code for more recent Hudson

##### Version 0.5 (January 20, 2009)

-   Add configuration UI

##### Version 0.4 (September 30, 2008)

-   All logging is done at the INFO level.

##### Version 0.3 (September 25, 2008)

-   More logging

##### Version 0.2 (September 19, 2008)

-   Adding search support
-   Adding more verbose logging
-   Fixing bug where emailAttribute configuration option was ignored in
    some circumstances

##### Version 0.1 (June 20, 2008)

-   Initial release
