
This plugin integrates Jenkins with
[VirtualBox](http://www.virtualbox.org/) (version 3, 4.0, 4.1, 4.2 and
4.3) virtual machine.

## Configuration

### VirtualBox cloud

The first step is the VirtualBox cloud configuration:

1.  Configure the VirtualBox server, that allows to remotely manage VMs,
    and start it.

    [TABLE]

2.  Manage Jenkins -\> Configure System -\> Cloud -\> Add a new cloud
    -\> VirtualBox
3.  Set `Name`, `URL`, `Username` and `Password`
4.  Test connection

    If it doesn't work, then you can try to disable authentication
    library by executing following command on VirtualBox host:  
    `VBoxManage setproperty websrvauthlibrary null`

    If you got this error:

        Runtime modeler error: Wrapper class org.virtualbox_3_1.IWebsessionManagerLogon is not found. Have you run APT to generate them?

    Then you should upgrade Java (probably it is a
    [bug](https://jax-ws.dev.java.net/issues/show_bug.cgi?id=554) in
    jax-ws). Also note that plugin was tested on Java 1.6.0\_19.

### VirtualBox slave

Now you can setup your nodes in Jenkins and use them to build your
projects:

1.  Add Manage Jenkins -\> Manage Nodes -\> New Node
2.  Set Node name for VirtualBox Slave
3.  Select `VirtualBox Host`, `Virtual Machine Name` and
    `Virtual Machine Type`

## TODO

1.  restore snaphot (beta version available in the github repository as
    [branch
    (snap)](https://github.com/jenkinsci/virtualbox-plugin/commits/snap))
2.  build wrapper

## Changelog

##### Version 0.7 (October 21, 2013)

-   Added VirtualBox 4.3 support

##### Version 0.6 (October 7, 2012)

-   Slave stop mode could now be 'pause' or 'powerdown'. Powerdown
    should help when you're faced to VM errors on resume (ie:
    <https://www.virtualbox.org/ticket/9796>)

##### Version 0.5 (September 21, 2012)

-   Added VirtualBox 4.2 support ([issue
    \#JENKINS-15175](https://issues.jenkins-ci.org/browse/JENKINS-JENKINS-15175)
    )

##### Version 0.4.6 (March 1, 2012)

-   Added Virtual Machine Types 'gui' and 'sdl' ([issue
    \#9752](https://issues.jenkins-ci.org/browse/JENKINS-9752))

##### Version 0.4.4 (February 22, 2012)

-   Added support for VirtualBox version 4.0 and 4.1 ([issue
    \#8634](https://issues.jenkins-ci.org/browse/JENKINS-8634))

##### Version 0.2.1 (April 27, 2010)

-   Fixed critical bug, which prevented creation of node
    ([JENKINS-6375](https://issues.jenkins-ci.org/browse/JENKINS-6375))

##### Version 0.2 (April 18, 2010)

-   Used official virtualbox library, reimplemented launch process
-   Fixed delegation to user-specified launcher
    ([JENKINS-6276](https://issues.jenkins-ci.org/browse/JENKINS-6276))
-   Added type of start - headless or vrdp
    ([JENKINS-6279](https://issues.jenkins-ci.org/browse/JENKINS-6279))
-   VirtualBoxBuildWrapper disabled

##### Version 0.1 (April 12, 2010)

-   Added VirtualBoxBuildWrapper
-   Added VirtualBoxSlave
-   Tested on VirtualBox 3.1.6 r59338, Jenkins 1.346, Java 1.6.0\_19
-   First version published
