Generate the trending reports for cucumber project. The reports include
the failing rate, duration, number of test scenarios, top stable and
unstable test scenarios

# Purpose

Generate the trending reports for cucumber project.

# How to use

Your cucumber project needs to generate json report as the output. For
example your json report will be generated as cucumber.json under
reports folder.

1.  Add Cucumber Trend Report as one post build step
2.  Input all the configurations. Example Report Folder = reports, Json
    Report File = cucumber.json
3.  The unstable threshold can be any between 0% and 100%. If you don't
    input then it is 40%  

# Sample screenshots

![](docs/images/config.tiff)

![](docs/images/sample.png)
