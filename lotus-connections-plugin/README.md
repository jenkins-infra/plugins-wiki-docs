  

This plugin posts build results to Lotus Connections.

  

Each Lotus Connection update will contain the job name, build number,
The number of tests executed, passed, failed and the pass rate (%).

For example

TT\_BVT\_WMB (96) : Tests Executed = 600 Tests Passed = 126 Tests Failed
= 474 Pass Rate = 21.00 %

The core workings came from a sample on this site [Updating your Lotus
Connections microblog
programmatically](http://www.lbenitez.com/2009/11/updating-your-lotus-connections.html)
by Luis Benitez.

## Version 1.24 (Jan 10, 2014)

-   Added the feature to post to a Lotus Connections Community Forum.
-   Reverted the configuration to set the properties in a per-project
    manner, rather than global .

## Version 1.23 (Feb 19, 2013)

-   Updated the status message to include the build url.
-   Altered the configuration to set the properties in a global manner,
    rather than per-project.

## Version 1.22 (Feb 12, 2013)

-   Updated the dependencies to latest release of Adbera.

## Version 1.18 (Nov 7, 2012)

-   Altered the default message for builds with no test results.

## Version 1.17 (Nov 6, 2012)

-   Fixed up the release process.

## Version 1.14 (Nov 5, 2012)

-   Initial release
