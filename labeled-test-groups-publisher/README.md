This plugin provides the functionality to group tests by types, such as
"unit test", "smoke test", "regression test", etc.  
This is useful for situations where different tests share the same test
output format, but you want to display the results separately.

This plugin automatically converts JUnit Result Archiver and CPPUnit
publishers to use the Labeled Test Groups Publisher. It automatically
finds any jobs that use the JUnit Result Archiver, or CPPUnit publisher,
and converts those publishers into groups within the "unit" group within
a new Labeled Test Group Publisher. **This conversion will not be
persisted unless a job's configuration is explicitly edited by the
user.** The kinds of test result publishers that will be automatically
converted are JUnit test result archiver and CppUnit test result
archiver.

**If you do not want your JUnit and CPPUnit publishers to be converted
automatically, recompile the plugin with ENABLE\_CONVERSIONS = false in
ConvertToLabeledGroupsConverter.java.**

# Coding Tasks

-   Fix reported tasks in the "Open Issues" JIRA.
-   Get rid of utilitybuilders.hpi plugins in test @LocalData's. There's
    a TouchBuilder in core now.
-   Look at EnhancedTestCase. Can it be eliminated? All of those methods
    should probably go into HudsonTestCase.
-   Lots of tests are marked SKIP\_testFoo. I think they will mostly all
    work, though. Try turning them on and make sure.

# Changelog

#### Version 1.2.8 (Nov 20, 2015)

-   \[[JENKINS-30711](https://issues.jenkins-ci.org/browse/JENKINS-30711)\]
    A bug where the parser name wouldn't load correctly is now fixed.
-   \[[JENKINS-20979](https://issues.jenkins-ci.org/browse/JENKINS-20979)\]
    No more waiting on concurrent builds!

#### Version 1.2.7 (Mar 16, 2015)

-   Added the ability to configure test group labels. Free labels for
    everyone!
-   Updated the pom to have git instead of svn, jenkins-deployability,
    added current maintainer.

#### Version 1.2.6 (Mar 20, 2010)

-   Fixed problem where parser names were not showing up in the drop
    down menu.

#### Version 1.2.4

-   First public version
