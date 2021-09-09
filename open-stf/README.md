Allows android developer to use android devices
with [OpenSTF](http://openstf.io/)

| Plugin Information                                                                            |
|-----------------------------------------------------------------------------------------------|
| View Open STF [on the plugin site](https://plugins.jenkins.io/open-stf) for more information. |

The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [Open STF Plugin stores credentials in plain
    text](https://jenkins.io/security/advisory/2019-04-03/#SECURITY-1059)

## Features

Provides some features for Android development and testing with [The
OpenSTF](http://openstf.io/) during Jenkins builds, including:

-   Reserves and connect a STF device before build, and release it after
    use.
-   Provides the matrix axis for the STF device attribute.

## Requirements

-   [Open STF](http://openstf.io/) ver2.0 or later

## Version histoy

### Version 1.0.8

-   Fix for compatibility with JEP-200 - Stop trying to serialize
    deviceCondition.

### Version 1.0.7

-   Fix for compatibility with [android-emulator
    v3.0](https://wiki.jenkins-ci.org/display/JENKINS/Android+Emulator+Plugin)

### Version 1.0.6

-   Added filter by battery remaining. @lukzeg

### Version 1.0.5

-   Fix Null Pointer error when waiting for device connection

### Version 1.0.4

-   Add a option about the SSL certificate vetification.(ignore errors
    or
    not) \[[JENKINS-39276](https://issues.jenkins-ci.org/browse/JENKINS-39276)\]
-   Add the 'abi' parameter as a device
    condition. \[[JENKINS-39277](https://issues.jenkins-ci.org/browse/JENKINS-39277)\]

### Version 1.0.3

-   Add feature about marking the device information on build.

### Version 1.0.2

-   Improve parameter validation. 

### Version 1.0.1

-   Bug fix about jQuery confliction.

### Version 1.0.0

-   Initial release
