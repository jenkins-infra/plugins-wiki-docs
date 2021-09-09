| Plugin Information                                                                                   |
|------------------------------------------------------------------------------------------------------|
| View Nerrvana [on the plugin site](https://plugins.jenkins.io/nerrvana-plugin) for more information. |

The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [XXE
    vulnerability](https://www.jenkins.io/security/advisory/2020-10-08/#SECURITY-2097)

The Nerrvana Jenkins plugin allows you to automate functional and cross
browser Selenium testing of your web applications in [Nerrvana
cloud](http://www.nerrvana.com/).

### Nerrvana plugin implements the following functionality

-   Creates a configuration file in the Nerrvana user interface;
-   Synchronizes tests extracted from the version control system with
    tests stored in the corresponding [Nerrvana
    space](https://nerrvana.com/docs/get-started);
-   Adds Jenkins build number to the name of the generated test run;
-   Allows you to dynamically add information to the description of the
    created test run (for example, a committer name, revision number, or
    commit message);
-   If you use [Nerrvana
    messages](https://nerrvana.com/docs/using-messages), the plug-in can
    analyse test results, set the status of a build, depending on the
    level of errors found and show Nerrvana error report in Jenkins.

Check out our [documentation](https://nerrvana.com/docs/jenkins-plugin)
for details.

### Requirements

The plugin uses [LFTP](http://en.wikipedia.org/wiki/Lftp) to synchronize
tests between Jenkins and Nerrvana. LFTP must be installed (*yum*
*install* *lftp*) on the same server running Jenkins.

#### Tip

We recommend that you run your tests from Nerrvana's UI and verify that
Nerrvana can run them before proceeding. The process for running tests
manually is described on the [Get
Started](https://nerrvana.com/docs/get-started) page.

### Documentation

Detailed plugin documentation is available
[here](https://nerrvana.com/docs/jenkins-plugin)
