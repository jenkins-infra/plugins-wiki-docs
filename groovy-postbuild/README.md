
This plugin executes a groovy script in the Jenkins JVM. Typically, the
script checks some conditions and changes accordingly the build result,
puts badges next to the build in the build history and/or displays
information on the build summary page.

## Migration from 1.X

From version 2.0, Groovy Postbuild plugin introduces [Script Security
Plugin](https://wiki.jenkins.io/display/JENKINS/Script+Security+Plugin).  
Administrators can prevent users without proper privileges from running
harmful scripts.  
For details, see [Script Security
Plugin](https://wiki.jenkins.io/display/JENKINS/Script+Security+Plugin).  
This doesn't affect [Jenkins without security
enabled](https://wiki.jenkins.io/display/JENKINS/Securing+Jenkins) and
users with administrative privilege (to be exact, with RUN\_SCRIPTS
permission).

When you upgrade the Groovy Postbuild plugin from 1.X to 2.X, you and
your Jenkins users  
also requires update configurations of Groovy Postbuild, or they will
fail with outputs like this:

    ERROR: Failed to evaluate groovy script.
    org.jenkinsci.plugins.scriptsecurity.scripts.UnapprovedUsageException: script not yet approved for use
        at org.jenkinsci.plugins.scriptsecurity.scripts.ScriptApproval.using(ScriptApproval.java:398)
        at org.jenkinsci.plugins.scriptsecurity.sandbox.groovy.SecureGroovyScript.evaluate(SecureGroovyScript.java:165)
        at org.jvnet.hudson.plugins.groovypostbuild.GroovyPostbuildRecorder.perform(GroovyPostbuildRecorder.java:343)
        at hudson.tasks.BuildStepMonitor$1.perform(BuildStepMonitor.java:20)
        at hudson.model.AbstractBuild$AbstractBuildExecution.perform(AbstractBuild.java:785)
        at hudson.model.AbstractBuild$AbstractBuildExecution.performAllBuildSteps(AbstractBuild.java:757)
        at hudson.model.Build$BuildExecution.post2(Build.java:183)
        at hudson.model.AbstractBuild$AbstractBuildExecution.post(AbstractBuild.java:706)
        at hudson.model.Run.execute(Run.java:1690)
        at hudson.model.FreeStyleBuild.run(FreeStyleBuild.java:46)
        at hudson.model.ResourceController.execute(ResourceController.java:88)
        at hudson.model.Executor.run(Executor.java:246)

### Scripts using only whitelisted methods of manager

Scripts using only [whitelisted methods of
manager](https://wiki.jenkins.io/display/JENKINS/Groovy+Postbuild+Plugin#GroovyPostbuildPlugin-Whitelistedmethods)
can run with using Groovy sandbox.  
They can be validated only by checking "Use Groovy Sandbox".

![](docs/images/scriptsecurity-enablesandbox.png)

### Scripts using non-whitelisted methods

Scripts using [non-whitelisted methods of
manager](https://wiki.jenkins.io/display/JENKINS/Groovy+Postbuild+Plugin#GroovyPostbuildPlugin-Non-whitelistedmethods)
or methods not of manager requires  
approval of administrators.

Administrators should check and approve those scripts in Manage Jenkins
\> In-process Script Approval.

![](docs/images/scriptsecurity-approvescript.png)

### Scripts using external jar files

If you refer external jar files from your scripts, you need to have
those jar files approved by administartors.

Administrators should check and approve those jar files in Manage
Jenkins \> In-process Script Approval.

![](docs/images/scriptsecurity-approvejar.png)

### Scripts using external class directories

[Script Security
Plugin](https://wiki.jenkins.io/display/JENKINS/Script+Security+Plugin)
doesn't support class directories.

If you refer external class directories from your scripts, you should
archive them into jar files.  
It can be performed by running a following command:

    jar -cf mylib.jar -C /path/to/classes .

You can use /path/to/mylib.jar as an additonal classpath for scripts.

## Usage

The groovy script can use the variable *manager*, which provides various
methods to decorate your builds.  
Those methods can be classified into *whitelisted methods* and
*non-whitelisted methods*.  
You can always use *Whitelisted methods*, but you can use
*Non-whitelisted methods* only when "Enable groovy postbuild security"
is not enabled (version 1.X) or in scripts approved by administrators
(since version 2.x)

### Whitelisted methods

-   getEnvVariable(key) - get a variable value. (since 1.10)
-   getResult() - get a build result string (like SUCCESS, FAILURE)
    (since 2.2)

&nbsp;

-   logContains(regexp) - returns true if the build log file contains a
    line matching *regexp*.
-   getLogMatcher(regexp) - returns a
    [java.util.regex.Matcher](http://docs.oracle.com/javase/7/docs/api/java/util/regex/Matcher.html)
    for the first occurrence of *regexp* in the build log file.

&nbsp;

-   addShortText(text) - puts a badge with a short text, using the
    default format.
-   addShortText(text, color, background, border, borderColor) - puts a
    badge with a short text, using the specified format.  For Colors
    supported, Google "html color names".
-   addBadge(icon, text) - puts a badge with the given icon and text. In
    addition to the [16x16
    icons](https://github.com/jenkinsci/jenkins/tree/master/war/src/main/webapp/images/16x16)
    offered by Jenkins, groovy-postbuild provides the following icons
    (watch out for duplicates, see Example 5):

    > ![](docs/images/completed.gif) -
    > completed.gif  
    > ![](docs/images/db_in.gif) -
    > db\_in.gif  
    > ![](docs/images/db_out.gif) -
    > db\_out.gif  
    > ![](docs/images/delete.gif) -
    > delete.gif  
    > ![](docs/images/error.gif) -
    > error.gif  
    > ![](docs/images/folder.gif) -
    > folder.gif  
    > ![](docs/images/green.gif) -
    > green.gif  
    > ![](docs/images/info.gif) -
    > info.gif  
    > ![](docs/images/red.gif) -
    > red.gif  
    > ![](docs/images/save.gif) -
    > save.gif  
    > ![](docs/images/success.gif) -
    > success.gif  
    > ![](docs/images/text.gif) -
    > text.gif  
    > ![](docs/images/warning.gif) -
    > warning.gif  
    > ![](docs/images/yellow.gif) -
    > yellow.gif

&nbsp;

-   addBadge(icon, text, link) - like addBadge(icon, text), but the
    Badge icon then actually links to the given link (since 1.8)
-   addInfoBadge(text) - puts a badge with
    ![](docs/images/info.gif)
    info icon and the given text.
-   addWarningBadge(text) - puts a badge with
    ![](docs/images/warning.gif)
    warning icon and the given text.
-   addErrorBadge(text) - puts a badge with
    ![](docs/images/error.gif)
    error icon and the given text.
-   addHtmlBadge(html) - puts a badge with html source (since 2.5).
    Unsafe html codes will be removed.
-   removeBadges() - removes all badges from the current build. It is
    often used with `setBuildNumber`.
-   removeBadge(index) - removes the badge with the given index. It is
    often used with `setBuildNumber`.

&nbsp;

-   buildUnstable() - sets the build result to *UNSTABLE*.
-   buildFailure() - sets the build result to *FAILURE*.
-   buildSuccess() - sets the build result to *SUCCESS*.

&nbsp;

-   buildIsA(klass) - test the build is a specified class (since 2.0)

### Non-whitelisted methods

Methods returning non-primitive objects aren't whitelisted as
groovy-postbuild doesn't ensure every methods of those objects are safe.

-   hudson - the current Hudson instance (see
    [hudson.model.Hudson](http://javadoc.jenkins-ci.org/index.html?hudson/model/Hudson.html)).
-   build - the current build (see
    [hudson.model.AbstractBuild](http://javadoc.jenkins-ci.org/index.html?hudson/model/AbstractBuild.html)).
-   listener - the build listener (see
    [hudson.model.BuildListener](http://javadoc.jenkins-ci.org/index.html?hudson/model/BuildListener.html)).

&nbsp;

-   envVars - the build variables map. You can get a variable value with

    ``` syntaxhighlighter-pre
    manager.envVars['varname']
    ```

    You shouldn't update values. This isn't whitelisted, and it is
    recommended to use `getEnvVariable(key)` instead. (since 1.10)

&nbsp;

-   contains(file, regexp) - returns true if the given file contains a
    line matching *regexp*. Not whitelisted as it allows users access
    any files (for example, a file containing passwords).
-   getMatcher(file, regexp) - returns a
    [java.util.regex.Matcher](http://docs.oracle.com/javase/7/docs/api/java/util/regex/Matcher.html)
    for the first occurrence of *regexp* in the given file.

&nbsp;

-   setBuildNumber(number) - sets the build with the given number as
    current build. The current build is the target of all methods that
    add or remove badges and summaries or change the build result.

&nbsp;

-   createSummary(icon) - creates an entry in the build summary page and
    returns a *summary* object corresponding to this entry. The icon
    must be one of the [48x48
    icons](https://github.com/jenkinsci/jenkins/tree/master/war/src/main/webapp/images/48x48)
    offered by Jenkins. You can append text to the *summary* object by
    calling its *appendText* methods. Be careful appending
    HTML-unescaped texts as they can be harmful.
    -   appendText(text, escapeHtml)
    -   appendText(text, escapeHtml, bold, italic, color)
-   removeSummaries() - removes all summaries from the current build.
-   removeSummary(index) - removes the summary with the given index.

### Rest interfaces

It is also possible to delete badges and summaries by using the
following links:

-   remove all badges:
    -   `http``://``your-jenkins``/job/``your-job``/``build-number``/parent/parent/plugin/groovy-postbuild/removeBadges`

&nbsp;

-   remove all summaries:
    -   `http``://``your-jenkins``/job/``your-job``/``build-number``/parent/parent/plugin/groovy-postbuild/removeSummaries`

&nbsp;

-   remove the badge with the given index:
    -   `http``://``your-jenkins``/job/``your-job``/``build-number``/parent/parent/plugin/groovy-postbuild/removeBadge?index=``idx`

&nbsp;

-   remove the summary with the given index:
    -   `http``://``your-jenkins``/job/``your-job``/``build-number``/parent/parent/plugin/groovy-postbuild/removeSummary?index=``idx`

### Example usages

#### Example 1

The script below puts a warning badge and mark the build as unstable if
it detects that deprecated methods were used.

``` syntaxhighlighter-pre
if(manager.logContains(".*uses or overrides a deprecated API.*")) {
    manager.addWarningBadge("Thou shalt not use deprecated methods.")
    manager.createSummary("warning.gif").appendText("<h1>You have been warned!</h1>", false, false, false, "red")
    manager.buildUnstable()
}
```

[TABLE]

#### Example 2

Suppose we have a parameterized build, which uses the boolean parameter
*storeToDB* in order to instruct the build to store some artifacts into
the database. The script below puts a badge next to the builds for which
this parameter is set.

``` syntaxhighlighter-pre
if("true".equals(manager.build.buildVariables.get("storeToDB"))) {
    manager.addBadge("db_in.gif", "Stored to DB")
}
```

![](docs/images/example2.GIF)

#### Example 3

Suppose we have a parameterized build, which uses the string parameter
*version*. The script below puts a short text indicating the value of
this parameter next to successful and unstable builds.

``` syntaxhighlighter-pre
if(manager.build.result.isBetterOrEqualTo(hudson.model.Result.UNSTABLE)) {
    manager.addShortText("v${manager.build.buildVariables.get('version')}")
}
```

![](docs/images/example3.GIF)

#### Example 4

The script below determines how long it took to build the project and
displays the corresponding value as a short text next to each build.

``` syntaxhighlighter-pre
def matcher = manager.getLogMatcher(".*Total time: (.*)\$")
if(matcher?.matches()) {
    manager.addShortText(matcher.group(1), "grey", "white", "0px", "white")
}
```

![](docs/images/example4.GIF)

#### Example 5

For badges, you can choose from the [16x16
icons](https://github.com/jenkinsci/jenkins/tree/master/war/src/main/webapp/images/16x16)
provided by Jenkins or from the icons provided by this plugin. Some of
the names of groovy-postbuild icons conflict with the names of Jenkins
icons (e.g. yellow.gif). For these icons, you have to provide the
complete path (e.g. /images/16x16/yellow.gif), in case you want a badge
with the Jenkins icon. You can also use icons provided by other plugins
(e.g. [Green
Balls](http://wiki.jenkins-ci.org/display/JENKINS/Green+Balls)), by
specifying the complete path to the icon.

``` syntaxhighlighter-pre
manager.addBadge("star-gold.gif", "icon from Jenkins")
manager.addBadge("yellow.gif", "icon from groovy-postbuild plugin")
manager.addBadge("/images/16x16/yellow.gif", "icon from Jenkins")
manager.addBadge("/plugin/greenballs/16x16/green.gif", "icon from greenballs plugin")
```

![](docs/images/example5.GIF)

#### Example 6

The script below displays on the build summary page all classes that use
Sun proprietary API.

``` syntaxhighlighter-pre
pattern = ~/.*src\/main\/java\/(.*)\.java:[^ ]* (.*) is Sun proprietary API and may be removed in a future release.*/
def map = [:]
manager.build.logFile.eachLine { line ->
    matcher = pattern.matcher(line)
    if(matcher.matches()) {
        ownClass = matcher.group(1).replaceAll("/", ".")
        sunClass = matcher.group(2)
        map[ownClass] = sunClass
    }
}
if(map.size() > 0) {
    def summary = manager.createSummary("warning.gif")
    summary.appendText("Classes using Sun proprietary API:<ul>", false)
    map.each {
        summary.appendText("<li><b>$it.key</b> - uses $it.value</li>", false)
    }
    summary.appendText("</ul>", false)
}
```

![](docs/images/example6.GIF)

#### Example 7

The script below removes all badges and summaries from previous builds.

``` syntaxhighlighter-pre
currentBuildNumber = manager.build.number
for(i=1; i<currentBuildNumber; i++) {
    if(manager.setBuildNumber(i)) {
        manager.removeBadges()
        manager.removeSummaries()
    }
}
```

#### Example 8

The script below marks the running build as deployed and the previous
build as undeployed.

``` syntaxhighlighter-pre
manager.addShortText("deployed")
manager.createSummary("gear2.gif").appendText("<h2>Successfully deployed</h2>", false)

currentBuildNumber = manager.build.number
if(manager.setBuildNumber(currentBuildNumber - 1)) {
   actions = manager.build.actions
    actions.each { action ->
        if (action.metaClass.hasProperty(action, "text") && action.text.contains("deployed")) {
            actions.remove(action)
        }
    }
    currDate = new Date().dateTimeString
    manager.addShortText("undeployed: $currDate", "grey", "white", "0px", "white")
    manager.createSummary("gear2.gif").appendText("<h2>Undeployed: $currDate</h2>", false, false, false, "grey")
}
```

![](docs/images/example8.GIF)

#### Example 9 (thanks to Ken Bertelson)

The script below changes the description of the first failed test.

``` syntaxhighlighter-pre
def tr = manager.build.testResultAction.result
def cr = tr.failedTests.get(0)
cr.description = "My CaseResult desc"
```

#### Example 10 (thanks to Frank Merrow)

Trivial, but hard to find the first time: Write a line to the job's
Console Output:

``` syntaxhighlighter-pre
manager.listener.logger.println("I want to see this line in my job's output");
```

## Issues

To report a bug or request an enhancement to this plugin please create a
ticket in JIRA (you need to login or to sign up for an account). Also
have a look on [How to report an
issue](https://wiki.jenkins.io/display/JENKINS/How+to+report+an+issue)

-   [Open
    Issues](https://issues.jenkins-ci.org/issues/?jql=project%20%3D%20JENKINS%20AND%20status%20in%20(Open%2C%20%22In%20Progress%22%2C%20Reopened%2C%20%22In%20Review%22%2C%20Verified)%20AND%20component%20%3D%20%27groovy-postbuild-plugin%27%20)
-   [Bug
    report](https://issues.jenkins-ci.org/secure/CreateIssueDetails!init.jspa?pid=10172&issuetype=1&components=15685&priority=4&assignee=ikedam)
-   [Request or propose an improvement of existing
    feature](https://issues.jenkins-ci.org/secure/CreateIssueDetails!init.jspa?pid=10172&issuetype=4&components=15685&priority=4)
-   [Request or propose a new
    feature](https://issues.jenkins-ci.org/secure/CreateIssueDetails!init.jspa?pid=10172&issuetype=2&components=15685&priority=4)

  

## Changelog

#### Version 2.5 (Jun 24, 2019)

-   Requires Jenkins-2.121.1 and later.
-   New feature: `addHtmlBadge`  is available [
    JENKINS-57917](https://issues.jenkins.io/browse/JENKINS-57917) -
    Getting issue details... STATUS

    ``` syntaxhighlighter-pre
    manager.addHtmlBadge('<i>Italic text</i>');
    ```

-   groovy-postbuild no longer requires Overall/Administer permission: [
    JENKINS-54262](https://issues.jenkins.io/browse/JENKINS-54262) -
    Getting issue details... STATUS
    -   It caused problems when used with [Authorize Project
        plugin](https://wiki.jenkins.io/display/JENKINS/Authorize+Project+plugin)
-   Suppress "WARNING: Avoid calling getLogFile on ..." when used in
    pipeline jobs.
    -   It gets warned since [Pipeline Job
        Plugin](https://wiki.jenkins.io/display/JENKINS/Pipeline+Job+Plugin)
        2.26.

#### Version 2.4.3 (Nov 18, 2018)

-   FIX: removeSummary / removeSummaries doesn't work (throw
    UnsupportedOperationException)
    ([JENKINS-54184](http://54184@issue/))

#### Version 2.4.2 (Aug 8, 2018)

-   FIX: removeBadge / removeBadges doesn't work (throw
    UnsupportedOperationException)
    ([JENKINS-52043](https://issues.jenkins-ci.org/browse/JENKINS-52043))

#### Version 2.4.1 (May 4, 2018)

-   Have [Build Monitor
    Plugin](https://wiki.jenkins.io/display/JENKINS/Build+Monitor+Plugin)
    not to cause errors.
    ([JENKINS-50420](https://issues.jenkins-ci.org/browse/JENKINS-50420))
    -   Introduced fake `GroovyPostbuildAction`.
    -   The feature of build-monitor to cooperate with groovy-postbuild
        doesn't work yet. It requires the upcoming version of
        build-monitor plugin to have it work again.

#### Version 2.4 (Mar 25, 2018)

-   **Now built for Jenkins-2.60.3 and later**
-   Extract badge and summary features to [Badge
    plugin](https://plugins.jenkins.io/badge)
    ([JENKINS-43992](https://issues.jenkins-ci.org/browse/JENKINS-43992)).  
    -   You can use badge and summary features in pipeline only with
        badge-plugin. See [Badge
        Plugin](https://wiki.jenkins.io/display/JENKINS/Badge+Plugin) for
        more details.
-   Sanitize HTML in the badges.
    -   You no longer be able to use HTML expressions in badge contents.
-   **Don't upgrade to this version if you use [Build Monitor
    Plugin](https://wiki.jenkins.io/display/JENKINS/Build+Monitor+Plugin).**
    -   Groovy-postbuild-2.4 breaks build-moitor-1.12 or earlier. Sorry.
    -   Please postpone upgrading groovy-postbuild till fixing this
        issue:
        [JENKINS-50420](https://issues.jenkins-ci.org/browse/JENKINS-50420)
    -   No new features in groovy-postbuild-2.4, and you can use
        groovy-postbuild-2.3.1.
        -   You can downgrade your groovy-postbuild in the Jenkins
            Plugin Management page.
        -   You can download earlier versions of groovy-postbuild from
            "Archives" link in
            <https://plugins.jenkins.io/groovy-postbuild>
-   Some classes are migrated to badge-plugin. Please change classes in
    your codes if you access those classes:

    | Old Class                                                             | New Class                                             |
    |-----------------------------------------------------------------------|-------------------------------------------------------|
    | org.jvnet.hudson.plugins.groovypostbuild.GroovyPostbuildAction        | com.jenkinsci.plugins.badge.action.BadgeAction        |
    | org.jvnet.hudson.plugins.groovypostbuild.GroovyPostbuildSummaryAction | com.jenkinsci.plugins.badge.action.BadgeSummaryAction |

#### Version 2.3.1 (Feb 7, 2016)

-   Dependency to pipeline (aka. workflow) is optional
    ([JENKINS-32589](https://issues.jenkins-ci.org/browse/JENKINS-32589)).

#### Version 2.3 (Dec 27, 2015)

-   **Now built for Jenkins-1.609 and later**
-   Supports workflow
    ([JENKINS-26918](https://issues.jenkins-ci.org/browse/JENKINS-26918))
    -   You can use `manager` in workflow scripts.

#### Version 2.2.2 (Oct 17, 2015)

-   Added MIT License
    ([JENKINS-21270](https://issues.jenkins-ci.org/browse/JENKINS-21270))

#### Version 2.2.1 (Aug 18, 2015)

-   Improved the behavior with [Template Project
    Plugin](https://wiki.jenkins.io/display/JENKINS/Template+Project+Plugin)
    ([JENKINS-21276](https://issues.jenkins-ci.org/browse/JENKINS-21276))
    -   Prior versions disturbed the execution of [Template Project
        Plugin](https://wiki.jenkins.io/display/JENKINS/Template+Project+Plugin)
        when the build was failed (even if the groovy script succeeded).

#### Version 2.2 (Dec 19, 2014)

-   added getResult() as a whitelisted method
    ([JENKINS-25738](https://issues.jenkins-ci.org/browse/JENKINS-25738))

#### Version 2.1 (Oct 25, 2014)

-   You can access other plugins in groovy scripts
    ([JENKINS-14154](https://issues.jenkins-ci.org/browse/JENKINS-14154))

#### Version 2.0 (Sep 21, 2014)

-   Changed target Jenkins core from 1.466 to 1.509.4.
-   Introduced [Script Security
    Plugin](https://wiki.jenkins.io/display/JENKINS/Script+Security+Plugin).
    ([JENKINS-15212](https://issues.jenkins-ci.org/browse/JENKINS-15212))
    -   You need reconfigure your projects or approve scripts. Have a
        look at [\#Migration from
        1.X](https://wiki.jenkins.io/display/JENKINS/Groovy+Postbuild+Plugin#GroovyPostbuildPlugin-Migrationfrom1.X)
-   Added `manager.buildIsA(klcass)`.
    ([JENKINS-24694](https://issues.jenkins-ci.org/browse/JENKINS-24694))

#### Version 1.10 (July 26, 2014)

-   added `envVars` and `getEnvVariable(key)`

#### Version 1.9 (April 29, 2014)

-   [JENKINS-21924](https://issues.jenkins-ci.org/browse/JENKINS-21924)
    Support run for matrix parent
-   change log level for each search from info to fine

#### Version 1.8 (August 22, 2012)

-   [JENKINS-13024](https://issues.jenkins-ci.org/browse/JENKINS-13024)
    Error in log indicating a missing descriptor
-   added clickable badge
-   Changed required Jenkins version to 1.466

#### Version 1.7 (May 2, 2012)

-   [JENKINS-13024](https://issues.jenkins-ci.org/browse/JENKINS-13024)
    Error in log indicating a missing descriptor

#### Version 1.6

-   [JENKINS-9383](https://issues.jenkins-ci.org/browse/JENKINS-9383)
    security - restrict access to internal objects

Can use now additional classpath for groovy postbuild scripts to have
them in a central location. Scriptler Plugin?

#### Version 1.5 (November 5, 2011)

-   Remove a html tag from the config page which causes an error on IE 7
    ([JENKINS-10079](https://issues.jenkins-ci.org/browse/JENKINS-10079))

  
