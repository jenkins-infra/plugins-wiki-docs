
[  
![Build
Status](https://ci.jenkins.io/buildStatus/icon?job=Plugins/delphix-plugin/master)](https://ci.jenkins.io/job/Plugins/job/delphix-plugin/)
[![Jenkins
Plugins](https://img.shields.io/jenkins/plugin/v/delphix.svg)](https://plugins.jenkins.io/delphix)
[![License](https://img.shields.io/github/license/jenkinsci/delphix-plugin.svg)](https://wiki.jenkins.io/LICENSE)

The Delphix Plugin allows Jenkins to connect to multiple Delphix Engines
and execute operations on Self Service Containers and Self Service
Bookmarks.

#### Table of Contents

1.  [Description](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#description)
2.  [Installation](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#installation)
3.  [Delphix Engine
    Requirements](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#requirements)
4.  [Usage](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#usage)
5.  [Links](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#links)
6.  [Contribute](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#contribute)
    -   [Code of
        conduct](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#code-of-conduct)
    -   [Community
        Guidelines](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#community-guidelines)
    -   [Contributor
        Agreement](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#contributor-agreement)
7.  [Reporting
    Issues](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#reporting-issues)
8.  [Statement of
    Support](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#statement-of-support)
9.  [License](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin#license)

## Description

This plugin is designed to automate routine and/or triggered jobs with
Delphix Self Service Containers and Bookmarks. An example automation
would be during a build phase, if some automated tests failed while
running in a database, that Self Service Container could have it's
current state bookmarked, and that bookmark could be shared with the
rest of the team. It might also be required to refresh a development
database from the production source during deployment. These are just a
few examples of possible automations.

## Installation

Install through Jenkins Plugin Manager or download
[here](https://plugins.jenkins.io/delphix).

## Delphix Engine Requirements

Delphix Engine v5.0.0 or higher.

## Usage

#### Global Configuration

After the plugin has been installed, Delphix engines will need to be
connected. Go to System Configuration page, scroll down to the Delphix
section. Enter your Engine Address, Username, and password, then click
"Test Connection". If Jenkins is able to reach the engine and log in,
you will see a "Login Successful" reply message. If you wish to add
multiple engines, click the "Add Engine" button for each engine you wish
to connect to Jenkins.

#### Self Service Container

To interact with Self Service Containers, select "Delphix - Self Service
Container" from the "Add Build Step" drop down in the Build phase
section. Select an engine that was configured in the global
configuration, select one of the operations listed below. Depending on
the operation selected, it will either depend on a specified Self
Service Container or a Bookmark. Read more about [Delphix Self Service
Containers](https://docs.delphix.com/docs/delphix-self-service/delphix-self-service-admin-guide/understanding-data-containers).

Available Operations:

-   refresh
-   restore
-   reset
-   enable
-   disable
-   recover
-   undo
-   lock
-   unlock

#### Self Service Bookmark

To interact with Self Service Bookmarks, select "Delphix - Self Service
Bookmark" from the "Add Build Step" drop down in the Build phase
section. Select an engine that was configured in the global
configuration, select one of the operations listed below. Depending on
the operation selected, it will either depend on a specified Self
Service Container or a Bookmark. Read more about [Delphix Self Service
Bookmarks](https://docs.delphix.com/docs/delphix-self-service/delphix-self-service-admin-guide/understanding-bookmarks).

Available Operations:

-   create
-   delete
-   share
-   unshare

#### Advanced Settings

It is possible to share assets created between build steps. For
instance, if you wanted to create a bookmark from a container and then
restore a different container with the newly created bookmark. The
create operation for both Self Service Containers and Bookmarks will
have their output saved if the "Save to Properties" box is checked. The
Self Service Container operation "restore" requires a Bookmark for
reference. This Bookmark can be loaded a previous build step when "Load
Bookmark from Properties" is checked. Likewise, the referenced Self
Service Container in the Bookmark build step can be loaded from the
properties file.

## Links

-   [Delphix Plugin Jenkins Wiki
    Page](https://wiki.jenkins.io/display/JENKINS/Delphix+Plugin)
-   [Jenkins Plugin Delphix Page](https://plugins.jenkins.io/delphix)

## Contribute

1.  Fork the project.
2.  Make your bug fix or new feature.
3.  Add tests for your code.
4.  Send a pull request.

Contributions must be signed as `User Name <user@email.com>`. Make sure
to [set up Git with user name and email
address](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).
Bug fixes should branch from the current stable branch. New features
should be based on the `master` branch.

#### Code of Conduct

This project operates under the [Delphix Code of
Conduct](https://delphix.github.io/code-of-conduct.html). By
participating in this project you agree to abide by its terms.

#### Contributor Agreement

All contributors are required to sign the Delphix Contributor agreement
prior to contributing code to an open source repository. This process is
handled automatically by [cla-assistant](https://cla-assistant.io/).
Simply open a pull request and a bot will automatically check to see if
you have signed the latest agreement. If not, you will be prompted to do
so as part of the pull request process. Read the full [Delphix
Contributor License
Agreement](https://delphix.github.io/contributor-agreement.html).

## Reporting Issues

Please submit bug reports, suggestions and pull requests to the [GitHub
issue tracker](https://github.com/jenkinsci/delphix-plugin/issues).

## Statement of Support

This software is provided as-is, without warranty of any kind or
commercial support through Delphix. See the associated license for
additional details. Questions, issues, feature requests, and
contributions should be directed to the community as outlined in the
[Delphix Community
Guidelines](https://delphix.github.io/community-guidelines.html).

## License

This is code is licensed under the Apache License 2.0. Full license is
available [here](https://wiki.jenkins.io/LICENSE).

 

 
