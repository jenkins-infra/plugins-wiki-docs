Build Monitor Plugin provides a highly visible view of the status of
selected Jenkins jobs.

It easily accommodates different computer screen sizes and is ideal as
an Extreme Feedback Device to be displayed on a screen on your office
wall.  
(Inspired by the no longer maintained RadiatorView plugin).

[![](https://smartcode-opensource.ci.cloudbees.com/job/build-monitor/badge/icon)](https://smartcode-opensource.ci.cloudbees.com/job/build-monitor/)

Getting the latest version

If the plugin doesn't appear in your Jenkins Update Centre, visit Manage
Plugins / Advanced and click the "Check now" button to make Jenkins
retrieve the latest update-center.json data.

## Features

I'd like to keep the plugin as simple as possible, yet useful and
effective.

Current functionality of the Build Monitor plugin:

1.  Displays the status and progress of selected jobs, the view is
    updated automatically every couple of seconds using AJAX. No "Enable
    Auto Refresh" needed.
2.  Displays the names of people who might be responsible for "breaking
    the build".
3.  Supports the [Claim
    plugin](http://localhost:8085/display/JENKINS/Claim+plugin), so that
    you can see who's fixing a broken build
4.  Supports [View Job
    Filters](http://localhost:8085/display/JENKINS/View+Job+Filters), so
    that you can easily create Build Monitors for "slow builds", "only
    failing", etc.
5.  Supports [Build Failure
    Analyzer](http://localhost:8085/display/JENKINS/Build+Failure+Analyzer),
    so that you know not only *who*, but also *what* broke the build;
    more [here](http://bit.ly/JBMBuild102)
6.  Supports [CloudBees Folders
    Plugin](http://localhost:8085/display/JENKINS/CloudBees+Folders+Plugin),
    so that you can have project- and team-specific nested Build
    Monitors; more [here](http://bit.ly/JBMBuild117)
7.  The number of columns and size of the font used is easily
    customisable, making it trivial to accommodate screens of different
    sizes.
8.  UI configuration is stored in a cookie, making it possible to
    display different number of columns and using different font size on
    each of the screens at your office.
9.  Can work in a colour-blind-friendly mode

## Do you find Build Monitor useful? Support its development ![(smile)](docs/images/smile.svg)

Like Build Monitor it? Give it a [star on
github](https://github.com/jan-molak/jenkins-build-monitor-plugin)! ★

Have an idea for a new awesome feature? [Start
here](http://bit.ly/JBMDevGuide)

Have feedback? Let me know on twitter:
[@JanMolak](https://twitter.com/JanMolak)

You can also [sponsor a feature on
bountysource](https://www.bountysource.com/teams/jenkins-build-monitor-plugin/issues)!

[![](https://api.flattr.com/button/button-static-50x60.png)](https://flattr.com/submit/auto?user_id=JanMolak&url=https%3A%2F%2Fgithub.com%2Fjan-molak%2Fjenkins-build-monitor-plugin)

## Setting up

To create a new Build Monitor View, click on the "New View" tab, select
"Build Monitor View" and select jobs you wish to display on the monitor.

![](docs/images/Setting-up.png)

You can have as many Build Monitor Views as you wish - the most popular
approach is to have one per team or one per project.

## A picture is worth a thousand words

![](docs/images/0_A_place_to_start.png)
![](docs/images/1_Adding_jobs.png)
![](docs/images/2_Three_columns_view.png)
![](docs/images/3_Two_columns_view_with_claim_and_build_failure_analyzer_plugins.png)
![](docs/images/4_Colour_blind_mode.png)

**Please note** that you can change the number of columns and the size
of the font using the gear icon in the top right corner.

## TDD

If you'd like to understand more about the logic behind the Build
Monitor Plugin, feel free to have a look at the [tests that drove the
design](https://bit.ly/JBMSerenity).

## Found an issue?

Please report it [on
Github](https://github.com/jan-molak/jenkins-build-monitor-plugin/issues).  
If you also know how to fix it and have a spare moment - I always
welcome pull requests
![(smile)](docs/images/smile.svg)
Check out the [mini development guide](http://bit.ly/JBMDevGuide) before
you start, as it might be helpful.

## Change log

Want to know about new releases early? [Follow me on
twitter](https://twitter.com/JanMolak)

You can find the [high-level overview of all
releases](http://bit.ly/JBMReleases) on Github, and a detailed change
log below:

-   **1.11+build.201701152243**
    [Changelog](http://bit.ly/JBMDiffB20161104-B20170115) [Release
    notes](http://bit.ly/JBMBuild20170115)
-   **1.10+build.201611041949**
    [Changelog](http://bit.ly/JBMDiffB20160803-B20161104) [Release
    notes](http://bit.ly/JBMBuild20161104)
-   **1.10+build.201608030223**
    [Changelog](http://bit.ly/JBMDiffB20160613-B20160803) [Release
    notes](http://bit.ly/JBMBuild20160803)
-   **1.9+build.201606131328**
    [Changelog](http://bit.ly/JBMDiffB20160605-B20160613) [Release
    notes](http://bit.ly/JBMBuild20160613)
-   \*1.9+build.2016060523​39\*
    [Changelog](http://bit.ly/JBMDiffB20160502-B20160605) [Release
    notes](http://bit.ly/JBMBuild20160605)
-   **1.9+build.201605021413**
    [Changelog](http://bit.ly/JBMDiffB20160111-B20160502) [Release
    notes](http://bit.ly/JBMBuild20160502)
-   **1.8+build.201601112328**
    [Changelog](http://bit.ly/JBMDiffB20160105-B20160111) [Release
    notes](http://bit.ly/JBMBuild20160111)
-   \*1.8+build.2016010520​13\*
    [Changelog](http://bit.ly/JBMDiffB172-B20160105) [Release
    notes](http://bit.ly/JBMBuild20160105)
-   **1.7+build.172** (Nov 29, 2015)
    [Changelog](http://bit.ly/JBMDiffB164-B172) [Release
    notes](http://bit.ly/JBMBuild172)
-   **1.6+build.164** (Nov 08, 2015) [Release
    notes](http://bit.ly/JBMBuild164)
-   **1.6+build.163** (Nov 07, 2015) [Release
    notes](http://bit.ly/JBMBuild163)
-   **1.6+build.162** (Nov 05, 2015)
    [Changelog](http://bit.ly/JBMDiffB159-B162) [Release
    notes](http://bit.ly/JBMBuild162)
-   **1.6+build.142** (Apr 05, 2015)
    [Changelog](http://bit.ly/JBMDiffB140-B142) [Release
    notes](http://bit.ly/JBMBuild142)
-   **1.6+build.140** (Feb 09, 2015)
    [Changelog](http://bit.ly/JBMDiffB138-B140) [Release
    notes](http://bit.ly/JBMBuild140)
-   **1.6+build.138** (Jan 24, 2015)
    [Changelog](http://bit.ly/JBMDiffB135-B138) [Release
    notes](http://bit.ly/JBMBuild138)
-   **1.6+build.135** (Jan 6, 2015)
    [Changelog](http://bit.ly/JBMDiffB123-B135) [Release
    notes](http://bit.ly/JBMBuild135)
-   **1.6+build.132** (Oct 12, 2014)
    [Changelog](http://bit.ly/JBMDiffB123-B132) [Release
    notes](http://bit.ly/JBMBuild132)
-   **1.5+build.123** (Aug 19, 2014)
    [Changelog](http://bit.ly/JBMDiffB120-B123) [Release
    notes](http://bit.ly/JBMBuild123)
-   **1.5+build.120** (Aug 14, 2014)
    [Changelog](http://bit.ly/JBMDiffB119-B120) [Release
    notes](http://bit.ly/JBMBuild120)
-   **1.5+build.119** (Jul 27, 2014)
    [Changelog](http://bit.ly/JBMDiffB118-B119) [Release
    notes](http://bit.ly/JBMBuild119)
-   **1.5+build.118** (Jul 14, 2014)
    [Changelog](http://bit.ly/JBMDiffB117-B118) [Release
    notes](http://bit.ly/JBMBuild118)
-   **1.5+build.117** (Jun 29, 2014)
    [Changelog](http://bit.ly/JBMDiffB102-B117) [Release
    notes](http://bit.ly/JBMBuild117)
-   **1.4+build.102** (Jun 07, 2014)
    [Changelog](http://bit.ly/JBMDiffB72-B102)
-   **1.3+build.72** (Mar 01, 2014)
    [Changelog](http://bit.ly/JBMDiffB71-B72)
-   **1.3+build.71** (Feb 26, 2014)
    [Changelog](http://bit.ly/JBMDiffB70-B71)
-   **1.3+build.70** (Feb 23, 2014)
    [Changelog](http://bit.ly/JBMDiffB68-B70)
-   **1.3+build.68** (Jan 02, 2014)
    [Changelog](http://bit.ly/JBMDiffB64-B68)
-   **1.2+build.64** (Nov 13, 2013)
    [Changelog](http://bit.ly/JBMDiffB59-B64)
-   **1.1+build.59** (Oct 20, 2013)
    [Changelog](http://bit.ly/JBMDiffB53-B59)
-   **1.0+build.53** (Oct 09, 2013)
    [Changelog](http://bit.ly/JBMDiffB51-B53)
-   **1.0+build.51** (Oct 06, 2013)
    [Changelog](http://bit.ly/JBMDiffB33-B51)
-   **1.0+build.33** (Aug 17, 2013)
    [Changelog](http://bit.ly/JBMDiffB30-B33)
-   **1.0+build.30** (Aug 13, 2013)
    [Changelog](http://bit.ly/JBMDiffB20-B30)
-   **1.0+build.20** (Aug 10, 2013)
    [Changelog](http://bit.ly/JBMDiffB14-B20)
-   **1.0+build.14** (Jul 21, 2013)
    [Changelog](http://bit.ly/JBMDiffB10-B14)
-   **1.0+build.10** (Jul 13, 2013) First public release of the plugin

## The MIT License

Copyright (c) 2013-2017, Jan Molak, SmartCode Ltd
[http://smartcodeltd.co.uk](http://smartcodeltd.co.uk/)

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
