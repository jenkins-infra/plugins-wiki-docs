
This plugin deploys applications (WAR or EAR files) to a WildFly or
JBoss EAP server or server group.

## Description

##### Features

-   Deploys an application to a WildFly/JBoss server or server group.
-   A single WAR or EAR file must exist in the workspace on the slave
    where the project is run.
-   If the application already exists in the server or server group, it
    is uninstalled first.
-   The WildFly/JBoss server or domain controller can be local or remote
    to the slave where the project is run.
-   This plugin works with WildFly 8 and JBoss EAP 7 and later versions.

##### Configuration

Due to classloading behaviour in the WildFly CLI libraries, the Jenkins
WAR file must be re-assembled (or the expanded Jenkins application
modified) with the following changes.

-   Copy wildfly-cli-8.2.1.Final.jar to /WEB-INF/lib.
-   If using Jenkins version 1.622 or earlier, copy
    log4j-over-slf4j-1.7.7.jar to /WEB-INF/lib, and remove
    the log4j-1.2.\*.jar from /WEB-INF/lib.

## Changelog

#### Version 1.0.2 (Apr 14, 2016)

-   Fixed issue with removal of subdirectory in workspace on repeated
    deployments.

#### Version 1.0.1 (Nov 06, 2015)

-   Fixed issue with re-deploy from a subdirectory of workspace

#### Version 1.0 (Oct 25, 2015)

-   Initial version
