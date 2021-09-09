| Plugin Information                                                                            |
|-----------------------------------------------------------------------------------------------|
| View Kanboard [on the plugin site](https://plugins.jenkins.io/kanboard) for more information. |

Older versions of this plugin may not be safe to use. Please review the
following warnings before using an older version:

-   [CSRF
    vulnerability](https://jenkins.io/security/advisory/2019-01-28/#SECURITY-818)

Allows users to create or update a [Kanboard](https://kanboard.net/)
task as a post-build action, trigger a build when a task is created or
moved, and fetch a task and its attachments as a build
step.[Kanboard](https://kanboard.net/) is an open source tool to manage
projects using a Lean
[Kanban](https://en.wikipedia.org/wiki/Kanban_(development)) approach.

**Requires Kanboard version \>= 1.0.36.**

### Change Log

##### Versions 1.5.9-1.5.11 (Sep 25, 2018)

-   Security fixes.

##### Version 1.5.8 (Mar 13, 2017)

-   The plugin now allows task tags management. You can add new tags (or
    remove existing ones) using a comma separated string of tags. Prefix
    a tag with "-" to remove it.

##### Version 1.5.7 (Dec 20, 2016)

-   A Kanboard task attachment maximum allowed size can be defined in
    the global configuration, attachments of a bigger size won't be sent
    to the Kanboard server.

##### Version 1.5.6 (Dec 18, 2016)

-   Renamed from kanboard-publisher-plugin to kanboard-plugin.

##### Version 1.5.4 (Dec 17, 2016)

-   Trigger now also fires on task move (column change), it was only
    available on task creation before.

##### Version 1.5.1 (Dec 16, 2016)

-   A new build step is now available that allows to fetch a Kanboard
    task and some of its attachments available through the
    KANBOARD\_TASKJSON and a few others environment variables.

##### Version 1.4 (Dec 16, 2016)

-   Can trigger a build when a Kanboard task is created, the
    corresponding task reference is exported to the KANBOARD\_TASKREF
    build environment variable.

##### Version 1.3.3 (Dec 15, 2016)

-   Allow to define task color via the KANBOARD\_TASKCOLOR environment
    variable.

##### Version 1.3.1 (Dec 14, 2016)

-   Internationalization and french translation added.

##### Version 1.2 (Dec 09, 2016)

-   Debug mode now globally configurable and disabled by default.

##### Version 1.1 (Dec 08, 2016)

-   Export Kanboard task URL as KANBOARD\_TASKURL environment variable.

##### Version 1.0 (Dec 06, 2016)

-   Initial version (requires Kanboard version \>= 1.0.31).

### Screenshots

![](docs/images/2016-12-19_23h22_47.png)

![](docs/images/2016-12-09_19h01_33.png)

![](docs/images/2016-12-19_23h26_41.png)

![](docs/images/2016-12-16_17h12_37.png)
