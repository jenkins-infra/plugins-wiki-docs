  

Enhanced Old Build Discarder is a Jenkins plugin that extends the
functionality of the internal build discard plugin with an option to
prevent discard of builds when the job is unstable, in addition to the
ability to require both age and quantity conditions be met prior to
build discard.

The plugin is configured as a build rotation strategy labelled *Enhanced
Log Rotator *in the internal *Discard old builds* feature. It can
additionally be configured as a Pipeline script using a call to
properties() such as:

    properties([[$class: 'BuildDiscarderProperty', strategy: [$class: 'EnhancedOldBuildDiscarder',
     artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '10', numToKeepStr: '10',
     discardOnlyOnSuccess: false, holdMaxBuilds: true]]]);

# Version History

1.4 (2019-08-01)

-   Added feature to enforce both age and quantity conditions be met
    prior to build discard
-   Updated plugin dependencies
-   Added plugin unit tests
-   Added CI testing
-   Added help documentation

1.0 (2013-06-07)

-   Release version

  

  
