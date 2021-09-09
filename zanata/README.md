### Allows users to automate their localization workflow with Zanata Localization service

[Zanata](https://zanata.org/) is an open source translation management
platform.

After you install this jenkins plugin, you can set up a job to perform
typical localization workflow:

-   check out your project from SCM
-   push source (and/or translation) to Zanata server for translators to
    work on
-   pull translation from Zanata server
-   commit translation into SCM (currently only git is supported
    automatically. Other SCM will need to be managed yourself. e.g. via
    scripting)
-   push the commit to remote SCM (using git publisher or equivalent)

### User manual

[Plugin User Manual](http://zanata-jenkins-plugin.readthedocs.io/)
