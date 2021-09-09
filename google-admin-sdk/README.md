Adds Google Admin SDK API dependencies

  

# Description

The Jenkins Plugin with Google Admin SDK API dependencies. The Plugin
adds no actual funktionality and used as shared library for the Jenkins
groovy post-init scripts. e.g. get the Google Group Members and add all
to the Matrix Authorization Table.

## Usage

 

``` syntaxhighlighter-pre
import org.jenkinsci.plugins.googleadmin.GoogleAdminService
 
def clientSecretFile "~/.credentials.json"
def adminAccountEmail = "admin@test.com"
String gsuiteGroup = "some-group@test.com"
 
def googleService = new GoogleAdminService(clientSecretFile, adminAccountEmail)
String[] usersArray = googleService.getGroupMembers(gsuiteGroup)
usersArray.each{
    println "${it}"
}
```

 

## Related Projects

 

-   <https://github.com/google-cloud-tools/jenkins>
