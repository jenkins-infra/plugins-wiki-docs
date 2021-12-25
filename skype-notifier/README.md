Integrates Jenkins with Skype for instant messaging. Requires extra
manual installation steps!!!

Note that you also need to install the [instant-messaging
plugin](http://wiki.jenkins-ci.org/display/JENKINS/Instant+Messaging+Plugin).

This plugin enables Jenkins to send build notifications via Skype, and
to talk to Jenkins via a 'bot' to run commands, query build status
etc.. 

Installation Requirements

Follow the steps below 

This plugin needs the [Instant Messaging
Plugin](https://wiki.jenkins.io/display/JENKINS/Instant+Messaging+Plugin).
Please ensure that the latest version of this plug-in is also
installed.This plugin requires special hudson setup to work.

## How to get it running

This plugin requires a running skype and uses JNI so it will take some
configuration to work. Currently tested on Windows Server 2003 and
CentOS 5.5

1.  Skype must be running as the same user as a hudson slave/master
2.  If running hudson on a 64bit JDK you must add a windows/linux slave
    running on a 32bit jdk
3.  The slave must have a "skype" label
4.  Check the logs to see if it connects ok to skype
5.  If it connects ok, then you must allow the java plugin to connect
    with skype
6.  Add skypeid to all users in hudson
7.  Good luck

> Notes  
> The libskype.so is build for CentOS 5.5  
> I used the static version of skype, but I guess other versions will
> work also.
>
> If you run the slave/master as a windows service it will fail to
> connect with skype

### Node startup script for linux

Must either have a running console or use vncserver on display :1 (logon
to the vnc/console to accepts the jenkins plugin in skype)

Also copy the skype executable to the slave home folder

``` syntaxhighlighter-pre
export JAVA_HOME=/usr/java/32bit/jdk1.6.0_24
export DISPLAY=:1
killall skype
killall $JAVA_HOME/bin/java
/usr/bin/skype.sh&
cd /work/skypeslave
name=$(hostname -f)
wget  -N -nd --progress=dot:mega http://${name}:8080/jnlpJars/slave.jar
$JAVA_HOME/bin/java -jar /work/skypeslave/slave.jar -jnlpUrl http://${name}/computer/skype/slave-agent.jnlp
```

### Skype on CentOS

<http://wiki.centos.org/HowTos/Skype>

<http://punkts.org/trac/wiki/Skype22ForCentOS5>

## ChangeLog

### **Version 1.1 (May 14, 2011)**

-   Bot commands are now supported.
-   Groups are now supported, prefix groups with a \*
