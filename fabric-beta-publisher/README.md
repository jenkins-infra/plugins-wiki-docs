
Allows users to publish Android apps to [Fabric
Beta](https://docs.fabric.io/android/beta/overview.html)

## Features

-   Upload .apk file to Fabric Beta
-   Choose to notify testers
    -   By a group alias
    -   By a list of e-mails
-   Specify release notes
    -   From the Jenkins changelog
    -   With a build parameter
    -   From a text file
-   Pipeline support
-   Add `FABRIC_BETA_BUILD_URL` and `FABRIC_BETA_BUILD_URL_{n}` environment
    variables after successful upload. The `{n}` is replaced with the
    APK index.

## Changelog

#### Version 2.1

-   Fix unzip APK issue after migrating to AndroidX and ProGuard
    ([\#44](https://github.com/jenkinsci/fabric-beta-publisher-plugin/pull/44))

#### Version 2.0

-   Make possible reading the changelog from a file on a slave
    (**Note: **the path is now relative to the workspace and not
    absolute – you have to change it in your configuration)

**  
**

**  
**

![](https://i.imgur.com/ladnLhk.png){width="600" height="485"}
