# Summary

This plugin aggregates redmine issues by the specified custom query and
creates html report using google chart.

# How To Use

1.  Open project configure page, in build section click \[Add build
    step\] -\> \[Generate Redmine Metrics Report\].  
      
2.  Click \[Add\] to add multiple Redmine Projects.  
      
3.  Specify Redmine Info.  
      
4.  In the Post-build Actions, use the [\[HTML Publisher
    Plugin\]](https://plugins.jenkins.io/htmlpublisher) to display the
    generated html reports.  
    Note: In order to allow Jenkins to run html page with javascript,
    You have to set the following script in Jenkins script console and
    clean browser cache. This setup won't survive after Jenkins service
    restart, so you have to set it again and clean browser cache.

    ``` syntaxhighlighter-pre
    System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
    ```

5.  After the project is built successfully, click \[Redmine Report\] on
    the side menu to see the report.

# Feature

-   Issue Increment Chart (Open Issues)
-   Issue Open & Close Chart
-   Assignee Chart

# Change Log

##### Version 1.0.1 (Oct 31, 2018)

-   Minor bug fix.
-   Add description for field \[project name\].

##### Version 1.0.0 (Sep 27, 2018)

-   Initial release.
