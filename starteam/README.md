#### Version 1.0.0.65 of the StarTeam Jenkins plugin, released on July 22, 2018, may be obtained from MicroFocus Customer Support and/or from MicroFocus Supportline ([supportline.microfocus.com](http://supportline.microfocus.com/)).

This version of the plugin is distributed as part of the StarTeam SDK
build version 17.0.0.47 or later. (StarTeam SDK 17.0 HF2). 

The plugin requires SDK 17.0.0.40 (or later) to be installed. It is not
supported by earlier versions of the SDK, but runs successfully against
all StarTeam Server versions 12.x to 17.0. 

The plugin is no longer available standalone from the microfocus
community. Please visit the Microfocus Community Forum to find out more

#### Version 1.0.0.61 of the StarTeam Jenkins plugin, released on April 29, 2018, may be obtained from MicroFocus Customer Support and/or from MicroFocus Supportline ([supportline.microfocus.com](http://supportline.microfocus.com/)).

This version of the plugin is distributed as part of the StarTeam SDK
build version 17.0.0.37 or later. (StarTeam SDK 17.0 HF1). 

The plugin requires SDK 17.0.0.37 (or later) to be installed. It is not
supported by earlier versions of the SDK, but runs successfully against
all StarTeam Server versions 12.x to 17.0. 

The plugin is no longer available standalone from the microfocus
community. Please visit the Microfocus Community Forum to find out more

#### Version 1.0.0.59 of the StarTeam Jenkins plugin, released on December 12, 2018, may be obtained from MicroFocus Customer Support and/or from MicroFocus Supportline ([supportline.microfocus.com](http://supportline.microfocus.com/)).

This version of the plugin is distributed as part of the StarTeam SDK
build version 16.0.3.56 or later. (StarTeam SDK 16.3 HF5). 

The plugin requires SDK 16.0.3.56 (or later) to be installed. It is not
supported by earlier versions of the SDK, but runs successfully against
all StarTeam Server versions 12.x to 16.x. 

The plugin is no longer available standalone from the microfocus
community. Please visit the Microfocus Community Forum to find out more

#### Version 1.0.0.35 of the StarTeam Jenkins plugin, released on October 3, 2018, may be obtained from MicroFocus Customer Support and/or from MicroFocus Supportline (supportline.microfocus.com).

This version of the plugin is distributed as part of the StarTeam SDK
build version 16.0.3.47 or later. (StarTeam SDK 16.3 HF3). 

The plugin requires SDK 16.0.3.47 (or later) to be installed. It is not
supported by earlier versions of the SDK, but runs successfully against
all StarTeam Server versions 12.x to 16.x. 

The plugin is no longer available standalone from the microfocus
community. Please visit the Microfocus Community Forum to find out more

<https://community.microfocus.com/borland/managetrack/starteam/m/mediagallery/472>

