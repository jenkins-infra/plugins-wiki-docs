  

Allows users to build on NodePool controlled cloud instances.

  

# Version History

### Version 0.0.21 (November 30, 2018)

-   Disable Label Finder - Label finder is disabled to prevent the Queue
    lock being held for long periods of time.

### Version 0.0.20 (November 30, 2018)

-   Cleanup Deadlock in Janitor

### Version 0.0.19 (November 27, 2018)

-   Fixed NodePool Nodes View Missing ZK Details

### Version 0.0.18 (November 26, 2018)

-   Fixed Janitor NPE when data was null

### Version 0.0.17 (November 23, 2018)

-   Added Janitor cleanup logic to clean up Zookeeper Nodes that are not
    being used or held

-   Updated code to use POJO data models for Nodes and Node Requests.
    These are serialized via GSON to/from zookeeper. Update enums to
    work with GSON and data model mapping.

-   Refactored ZookeeperObject which saves/loads Zookeeper data

-   Added Zookeeper Exception to handle errors instead of generic
    Exception

-   Updated internationalization for Message resources that are not
    present in newer Jenkins

-   Added pom dependencies to support newer Jenkins builds

-   Fix bug where a request is removed from Jenkins without being
    removed from Zookeeper

-   Add Request Timeout and Request Attempts config options to the UI

-   Add cleanup lock to ensure post-build cleanup and Janitor cleanup
    don't run concurrently

-   Add delay when cleaning a node to wait for other processes to finish
    communicating with it.
-   Delete nodes from a pool thread rather than the main Janitor thread.
    This prevents waits from blocking the main Janitor thread.
-   Add initial state check to NodePoolRequestStateWatcher to catch the
    situation where the request is already in the required state when
    the watcher is created. This may have caused an infinite wait
    previously as we're waiting for an event that's already happened.
-   Override disconnect method in NodePoolComputer so that the cleanup
    lock can be obtained for disconnection.
-   Fix bug in NodePool.attemptProvision2 where we wait for a node to
    come online, but don't correctly detect this condition so carry on
    waiting.
-   Remove nodes created by failed provisioning attempts. Previously,
    these nodes would linger until the build that requested them
    completed, then get cleaned up by the Janitor. Now we attempt to
    remove them when an exception is caught in the provisioning process.
-   Add initial state check to NodePoolRequestStateWatcher to catch

### Version 0.0.13 (July 27, 2108)

-   Fixed error associated with the Zookeeper "type" field which
    previously contained a single string value. The recent updates to
    NodePool launcher appear to have changed the value for this field to
    be an ArrayList (more specifically, an array of
    strings).  [JENKINS-52293](https://issues.jenkins-ci.org/browse/JENKINS-52293)
-   Added ABORTED NodePool state support

### Version 0.07 (May 9, 2108)

-   Retry failed node requests to the NodePool cluster.
-   Add a ManagementLink to see history of job Jenkins interactions with
    NodePool.

### Version 0.06 (May 1, 2108)

-   Lock nodes before changing their state to "in-use".  This eliminates
    a race condition with NodePool's cleanup worker.

  
