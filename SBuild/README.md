This plugin allows building projects using [SBuild](http://sbuild.org/).

## Overview

The SBuild Plugins enables Jenkins to run SBuild targets directly.
Multiple SBuild versions can be used.

### Features

-   Manage multiple SBuild installations, which can be automatically
    downloaded and installed for you
-   Support multiple buildfiles (which translate to `--buildfile` and
    `--additional-buildfile` options)
-   Support to build multiple target.

### Changelog

For the changes of each release, refer to the
[Changelog](https://github.com/jenkinsci/sbuild-plugin/blob/master/ChangeLog.txt).

## Jenkins Configuration

Before use, at least one SBuild installation must be configured. You
can, of course, configure as much installations as you want. You can, of
course, configure as much installations as you want.

![](docs/images/configure-sbuild.jpg)

Press "Add SBuild" to configure one.

### Automatically install an SBuild version

Give a name, e.g. the version and check "Install automatically". Then
select the version you want to install from the "Version" drop down
selection.

![](docs/images/configure-sbuild-download.jpg)

### Use of an existing SBuild installation

Give a name and uncheck "Install automatically". Then specify the
installation directory of your SBuild installation.

![](docs/images/configure-sbuild-system.jpg)

## Build Job Configuration

It is recommended to use a "free style" project.
