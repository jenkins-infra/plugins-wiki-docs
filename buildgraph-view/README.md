The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Stored XSS
    vulnerability](https://jenkins.io/security/advisory/2019-12-17/#SECURITY-1591)

Shows a graph of builds that relates together (aka "build pipeline").

Code was originally part of
[build-flow-plugin](http://localhost:8085/display/JENKINS/Build+Flow+Plugin).

## About

This plugin computes a graph of related builds starting from the current
one, and render it as a graph.  
![](docs/images/Capture_d’écran_2013-08-08_à_18.54.39.png)

Downstream builds are identified by DownStreamRunDeclarer extension
point.

-   Default one is using Jenkins dependencyGraph and UpstreamCause and
    as such can detect common build chain.
-   [build-flow](http://localhost:8085/display/JENKINS/Build+Flow+Plugin) plugin
    is contributing one to render flow execution as a graph
-   some Jenkins plugins may later contribute dedicated solutions.

Note: due to [Join
plugin](http://localhost:8085/display/JENKINS/Join+Plugin)'s design,
join jobs appear concurrently to other downstream jobs, not as being
triggered subsequently.

## **Changelog**

##### Version 1.8 - 5 August 2017

\[JENKINS-45601\] Provided checkbox to show/hide job/build parameters.

##### Version 1.7 - 26 June 2017

\[JENKINS-44753\] Fixed NullPointerException when moving project.

Added ability to show Job/Build Parameters in Graph

##### Version 1.6 - 6 May 2017

\[Fixed JENKINS-43532\] Moving Build Flow Plugin from required to
optional because of SECURITY-293.

\[FIXED JENKINS-26921\] Move build graph on one click less distance to
job's root page.

##### Version 1.5.2 - 13 March 2017

\[Fixed JENKINS-41520\] Build description is not rendered properly.

##### Version 1.5.1 - 18 February 2017

\[FIXED JENKINS-41669\] Buildgraph view does not show for some json
responses.

##### Version 1.5 - 23 January 2017

\[FIXED JENKINS-23607\] Do not block thread waiting for builds in queue
to be scheduled.

Fixed condition to render the graph even when there is change in running
status.

##### Version 1.4 - 10 October 2016

Increased performance and implemented auto refresh using AngularJs
template binding.

##### Version 1.3.2 - 26 June 2016

Fixed performance issue when displaying large graph

##### Version 1.3.1 - 20 May 2016

JENKINS-34803 Fixed issue of Jenkins crash when updating from 1.2 to 1.3

##### Version 1.3 - 11 May 2016

Auto refresh feature added

Fixed JENKINS-32499 issue, BuildGraph doesn't show up if there is null
run.

##### Version 1.2 - 24 April 2016

Added support for [Promoted
Builds](https://wiki.jenkins-ci.org/display/JENKINS/Promoted+Builds+Plugin) plugin

Fixed conflict with prototype.js

Prevent wrapping of build graph

##### Version 1.1 - 22 Aug 2013

Added support for [Parameterized
trigger](http://localhost:8085/display/JENKINS/Parameterized+Trigger+Plugin) plugin

##### Version 1.0.1 - 8 Aug 2013

Initial release, code being extracted from build-flow plugin
