| Plugin Information                                                                        |
|-------------------------------------------------------------------------------------------|
| View Locale [on the plugin site](https://plugins.jenkins.io/locale) for more information. |

**This plugin is up for adoption.** Want to help improve this plugin?
[Click here to learn
more](http://localhost:8085/display/JENKINS/Adopt+a+Plugin "Adopt a Plugin")!

This plugin controls the language of JenkinsNormally, Jenkins honors the
browser's language preference if a translation is available for the
preferred language, and uses the system default locale for messages
during a build. This plugin allows you to:

-   override the system default locale to the language of your choice
-   ignore browser's language preference completely

This feature is sometimes convenient for multi-lingual environment.

## Usage

Under Manage Jenkins \> Configure System there should be a "Locale"
section.

Here you can enter the "Default Language": this should be a language
code or locale code like "fr" (for French), or "de\_AT" (German, in
Austria).

This value will be used by the system, for example, for messages that
are printed to the log during a build (assuming that the Jenkins
features and plugins that you're using have been translated into the
specified language).

To additionally force this language on all users, overriding their
browser language, you can check the "Ignore browser preference and force
this language to all users" option.

## Changelog

##### Version 1.4 (Nov 01, 2018)

-   ![(info)](docs/images/information.svg)
    [PR \#6](https://github.com/jenkinsci/locale-plugin/pull/6) - Add
    support of the configuration section title localization

##### Version 1.3 (Jun 22, 2018)

-   ![(plus)](docs/images/add.svg) [JENKINS-52131](https://issues.jenkins-ci.org/browse/JENKINS-52131) -
    Provide API for setting the "Ignore Browser Settings" flag
    programatically
-   ![(info)](docs/images/information.svg) [PR
    \#3](https://github.com/jenkinsci/locale-plugin/pull/3/files) -
    Update Plugin POM and tooling in the plugin to suppress warnings
    about obsolete plugin format on Modern Jenkins versions
-   ![(info)](docs/images/information.svg) Update
    minimal Jenkins core requirement to 1.625.3

##### Version 1.2 (Feb 14, 2011)

-   Translate update (Chinese)

##### Version 1.1 (Dec 30, 2009)

-   Update code for recent Hudson.

##### Version 1.0 (Jul 21, 2008)

-   Initial release.
