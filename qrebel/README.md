This Jenkins Plugin collects application performance data
from [QRebel](https://qrebel.com/) and marks the build as failed if its
performance degrades.

## How to use it?

### Attach QRebel agent

Attach the agent to existing tests to start monitoring your application
performance. See [QRebel Quick
Start](https://qrebel.com/quick-start/) guide. Configure your app name
eg. `petclinic`. Label your app changes with builds
eg. `1.4.0rc1`, `1.4.0rc2` etc.

### Add a QRebel post-build action

Add a new post-build
action `Monitor performance regressions with QRebel`. This action will
compare the performance of a baseline build and a target build.

-   Type the configured app name to `Application name`, eg. `petclinic`
-   Provide `QRebel API Token` - REST API authentication token,
    see [REST
    API](https://manuals.zeroturnaround.com/qrebel/api/index.html) for
    detail
-   Specify `Build name` in `Target build` section eg. `1.4.0rc2`.
    Environment variables are supported eg. `1.4.0rc${BUILD_NUMBER}`
-   Specify `Build version (optional)` if any in `Target build` section
    eg. `1.4.0`. Environment variables are supported
-   Choose `Comparison strategy` eg. `Compare against the static threshold`

If a build fails you'll see the specific causes in the output. For
example:

    Build failed because QRebel found regressions in petclinic
    TARGET
     build: 1.4.0rc2
     version: 1.4.0
    BASELINE
     build: 1.4.0rc1
     version: 1.4.0
    Slow Requests: 0
    Excessive IO: 0
    Exceptions: 5
    For full report check your <a href= https://hub.qrebel.com/#/12345/petclinic/?baseline=1.4.0rc1&target=1.4.0rc2 >dashboard</a>

Further details will appear if you click on `dashboard`
