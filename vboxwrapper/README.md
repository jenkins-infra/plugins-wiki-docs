Plugin provides a build wrapper for starting and stopping slaves on the
virtual machine

Start/stop is performed by launching shell scripts (init.d, VBoxManage
for example).  
Each start/stop command takes a list of nodes with virtual machines as
an argument.  
After launching a script plugin waits for all nodes to enter an
online/offline state  
by periodical reconnecting to them. It's required because master doesn't
know that slave  
waked up.

## Configuration

### System Configuration

Define a wrapper command that should be used to start/stop VirtualBox.
Usually it is a sort of init.d script.

![](docs/images/vboxwrapper-global.png)

### Job Configuration

Enable a build wrapper (pre- and/or post-build command). Choose needed
virtual machines.

![](docs/images/vboxwrapper-local.png)

#### Changelog

##### Version 1.3 (02/07/2013)

-   ![(warning)](docs/images/warning.svg)
    Allowed plugin to launch commands on Windows (**needs to be
    tested**)

##### Version 1.2 (01/21/2013)

-   ![(error)](docs/images/error.svg)
    Fixes height of the node list

##### Version 1.1 (01/20/2013)

-   ![(warning)](docs/images/warning.svg)
    Changed package name so previous plugin usage should be fixed in a
    config file or fixed in a job. Sorry for inconvenience.
-   ![(info)](docs/images/information.svg)
    Added build parameter *VBox node parameter* - list of virtual nodes
    joined with the delimiter. Can be used with scripts.

##### Version 1.0 (10/22/2012)

-   ![(info)](docs/images/information.svg)
    Initial release.
