A plugin to run a [PHP built-in web
server](http://php.net/manual/en/features.commandline.webserver.php) for
each build.

This is useful if you need to run tests on a local website and less
overkill than making Apache point at the workspace root.

# Screenshot

![](docs/images/68747470733a2f2f7261772e6769746875622e636f6d2f6a656e6b696e7363692f7068702d6275696c74696e2d7765622d7365727665722d706c7567696e2f6d61737465722f73637265656e73686f742e706e67.png)

# Usage

-   The system configuration page allows to set the location of PHP
    ('php' will be used by default, this can be customized to e.g.
    '/usr/bin/php')
-   When configuring a project, a checkbox titled 'Run a PHP built-in
    web server' should show up

# Dependencies

-   PHP 5.4.0+

# Change Log

#### 0.1 (release 2015-08-07)

-   Initial release
