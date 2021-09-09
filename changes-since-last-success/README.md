This plugin adds a build action to aggregate changes from all previous
builds to the last successful one. The primary goal is to generate a
changelog to be used for continuous delivery, as an aggregate for all
changes since the last deployable artifact. 

Additionally, this plugin can be used to generate a changelog for an
arbitrary range of builds :

-   /changes-since-last-success/lastSuccess for the last successful
    build
-   /changes-since-last-success/lastStable for the last stable build
-   /changes-since-last-success/buildNumber/1234 for changes since build
    1234
-   /changes-since-last-success/since/date for changes since specified
    date (using yyyy-MM-dd'T'HH:mm:ss'Z')

**Changelog**

##### 0.5

-   Fix "last successful/stable build" computation to compute from
    current build, not absolute project last success/stable

##### 0.4

-   Change internal design for better flexibility
-   expose aggregated changes as REST API

##### 0.3

-   fix date range computation
-   include range definition in changelog header

##### 0.2

-   add "since" range definition to lookup per date

##### 0.1

-   initial release.
