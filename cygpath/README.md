This plugin performs Cygwin path conversion before forking new processes

# Applicable situations

One of the challenge in Hudson is how to cope with a heterogeneous
cluster (that includes Windows and Unix.) Often you need such a cluster
so that you have all the testing environments for your supported
platforms, but it makes it harder for jobs to utilize the cluster
effectively, because your shell script that run on Unix doesn't run on
Windows, and your batch files for Windows won't run on Unix.

One way to cope with this problem is to use
[Cygwin](http://www.cygwin.com/). This creates a Unix like environment
on Windows, so that your build/test scripts can always be written as
Unix shell scripts, even when they run on Windows.

This also allows you to mostly use Unix paths on specifying your tool
locations (such as JDKs, Ant, CVS, etc.), except it doesn't quite work
with Cygwin. You say your shell is in "/bin/bash", and indeed as far as
Cygwin is concerned, it's there, but when Hudson forks a new shell, it's
somewhere like "c:\\cygwin\\bin\\bash" — you'd need a Cygwin path
conversion to be able to successfully fork a process!

This plugin does just that; With this plugin, Hudson converts the
executable path to Windows style via
[cygpath](http://www.cygwin.com/cygwin-ug-net/using-utils.html).

To recap,

-   You install Cygwin on all the Windows slaves
-   Jobs on Hudson that assume Unix environment can now run on all the
    slaves (including Windows ones)
-   In the system configuration, you use Unix paths for all your tools.

## Changelog

##### Version 1.5 (Nov 7, 2011)

-   Updated to work correctly on 64bit Windows JVMs.

##### Version 1.4 (Nov 7, 2011)

-   Updated to work with Cygwin 1.7

##### Version 1.3 (Dec 30 2009)

-   Locate cygpath on the slave node instead of master
-   Fix for when cygpath is found in `PATH` instead of registry

##### Version 1.2 (Aug 20 2009)

-   The plugin now locates `cygpath.exe` from registry entry, so that it
    works even if `cygpath` is not in `PATH`.
    ([JENKINS-4275](https://issues.jenkins-ci.org/browse/JENKINS-4275))
-   Update code for more recent Hudson

##### Version 1.1 (Aug 18 2009)

-   Fixed an `AbstractMethodError` with recent versions of Hudson.

##### Version 1.0 (2009/04/17)

-   Initial release
