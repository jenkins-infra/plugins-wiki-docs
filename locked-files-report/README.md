The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Stored XSS
    vulnerability](https://www.jenkins.io/security/advisory/2020-09-16/#SECURITY-1921)

This debug plugin fails a build if there are locked files in the
workspace at the begining or end of a build.  
This plugin is only thought to be used when figuring out why sometimes a
SCM (or any other file) action fails as it can not delete files in the
workspace.

## Usage

Enable it in the project configuration and it will at begining and end
of the build check if there are any locked files in the workspace.

If there are any locked files, a short summary will be displayed in the
Build page.  
![](docs/images/summary.png)

Clicking on the Locked files page, will show a more detailed list of
what files that was locked and by whatprocess.  
![](docs/images/action.png)

### Windows note

To be able to use the plugin on Windows, you must install
[Handle](http://technet.microsoft.com/en-us/sysinternals/bb896655.aspx)
on all nodes that is going to use the plugin. Easiest is to add the
`handle.exe` path to the `PATH` environmental variable, otherwise you
must specify the path in System configuration.

**handle.exe** pops up an EULA dialogue the first time you run it;  if
you are running Hudson as a Windows service as a user other than
yourself, then you will have to run the exe with "run as..." the service
user to accept the EULA once, otherwise you will find that
**handle.exe** just hangs when run from hudson.

# Changelog

### 1.6 (3rd feb 2012)

Thanks to hokatichenci for fixing the below issues in a pull request.

-   Handle.exe fixes - The plugin always accepts the EULA right now .
    ([JENKINS-8467](https://issues.jenkins-ci.org/browse/JENKINS-8467))
-   Handle.exe fixes - Added support for the new output format
    ([JENKINS-12344](https://issues.jenkins-ci.org/browse/JENKINS-12344))

### 1.4 - 1.5 (16th nov 2011)

-   Fixed so the plugin can be used in Matrix builds.
    ([JENKINS-9904](https://issues.jenkins-ci.org/browse/JENKINS-9904))
-   Added a timeout for joining on the tool process, this should fix
    problems with the handle.exe tool not finishing properly.
    ([JENKINS-4797](https://issues.jenkins-ci.org/browse/JENKINS-4797))
-   Updated plugin so it will copy the output from the tool to the
    console of the build, so it is possible to see if the tool actually
    found any locked files.
-   Updated source code so the plugin works with a Java 5.0 JRE.

### 1.3 (5th Jan 2011)

-   Fixed a parsing problem when the workspace folder was locked.
    ([JENKINS-8323](https://issues.jenkins-ci.org/browse/JENKINS-8323))

### 1.1

-   Fixed a NPE bug.
    ([JENKINS-4606](https://issues.jenkins-ci.org/browse/JENKINS-4606))

### 1.0

-   Added support for
    [Handle](http://technet.microsoft.com/en-us/sysinternals/bb896655.aspx)
    on windows.
-   Added support for `lsof` on \*nix.
