This plugin integrates [Darcs](http://darcs.net/) version control system
to Jenkins. The plugin requires the Darcs binary (darcs) to be installed
on the target machine.

  
With this plugin, you can designate a Darcs repository as the "upstream"
repository. Every build will then run "darcs pull" to bring the tip of
this upstream repository. In a similar manner, polling will check if the
upstream repository contains any new changes, and use that as the
triggering condition of the new build.

## Changelog

### 0.2.0

-   Main SCM functionality implemented.

### 0.2.1

-   Sax parser handles file moves in changeset.

### 0.2.2

-   Bugfixes.

### 0.3.0

-   Implementation of SCM browsers.
-   Integration of Darcsweb.
-   Improved inter changeset links.

### 0.3.1

-   Implemeted file diff link for Darcsweb.

### 0.3.2

-   Factored out darcs command as abstracted object from SCM class.
-   Fixed changelog parser stripped of whitespaces from patch names and
    comments.
-   Fixed Findbug and PMD issues.
-   Implemented revision state and polling.
-   Fixed add/remove dir tag recognition.
-   Fixed comment/name parsing.

### 0.3.3

-   Betetr revision state logging.
-   ChangeSets in the ChangeSetList are sorted by darcs hash for digest
    calculation.
-   Fixed issue 4: Check polling when patches are removed

### 0.3.4

-   Implemented XML sanitizing for mixed character encoding in Darcs XML
    output (Issue 1).

### 0.3.5

-   URI input form validation for Darcsweb and Darcsden code browsers.
-   Stripping of 'Ignore-this: ...' from patch comments.

### 0.3.6

-   Add config option for local path.
-   Set core dependnecy to LTS 1.480.

### 0.3.7

-   Bug fixing (NPE and init checkout problms with new local path
    feature).
-   Refactoring and code cleaning.
-   Increase test coverage
-   Increase Javadoc.

### 0.3.8

-   Fix issues with deserializing global plugin config from older
    versions throws exception(\#11).
-   Known issue: Old global plugin config is not loaded.
-   Use job directory as working directory for darcs.

### 0.3.9

-   Refactoring of Darcs command abstraction.
-   Fix NPE on calculating first revision state (issue \#13).

### 0.3.10

-   Fix NPE: Because of serialization issues with the main the changelog
    parse may be null on build time (issue \#13).

### 0.3.11

-   Fix problem that old configuration files won't be loaded correctly
    from versions prior to 0.3.6.
