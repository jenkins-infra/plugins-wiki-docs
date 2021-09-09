Allows users to trigger execution on cloud of already recorded
automation tests via [Test-Odyssey](https://test-odyssey.com/).

# Summary

Test-Odyssey is a script-less cloud based functional test automation
tool. Tests can be automated on a rich web-ui in the context of the
application under test (AUT). These tests can then be executed on cloud
on demand on a machine configured for the selected OS-Browser.

The plugin is used to trigger execution of automation tests in
Test-Odyssey from Jenkins.

# Configuration

### Global

-   Go to Manage Jenkins in Jenkins dashboard
-   Click on Configure System and scroll to Test-Odyssey section
-   Provide the user-credentials in the Test-Odyssey section as provided
    by the Test-Odyssey tool
-   Provide username, password and organization code as provided by the
    Test-Odyssey tool
-   Saving the changes verifies user credentials and fetches all the
    projects which will be used in job configuration

### Jobs

-   Create a job (a freestyle project)
-   Add a build step and choose Test-Odyssey
-   Provide all the execution details like Execution Name, Project Name,
    Operating System, Browser, AUT Base Url and Pass Percentage
-   Save and you have successfully configure the Test-Odyssey plugin in
    jenkins
