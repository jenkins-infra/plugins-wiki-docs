The Seed project aims to help automating the generation and management
of pipelines for branches of a project in Jenkins.

## Documentation

-   Documentation is available on the [Seed
    Wiki](https://github.com/jenkinsci/seed-plugin/wiki).
-   [JUC 2015 London
    presentation](http://www.slideshare.net/DamienCoraboeuf/juc-2015-pipeline-scaling)
-   [BruJUG June 2016
    presentation](http://www.slideshare.net/DamienCoraboeuf/brujug-jenkins-pipeline-scalability)

## Contributing

-   Issues are managed in
    [GitHub](https://github.com/jenkinsci/seed-plugin/issues)
-   Developing the Seed plug-in is documented in the
    [Wiki](https://github.com/jenkinsci/seed-plugin/wiki/Development)

## Change log

### 2.1.4

-   [\#30](https://github.com/jenkinsci/seed-plugin/issues/30) Fix
    for Project seed job has null in Branch start name and Branch name

### 2.1.3

-   [\#27](https://github.com/jenkinsci/seed-plugin/issues/27) -
    Customisation of path to the seed file
-   [\#29](https://github.com/jenkinsci/seed-plugin/issues/29) -
    Correction of regression

### 1.1.0

-   Depends on Job DSL 1.50

### 2.1.0

-   Depends on Job DSL 1.50

### 2.0.0

-   Dropping the support for version 0.x
-   Version 1.x will be maintained until end of 2016

### 1.0.0

-   Simpler, better documented - try the new Seed plug-in 1.0
    -   [Documentation](https://github.com/jenkinsci/seed-plugin/wiki)
    -   [Migration from
        0.x](https://github.com/jenkinsci/seed-plugin/wiki/Migration%20from%200.x)
        (backward compatible)
-   Depends on Job DSL 1.46 or more recent
-   Depends on Jenkins 1.625.3 or more recent
-   Depends on Cloudbees Folder 5.11 or more recent
-   Depends on [Matrix Authorization Strategy
    Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Matrix+Authorization+Strategy+Plugin)
    1.4 or more recent

### 0.20.0

-   [\#23](https://github.com/jenkinsci/seed-plugin/issues/23) Ignoring
    tag related messages from BitBucket

### 0.19.0

-   [\#18](https://github.com/jenkinsci/seed-plugin/issues/18) Delete
    workspaces in case of pipeline deletion
-   [\#20](https://github.com/jenkinsci/seed-plugin/issues/20) Branch
    Jobs generated incorrectly
-   [\#22](https://github.com/jenkinsci/seed-plugin/issues/22) Generation
    of a destructor job to delete branches

### 0.18.0

-   [\#19](https://github.com/jenkinsci/seed-plugin/issues/19) Support
    for [BitBucket Cloud web
    hooks](https://github.com/jenkinsci/seed-plugin/wiki/BitBucket) 

### 0.17.0

-   [\#17](https://github.com/jenkinsci/seed-plugin/issues/17) Project
    configuration is now
    [cached](https://github.com/jenkinsci/seed-plugin/wiki/Configuration)
    after generation - this allows to trigger events correctly when a
    project was generated with a class given as a parameter
-   **In order to benefit from the cache, a project and active branch
    seeds must be regenerated**

### 0.16.0

-   Updated
    [documentation](https://github.com/jenkinsci/seed-plugin/wiki/Configuration-parameters)
    of the configuration parameters
-   Introduced the **pipeline-start-auto** configuration parameter to
    disable the pipeline to start automatically upon pipeline generation

### 0.15.0

-   [\#13](https://github.com/jenkinsci/seed-plugin/issues/13) Support
    credentials for the repository containing the pipeline libraries

### 0.14.2 & 0.14.3

-   [\#14](https://github.com/jenkinsci/seed-plugin/issues/14) Webhook
    problem "Cannot find job in path with name"

### 0.14.1

-   Added more traces in case of error like a job not being found

### 0.14.0

-   [\#12](https://github.com/jenkinsci/seed-plugin/issues/12) - using a
    shell script instead of a Gradle step to launch to resolution of
    pipeline libraries

### 0.13.0

-   [\#11](https://github.com/jenkinsci/seed-plugin/issues/11) - the
    computed SEED\_BRANCH variable didn't escape the / character for
    custom naming strategies, causing issues with Git-based projects
-   [\#8](https://github.com/jenkinsci/seed-plugin/issues/8) - Auto
    refresh when using a version range for pipeline libraries

### 0.12.0

-   [\#6](https://github.com/jenkinsci/seed-plugin/issues/6) - Github
    trigger: one seed definition change must trigger the seed event

### 0.11.2

-   [\#4](https://github.com/jenkinsci/seed-plugin/issues/4) - Support
    for [pipeline name different than branch
    path](https://github.com/jenkinsci/seed-plugin/wiki/Branch-SCM-path) -
    correction

### 0.11.1

-   [\#2](https://github.com/jenkinsci/seed-plugin/issues/2) - Allow
    extensions on the project generator

### 0.11.0

-   [\#4](https://github.com/jenkinsci/seed-plugin/issues/4) - Support
    for [pipeline name different than branch
    path](https://github.com/jenkinsci/seed-plugin/wiki/Branch-SCM-path) -
    regression fixed in 0.11.2
-   [\#3](https://github.com/jenkinsci/seed-plugin/issues/3) - Support
    for [additional
    parameters](https://github.com/jenkinsci/seed-plugin/wiki/Extensions)

### 0.10.0

-   ﻿[\#1](https://github.com/jenkinsci/seed-plugin/issues/1) -
    correction for the declaration of dependencies

### 0.9.0

-   Technical release to enable automated publication of the release
    from the [build](https://jenkins.nemerosa.net/job/seed-plugin/)

### 0.8.0

-   Initial published version
