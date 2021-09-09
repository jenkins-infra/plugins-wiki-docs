Aborts a build if its log file gets too big.

This plugin monitors the size of the output file of a build and aborts
the build if the log file gets too big. You can set a default value for
the maximum allowed size in the Jenkins configuration as well as specify
a maximum file size on the configuration page of each individual job.

## Pipeline Support

The log file size checker can be added to a jenkins pipeline with a wrap
statement. The 'maxLogSize' attribute is in MB. For example:

    wrap([
     $class: 'LogfilesizecheckerWrapper',
       'maxLogSize': 1,
       'failBuild': true,
       'setOwn': true]) {
     echo "do stuff"

}

If the console output exceeds the limit specified in the
LogfilesizecheckerWrapper, the build aborts with the following error: 

``` console-output
>>> Max Log Size reached 1(MB). Aborting <<<
```

## Changelog

### Version 1.5 (NOV 15 2018)

-   \[JENKINS-54641\] Using getLogText instead deprecated getLogFile

### Version 1.4 (Jul 25 2018)

-   Improve performance for many-executor systems. Thanks to Pavel
    Avgustinov ([PR
    \#7](https://github.com/jenkinsci/logfilesizechecker-plugin/pull/7)).

### Version 1.3 (Dec 13 2017)

-   Pipeline support. Thanks to Basil Crow ([PR
    \#3](https://github.com/jenkinsci/logfilesizechecker-plugin/pull/3)).

### Version 1.2 (Nov 06 2013)

-   Shorter title in job configuration for ab better look and feel

### Version 1.1 (Oct 26 2013)

-   [JENKINS-20221](http://localhost:8085/display/JENKINS/Logfilesizechecker+Plugin#)
    wrong data binding failed job saving

### Version 1.0 (Sep 10 2012)

-   First version of this plugin
