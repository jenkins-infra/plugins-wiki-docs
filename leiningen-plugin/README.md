This plugin allows building projects using
[leiningen](http://leiningen.org/).

## Configure the leiningen plugin

-   In order to set up leiningen-plugin, you need to specify the names
    and locations of your leiningen launch jars. Press the **Manage
    Jenkins** link and then the **Configure System**. You should now see
    the leiningen configuration section where you will be asked to
    specify the name and location for your leiningen launch jar.

## Configure your project to use leiningen

-   Open your project configuration and add a **Build using
    leiningen** build step

&nbsp;

-   Now, specify the leiningen arguments you need for your build.

&nbsp;

-   Once you saved the project configuration, you can run your project
    and watch the virtual console to see leiningen in action.

## Todo

-   Allow multiple leiningen launchers
-   Allow downloading a leiningen launcher
-   Integrate with test coverage

## Changelog

### 0.5.6

Added ability to specify a subdirectory relative to the workspace to run
leiningen in.

### 0.5.5

Fixes issue with configuration loading on restart.

### 0.5.4

Initial release