[https://community.microfocus.com/borland/managetrack/starteam/f/starteam\_sdk/10739/sdk-16-0-3-47-cpc-16-0-3-99](https://community.microfocus.com/borland/managetrack/starteam/f/starteam_sdk/10739/sdk-16-0-3-40-cpc-16-0-3-89)

  

#### Version 1.0.0.34 of the StarTeam Jenkins plugin, released on August 20, 2018, may be obtained from MicroFocus Customer Support and/or from MicroFocus Supportline ([supportline.microfocus.com](http://supportline.microfocus.com/)).

This version of the plugin is distributed as part of the StarTeam SDK
build version 16.0.3.40 or later. (StarTeam SDK 16.3 HF2). 

The plugin requires SDK 16.0.3.40 (or later) to be installed. It is not
supported by earlier versions of the SDK, but runs successfully against
all StarTeam Server versions 12.x to 16.x. 

The plugin is no longer available standalone from the microfocus
community. Please visit the Microfocus Community Forum to find out more

<https://community.microfocus.com/borland/managetrack/starteam/m/mediagallery/472>

<https://community.microfocus.com/borland/managetrack/starteam/f/starteam_sdk/10739/sdk-16-0-3-40-cpc-16-0-3-89>

  

#### Version 0.9.0.8 of the StarTeam Jenkins plugin, released in May 2017, may be obtained from MicroFocus Customer Support.

#### Please visit the MicroFocus Community Forum to find out more.  

<http://community.microfocus.com/borland/managetrack/starteam/m/mediagallery/373>

Please note that the release versions of the plugin (0.6.13 or earlier)
as well as the open source code in the jenkins git archives are not
endorsed, maintained or supported by MicroFocus.

The MicroFocus plugin is closed source maintained by StarTeam
engineering and supported by MicroFocus Customer Support.

It uses the 'newer' com.starteam SDK namespace and has been fully tested
against the 14.4, 15.1 & 16.x StarTeam servers, with corresponding SDK's
available at MicroFocus Supportline.
(<https://supportline.microfocus.com/>)

# Summary

This plugin integrates Jenkins with
[StarTeam](http://www.borland.com/Products/Change-Management/StarTeam),
a Borland (MicroFocus0 cross-platform SCM solution.The plugin allows a
jenkins project to be associated with a given StarTeam folder, in a
given view and project.

The plugin currently supports the following:

-   Checkout
-   Polling
-   Distributed Jenkins
-   Labeling support

Original author: [Ilkka
Laukkanen](http://wiki.jenkins-ci.org/display/~ilkka)

Currently maintained by [MicroFocus StarTeam
R&D](https://wiki.jenkins.io/display/~anil_peres_da_silva)

# Requirements

The plugin requires the StarTeam SDK libraries in Jenkin's classpath.
These files are included in the StarTeam SDK installers which may be
downloaded from Borland (Micro Focus)  support line, and may be
installed by e.g. dropping them in Jenkin's `WEB-INF/lib directory`.

# Notes

The plugin currently always converts line endings to the host format on
checkout.

# Usage (v.1.0.0.65)

The version of the plugin supports polling multiple pipe lining. Builds
are triggered if the checked in file changes are attached to or detached
from the label, or have changed at the tip since the last build. 

# Building and Passing Unit Tests

\* To build the code currently checked into Github, please see the
project
[README](https://svn.java.net//svn/hudson~svn/trunk/hudson/plugins/starteam/README). 
You will need to download the 11.0 SDK jars files from (Borland)
MicroFocus Supportline and configure your maven settings. Please bear in
mind that this code uses an old, unsupported SDK, with deprecated api's.

\* On the other hand, a pre-packaged, closed source, jenkins plugin
using the 17.0 HF2+ SDK, (and distributed with it)  may be obtained from
(Borland) MicroFocus Customer Support or the MicroFocus Support Line.

# Version History

#### Version 1.0.0.65 (July 2019)

-   Minor bug fixes, 

#### Version 1.0.0.35 (October 2018)

-   Ignore changes (file checkins) caused by excluded (e.g. build)
    users, 
-   plugin does not crash if not generating changelog, 

#### Version 1.0.0.34 (August 2018)

-   Full support for pipe lining, 
-   checkouts from rolled back configurations (historical snapshots)
    based on labels or promotion states, 
-   builds triggered if files are attached to or detached from labels.
-   incremental workspace updates on change
-   checks for changes since last build.
-   optional use of cache agent for optimized file checkouts

#### Version 0.9.0.8 (May 2017)

-   Builds are only triggered if the checked in file changes are
    attached to the label. 

#### Version 0.9.0.4 (March 2017)

-   Checkout by label is now fully
    supported[ ](http://supportline.microfocus.com/)

#### Version 0.9.0.1 (November 2016)

-   An option to create empty folders (i.e. folders without files in
    them) is now supported[ ](http://supportline.microfocus.com/)

#### Version 0.8.2 (September 2016)

-   Sub folder checkouts are now supported
-   Parameterized Query Values are now
    supported[ ](http://supportline.microfocus.com/)

#### Version 0.7.2 (June 2015)

-   The latest release plugin may be obtained from Borland/MicroFocus
    Customer Support or StarTeam R&D Engineering
-   The latest supported version of the StarTeam SDK may be downloaded
    from [MicroFocus Supportline ](http://supportline.microfocus.com/)
-   The plugin has been tested using SDK version 14.0.4.50 against
    Jenkins version 1.568. It will not work using 13.0 or older SDK
    versions.

#### Version 0.6.11 (May 21, 2013)

-   Allow a build label to be created and then checked out.
-   Allow StarTeam NetMonitor logging based on st.netmon.out system
    property
-   Some optimizations

#### Version 0.6.10 (February 15, 2013)

-   Fix author in the change log

#### Version 0.6.9 (December 12, 2012)

-   Fix checkout by labels
-   Allow polling on slave

#### Version 0.6.8 (July 18, 2012)

-   Explicit License update
-   Added ClientAppplication information for ST server (Thanks pauldawg)

#### Version 0.6.3 (Aug 5, 2010)

-   Fix for checkout/polling by labels
-   Shows changes by labels correctly
-   Still in a testing stage

#### Version 0.6.2 (Jul 28, 2010)

-   Initial version for checkout/polling by labels

#### Version 0.5 (Jul 15, 2010)

-   Increase in test coverage
-   Incorporating code from
    [JENKINS-2879](http://issues.jenkins-ci.org/browse/JENKINS-2879)
-   includes addition of change log

#### Version 0.4 (July 12, 2010)

-   Update code for more recent Hudson
-   Fix for
    [JENKINS-6881](http://issues.jenkins-ci.org/browse/JENKINS-6881)

#### Version 0.2 (Feb 10, 2010)

-   Update code for more recent Hudson

#### Version 0.1.7 (Jul 13, 2009)

-   bug fixed：distributed build

#### Version 0.1 (Dec 11, 2007)

-   Initial release. Checkout and polling work.
