This project is a Jenkins plugin, which allows checking user permissions
for particular jobs and nodes. The plugin can create various reports
upon the request by Jenkins administrators.

# Links

-   [Documentation](https://github.com/jenkinsci/security-inspector-plugin/blob/master/README.md)
-   [Changelog](https://github.com/jenkinsci/security-inspector-plugin/blob/master/CHANGELOG.md)

# Usage

In order to use the plugin functionality, you should have the global
\`Jenkins.ADMINISTER\` permission.  
Once you get it...

1.  Go to the \`Manage Jenkins \> Security Inspector\` page.
2.  Select the report you want to create and click the hyperlink.
3.  Specify additional parameters (filters, etc.) in the opened page.
4.  Click \`Submit\`.

# Available reports

Now this plugin can created 3 reports:

**For selected user:**

-   Single user, multiple jobs.
    -   Display job permissions for the specified user.
    -   Items for the report can be selected using regular expressions
        or additional filters (e.g. JobFilter extension point).

&nbsp;

-   Single user, multiple nodes.
    -   Display node permissions for the specified user.
    -   Nodes for the report can be selected using regular expressions.

**For selected job:**

-   Multiple users, single job.
    -   Display users permissions for the specified item.
    -   Users for the report can be selected using regular expressions.
