![](docs/images/logo.png)

## About

A SmartBear plugin for running LoadComplete tests from Jenkins. The
plugin can be used for Freestyle projects and Pipeline jobs. The plugin
provides a build step that lets you include LoadComplete tests in your
Jenkins builds, and allows you to view test results from within Jenkins.

-   [Plugin
    Information](http://localhost:8085/display/JENKINS/LoadComplete+Support+Plugin#LoadCompleteSupportPlugin-info)
-   [Usage](http://localhost:8085/display/JENKINS/LoadComplete+Support+Plugin#LoadCompleteSupportPlugin-usage)
-   [More
    Information](http://localhost:8085/display/JENKINS/LoadComplete+Support+Plugin#LoadCompleteSupportPlugin-moreinfo)
-   [Technical
    Support](http://localhost:8085/display/JENKINS/LoadComplete+Support+Plugin#LoadCompleteSupportPlugin-support)
-   [Version
    History](http://localhost:8085/display/JENKINS/LoadComplete+Support+Plugin#LoadCompleteSupportPlugin-versionhistory)

## Usage

1.  Prepare a test computer (node) for automated testing. Make sure the
    node meets the following requirements to run tests successfully:  
    -   LoadComplete is installed on it and there is an available
        license.
    -   The installed LoadComplete version must be 4.95 or later.
    -   The LC project files must be copied to your job workspace in any
        convenient way. To copy the files, you can, for example, use the
        Folder Copy operation of the File Operations plugin.(
        <https://wiki.jenkins.io/display/JENKINS/File+Operations+Plugin>)  
         
2.  Add the LoadComplete Test step to your Jenkins build.  
     
3.  Customize the step’s properties: specify the LoadComplete project
    file and select the tests to be run.  
     
4.  Run the build as you normally would.  
     
5.  After the build run is over, you will see the LoadComplete Test
    Results link on the build’s page.  
    Click the link to view the test results. In the subsequent window,
    click the link in the Test column to explore detailed test results.

  
**More Information**

You can find complete information on using the plugin in LoadComplete
documentation (the Integration With Jenkins topic).

  
**Technical Support**

If you have any questions or need assistance with setting up the plugin
and configuring step properties, please contact the SmartBear Support
Team (<https://support.smartbear.com/message/?prod=LoadComplete>).

  
**Version History**

##### Version 1.0

-   *Initial release*.
