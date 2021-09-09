## Description

This plugin allows :

-   To launch a test campaign on Cerberus
-   To wait Cerberus executes it
-   To display a report on console. Fail if a test is ko, else sucess.

## [What is cerberus ?](https://github.com/cerberustesting/cerberus-jenkins-plugin#what-is-cerberus-)

Cerberus is an open source, user friendly, automated testing sofware.
See [website](https://www.cerberus-testing.org/) for more information

## [Get started](https://github.com/cerberustesting/cerberus-jenkins-plugin#get-started)

-   Install plugin on Jenkins
-   Set parameters on "Manage Jenkins" screen
    : [![global\_parameter](https://github.com/cerberustesting/cerberus-jenkins-plugin/raw/master/docs/global_parameter.png)](https://github.com/cerberustesting/cerberus-jenkins-plugin/blob/master/docs/global_parameter.png)

### [On Jenkins](https://github.com/cerberustesting/cerberus-jenkins-plugin#on-jenkins)

-   To add a campaign Cerberus execution on a job, add a new build step
    "Execute Cerberus Campaign", and set parameters
    : [![build\_parameter](https://github.com/cerberustesting/cerberus-jenkins-plugin/raw/master/docs/build_parameter.png)](https://github.com/cerberustesting/cerberus-jenkins-plugin/blob/master/docs/build_parameter.png)

### [On Jenkinsfile](https://github.com/cerberustesting/cerberus-jenkins-plugin#on-jenkinsfile)

-   Just call `executeCerberusCampaign` function with parameters :
    -   `campaignName` : Campaign name to execute
    -   `platform` : Platform to execute (define into Cerberus)
    -   `environment` : Environment to execute (define into Cerberus)
    -   `browser` : Browser executed by Cerberus to test application.
        If `browser` is empty, use global settings of Cerberus plugin.
    -   `browserVersion` : Browser version executed by Cerberus to test
        application. If `browserVersion` is empty, use global settings
        of Cerberus plugin.

&nbsp;

    pipeline {    
       ...
        stages {
            ...
            stage('cerberus Test') {
                steps {                 
                    executeCerberusCampaign campaignName : "Test_campaign" , platform : "", environment : "QA", browser : "firefox", browserVersion : "47"
                }
            }       
            ...
        }
    }
