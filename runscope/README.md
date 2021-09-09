This plugin allows you to add a
[Runscope](https://www.runscope.com/ "Runscope") API test as a build
step into your Jenkins build pipeline. The plugin will trigger a
specific API test (via [Trigger
URL](https://www.runscope.com/docs/api-testing/integrations "Runscope Trigger URL docs"))
and wait for the test to complete. If the test passes, the build steps
will continue. However, if it fails, the build will be marked as failed.

### Changelog:

#### v1.0

-   First release.

#### v1.4

-   Changed the way HTTP request/response is handled (addressing issue
    with larger test result detail payloads)
-   Wrested with maven / release procedures.. thus, 1.4.

#### v1.46

-   Fixed issue with non-200 OK status codes returned by the Runscope
    API

#### v1.47

-   Fixed issue with non-201 status codes returned by the Runscope API
