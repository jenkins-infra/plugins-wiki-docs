Adds a build step to run a performance load test with [Nouvola
DiveCloud](https://divecloud.nouvola.com/).  

**Nouvola Plugin**

Cloud-based, scalable load testing and performance testing for your web,
mobile and API, using the power of [Nouvola.](http://www.nouvola.com/)

Nouvola is the performance testing and analytics solution created by
developers, for developers. Enjoy script-free performance testing,
real-world ready scenarios and in-depth performance analytics across any
load, any device, any geo.

**Installation**

First, sign up for a free account at [Nouvola
DiveCloud](https://divecloud.nouvola.com/) and obtain:

-    A **Nouvola API key **(located in Account -\> API & Keys).
-    Create a new test plan and copy the **test plan ID. **

**Optional steps:**

-   You can delay the polling for test results by using Wait Time. For
    example if your test lasts 10 minutes, you can set Wait Time to 10.
-   **I**f you want to be notified when your test completes using the
    Nouvola DiveCloud **Webhook** service, enter the URL of your Jenkins
    server (e.g.:
    [http://jenkinsserver.yourcompany.com:12345](http://jenkinsserver.yourcompany.com:12345/)),
    and the test will send a message when the execution is completed. 

**Note**: the URL needs to be accessible by external sources. Make sure
the specified port is open. If no port is specified in the URL, the
listening port will default to 9999.

-   You can set a timeout value so that your step will continue even if
    the webhook is never called. 

You can then enter this information as a build step, which will run a
test from the DiveCloud platform during your build. If you setup
multiple build steps with Nouvola tests, they may run either at the same
time or one after another.

**Nouvola DiveCloud solution gives you:**

-   The ability to find performance issues in minutes
-   No more scripting: use actual user activity to build your test
-   Test with real world users in real world volumes
-   Know before you deploy that your application “will just work”
-   Achieve peace of mind knowing that your app can scale
-   Accelerate your release cycle with test automation

**Features:**

-   Support for web, mobile and API testing
-   Create and run tests in minutes
-   Generate traffic from multiple locations worldwide
-   Simple and elegant, turnkey, self-service
-   Built-in integrated analytics and statistical analysis
-   Real world ready: authentication, randomization, data correlation
-   Identify performance issues at a glance
-   No installation required. No scripting
-   Cloud agnostic and highly flexible
