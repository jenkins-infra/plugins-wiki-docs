With this plugin you can add a build step to your Jenkins project that
executes a [Copado](http://copa.do/) [Webhook
API](http://docs.copado.apiary.io/) task. You would add this step after
your Copado setup is finished. After the Copado Webhook is triggered,
the plugin will wait for the job run to finish (or timeout). If the Job
step is successful, your pipeline will continue to the next step in your
pipeline; however, if it fails (or times out), the build will be marked
as failed.

### Changelog:

#### v1.0

-   First release.

#### v1.1

-   Added support for payload parameter

#### v1.2

-   Added support for build parameters on Webhook URL, API Key and Step
    Name
