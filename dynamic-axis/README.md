This plugin allows you to define a matrix build axis that is dynamically
populated from an environment variable:

  
![](docs/images/DynamicAxisScreenshot.PNG)

# Description

Environment variables can be contributed to a build from a number of
places, including:

-   Build parameters
-   Build node configuration
-   Jenkins configuration
-   System environment

When specifying a variable for an axis only the last category of
variables can be validated. This is because Jenkins contributes the
other types of variables only at actual build time, thus they are not
available at configuration time.

Configuring an axis is otherwise the same as for the User-defined axis
option: specify an axis name to be used in your build along with the
name of the environment variable to dynamically retrieve the axis values
from. The rules for the value of this variable are the same: one or more
values separated by a space.

# Examples

Some portable environment variable names include:

-   AXES
-   PARAM\_LIST
-   4\_BUILD\_CONFIG

The following are all valid values for the contents of the environment
variable selected for an axis:

-   dev tst sit
-   jdk6 jdk7
-   deploy\_srv1 deploy\_srv2 deploy\_srv3

# Acknowledgements

Many thanks to Emanuele Zattin for leading the way with the Groovy
Axis plugin. And of course to Koshuke, for continuing to expand and
improve this excellent platform.

# Change Log

#### Version 1.0.3 (7 December 2014)

-   ![(error)](docs/images/error.svg)
    Properly tokenize axis values when the input variable contains
    quotes
    ([JENKINS-25660](https://issues.jenkins-ci.org/browse/JENKINS-25660))
-   ![(error)](docs/images/error.svg)
    Prevent ConcurrentModificationException on massive matrix runs
    ([JENKINS-22652](https://issues.jenkins-ci.org/browse/JENKINS-22652))

#### Version 1.0.2 (29 October 2012)

-   Added fix for synchronization issues, contributed by Nathan
    Grunzweig

#### Version 1.0.1 (13 November 2012)

-   Initial release
