This plugin adds ability to choose branches, tags or revisions from git
repository configured as a parameter in your builds. Unlike [Git
Parameter
Plugin](http://localhost:8085/display/JENKINS/Git+Parameter+Plugin),
this plugin requires a git repository defined instead of reading GIT SCM
configuration from your projects

## Quick usage guide

-   Install the plugin
-   Go to your project, click ***This project is parameterized,*** click
    **Add Parameter,** choose ***List Git Branches (and more)  
    ***![](docs/images/image2018-12-25_16-40-1.png){height="250"}  
    Brief description of the named fields:  
    -   **Name **- Name for the parameter, i.e. **FROM\_BRANCH**
    -   **Repository URL** - git repository URL, i.e.
        ssh://<git@github.com>:jenkinsci/list-git-branches-parameter-plugin.git
    -   **Credentials **- git credentials stored in jenkins
-   Start a build and use the parameter  
    ![](docs/images/image2018-12-25_16-56-6.png){height="250"}

# **Changelog**

## Release 0.0.7(2019-4-25)

-   Fix some bugs

## Release 0.0.3 (2019-1-3)

-   Branch Name starts with "origin/"

## Release 0.0.1 (2018-12-12)

-   Initial release

**  
**
