This plugin runs your jobs in the [RVM](http://rvm.io/) managed
ruby+gemset of your choice.

# Features

-   Runs your entire build (from SCM check out to post-build actions)
    within the context of an RVM managed environment of your choice (as
    opposed to your doing "source \~/.rvm/scripts/rvm && rvm foo@bar",
    which only affects your current shell)
-   If the Ruby/gemset you specified doesn't exist on a slave that the
    build is running, it'll be automatically installed and created (via
    `rvm_install_on_use_flag`)

# Configuration

Once this plugin is installed, you'll see the "Run the build in a
RVM-managed environment" option under the "Build Environment" section.
Click the checkbox, then type in the Ruby implementation name in the
text box. The implementation name is of the form `RUBY[@GEMEST]`. See
[the RVM documentation](http://rvm.io/rubies/installing/) and the output
of `rvm list known` for possible values.

# History

### Version 0.6 (Aug 10, 2016)

-   Bug fixes
    -   Fix an issue when project name contains spaces ([GitHub
        PR\#18](https://github.com/jenkinsci/rvm-plugin/pull/18))
    -   Fix a RVM detection issue on slave ([GitHub
        PR\#19](https://github.com/jenkinsci/rvm-plugin/pull/19))

### Version 0.5

-   Not released in pubilc

### Version 0.4 (Mar 05, 2013)

-   (Released unofficially)
-   Added [Token Macro
    plugin](https://wiki.jenkins-ci.org/display/JENKINS/Token+Macro+Plugin) support

### Version 0.3 (Apr 03, 2012)

-   Migrated to GitHub

### Version 0.2 (Jan 24, 2012)

-   Now auto-installs RVM itself if not installed

### Version 0.1 (Dec 31, 2011)

-   First release
