This plugin allows users to add labels dynamically to every node with a
specific tool installation so that a job can restrict the nodes where it
runs by their tool locations.

## Example use case

Assuming you have nodes A, B, and C, and Java 6 JDK is installed only on
A and B for some reasons, you would add JDK `Java 6` in the System
Configurations and its tool locations in the Node Configurations of A
and B.

Then, if you add label `jdk1.6` to JDK `Java 6` with this plugin in the
System Configurations, it will be added dynamically to A and B, and a
job can restrict the nodes where it runs to them by using label
`jdk1.6`.

If you would later remove the tool location of JDK `Java 6` from B,
label `jdk1.6` would disappear from the node, too. You no longer need to
manually manage labels for tool installations on your nodes.

## Project information

Regardless of the Source Code link above, the source code repository of
this plugin is at
<https://bitbucket.org/kazssym/jenkins-tool-labels-plugin>. If you are
interested in what will be implemented in future versions, please [sign
up for a free Bitbucket account](https://bitbucket.org/account/signup/)
(if you have not yet) and watch the repository for notifications.

### License

This program is licensed under the terms of the [GNU Affero General
Public License](http://www.gnu.org/licenses/agpl.html) as published by
the Free Software Foundation, either version 3 of the License, or (at
your option) any later version.

As this program is released under the *Affero* GPL, if you modify this
program and if it can interact with users remotely through a computer
network, you *must* provide access to the source code of your modified
version. If you are unwilling to provide access to the source code, you
will have to get special permission from the author.

## Getting help

Please use an experimental [community forum for this
plugin](https://support.zoho.com/portal/linuxfront/community/hudson-and-jenkins-plugins/tool-labels-plugin).

## Other resources

-   [Release
    Notes](https://support.zoho.com/portal/linuxfront/helpcenter/articles/release-notes-for-tool-labels-plugin)
-   [Tool Labels Plugin for
    Hudson](http://kazssym.bitbucket.org/hudson-tool-labels-plugin/)
