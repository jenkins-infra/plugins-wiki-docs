![](docs/images/Pangolin_banner_transparent_blue_v2.png){width="800"}

Agiletestware Pangolin TestRail Connector plugin integrates Jenkins with
TestRail by automatically publishing test results from Jenkins to
TestRail using Pangolin server
(<http://www.agiletestware.com/pangolin>/).

The plugin allows users to
integrate [TestRail](http://www.gurock.com/testrail/) into their CI
workflow without writing a single line of code.

## Prerequisites

-   [Pangolin
    Server](https://agiletestware.com/docs/pangolin-docs/en/latest/setup/server-installation/)
    must be installed and accessible from Jenkins host

## Jenkins plugin Installation

Installation of Jenkins plugin can be easily done from Jenkins Plugin
Manager:

![](docs/images/install-1.png){height="400"}

Please restart Jenkins Server after the installation of plugin

## Pangolin Global Configuration

Pangolin global configuration is accessible on "Mange Jenkins" -
"Configure System" screen:

![](docs/images/global-settings-1.png){height="400"}

| Field Name        | Description                                                                                             |
|-------------------|---------------------------------------------------------------------------------------------------------|
| Pangolin URL      | URL for Pangolin server. Example: [http://some-server:8888](http://some-server:8888/)                   |
| TestRail URL      | URL for your TestRail instance. Example: [https://testrail:8080](https://testrail:8080/)                |
| TestRail User     | Name of user in TestRail                                                                                |
| TestRail Password | Password for TestRail user                                                                              |
| Upload Timeout    | The number of minutes to wait for the Pangolin server to process the request. 0 means wait indefinitely |

  
When all fields are set, please click on "Save Configuration" button -
Pangolin will check availability of entered URLs and encrypt your
password.

 

## Uploading test framework reports into TestRail

### "Pangolin: Upload test results into TestRail" post-build action configuration

To upload test results into TestRail, a new "Pangolin: Upload test
results into TestRail" post-build action has to be added:

![](docs/images/config-1.png)

| Field Name (pipeline property)                         | Required | Description                                                                                                                                                                                                 |
|--------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Project (testRailProject)                              | Yes      | The name of project in TestRail to which results should be exported                                                                                                                                         |
| TestRail User (testRailUserName)                       | No       | If specified, overrides TestRail user name defined in Global Configuration                                                                                                                                  |
| TestRail Password (testRailPassword)                   | No       | If specified, overrides TestRail user password defined in Global Configuration                                                                                                                              |
| Test Path (testPath)                                   | Yes      | Path to where Pangolin should test definitions, must contain suite name in the beginning (for single-suite project, suite name is always 'Master'), e.g. Master\\Section1\\Section2                         |
| Format (format)                                        | Yes      | Format of test results generated during the build. Available values: junit, nunit, testng, trx, cucumber, robot                                                                                             |
| Results File Pattern (resultPattern)                   | Yes      | Provide path to the report file(s) generated during the build. This is a comma separated list of test result directories. You can also use Ant style patterns such as \*\*/surefire-reports/\*.xml          |
| Test Run (testRun)                                     | No       | Name of test run in TestRail to which test results will be added                                                                                                                                            |
| Test Plan (testPlan)                                   | No       | Name of test plan in TestRail to which test results will be added                                                                                                                                           |
| Milestone Path (milestonePath)                         | No       | Path to a milestone in TestRail to which test run/plan will be added. E.g. Milestone1\\Milestone2                                                                                                           |
| Case Fields (customProperties)                         | No       | Values for custom case fields in TestRail. The format is \[TestRail field system name\]=\[value 1\], \[TestRail field system name\]=\[value 2\]... E.g.: custom\_user\_field1=foo, custom\_user\_field2=bar |
| Fail build if upload unsuccessful (failIfUploadFailed) | N/A      | If checked, the build will be marked as failed if for any reason the plugin was not able to upload the results. This could be due to Pangolin server issues, TestRail server issues, network issues, etc.   |

Several configuration can be specified

To add more than one upload configuration, just click on "Add More"
button.

### "Pangolin: Upload test results into TestRail" pipeline configuration

Here is an example of pipeline configuration for exporting test results
to TestRail:

**Pipeline configuration**

``` syntaxhighlighter-pre
pangolinTestRail([
     testRailProject: 'project',
     testRailUserName: 'user',
     testRailPassword: 'encrypted password',
        configs:[[
         testPath: 'Master\\Section1\\Section2',
         format: 'JUNIT',
         resultPattern:'**/surefire-reports/*.xml',
         testRun:'test run',
         testPlan:'test plan',
         milestonePath:'milestonePath',
         customProperties:'custom_required_field=foo',
         failIfUploadFailed: true
         ]],
       ])
```

TestRail password must be encrypted

When pipeline script is used, value for testRailPassword must be
encrypted. Password can be encrypted by navigating to Pangolin Server
GUI page ([http://pangolinUrl](http://pangolinurl/)) and clicking
to Password Encryption link.

## Execution

Once the job is configured, simply run the job. Here is Jenkins job
output example:

![](docs/images/upload-results-log-1.png){height="400"}

  

Results in TestRail:

Test Cases:

![](docs/images/upload-results-1.png)

  

Test Plan and Test Run:

![](docs/images/upload-results-2.png)

![](docs/images/upload-results-3.png){width="1100"}

  

Created Milestones hierarchy:

![](docs/images/upload-results-4.png)

  

## Changelog

### Version 2.3 (Released Nov, 2018)

-   Add support for [Cucumber](https://cucumber.io/) JSON reports
-   Add support for [Robot Framework](http://robotframework.org/) xUnit
    reports
-   Upload NUnit report attachments
-   Publish TestRail Run link to build page

### Version 2.2 (Released July, 2018)

-   Security fix for CSRF vulnerability and missing permission checks
    ([SECURITY-995](https://jenkins.io/security/advisory/2018-07-30/#SECURITY-995))

### Version 2.1 (Released May, 2018)

-   The first public release
