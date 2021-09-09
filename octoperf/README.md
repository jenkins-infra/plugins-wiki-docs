This plugin allows you to run load tests on
[OctoPerf](https://octoperf.com/) from Jenkins.

### Presentation

Spot performance issues quickly by integrating OctoPerf load testing in
your continuous integration stack. Test results are downloaded as a
JUnit report to integrate with [JUnit
plugin](https://wiki.jenkins-ci.org/display/JENKINS/JUnit+Plugin).
JMeter logs and JTLs are downloaded to integrate with [Performance
Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin).

### **Prerequisites**

OctoPerf Jenkins plugin requires:

-   Jenkins 2.150.3 or later,
-   An OctoPerf account, or you can [create an
    account](https://app.octoperf.com/#/access/signup) if you haven't
    any.

**Documentation**

The complete documentation can be found in our [Continuous Integration
with Jenkins](https://doc.octoperf.com/integrations/ci/jenkins/) page.

**Third-party plugin integration**

This plugin integrates best with the following post-build plugins:

-   [JUnit
    plugin](https://wiki.jenkins-ci.org/display/JENKINS/JUnit+Plugin):
    provides test result success / failure depending on the errors and
    assertion failures occured during the test,
-   [Performance
    plugin](https://wiki.jenkins-ci.org/display/JENKINS/Performance+Plugin):
    provides performance trend graphs like average response time or
    throughput.

### Changelog

##### Version 4.2.0 (February 21, 2019)

-   Fix: bench report URL is pointing to wrong location.
-   Upgrade to Jenkins 2.150.3
-   Upgrade various internal dependencies

##### Version 4.1.1 (November 29, 2018)

-   Fix: Proxy settings not used while authenticating.

##### Version 4.1.0 (November 28, 2018)

-   Add support for Jenkins Proxy Settings.

##### Version 4.0.2 (July 19, 2018)

-   Compatibility with OctoPerf 9 Saas and Enterprise Edition.

##### Version 4.0.1 (January 23, 2018)

-   Compatiblity with OctoPerf 8 Saas and Enterprise Edition.

##### Version 3.2.0 (November 21, 2017)

-   Support Pipeline Syntax via **octoPerfTest** function.

##### Version 3.1.0 (November 20, 2017)

-   Support stopping a test when SLA / Monitoring Threshold is raising
    an alert.
-   Merge JTLs into a single JTL file.

##### Version 3.0.2 (April 10, 2017)

-   Fix: JMeter log files weren't downloaded from server at the end of
    the test.

##### Version 3.0.1 (March 30, 2017)

-   Fix: OctoPerf Build Step could not load scenarios combobox.

##### Version 3.0.0 (March 27, 2017)

-   Upgrade to support JMeter JTLs. Support new OctoPerf Rest API
    endpoints.

##### Version 2.0.0 (June 22, 2016)

-   Upgrade to support OctoPerf API security.

##### Version 1.0.0 (March 3, 2016)

-   Initial release
