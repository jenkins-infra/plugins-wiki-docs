[Features](http://localhost:8085/display/JENKINS/Project+Description+Setter+Plugin#ProjectDescriptionSetterPlugin-features)  
[Configure](http://localhost:8085/display/JENKINS/Project+Description+Setter+Plugin#ProjectDescriptionSetterPlugin-configuration)  
[Change
log](http://localhost:8085/display/JENKINS/Project+Description+Setter+Plugin#ProjectDescriptionSetterPlugin-changelog)

# Features

-   Set the project description using a file in the workspace
-   Use [Token
    Macro](https://wiki.jenkins-ci.org/display/JENKINS/Token+Macro+Plugin)
    tokens in the file to replace dynamic values, eg
    ${ENV,var="JENKINS\_URL"}
-   File is read and description set at the end of the build - the file
    can be generated during the build
-   Matrix (Multi-configuration) projects supported in Jenkins 1.426
    onwards
-   Use with [PegDown Formatter
    Plugin](https://wiki.jenkins-ci.org/display/JENKINS/PegDown+Formatter+Plugin)
    to format the description with Markdown and prevent XSS (by
    selecting SUPPRESS\_ALL\_HTML)

# Configure

Set the default Filename and Charset in Manage Jenkins \> Configure
System in the section titled **Project description setter defaults**

Enable the plugin by checking the box next to **Set a project
description from a file in the workspace** in the **Build Environment**
section of a project configuration.

###### Filename

The location of the file relative to the workspace root  
The Filename can include [Token
Macro](https://wiki.jenkins-ci.org/display/JENKINS/Token+Macro+Plugin)
tokens which will be resolved before the description is set (ie, before
a Markup formatter is invoked)

##### Advanced options

###### Disable tokens

Do not parse the description file for Token Macro tokens (tokens will
still be expanded in the filename field)

###### Charset

Select the charset (character set and character-encoding) for the file

# Change log

#### 1.2 (Jan 13, 2017)

-   [PR
    \#2](https://github.com/jenkinsci/project-description-setter-plugin/pull/2) -
    Make the plugin compatible with Jenkins 2.102 and above  
    -   More info: [Plugins affected by fix for
        JEP-200](http://localhost:8085/display/JENKINS/Plugins+affected+by+fix+for+JEP-200)
-   Update the minimal Jenkins Core requirement to 1.625.3

#### 1.1 (12/06/2012)

-   Add option to disable token parsing of the contents of the
    description file
    [JENKINS-14088](https://issues.jenkins-ci.org/browse/JENKINS-14088)
-   Enable environment and build variable token replacement

#### 1.0 (05/08/2011)

-   Initial release

Questions, Comments, Bugs and Feature Requests

Please post questions or comments about this plugin to the [Jenkins User
mailing list](http://jenkins-ci.org/content/mailing-lists).  
To report a bug or request an enhancement to this plugin please [create
a ticket in
JIRA](http://issues.jenkins-ci.org/browse/JENKINS/component/15903).
