
Add VMware Lab Manager support to Jenkins

### Description

This plugin add to Jenkins CI a way to control Virtual Machines hosted
on [VMware Lab Manager](http://www.vmware.com/products/labmanager/). You
can configure a Jenkins Slave, selecting a virtual machine from a
Organization / Workspace / Configuration triplet, in this way, when you
need to build a Job on a specific Slave, this VM will be startup up and
shutdown or suspended again after the build process.

### Requirements

To rebuild the WSDL2Java created files you will need to install Axis2
and use the wsdl2java program. All runtime requirements are included.

### Configuration

##### Lab Manager cloud

The first step is to configure Hudson to know what configuration in Lab
Manager you will be using. To do this you need to add a new "Cloud" in
the Hudson "Configure System" menu.

The required parameters to setup are:

-   **LabManager Host**: The base URI of the Lab Manager host, e.g.
    <https://example.server/>
-   **Brief description of this overall configuration**: A textual
    description of this "cloud" that will be used when choosing Virtual
    Machines for slaves
-   **LabManager Organization**: The Organization name in Lab Manager
    where the virtual machines reside.
-   **LabManager Configuration**: The Configuration name in Lab Manager
    where the virtual machines reside.
-   **Username**: username to use to connect with Lab Manager
-   **Password**: the password for this account

If you need some other particular settings, you can click on the
*Advanced* button to change the default parameters.

-   **LabManager Workspace**: The Workspace name in Lab Manager where
    the virtual machines reside. If not listed the default of "main"
    will be used.
-   **Max number of slaves online**: A limit on the number of VMs in
    this cloud that can be on at any given time.

To verify all you parameters you can click on *Test* button and check
the output reported.

##### Slaves

Now you can setup your nodes in hudson and use them to build your
projects.  
On the creation page you just simply select the correct radio button to
configure a slave that runs inside of Lab Manager.

Going ahead with configuration you can see a page that looks like the
normal node creation page, with three combo box added. The first one
where you have to select the Lab Manager instance (the brief description
provided in the configuration section). In the second one you pick the
name of the Virtual Machine in Lab Manager configuration that you are
using. In the third drop down you select the action to be taken when the
VM is idle (it is recommended to pick shutdown over suspend due to
overhead in Lab Manager).

If you then select the option to have the slave be taken on or offline
based on demand. Note that if you select Shutdown or Shutdown and Revert
for an idle behavior the slave will not be available immediately. It
will however come online once demand is polled a second time. Next, if
using a JNLP slave (ie for Windows), you must check the **Force VM
launch** option. Doing this along with the normal best practices to have
a Windows slave turn on and auto-start the JNLP client is all that is
required specially for Windows. Finally, you can set the delay between
telling Lab Manger to get the VM online and Jenkins attempting to
connect to it as a slave. This value is in seconds. All slaves must have
the VMware Tools installed in order for it to be cleanly managed.

### Change Log

##### Version 0.2.8 (Aug 05, 2011)

-   Update my email address.

##### Version 0.2.7 (Jul 18, 2011)

-   Fix SCM location in pom.xml (caused 0.2.6 to be non-existent)
-   Fix a problem with displaying the boot delay number

##### Version 0.2.5 (Jul 8, 2011)

-   Fix the problem of non-Lab Manager Plugin slaves failing to launch.

##### Version 0.2.4 (Jul 7, 2011)

-   Add an optional limit on number of VMs per cloud that can be online
    at once.
-   Add an option to the slaves for delay between asking Lab Manager to
    bring a VM online and attempting to connect to it.
-   **WARNING** Breaks non-Lab Manager Plugin controlled slaves

##### Version 0.2.2, 0.2.3 (Jan 24, 2011)

-   pom.xml changes for new infrastructure, no code changes (and 0.2.1
    was unavailable via update center).

##### Version 0.2.1 (Jan 22, 2011)

-   Compute the list of Virtual Machines in the configuration each time
    we need it so that we will catch changes.
-   Fix a problem with Windows slaves and the "Force VM launch" option
    not working.

##### Version 0.2.0 (Dec 14, 2010)

-   Fix a thinko in handling the 'Shutdown' idle action.

##### Version 0.1.9 (Dec 13,2010)

-   Fix the dropdown menu for selecting Virtual Machines after
    performing a configure.
-   Fix a problem with non-Lab Manager slaves having problems picking
    their launcher.

##### Version 0.1.8 (Dec 08, 2010)

-   Add "Shutdown and Revert" as an option for idle VMs.

##### Version 0.1.7 (Dec 07, 2010)

-   First version published.
