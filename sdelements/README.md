# Jenkins SD Elements plugin

Jenkins integration for the [SD
Elements](https://www.securitycompass.com/sdelements) policy and risk
management platform by [Security
Compass](https://www.securitycompass.com/).

## About

SD Elements is a platform that translates policies to prescriptive,
measurable procedures that are used by IT and Engineering teams to
achieve their security and compliance objectives. SD Elements generates
and tracks granular controls with a flexible rule-based engine and
integrates those controls into ALMs and enterprise workflows used by
development teams, including those leveraging DevOps. The platform
provides an accurate view into the risk and compliance status of
applications in development.

This plugin will allow users to add a post-build action to pass/fail
their job, based on the compliance status to a given project's risk
policy.

## Features

-   Configure SD Elements servers in Jenkins global configuration
    (Jenkins -\> Configure system)
-   Configure post-build action in Jenkins job to check for risk
    compliance:
    -   Configure project ID from SD Elements
    -   Chose SD Elements server (from the one configured globally)
-   Post-build step will query project risk compliance:
    -   Risk status pass allows successful build
    -   Risk status fail fails the build, but configuration allows to
        set unstable
    -   Failure to determine risk status will fail the build, error
        message can be found in build console output
    -   If mandatory SD Element project survey isn't completed, job
        fails

UI and summary:

-   Left menu `SD Elements` links SD Elements server URL configured for
    the job
-   In summary section `SD Elements Risk Status` links to the project
    page in SD Elements for the project configured in the job

## Getting started

*See also screenshots below*.

### Configuring credentials

The plugin only supports the usage of credentials using a generated
token. You need to generate a token in SD Elements for your user that
can read the status of projects. You do that by clicking `<your name>`
in the upper right corner, and the `api` and then you generate your
token by clicking the `Generate` button.

Once you've created your SD Elements token you need to create an
instance of your SD Elements server configuration in Jenkins:

`Manage Jenkins` -\> `Configure system` -\>
`Security Compass SD Elements configuration`

Fill in a chosen name for the connection, server address and add a
credential to use. For this you need to use the `Secret text` where you
put in your generated api token.

### Finding your Project ID

In order to obtain your project id for use in a job, you need to log
into SD Elements using a browser first. Use your username and password.

Then browse to the project and open its Overview page, its ID is
displayed below the project name. In the example below, the ID is 2455.

![](https://github.com/jenkinsci/sdelements-plugin/blob/master/docs/project_overview_project_id.png?raw=true){height="400"}

Once you've determined the project id to use, and have setup a server
you can go ahead a configure a job, in the job configuration page click
the following:

`Add post-build action` -\> `SD Elements`

Select your configured sd elements server and fill in the project id
you've just obtained.

## Screenshots

### Jenkins -\> Configure System

Also called global configuration:

![](https://github.com/jenkinsci/sdelements-plugin/blob/master/docs/global-configuration.png?raw=true){height="150"}

\* Credentials must be type `Secret text`, where you supply the SD
Elements API token.

### Project page (job page)

Shows latest status for last build checking risk status.

Below it **Shows unable to determine risk compliance**, e.g. when it can
be found due to configuration errors like wrong server URL,
authentication and like. Check console log for description of the
problem.

    Invalid token in credentials
        401 Unauthorized
        SD Elements compliance status: Undetermined
        Build step 'SD Elements' changed build result to FAILURE

![Project page - unable to determine risk
status](https://github.com/jenkinsci/sdelements-plugin/blob/master/docs/project-page-unable-to-determine-risk-compliance.png?raw=true){height="400"}

### Build pages

Build pages shows historic results for each builds, but the graphics are
the same as on the project page. Examples:

**Build successful when risk status pass:** 

![Build successful when risk status
pass](https://github.com/jenkinsci/sdelements-plugin/blob/master/docs/build-page-risk-status-pass.png?raw=true){height="250"}

**Build fails when risk status fails:** 

![Build fails when risk status
fails](https://github.com/jenkinsci/sdelements-plugin/blob/master/docs/build-page-risk-status-fail.png?raw=true){height="250"}

**Configuration can set build status unstable when risk status fails:** 

![Build fails when risk status
fails](https://github.com/jenkinsci/sdelements-plugin/blob/master/docs/build-page-risk-status-fail-job-configured-unstable.png?raw=true){height="250"}

**Build will fail when mandatory survey in SD Elements isn't
completed:** 

![Build will fail when mandatory survey in SD Elements isn't
completed](https://github.com/jenkinsci/sdelements-plugin/blob/master/docs/build-page-risk-status-undetermined-survey-not-completed.png?raw=true){height="250"}
