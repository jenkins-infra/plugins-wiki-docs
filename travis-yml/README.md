This plugin runs your jobs using .travis.yml file in your project.

  

## Use

Install by navigating and selecting Manage Jenkins -\> Manage Plugins
-\> Travis YML Plugin

Add to your workspace on the root folder a .travis.yml, this plugin
accept the next phases of lifecycle:

1.  before\_install
2.  install
3.  before\_script
4.  script
5.  after\_success
6.  after\_failure
7.  before\_deploy
8.  deploy
9.  after\_deploy
10. after\_script

If you have any failure on your build and want to review the final
generated, you should declare the environment
variable DEBUG\_TRAVIS\_YML either on your build node or in jenkins.

### ChangelogVersion 0.2.2 (13 Nov, 2016)

-   Added debug mode 

### Version 0.2.1 (23 Oct, 2016)

-   fix echo not escaping first parameter.
-   export enviroment variables escape non alpha-numeric character
    identifiers 

### Version 0.2.0 (19 Oct, 2016)

-   Escape complex bash commands echo problem.
-   Added expansion of enviroment variables
-   Support "before\_deploy", "deploy" and "after\_deploy"

### Version 0.1.0 (30 Jul, 2014)

-   Initial release to jenkins-ci.org
-   Support "env" in .travis.yml
-   Support "before\_install", "install", "before\_script", "script",
    and "after\_script" in .travis.yml
-   Support "after\_success" and "after\_failure" in .travis.yml

### Know Issues 

.travis.yml build not save

downgrade 'ruby-runtime' plugin back to v0.12

ChangeLog
