This plugin generates Doxygen documentation and publishes HTML reports
generated by the [Doxygen](http://www.stack.nl/~dimitri/doxygen/) tool.

# Description

Doxygen is a documentation system for C++, C, Java and others
languages.  
The hudson doxygen plugin makes it possible to parse the Doxygen
descriptor (Doxyfile) and generate the documentation. It can also
provide a link to the generated Doxygen documentation (even if it hasn't
been generated by the plugin itself).  
The generated Doxygen documentation can be retained for each successful
build.

## Roadmap

-   Adding the support to use a custom value for the
    HTML\_FILE\_EXTENSION Doxyfile key

# Changelog

## Release 0.18

\* Fixed
[JENKINS-29938](https://issues.jenkins-ci.org/browse/JENKINS-29938) -
Unable to serialize is reported when publishing doxygen generate html
files

## Release 0.17 (August 10, 2014)

\* Support environment variable expansion Doxygen OUTPUT\_DIRECTORY and
HTLM\_OUTPUT tags.

## Release 0.16 (July 27, 2014)

\* Add doxygen as a build step

## Release 0.15 (March 25, 2014)

\* Don't log build specific information in slave log, but use
BuildListener console

## Release 0.14 (Augut 06, 2013)

\* Fix Doxyfile parsing of quoted strings and infinite include recursion

## Release 0.13 (June 23, 2013)

\* Fixed reopened
[JENKINS-18154](https://issues.jenkins-ci.org/browse/JENKINS-18154) -
Use correct HTML output with folderWhereYouRunDoxygen

## Release 0.12 (May 31, 2013)

\* Fixed
[JENKINS-18154](https://issues.jenkins-ci.org/browse/JENKINS-18154) -
Use correct HTML output with folderWhereYouRunDoxygen (\#5)

## Release 0.11 (April 27, 2012)

\* Fixed
[JENKINS-13599](https://issues.jenkins-ci.org/browse/JENKINS-13599) -
DoxygenDirectoryParser\#isDirectoryAbsolute() can get confused and cause
the doxygen OUTPUT\_DIR not to be found

## Release 0.10 (February 27, 2012)

\* Fixed an NPE when Doxygen generated directory did not have a parent

## Release 0.9 (June 13. 2011)

\* Fix a NullPointerException at runtime

## Release 0.8 (June, 12, 2011)

\* Fixed
[JENKINS-8831](https://issues.jenkins-ci.org/browse/JENKINS-8831) - Push
quoted path

## Release 0.7 (March 13, 2011)

\* Fixed
[JENKINS-8638](https://issues.jenkins-ci.org/browse/JENKINS-8638) -
Added matrix support

## Release 0.6 (March 30, 2010)

-   Fixed
    [JENKINS-5601](https://issues.jenkins-ci.org/browse/JENKINS-5601)

## Release 0.5 (December 20, 2009)

-   Removed the option "Use the Doxygen HTML directory". You have to use
    the [DocLinks
    Plugin](http://wiki.jenkins-ci.org/display/HUDSON/DocLinks+Plugin).
-   Improved the parsing Doxyfile file

## Release 0.4 (April 28, 2009)

-   Publishing doxygen is not performed if the build failed.
    ([\#3583](https://hudson.dev.java.net/issues/show_bug.cgi?id=3583))

## Release 0.3 (April 18, 2009)

-   Allow to run doxygen remotely
-   Consideration of Doxgen configuration file can be splited with
    @INCLUDE AND @INCLUDE\_PATH

## Release 0.2 (April 15, 2009)

-   Add the possibility to use directly the doxygen html directory

## Release 0.1 (December 22, 2008)

-   Initial release
