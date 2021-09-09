# Features

This plugin implements a build cause run condition to be used by the
[Run Condition
Plugin](http://localhost:8085/display/JENKINS/Run+Condition+Plugin).

## Build Cause Condition

This provides an ExtensionPoint that can be used by plugins to define
new extended causes, for example this should be done for any trigger
that provides its Cause type that make provide extra information that
can be used.

Implemented:

-   Started by a User  
    This cause allows you to only run the condition when a particular
    user(s) starts the build.  
    if the users field is empty, it treats this as any user started
    build returns true.

For example:  
Can be used to ignore all build requests from a particular user if they
are abusing the build now button.

-   Started by upstream project  
    This cause allows you to only run the condition when a particular
    project(s) starts the build.  
    If the projects field is empty, it treats this as any project
    started build returns true.

For example:  
This allows configurations to perform different actions based which
upstream job started this one, this will allow you to collect artefacts
from just that upstream project rather than all of them.

##### Other Cause Conditions are currently implemented in other plugins

**Content by label**

There is no content with the specified labels

If your plugin is not shown here and you have implemented the
BuildCauseCondition Extension point, add the label
"plugin-build-cause-run-condition-provider" to the wiki page.

##### Implementing you own build cause condition

This requires at minimum just three items  
Class extending BuildCauseCondition and providing its Descriptor
extending BuildCauseConditionDescriptor  

 See Example Code

**main/java/org/jenkins-ci/plugins/exampletrigger/ExampleCauseCondition.java**

``` syntaxhighlighter-pre
package org.jenkins-ci.plugins.exampletrigger;

public static class ExampleCauseCondition extends BuildCauseCondition {

    @DataBoundConstructor
    public ExampleCauseCondition() {
    }

    /**
     * Performs the check of the condition
     *
     * @return true if the condition is allowed
     *         false if not allowed to proceed.
     */
    public boolean runPerform(final AbstractBuild<?, ?> build, final BuildListener listener) throws InterruptedException {
        List<Cause> buildCauses = build.getRootBuild().getCauses();

        for (Cause cause : buildCauses) {
            if (Cause.ExampleCause.class.isInstance(cause)) {
                                return true;
             }
        }
        return false;
    }

    @Extension
    public static class ExampleCauseConditionDescriptor extends BuildCauseConditionDescriptor {

        @Override
        public String getDisplayName() {
            return "Example Cause"
        }
        
    }
}
```

and also a config.jelly file to display it.

 See Example Code

**main/resources/org/jenkins-ci/plugins/exampletrigger/ExampleCauseCondition/config.jelly**

``` syntaxhighlighter-pre
<?jelly escape-by-default='true'?>
<j:jelly xmlns:j="jelly:core" xmlns:f="/lib/form" />
```

For other examples see the implementations of UserCause and
UpstreamCause in the plugin on github.

# Change log

#### 0.1 (25/7/2012)

-   Initial version

Questions, Comments, Bugs and Feature Requests

Please post questions or comments about this plugin to the [Jenkins User
mailing list](http://jenkins-ci.org/content/mailing-lists).  
To report a bug or request an enhancement to this plugin please create a
ticket in JIRA.
