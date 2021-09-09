This plugin provide integrations with IBM Rational CM/Synergy 6.5a
Version Manager SCM

# Features

### Development and testing projects

Those features applies to projects in the working or prep state.

-   Set the workarea path of an existing project to the location of the
    Hudson project workspace
-   Update the workarea
-   Detect conflicts
-   Create a changelog

This feature apply to projects in the prep state.

-   Create and publish a baseline (always, never or only if the build is
    successful)
-   Copy the tasks from a Synergy folder to another

### Baselined projects

Those features applies to static projects.

-   Copy a snapshot of a project
-   Copy a snapshot of all projects in a baseline

&nbsp;

-   Copy a snapshot of added or changed files between two projects
-   Copy a snapshot of added ot changed files between two baselines
-   Create a changelog

# Requirements

This plugin is using the CLI interface. It has been developed and tested
with Synergy 6.5

# Using multiple nodes

It is possible to build a project on multiple nodes, by creating a copy
of the project for each node. The name of the node must be in the
Synergy project name, and a dynamic project name must be set in the
Synergy plugin.

For example, if the project names match a pattern like "project-NODE"
(where "NODE" is the name of the node), the name of the project in the
Synergy plugin must be "project-${COMPUTERNAME}".

# Configuration

The location of the ccm executable must be set in the system
configuration page.  
Depending on the server, a location for the ccm ui and ccm eng log may
also need to be set.

# Changelog

### 1.7 (17 Sep 2013)

-   Handle spaces inside object names (pull \#8)
-   Updated to 1.424 baseline (pull \#10)
-   Keep passwords secret (pull \#11)
-   Corrected Unix vs. Windows determination on slaves (pull \#12)

### 1.6

Improve change polling : if configured to do so, check change applies to
the project and not only the release.  
Fix starting when a warning is returned by Synergy at login.  
Only auto-configure the workarea if configured to do so.  
Allow to update a project grouping.  
Improve changelog computation speed.  
Fix use of dynamic project name, allowing to build on multiple nodes.  
Don't required the build manager role if not needed.  
Fix subproject path in change log.  
Improve error detection.

Bug fixes  
Baseline "Release" and "Purposes" will be based on the project's if the
fields are left blank
([JENKINS-8613](https://issues.jenkins-ci.org/browse/JENKINS-8613))

### 1.5

Add option to reuse a session.  
Add option to keep or update subprojects when updating a project.  
Add option to abort the build if there are update warnings.  
Add "copy folder" post build function.  
Add "pathname" start parameter.  
Fix location of subproject.  
Fix detection of "No task" conflict.  
Fix checkout of baselined project because the changelog is not computed.

### 1.4

Fix conflict detection.

### 1.3

Support conflict detection. The build fails if conflicts are detected.  
Fix use of the "-rc" flag.  
Fix baseline creation.  
Fail the build if the Synergy update command returns 1.  
Reset workarea path if an obsolete workarea is found (may not handle all
cases)

### 1.2

Support change pooling.  
Support the "-rc" start flag.  
Improve the computation of the modified file paths in the changelog for
subprojects (still needs some work).  
Allow to use the baseline objectname as the baseline name.

### 1.1

Fix end of line handling on UNIX server, which was causing a failure in
the detection of the project state.  
Don't assume the database version delimiter is '\~'

### 1.0

Initial release
