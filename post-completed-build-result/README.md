# Post Completed Build Result Plugin

Once activated and set up, the Post Completed Build Result Plugin makes
Jenkins post to a given URL each build result url once completed.

For example, a job named sampleJob would post the body
url=<http://localhost:8080/jenkins/job/sampleJob/13/> to the URL
configured.

This plugin comes handy when you want an external tool to be notified a
build was completed (this external tool will then be able to get more
detail querying the build result url).

## How to build and test :

Simply clone this repo and run mvn clean install hpi:run

## How does that work ?

Install the plugin and go to the configuration page
(<http://localhost:8080/jenkins/configure> for example)

From there, configure the URL you want each build to post to :
![](https://raw.github.com/Terracotta-OSS/post-completed-build-result-plugin/gh-pages/screenshots/configure-postcompleted.png)

Now, each time a build is completed, Jenkins will post the build result
URL to the configured URL :

    INFO: myJob #5 main build action completed: SUCCESS
    Nov 07, 2013 4:12:42 PM org.terracotta.jenkins.plugins.postcompleted.PostCompletedRunListener onCompleted
    INFO: myJob#5 is posting its result url : http://localhost:8080/jenkins/job/plof/5/ to : http://localhost:8080/ping

## Authors :

This plugin was developed by Terracotta, by

-   [Anthony Dahanne](https://github.com/anthonydahanne/)

## License

Apache 2 licensed (see LICENSE.txt)
