**[Plugin
site](https://plugins.jenkins.io/multibranch-build-strategy-extension)**

  

  

**Purpose**

This plugin provides addition configuration to prevent multi branch
projects from triggering new builds

based on a include or exclude regions in source repository.

  

  

  

**Setup**

Let's say you don't want your ci to run on README or .gitignore or any
.html file change

  

  

![](docs/images/plugin-options.png){height="250"}

On multibranch job go to Build Strategy section , click add button and
select

Cancel build excluded regions strategy

  

  

![](docs/images/exclude.png){height="250"}

  

fill the textarea with ant style exclusions:

[    README.md](http://readme.md/)

    .gitignore

     \*\*/\*.html

  

  

  
