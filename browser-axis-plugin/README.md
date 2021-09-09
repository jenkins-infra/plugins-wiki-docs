This plugin add browser axis to matrix job  
This plugin serves selenim tests, it create labels for browsers of slave
and sets a build variable which contains path to the browser's binary
file.

## **Settings of browsers**

Browsers can be set in global Jenkins configuration Manage Jenkins -\>
Configure System

There could be set browser types like Internet Explorer, Firefox, Opera
..

Each type can use suffixes - one for Windows slaves and one for Unix
slave. For Windows slaves is used suffix *.exe*, for Unix slaves is used
suffix *-bin*, if its operating system is checked in suffix
configuration for unix.

Each type of browser has two kind versions:

-   versions which are shared (the binary file is on shared resource
    which is same for all slaves) - path for a version must be same for
    all slaves, but it is possible to use system variables. 
-   versions of browsers which is locally installed in slaves - only one
    version for one slave.

**Setting of shared versions**

There are name of version, for example Firefox-8 and path to the binary
file. If the suffixes are used, path is without suffixes (suffixes will
be added according to suffixes configuration). The system variables can
be used in path.

**Setting of locally installed versions**

There are one setting for Unix slave and one for Windows slave. They are
enabled by checked ..........  Both contains path to the binary file and
command which return version of its installation.

These setting create label for all slaves which name is created from
type of browser and version of this locally installed browser with
suffix -auto, so for example it could be Firefox-5.2-auto.

## Using in Matrix Jobs

For choosing suitable slave can be used Browser or Browser expression.

-   Browser is very similar to JDK. There are checkbox for each version,
    versions of locally installed browsers contain suffix -auto.
-   Browser expression is similar to Label expression, but it is only
    for determining the browsers more commonly

When the build of job stars, the plugin will create variable
BROWSER\_AXIS\_PATH which contains path to the browser's binary file and
add this path to the variable PATH. If there was used Browser
expression, the chosen will be the first browse which is find in slave,
on which this job is building.
