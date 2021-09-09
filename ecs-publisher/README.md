# TrustSource Plugin 4 Jenkins

Jenkins plugin to transfer dependency information to TrustSource service
(OpenSource Compliance & Vulnerabilities). It does not only allow
transferring the dependencies and automated vulnerability assessment but
also to warn or break builds depending on legal status. Find more about
trustSource at [https://app.trustsource.io](https://app.trustsource.io/)

![](https://raw.githubusercontent.com/jenkinsci/ecs-publisher-plugin/master/doc/img/jenkins-ecs-analysis.png){height="250"}  

## Requirements

-   Chart.js \>= 2.6.0  

-   org.apache.httpcomponents.httpclient \>=4.5.3  

-   org.apache.httpcomponents.fluent-hc \>=4.5.3  

## Supported plugins

-   [eacg-gmbh/ecs-composer](https://github.com/eacg-gmbh/ecs-composer) version
    1.0.1 +  
-   [ecs\_bundler](https://github.com/eacg-gmbh/ecs-bundler) version
    1.0.1 +
-   [ecs-node-client](https://github.com/eacg-gmbh/ecs-node-client)
    version 0.2.0+
-   [ecs-maven-plugin](https://github.com/eacg-gmbh/ecs-mvn-plugin)
    version 0.1.9+
-   [ecs-gradle-plugin](https://github.com/eacg-gmbh/ecs-gradle-plugin)
    version 0.2.0+ 

## Installation

There are two ways to install that plugin.  
  
**1) installation through jenkins**  
  
To do that go to plugin manager page on jenkins and click on "available"
tab(**/pluginManager/available**).  
Then find plugin by name "ecs-publisher", toggle checkbox and click
install.  
  
**2) install from source**  
Run the following commands:

  

    # Clone source code
    git clone git@github.com:jenkinsci/ecs-publisher-plugin
    # Generate *.hpi package
    mvn package
    # package will be located at target/ecspublisher.hpi

  

Then go to plugin manager page on jenkins and click on "advanced"
tab(**/pluginManager/advanced**).  
  
Then find upload plugin block and choose \*.hpi package and click
upload.  
![](https://raw.githubusercontent.com/jenkinsci/ecs-publisher-plugin/master/doc/img/jenkins-upload-plugin.png){width="500"}

## Usage

-   First you need to setup global configuration for this plugin.  
    **You can skip that step** if you want to save configuration under
    step definition.  
    Go to "Manage Jenkins" and click "Configure System"
    configure(/configure).  
    ![](https://raw.githubusercontent.com/jenkinsci/ecs-publisher-plugin/master/doc/img/jenkins-global-config.png){width="500"}  
    Then find block called "TrueSource publisher", change configuration
    and click "save"  
      
-   Secondly you need go to project configuration
    -   Add post-build action called "ecspublisher"
    -   Type project name
    -   ![](https://raw.githubusercontent.com/jenkinsci/ecs-publisher-plugin/master/doc/img/jenkins-post-build-action-closed.png){width="500"}
    -   If your project has different structure you can specify paths to
        plugins
    -   **You can override global configuration** just toggle checkboxes
    -   ![](https://raw.githubusercontent.com/jenkinsci/ecs-publisher-plugin/master/doc/img/jenkins-post-build-action-open.png){width="500"}
    -   Click "save"

  
After you add post-build action it will automatically create two pages
ECS analysis for build and project.  
![](https://raw.githubusercontent.com/jenkinsci/ecs-publisher-plugin/master/doc/img/jenkins-ecs-analysis.png){width="500"}

## Development

This plugin can be built and started with maven and Jenkins hpi
plugin:  
Just run command:  

    ./run

Jenkins will be available on port
\[8089\](http://localhost:8089/jenkins)

## Deploy

  

    mvn release:prepare release:perform

  

  
