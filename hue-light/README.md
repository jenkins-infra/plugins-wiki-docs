This plugin shows the state of your builds using the awesome [Philips
hue lights](https://www.meethue.com/).The following states are
implemented:

-   building =\> blue
-   success =\> green
-   fatal errors =\> red
-   no fatal errors ("unstable") =\> yellow

# Configuration 

1.  Create a new user one the hue bridge
    (<http://developers.meethue.com/gettingstarted.html>).
2.  Open Global Setting and set the *IP address* and the *authorized
    username* of the hue bridge.
3.  Create a new job or modify an existing job, add the post-build
    action **Colorize Hue-Light** and set the *id of the light* you want
    to control.

# Changelog

## Version 1.2.0 - 2014-08-24

-   Change the color of multiple synchronized lights at once (thanks
    to [nakker](https://github.com/nakker) for this feature)
-   fixed that customized colors in build settings are not shown
    properly
-   explicitly allowed the use of a hostname in addition to the IP
    address for the hue bridge

## Version 1.1.0 - 2014-05-29

Thanks to [cambler](https://github.com/cambler) for these changes!

**Please re-save you global and jobs configuration!**

-   color of all build states can now be configured globally and per job
-   prebuild trigger pulses the color for 30s to indicate that a build
    is running
-   fixed the deprecated prebuild interface that caused issues

## Version 1.0.1 - 2014-02-06

-   fixed issue of not saturated bulbs

## Version 1.0.0 - 2013-10-21 

-   Initial release
