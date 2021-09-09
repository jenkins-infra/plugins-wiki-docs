# Node Iterator API Plugin

This plugin provides support for iterating through all the Node
instances that are in use by Jenkins, even those Node instances that are
not traditionally attached to Jenkins. The API exposed by this plugin
can be used by cloud provider plugins to identify unused provisioned
resource.

## Version History

### Version 1.5 (Jun 11, 2014)

-   Downgrade minimum version of Jenkins as we do not need to force
    people to upgrade to 1.532.3 in order to use the fix in 1.3/1.4 

### Version 1.4 (Jun 10, 2014)

-   Fix borked release of 1.3 that didn't actually get released

### Version 1.3 (Jun 9, 2014)

-   Fix NPE

### Version 1.2 (Dec 13, 2013)

-   Add concept of completeness to the API so that consumers can
    determine whether the full set of Nodes can currently be iterated.

### Version 1.1 (Nov 8, 2013)

-   Downgrade parent to 1.424 to avoid having to bump parent of ec2
    plugin

### Version 1.0 (Nov 8, 2013)

-   Initial release
