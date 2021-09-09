This plugin enables you to execute security scan with
[Walti](https://walti.io/) after build has completed.

## Setup

### Install plugin

Instal this plugin via the Jenkins plugin manager.

### Per-job configuration

-   Add "Execute scan by Walti" as post-build action in your project
    configuration.
-   Input API key and secret, which are needed to execute scan.
-   After you have inputted credentials, target candidates has been
    automatically refreshed. Select which server to scan.
-   Check scan types you want to execute then click the save button.

## Requirements

-   Jenkins 1.580.1 or above

## Versin History

### 1.0.1

-   Fix build issue

### 1.0.0

-   Initial release
