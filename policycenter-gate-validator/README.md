# Summary

The [Parasoft](http://www.parasoft.com/) Policy Center Gate Validator
Plugin for Jenkins lets you add a build step to check a Police Center
policy gate. This enables you to automatically stop a deployment if a
policy gate is not successfully passed.

# Prerequisites

-   Parasoft Development Testing Platform 5.3.1 or higher
-   Parasoft PolicyCenter 3.2.1 or higher

# Configuration

Each Jenkins server communicates with one Policy Center. Multiple
Jenkins servers can communicate with the same Policy Center.

1.  Go to Manage Jenkins.
2.  Go to Configure System.
3.  Scroll down to the Parasoft Policy Center area and enter your Policy
    Center URL.

## Adding a Check Policy Gate Build Step

You can add any number of "Check Policy" gates as build steps.

1.  Open the job you want to configure.
2.  Go to Configure.
3.  Under Add Build Step, select Check Policy Gate. Two new fields
    (Project and Gate) will display.
4.  Under Project, select the project that the policy gate should apply
    to.
5.  Under Gate, select the gate that you want applied.
6.  Under Post-build Actions, review the deployment trigger criteria and
    update as needed, depending on whether you want the deployment to
    run only when the gate is stable (i.e., if it shows Policy Center
    "success" status), or if you will permit deployment if the gate is
    unstable or if the gate fails.
