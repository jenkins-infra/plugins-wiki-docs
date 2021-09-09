| Plugin Information                                                                                      |
|---------------------------------------------------------------------------------------------------------|
| View Git Parameter [on the plugin site](https://plugins.jenkins.io/git-parameter) for more information. |

Older versions of this plugin may not be safe to use. Please review the
following warnings before using an older version:

-   [Stored XSS
    vulnerability](https://jenkins.io/security/advisory/2020-09-01/#SECURITY-1884)
-   [Multiple stored XSS
    vulnerabilities](https://jenkins.io/security/advisory/2020-02-12/#SECURITY-1709)

### Adds ability to choose branches, tags or revisions from git repository configured in project.

  

# Plugin Info

This plugin allows you to assign git branch, tag, pull request or
revision number as parameter in your  builds.

**Important!**   
There is no need to set up anything special in plugin settings.  
*This plugin will read GIT SCM configuration from your projects.*  
This plugin used directly the [Git
Plugin](https://wiki.jenkins.io/display/JENKINS/Git+Plugin) and [Git
Client
Plugin](https://wiki.jenkins.io/display/JENKINS/Git+Client+Plugin).

# Basic configuration

## Project configuration

![](docs/images/image2018-9-20_22-0-7.png){width="1000"}

## [Build with Parameters](http://xps15:8083/job/git_parameter/build?delay=0sec) form

![](docs/images/image2018-9-20_22-2-47.png){width="1000"}

# Example pipeline script

### Important! version 0.9.4 or later

## Branch type - Basic usage 

**Pipeline: Branch type - Basic usage (Declarative Pipeline)**

``` syntaxhighlighter-pre
// Using git without checkout 
pipeline {
  agent any
  parameters {
    gitParameter branchFilter: 'origin/(.*)', defaultValue: 'master', name: 'BRANCH', type: 'PT_BRANCH'
  }
  stages {
    stage('Example') {
      steps {
        git branch: "${params.BRANCH}", url: 'https://github.com/jenkinsci/git-parameter-plugin.git'
      }
    }
  }
}
```

**Pipeline: Branch type - Basic usage (Scripted Pipeline)**

``` syntaxhighlighter-pre
properties([
    parameters([
        gitParameter(branch: '',
                     branchFilter: 'origin/(.*)',
                     defaultValue: 'master',
                     description: '',
                     name: 'BRANCH',
                     quickFilterEnabled: false,
                     selectedValue: 'NONE',
                     sortMode: 'NONE',
                     tagFilter: '*',
                     type: 'PT_BRANCH')
    ])
])
node {
    git branch: "${params.BRANCH}", url: 'https://github.com/jenkinsci/git-parameter-plugin.git'
}
```

  

Important settings:

-   It should be set a **default** value because initial build must get
    this information
-   Using **git** should be set a **branchFilter** as '*origin/(.\*)*'
    (origin is a remote server name)

##### Parameter type

-   PT\_TAG
-   PT\_BRANCH
-   PT\_BRANCH\_TAG
-   PT\_REVISION
-   PT\_PULL\_REQUEST

### Important: If you need use other type (other then branch) parameter, you must use git within *checkout* 

## Tag type

**Pipeline: Tag type**

``` syntaxhighlighter-pre
// Using git within checkout 
pipeline {
    agent any
    parameters {
        gitParameter name: 'TAG', 
                     type: 'PT_TAG',
                     defaultValue: 'master'
    }
    stages {
        stage('Example') {
            steps {
                checkout([$class: 'GitSCM', 
                          branches: [[name: "${params.TAG}"]], 
                          doGenerateSubmoduleConfigurations: false, 
                          extensions: [], 
                          gitTool: 'Default', 
                          submoduleCfg: [], 
                          userRemoteConfigs: [[url: 'https://github.com/jenkinsci/git-parameter-plugin.git']]
                        ])
            }
        }
    }
}
```

## Branch Tag type

**Pipeline: Branch Tag type**

``` syntaxhighlighter-pre
pipeline {
    agent any
    parameters {
        gitParameter name: 'BRANCH_TAG', 
                     type: 'PT_BRANCH_TAG',
                     defaultValue: 'master'
    }
    stages {
        stage('Example') {
            steps {
                checkout([$class: 'GitSCM', 
                          branches: [[name: "${params.BRANCH_TAG}"]], 
                          doGenerateSubmoduleConfigurations: false, 
                          extensions: [], 
                          gitTool: 'Default', 
                          submoduleCfg: [], 
                          userRemoteConfigs: [[url: 'https://github.com/jenkinsci/git-parameter-plugin.git']]
                        ])
            }
        }
    }
}
```

## Revision type

**Pipeline: Revision type**

``` syntaxhighlighter-pre
pipeline {
    agent any
    parameters {
        gitParameter name: 'REVISION', 
                     type: 'PT_REVISION',
                     defaultValue: 'master'
    }
    stages {
        stage('Example') {
            steps {
                checkout([$class: 'GitSCM', 
                          branches: [[name: "${params.REVISION}"]], 
                          doGenerateSubmoduleConfigurations: false, 
                          extensions: [], 
                          gitTool: 'Default', 
                          submoduleCfg: [], 
                          userRemoteConfigs: [[url: 'https://github.com/jenkinsci/git-parameter-plugin.git']]
                        ])
            }
        }
    }
}
```

## Pull Requst type

**Pipeline: Pull Requst type**

``` syntaxhighlighter-pre
pipeline {
    agent any
    parameters {
        gitParameter name: 'PULL_REQUESTS', 
                     type: 'PT_PULL_REQUEST',
                     defaultValue: '1',
                     sortMode: 'DESCENDING_SMART'
    }
    stages {
        stage('Example') {
            steps {
                checkout([$class: 'GitSCM', 
                branches: [[name: "pr/${params.PULL_REQUESTS}/head"]], 
                doGenerateSubmoduleConfigurations: false, 
                extensions: [], 
                gitTool: 'Default', 
                submoduleCfg: [], 
                userRemoteConfigs: [[refspec: '+refs/pull/*:refs/remotes/origin/pr/*', url: 'https://github.com/jenkinsci/git-parameter-plugin.git']]])
            }
        }
    }
}
```

# Options:

## Parameter Type

**Name using in pipeline**

``` syntaxhighlighter-pre
type: 'PT_TAG' or 'PT_BRANCH' or 'PT_BRANCH_TAG' or 'PT_REVISION' or 'PT_PULL_REQUEST'
```

Explains about PT\_TAG or PT\_BRANCH or PT\_BRANCH\_TAG:

Plugin using [git
ls-remote](https://git-scm.com/docs/git-ls-remote.html) command to get
remote tags or branches, this solution was implemented in  [
JENKINS-40232](https://issues.jenkins.io/browse/JENKINS-40232) - Getting
issue details... STATUS .  This has been done for performance
reasons. The plugin does not have to featch the repository before
getting information

  

In code plugin
[use](https://github.com/jenkinsci/git-client-plugin/blob/9f2a3ec48e699222ce3034dfe14cdb319e563ed5/src/main/java/org/jenkinsci/plugins/gitclient/GitClient.java#L631)ing 
getRemoteReferences from GitClient, look implementation
in [CliGitAPIImpl](https://github.com/jenkinsci/git-client-plugin/blob/master/src/main/java/org/jenkinsci/plugins/gitclient/CliGitAPIImpl.java) 

  

``` syntaxhighlighter-pre
package org.jenkinsci.plugins.gitclient
//...


public interface GitClient {
//...
    Map<String, ObjectId> getRemoteReferences(String remoteRepoUrl, String pattern, boolean headsOnly, boolean tagsOnly) throws GitException, InterruptedException;
//...
}
```

  

## Branch

**Name using in pipeline**

``` syntaxhighlighter-pre
branch
```

  

## Branch Filter

**Name using in pipeline**

``` syntaxhighlighter-pre
branchFilter
```

  

## Tag Filter

**Name using in pipeline**

``` syntaxhighlighter-pre
tagFilter
```

  

## Sort Mode

**Name using in pipeline**

``` syntaxhighlighter-pre
sortMode: 'NONE' or 'ASCENDING_SMART' or 'DESCENDING_SMART' or 'ASCENDING' or 'DESCENDING'
```

  

You can select the following sorting options for
tags/revision/branches/branches\_or\_tags/pull requests

-   none
-   descending
-   ascending
-   ascending smart
-   descending smart

For the smart variants the compare treats a sequence of digits as a
single character. Contributed by Graeme Hill.

## Default Value

**Name using in pipeline**

``` syntaxhighlighter-pre
defaultValue
```

In release 0.9.9 or later good to set a default value, because this
value is using in the initial build (in Pipeline).  
Default value is returned when some error occurred on getting data.

![](docs/images/image2019-2-16_22-46-54.png){width="900"}

## Selected Value

**Name using in pipeline**

``` syntaxhighlighter-pre
selectedValue: 'NONE' or 'TOP' or 'DEFAULT'
```

  

## Use repository

**Name using in pipeline**

``` syntaxhighlighter-pre
useRepository
```

  

**Remember: You don't set a git repository into the plugin, this plugin
using git repositories which are defined in project in SCM section!**

If in the task are defined multiple repositories, this option specifies
which the repository is taken into account on getting data.  
*If the option is not defined, is taken a first defined repository.*  
This option is a regular expression, which is compared to the
'Repository URL'.

You can define the multiple SCM for few way, you can use [Multiple SCMs
Plugin](http://localhost:8085/display/JENKINS/Multiple+SCMs+Plugin), specified
many 'Repository URL' in one SCM  or define them in pipeline.

Consider an example based on two repositories:

-   <https://github.com/klimas7/exampleA.git>
-   <https://github.com/klimas7/exampleB.git>

  

**Pipeline: Complex example**

``` syntaxhighlighter-pre
pipeline {
    agent any
    parameters {
        gitParameter branchFilter: 'origin.*/(.*)', defaultValue: 'master', name: 'BRANCH_A', type: 'PT_BRANCH', useRepository: '.*exampleA.git'
        gitParameter branchFilter: 'origin.*/(.*)', defaultValue: 'master', name: 'BRANCH_B', type: 'PT_BRANCH', useRepository: '.*exampleB.git'
        
    }
    stages {
        stage('Example') {
            steps {
                git branch: "${params.BRANCH_A}", url: 'https://github.com/klimas7/exampleA.git'
                git branch: "${params.BRANCH_B}", url: 'https://github.com/klimas7/exampleB.git'
            }
        }
    }
}
```

After initial run you get 

![](docs/images/image2018-9-21_22-47-52.png){height="250"}

Example when 'Use repository' is not set:

**Pipeline: Use repository is not set**

``` syntaxhighlighter-pre
pipeline {
    agent any
    parameters {
        gitParameter branchFilter: 'origin.*/(.*)', defaultValue: 'master', name: 'BRANCH', type: 'PT_BRANCH'
    }
    stages {
        stage('Example') {
            steps {
                git url: 'https://github.com/klimas7/exampleA.git'
                git url: 'https://github.com/klimas7/exampleB.git'
            }
        }
    }
}
```

 After initial run you get 

![](docs/images/image2018-9-21_23-3-22.png){height="250"}

## Quick Filter

**Name using in pipeline**

``` syntaxhighlighter-pre
quickFilterEnabled
```

  

## List Size

**Name using in pipeline**

``` syntaxhighlighter-pre
listSize
```

  

# Global configuration

Release 0.9.9 or later

![](docs/images/image2019-2-16_22-26-39.png){height="150"}

![](docs/images/image2019-2-17_13-5-14.png){width="952"}  

# Error handling

Release 0.9.9 or later

If an error occurred while retrieving data, the default value is
returned.  
Additional information is provided below, along with the cause of the
error.

Examples:

![](docs/images/image2019-2-17_17-2-14.png){height="150"}

This error will occurred when repository is not configured or 'Use
repository' option no match with any repository.

![](docs/images/image2019-2-17_12-49-47.png){height="250"}

This error will occurred when repository not exists or URL is wrong.

![](docs/images/image2019-2-17_17-4-32.png){width="1074"}

This error will occurred when is no ssh command on Jenkins master.

# Releases schedule

?

# Changelog

### 17/06/2019 Version 0.9.11

-   [ JENKINS-57879](https://issues.jenkins.io/browse/JENKINS-57879) -
    Getting issue details... STATUS
-   [ JENKINS-51512](https://issues.jenkins.io/browse/JENKINS-51512) -
    Getting issue details... STATUS  
-   [ JENKINS-50711](https://issues.jenkins.io/browse/JENKINS-50711) -
    Getting issue details... STATUS
-   [ JENKINS-52051](https://issues.jenkins.io/browse/JENKINS-52051) -
    Getting issue details... STATUS

### 16/02/2019 Version 0.9.9

-   [JENKINS-55769](https://issues.jenkins-ci.org/browse/JENKINS-55769): Tag
    match filter shows more entries than direct command (git tag -l
    "$tagFilter")
-   [JENKINS-55770](https://issues.jenkins-ci.org/browse/JENKINS-55770): Intrusive
    and misleading warning text from the parameter selection display
-   [JENKINS-54359](https://issues.jenkins-ci.org/browse/JENKINS-54359): Change
    error handling

### 09/10/2018 Version 0.9.6

-   [JENKINS-53911](https://issues.jenkins-ci.org/browse/JENKINS-53911): Duplicate
    entries in list, if git repo is checked out twice.
-   [JENKINS-52533](https://issues.jenkins-ci.org/browse/JENKINS-52533): Display
    commit message on the build action
-   [JENKINS-45925](https://issues.jenkins-ci.org/browse/JENKINS-45925): Show
    git commit message when building with parameter "revision"

### 17/09/2018 Version 0.9.5

-   [JENKINS-51041](https://issues.jenkins-ci.org/browse/JENKINS-51041), [JENKINS-50510](https://issues.jenkins-ci.org/browse/JENKINS-50510), [JENKINS-45419](https://issues.jenkins-ci.org/browse/JENKINS-45419): Fixed
    use repository option

### 16/08/2018 Version 0.9.4

-   [JENKINS-52273](https://issues.jenkins-ci.org/browse/JENKINS-52273): Support
    git-parameter-plugin in declarative pipeline
-   [JENKINS-52132](https://issues.jenkins-ci.org/browse/JENKINS-52132):
    Description with HTML support  

### 20/06/2018 Version 0.9.3

-   [JENKINS-51521](https://issues.jenkins-ci.org/browse/JENKINS-51521): Git
    parameter does not show branch list in case deleteDir() is present
    in pipeline
-   [JENKINS-51476](https://issues.jenkins-ci.org/browse/JENKINS-51476):
    Git parameter plugin is not retrieving revision number  

### 16/04/2018 Version 0.9.2

-   [JENKINS-50776](https://issues.jenkins-ci.org/browse/JENKINS-50776):
    Default selected item doesn’t always honor exactly Default Value
-   [JENKINS-49727](https://issues.jenkins-ci.org/browse/JENKINS-49727):
    Add optional parameter to specify the number of items the list will
    display 

### 18/02/2018 Version 0.9.1

-   [JENKINS-45419](https://issues.jenkins-ci.org/browse/JENKINS-45419): 'Use
    Repository' setting does not find other remote urls if multiple
    repos are added to job
-   [PR
    \#55](https://github.com/jenkinsci/git-parameter-plugin/pull/55): Add
    complete French support

### 02/11/2017 Version 0.9.0

-   [JENKINS-47110](https://issues.jenkins-ci.org/browse/JENKINS-47110 "View this issue"): Retrieving
    Git references do not work with variable in Repository URL
-   [PR
    \#54](https://github.com/jenkinsci/git-parameter-plugin/pull/54): Help
    improvement: complete English translation, and reorder items
-   [JENKINS-47078](https://issues.jenkins-ci.org/browse/JENKINS-47078 "View this issue"): IndexOutOfBoundsException
    for pipeline job
-   [JENKINS-39530](https://issues.jenkins-ci.org/browse/JENKINS-39530): Add
    support to Pipeline projects

### 04/09/2017 Version 0.8.1

-   [JENKINS-46216](https://issues.jenkins-ci.org/browse/JENKINS-46216 "View this issue"): Null
    Pointer exception when no default parameter provided
-   [JENKINS-45577](https://issues.jenkins-ci.org/browse/JENKINS-45577 "View this issue"): \[Git
    Parameter Plugin\] Parameter does not support the definition from
    CLI
-   [JENKINS-46624](https://issues.jenkins-ci.org/browse/JENKINS-46624 "View this issue"): fix
    remote name
-   [JENKINS-46185](https://issues.jenkins-ci.org/browse/JENKINS-46185): Set
    browser focus to filter after the QuickFilter has been filled
-   [JENKINS-46038](https://issues.jenkins-ci.org/browse/JENKINS-46038): Extend
    list of supported type with pull request
-   [JENKINS-26799](https://issues.jenkins-ci.org/browse/JENKINS-26799):
    Multiple SCMs plugin support part 3 (Work fine when selected
    revisions)
-   [JENKINS-42313](https://issues.jenkins-ci.org/browse/JENKINS-42313): Default
    Value not honoured

### 02/06/2017 Version 0.8.0

-   [JENKINS-26799](https://issues.jenkins-ci.org/browse/JENKINS-26799):
    Multiple SCMs plugin support part 2
-   [JENKINS-40523](https://issues.jenkins-ci.org/browse/JENKINS-40523):
    Include Jenkins Project Name in Log message
-   [JENKINS-40232](https://issues.jenkins-ci.org/browse/JENKINS-40232):
    Git Parameter Plugin doesn't need to clone

### 23/01/2017 Version 0.7.2

-   [JENKINS-41091](https://issues.jenkins-ci.org/browse/JENKINS-41091):
    git-parameter:0.7.1 breaks the multi-line parameters in rebuild

### 11/27/2016 Version 0.7.1

-   [JENKINS-39366](https://issues.jenkins-ci.org/browse/JENKINS-39366):
    Add support for a rebuild-plugin
-   [JENKINS-26799](https://issues.jenkins-ci.org/browse/JENKINS-26799):
    Multiple SCMs plugin support

### 09/12/2016 Version 0.7.0

-   [JENKINS-37555](https://issues.jenkins-ci.org/browse/JENKINS-37555):
    Better support for internationalization
-   [JENKINS-37595](https://issues.jenkins-ci.org/browse/JENKINS-37595):
    Add support for polish localization
-   [JENKINS-37370](https://issues.jenkins-ci.org/browse/JENKINS-37370):
    Retrieving Git references do not work with variable in "Repository
    URL"
-   [JENKINS-37953](https://issues.jenkins-ci.org/browse/JENKINS-37953):
    Add support to ProxySCM
-   [JENKINS-37738](https://issues.jenkins-ci.org/browse/JENKINS-37738):
    Update dependency in plugin and cleanup in pom
-   [JENKINS-34876](https://issues.jenkins-ci.org/browse/JENKINS-34876):
    Git Parameters not working for Pipeline projects and Jenkinsfile
    from SCM

### 08/06/2016 Version 0.6.2

-   [JENKINS-36833](https://issues.jenkins-ci.org/browse/JENKINS-36833):
    Race Condition Populating Multiple Tag Parameters
-   [JENKINS-36934](https://issues.jenkins-ci.org/browse/JENKINS-36934):
    No return value passed to the url
-   [JENKINS-31939](https://issues.jenkins-ci.org/browse/JENKINS-31939):
    The top value is better to be chosen by default of to have such
    option (part 3)

### 07/19/2016 Version 0.6.1

-   [JENKINS-31939](https://issues.jenkins-ci.org/browse/JENKINS-31939):
    The top value is better to be chosen by default of to have such
    option (part 2)

### 07/06/2016 Version 0.6.0

-   [JENKINS-36104](https://issues.jenkins-ci.org/browse/JENKINS-36104):
    Add Repo SCM support (Derron Hu)
-   [JENKINS-16290](https://issues.jenkins-ci.org/browse/JENKINS-16290):
    git parameter plugin doesn't support Jenkins slave setup with git
    repos checked out only on slaves
-   [JENKINS-35363](https://issues.jenkins-ci.org/browse/JENKINS-35363):
    Git parameter filter doesn't work

### 05/03/2016 Version 0.5.1

-   [JENKINS-34425](https://issues.jenkins-ci.org/browse/JENKINS-34425):
    Git parameter plugin skips one build number while populating tags
-   [JENKINS-34544](https://issues.jenkins-ci.org/browse/JENKINS-34544):
    NPE After update to 0.5.0
-   [JENKINS-34574](https://issues.jenkins-ci.org/browse/JENKINS-34574):
    After cleaned workspace doesn't show branches

### 04/02/2016 Version 0.5.0

1\. User interface

-   [JENKINS-27435](https://issues.jenkins-ci.org/browse/JENKINS-27435):
    Quick branch filter (Thank Bruno P. Kinoshita for inspiration)
-   [JENKINS-33963](https://issues.jenkins-ci.org/browse/JENKINS-33963):
    Branch filter does not save the value (part of the work Joe Hansche)

2\. Refactor/fix/feature

-   [JENKINS-33361](https://issues.jenkins-ci.org/browse/JENKINS-33361):
    Long release number in branch, tag or revision name
-   [JENKINS-33084](https://issues.jenkins-ci.org/browse/JENKINS-33084):
    Git Parameter plugin should prune stale remote
    branches (@darashenka)
-   [JENKINS-31939](https://issues.jenkins-ci.org/browse/JENKINS-31939):
    The top value is better to be chosed by default of to have such
    option
-   [JENKINS-33831](https://issues.jenkins-ci.org/browse/JENKINS-33831):
    Revision Parameter Type: ArrayIndexOutOfBoundsException
-   [JENKINS-33912](https://issues.jenkins-ci.org/browse/JENKINS-33912):
    Refactoring Test Case

### 01/16/2015 Version 0.4.0

-   Possibility to select branch, tag or branch (Alban Dericbourg)
-   Keep complex logics in jelly as less as possible (Yestin Sun)
-   support folders (Nicolas De Loof)
-   Minimized pom.xml as suggested by Jesse Glick
-   Removed LICENSE.txt as suggested by Jesse Glick

### 05/14/14 Version 0.3.2

User visible changes are:

-   Updated help texts for configuration and when selecting your
    tag/revision
-   Runs a fetch each time the user enters the "Build with parameter".
-   Run clone when fetch fails on workspace empty (Gabor Liptak)
-   Merging SortMode from graeme-hill
-   With an empty workspace the tags are calculated after we made a
    checkout. This may take a long time.

Changes relevant to developer

-   Added MIT-LICENSE.txt to use the same license as Jenkins-CI.
-   Added Contributors.textile
-   Display month not minutes in date. Add HH.mm. Display only first 8
    chars of SHA1 (Niklaus Giger)
-   Add backup pluginRepository (Gabor Liptak)
-   Use GitTool to query configured location of the git executable
    (gliptak)
-   Upgrade to git 2.2.0. (christ66)
-   Build against latest stable Jenkins-CI version 1.554.1
-   New co-maintainer/developer Niklaus Giger (id ngiger)
-   Version 0.3 and 0.3.1 never made it to the distribution, because of
    problems with the release mechanism.

### 02/21/12 Version 0.2

-   Corrected error - plugin wasn't showing anything after change of
    main Git Plugin
-   Corrected major dis-functionality - plugin now it showing revisions
    only from correct job/project.
-   Adding support for choosing branch from which revisions/tags are
    returned

### 11/01/11 Version 0.1

-   Initial Release

  

  

Adds ability to choose branches, tags or revisions from git repositories
configured in project.
