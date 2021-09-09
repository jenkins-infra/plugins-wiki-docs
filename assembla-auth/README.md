## Plugin Information

[TABLE]

# Assembla Auth Plugin

## Overview

This plugin enables OAuth (see [http://oauth.net](http://oauth.net/))
authentication for [Assembla](https://www.assembla.com/) users to
Jenkins instance using their Assembla credentials and delegate the
authorization to an Assembla space permissions.

## Assembla Security Realm (authentication):

Handles the authentication and acquisition of the Assembla OAuth token
for the connecting user. Takes the client id (Application identifier)
and client secret (Application secret) from the application registration
here:<https://www.assembla.com/user/edit/manage_clients>

The entry should look like this:Assembla API uri:
[https://api.assembla.com](https://api.assembla.com/)  
Main url: [http://127.0.0.1:8080](http://127.0.0.1:8080/)  
Callback url: <http://127.0.0.1:8080/securityRealm/finishLogin>  
Space url name: assembla\_space\_name  
Assembla API uri: by default
is [https://api.assembla.com](https://api.assembla.com/). Do not change
if you are not running a private install of Assembla.

Main url and Callback url: use the url of your jenkins instance instead
of [http://127.0.0.1:8080](http://127.0.0.1:8080/)

Space url name: has to be set for authorization purposes, replace
assembla\_space\_name with your space's url name
([www.assembla.com/spaces/](http://www.assembla.com/spaces/))

## Assembla Authorization Strategy (authorization):

Jenkins user permissions are based on Assembla permission:

-   Assembla user with ALL permission for space has Jenkins ADMIN
    access.
-   Assembla user with EDIT permission for space has Jenkins EDIT
    access.
-   Assembla user with VIEW permission for space has Jenkins READ
    access.
-   Assembla user with NONE permission for space has NO Jenkins access.

"Admin usernames" field accepts a list of comma separated usernames.
These users will:

-   have Jenkins ADMIN access
-   have external access (access to Jenkins API via basic http auth)
    using their username and API key defined in Jenkins People
    section: <http://127.0.0.1:8080/user/configure>
