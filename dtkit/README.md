This plugin makes it possible to convert outputs from the metric tools
execution into unified outputs.

# Features

The plugin provides the
[DTKit](https://wiki.jenkins.io/display/JENKINS/DTKit) Jenkins
integration.  
Look at the [DTKit
Design](https://wiki.jenkins.io/display/JENKINS/DTKit+Design)

# Changelog

## Version 2.1.1

\* Fix 'The custom generated folder field was not used after a restart
of Jenkins'

## Version 2.1.0

\* Update to dtkit-tusar-output 1.0.2 : Update
sourcemonitor-3.2-to-tusar-8.0-1-0.xsl

## Version 2.0.2

\* Display the input warnings even if the validateInputFile method
returns.

## Version 2.0.0 and 2.0.1

\* Upgrade to new DTKIT librairies v2

## Version 1.14

\* Migrate to dtkit-tusar 0.32 (integration of purify and fitness test).

## Version 1.13 (Not released / issue on deployment)

## Version 1.12

\* Add clean old build generated files possibility

## Version 1.11

\* Set the folder where the reports are generated

## Version 1.10

\* Upgrde to dtkit-default-tusar 0.30  
\*\* Fix Klocwork XSL  
\*\* Fix BoostTest XSD

## Version 1.9

\* Fix failIfNotNew files default behavior

## Version 1.8

\* Change metrics files search from module root to workspace  
Be careful: Maybe you have to update your existing jobs by adding your
project directory such as CLEARCASE\_VIEWPATH for Clearcase views

## Version 1.7

\* Update to dtkit-default-tusar 0.29 with fix for parasoft tool  
\* Improve error management on validation input file before metric
processing

## Version 1.6

\* Update to dtkit-default-tusar 0.28

-   Fix Cppcheck
-   Fix Klocwork

## Version 1.5

\* Update to dtkit-default-tusar 0.27

-   Change CppTest to ParasoftTest
-   Add measures metric to ParasoftTest

## Version 1.4

\* Fix again a NullPointerException on a slave execution

## Version 1.3

\* Fix NullPointerException on a slave execution

## Version 1.2.3

\* Update to dtkit-default-tusar 0.26 (Fix Source Monitor
transformation)

## Version 1.2.2

\* Update to dtkit-format 0.20  
\* Fix Unsupported exception

## Version 1.2.1

\* Update to DTKIt Default 0.25 (tusar v10 with branch and line
coverage)

## Version 1.2.0

\* Update to DTKIt Default 0.24

## Version 1.1.0

\* Added the CPD metric

## Version 1.0.0

\* Initial version
