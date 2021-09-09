### 1.2.4 - 1 April 2019

-   [\#18](https://github.com/jenkinsci/blueocean-autofavorite-plugin/pull/18) -
    Internal changes to support java11

### 1.2.3 - 29 February 2018

-   [JENKINS-49830](https://issues.jenkins-ci.org/browse/JENKINS-49830)- 
    Pom scm update to fix issue where pulling artifacts using ssh was
    failing

### 1.2.2 - 28 February 2018

-   [PR-14](https://github.com/jenkinsci/blueocean-autofavorite-plugin/pull/14)
    -  Pom scm update to fix issue where pulling artifacts using ssh was
    failing

### 1.2.1 – 30 November 2017

-   [JENKINS-47214](https://issues.jenkins-ci.org/browse/JENKINS-47214) –
    Administrator can opt-out of autofavorite behaviour using the system
    property *-DBLUEOCEAN\_FEATURE\_AUTOFAVORITE\_ENABLED=false*

### 1.2.0 – 29 November 2017

-   [JENKINS-47214](https://issues.jenkins-ci.org/browse/JENKINS-47214) –
    User can opt-out of autofavorite behaviour from their user profile
    settings

### 1.1 - 13th November 2017 

-   [PR\#11](https://github.com/jenkinsci/blueocean-autofavorite-plugin/pull/11)
    Add missing test plugins to fix PCT errors  
      

### 1.0 - 5th June 2017 

-   [ JENKINS-43400](https://issues.jenkins.io/browse/JENKINS-43400) -
    Getting issue details... STATUS

### 0.5 - 19th April 2016 

-   [ JENKINS-43400](https://issues.jenkins.io/browse/JENKINS-43400) -
    Getting issue details... STATUS
    -   Bail out of auto-favorite early if workspace does not exist or
        is a file

### 0.5 - 31st January 2016 

-   [ JENKINS-41576](https://issues.jenkins.io/browse/JENKINS-41576) -
    Getting issue details... STATUS

### 0.5 - 17th November 2016 

-   Fixes bug where listener runs twice when docker workflow is used and
    fails the pipeline
-   More defensive code so that Pipeline will not fail if autofavorite
    fails 

### 0.4 - 16th November 2016 

-   Improves on catching MissingObjectException when the repository is
    inconsistent 

### 0.3 - 14th November 2016 

-   Fixes problem where MissingObjectException is thrown when the
    repository is inconsistent and fails the pipeline 

### 0.2 - 10th November 2016 

-   No changes (flushing out a update center issue) 

### 0.1 - 6th November 2016 

-   Initial commit 
