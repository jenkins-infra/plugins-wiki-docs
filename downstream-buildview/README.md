**This plugin is up for adoption.** Want to help improve this plugin?
[Click here to learn
more](http://localhost:8085/display/JENKINS/Adopt+a+Plugin "Adopt a Plugin")!

This plugin allows you to view the full status all the downstream builds
so that we can graphically see that everything for this build has been
completed successfully.

### **Screen**

![](docs/images/downstream-buildview_screen1.JPG)

# Changelog

#### Version 1.9 (Dec 17 2013)

-   [JENKINS-9263](https://issues.jenkins-ci.org/browse/JENKINS-9263)
    add link to upstream build when downstream build is started instead
    of completed
-   NPE when launching a downstream build from a promotion action
-   avoid serializing build references; can cause errors in newer
    versions of Jenkins
-   broken icon when using a context path
-   [JENKINS-17837](https://issues.jenkins-ci.org/browse/JENKINS-17837)
    fix major performance issue for jobs with many builds
-   hide link unless there are actually some downstream builds to
    display

#### **Version 1.8 (Aug 02 2012)**

-   Compatibility with CloudBees folder plugin
    ([JENKINS-14669](https://issues.jenkins-ci.org/browse/JENKINS-14669))
-   Excessive logging
    ([JENKINS-7782](https://issues.jenkins-ci.org/browse/JENKINS-7782))

#### **Version 1.7 (2nd April 2012)**

-   Projects triggered by "Parameterized Build Plugin" do not show in
    view with "Downstream-buildview"
    ([JENKINS-5761](https://issues.jenkins-ci.org/browse/JENKINS-5761))

#### **Version 1.6**

-   Prevent ConcurrentModificationException
    ([JENKINS-6644](https://issues.jenkins-ci.org/browse/JENKINS-6644))
-   Downstream build view is empty
    ([JENKINS-7480](https://issues.jenkins-ci.org/browse/JENKINS-7480))

#### **Version 1.5**

-   Fixed an NPE
    ([JENKINS-7691](https://issues.jenkins-ci.org/browse/JENKINS-7691))

#### **Version 1.4**

-   Fixed irregularities with build numbers by persisting the build
    number after the actual build starts

#### **Version 1.3**

-   Fixed broken image path .

#### **Version 1.2**

-   Added logic to persist information about the downstream builds.

#### **Version 1.1**

-   Added TransientProjectAction, so the plug-in will be available for
    all the projects with out any configuration.

#### **Version 1.0**

-   Initial version
