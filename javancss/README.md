
This plugin allows you to use
[JavaNCSS](http://www.kclee.de/clemens/java/javancss/) build reporting
tool.

# Configuring the JavaNCSS Plugin

For a freestyle project, check the Java NCSS checkbox in the Post-build
Actions section. Set the XML report pattern according to the
instructions there. Optionally add health report thresholds (see below
for details).

For a Maven type project, report data will be collected automatically
when the `javancss:report` goal is used. Optionally check the Java NCSS
checkbox in the Build Settings section to add health report thresholds
(see below for details).

For health report thresholds, enter "healthy" and "unhealthy" thresholds
for the selected metric. Build health will be 100% if the metric is
better than the healthy threshold, and 0% (failed build) if worse than
the unhealthy threshold. Health percentage is calculated on a linear
scale when the metric falls between the two thresholds.  
For the "% of lines that are comments" metric, use threshold values from
0 to 100.  
For the "ratio of javadocs to classes and functions" metric, use
threshold values from 0.0 to 1.0.

—

For more information about this plugin, see
<http://javaadventure.blogspot.com/2008/06/writing-hudson-plugin-part-7-putting-it.html>

# Version History

### Version 1.1 (June 11, 2011)

-   Jenkins!
-   Trend graph does not appear when "mvn site" is executed.
    ([JENKINS-9890](https://issues.jenkins-ci.org/browse/JENKINS-9890)).
-   Fixed deprecated methods.
-   i18n
-   Added Japanese localization.
-   Fixed mismatch labels.

### Version 1.0 (June 1, 2010)

-   Added link to javancss reports to floatingBox graphs.
    ([JENKINS-3248](https://issues.jenkins-ci.org/browse/JENKINS-3248))
-   Fixing NonSerializableException when merging results on a slave.
    ([JENKINS-3194](https://issues.jenkins-ci.org/browse/JENKINS-3194))
-   Update code for more recent Hudson.

### Version 1.0-alpha-1 (September 11, 2008)

-   Initial release
