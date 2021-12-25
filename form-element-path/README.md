# What is this?

This plugin adds distinctive `path` attributes to every form elements
inside Jenkins so that automated test programs like Selenium can be used
more effectively to automate/test Jenkins.

### How it works

With this plugin enabled, every control inside a form gets the `path`
attribute. The value of this attribute is something like
"/hudson-tasks-ArtifactArchiver/artifacts", and is modeled after XPath.

Configuration pages in Jenkins are assmbled from small pieces that
plugins contribute. Furthermore, in general they form a tree structure,
and each such fragment can be used multiple times in different context.
For example, think of [Conditional BuildStep
Plugin](https://wiki.jenkins.io/display/JENKINS/Conditional+BuildStep+Plugin)
that allows you to add arbitrary builder as a nested builder inside the
"conditional build step" builder.

Because of this reusability of fragments, the `id` and `name` attributes
cannot be used reliably to point to a specific fragment. That's why we
need XPath-like expression.

### Find a path that's assigned to element

Use JavaScript DOM inspector in your browser to pick up an
INPUT/BUTTON/SELECT elements, and look for the `path` attribute.

# Compatibility

This plugin works with 1.424 and later. When you interact with form and
cause DOM changes, you can call `recomputeFormElementPath()` function
from JavaScript to recompute Path to reflect DOM changes.

With Jenkins 1.452 and later, this explicit invocation is unnecessary.

# Changelog

### Version 1.8 (November 4th, 2016)

-   [JENKINS-38928](https://issues.jenkins-ci.org/browse/JENKINS-38928):
    Fix apply button behaviour

### Version 1.7 (October 20th, 2016)

-   Restore 1.580 support
-   [JENKINS-37276](https://issues.jenkins-ci.org/browse/JENKINS-37276):
    Path attributes can change value if reordered

### Version 1.6 (July 8th, 2016)

-   Requires Jenkins 1.609.3 or later
-   Include script.js through adjunct

### Version 1.0 (June 22, 2012)

-   Initial release
