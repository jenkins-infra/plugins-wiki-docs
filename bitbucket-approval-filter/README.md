     

 

  

This plugin works along with the [Bitbucket Branch Source
Plugin](https://wiki.jenkins.io/display/JENKINS/Bitbucket+Branch+Source+Plugin)
and allows filtering out pull requests based on their approval status. 

Note: There is a known issue with using the Basic Branch Build
Strategies Plugin with named branches not building when using this
plugin.

The different approval statuses supported are: 

-   No Approval Necessary
    -   This is the same behavior as not having the plugin installed.
        Approvals have no affect on whether a pull request will be built
        or not.
-   Any Approval Required
    -   Before being built a pull request must have an approval, this
        approval could come from the author of the Pull Request.
-   Non-Author Approval Required
    -   Before being built a pull request must have an approval that is
        from a user that is not the author.
