
[Features](http://localhost:8085/display/JENKINS/PegDown+Formatter+Plugin#PegDownFormatterPlugin-features)  
[Compatibility](http://localhost:8085/display/JENKINS/PegDown+Formatter+Plugin#PegDownFormatterPlugin-compatibility)  
[Install](http://localhost:8085/display/JENKINS/PegDown+Formatter+Plugin#PegDownFormatterPlugin-install)  
[Configure](http://localhost:8085/display/JENKINS/PegDown+Formatter+Plugin#PegDownFormatterPlugin-configuration)  
[Change
log](http://localhost:8085/display/JENKINS/PegDown+Formatter+Plugin#PegDownFormatterPlugin-changelog)

# Features

-   Use [PegDown](https://github.com/sirthias/pegdown) to format
    [Markdown](http://daringfireball.net/projects/markdown/basics)
    syntax in descriptions in Jenkins, eg, view, job, build, the system
    message, etc.
-   Disable HTML to prevent XSS
-   Enable/ disable all of the PegDown extensions

# Compatibility

This plugin is compatible with any version of **Jenkins** (1.396+)

# Install

This plugin can be installed from the Plugin Manager (Manage Jenkins \>
Manage Plugins) under "User Interface".

To install manually, download the latest plugin from
<http://mirrors.jenkins-ci.org/plugins/pegdown-formatter/> and use the
Upload Plugin option in the Advanced tab of the Plugin Manager.

# Configure

In Manage Jenkins -\> Configure Global Security, select "Enable
security".  
Next to Markup Formatter, select "PegDown" from the drop down list.

To ensure that Jenkins does not lose configuration when you return to
the Configure System page, make sure that you select one of the Security
Realms.  
To leave Jenkins "open" select "Jenkins's own user database" and "Anyone
can do anything" under Authorization.

###### SUPPRESS\_ALL\_HTML

Select this option to strip HTML from the description fields

##### Advanced options

Clicking on the Advanced button will reveal the following extensions
which can be enabled/disabled individually.

###### ABBREVIATIONS

###### AUTOLINKS

###### DEFINITIONS

###### FENCED\_CODE\_BLOCKS

###### HARDWRAPS

###### NO\_FOLLOW\_LINKS

###### SMARTYPANTS

###### TABLES

See the [PegDown GitHub page](https://github.com/sirthias/pegdown) for
details of these extensions.

# Change log

#### 1.3 (09/04/2012)

-   Enable the plugin to work with Jenkins 1.455 onwards
    [JENKINS-13111](https://issues.jenkins-ci.org/browse/JENKINS-13111)

#### 1.2 (04/08/2011)

-   HTML syntax highlighting disabled when SUPPRESS\_ALL\_HTML is
    selected (in Jenkins 1.425+)

#### 1.1 (26/07/2011)

-   Added the ABBREVIATIONS extension option

#### 1.0 (26/07/2011)

-   Initial release

Questions, Comments, Bugs and Feature Requests

Please post questions or comments about this plugin to the [Jenkins User
mailing list](http://jenkins-ci.org/content/mailing-lists).  
To report a bug or request an enhancement to this plugin please [create
a ticket in
JIRA](http://issues.jenkins-ci.org/browse/JENKINS/component/15899).
