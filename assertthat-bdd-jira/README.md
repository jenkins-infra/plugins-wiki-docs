This plugin provides seamless integration with [AssertThat - BDD Test
Automation in
Jira](https://marketplace.atlassian.com/apps/1219033/assertthat-bdd-test-automation-in-jira?hosting=cloud&tab=overview)

# AssertThat BDD Jira Plugin

  

Main features are:

-   Download feature files before test run
-   Filter features to download based on mode (automated/manual/both),
    or/and JQL
-   Upload cucumber or karate json after the run to AsserTthat BDD Jira
    plugin

## Create credentials

![](https://raw.githubusercontent.com/jenkinsci/assertthat-bdd-jira-plugin/master/docs/credentials.PNG)

## Usage in Job

**Download feature files:**

![](https://raw.githubusercontent.com/jenkinsci/assertthat-bdd-jira-plugin/master/docs/download-features.PNG)

**Upload reports:**

![](https://raw.githubusercontent.com/jenkinsci/assertthat-bdd-jira-plugin/master/docs/upload-report.PNG)

## Usage in pipeline Job

    pipeline {
        agent any 
        stages {
            stage('Features') { 
                steps {
                    //Download feature files
                    assertthatBddFeatures(credentialsId: '10005', jql: 'project=DEMO', mode: 'automated', outputFolder: 'features', projectId: '10005')
                }
            }
            stage('Run tests') { 
                steps {
                    //Run tests here
                }
            }

        }
        post{
            always{
                    //Upload test results
                    assertthatBddReport(credentialsId: '10005', jsonReportFolder: 'report', jsonReportIncludePattern: '**/*.json', projectId: '10005', runName: 'Smoke test run', type: 'karate')
            }
        }

## For more information on the Jira plugin features visit [wiki](https://assertthat.atlassian.net/wiki/spaces/ABTM/overview). And try on [Marketplace](https://marketplace.atlassian.com/apps/1219033/assertthat-bdd-test-automation-in-jira?hosting=cloud&tab=overview)

  
