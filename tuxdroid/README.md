Allows to publish the result of a build to a [TuxDroid
community](http://www.tuxdroid-community.net/?page=accueil).  
[Downloads](http://hudson-ci.org/download/plugins/tuxdroid/)  
![](docs/images/image_preview.jpg){width="133"
height="199"}

# Configuration

Access to the Hudson's configuration page and fill in the **TuxDroid
Settings** section:

-   **TuxDroid API URL** - The REST API URL of your TuxDroid.

Then, on your project configuration page, specify following parameters

-   **Report On Sucess** - Default will be 'false', only failure and
    recovery will be reported.
-   **Animate Penguin** - Move flippers and mouth of the penguin.
-   **TuxDroid Text for Failure** - The text pronounced when build
    fails.
-   **TuxDroid Text for Success** - The text pronounced when build
    suceed.
-   **TuxDroid Text for Recover** - The text pronounced when build
    suceed after a failure.
-   **TuxDroid Text for Unstable Build** - The text pronounced when
    build is Unstable.
-   **Voice** - The locutor voice used by the TuxDroid to spread the
    build status.

# Example

[TuxDroid Plugin Video
(YouTube)](http://www.youtube.com/watch?v=ctN2ovykH0o)

# Change Log

#### Version 1.7 (Nov 4, 2011)

-   JENKINS-11613

#### Version 1.6 (Feb 10, 2010)

-   Update code for more recent Hudson.

#### Version 1.5 (Jun 5, 2009)

-   Check Connection when entering REST API URL of your TuxDroid.
-   Add a new parameters: Animate Penguin, move mouth and flippers.
-   Use the Java Tuxdroid API (0.0.2).
-   Use the global Hudson proxy configuration.
-   Custom Build Parameters are now available in Text-To-Speach
    messages. Syntax: ${*param1*}.
-   Text-To-Speech messages supports ${PROJECTNAME}, ${BUILDNUMBER} and
    ${BUILDSTATE} (not case sensitive).

#### Version 1.2 (March, 2009)

-   Initial release
-   Text-To-Speach messages supports ${projectName}, ${buildNumber}
