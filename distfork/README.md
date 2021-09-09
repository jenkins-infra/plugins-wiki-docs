Older versions of this plugin may not be safe to use. Please review the
following warnings before using an older version:

-   [Missing permission checks allowed shell access to anonymous
    users](https://jenkins.io/security/advisory/2017-03-20/)

Turns a Jenkins cluster into a general purpose batch job execution
environment through an SSH-like CLI.

  
This plugin adds a new command 'distfork' to [Jenkins
CLI](http://localhost:8085/display/JENKINS/Jenkins+CLI), which can be
used to execute arbitrary command on a slave of your choice. The
distfork command is modeled after ssh, but it's Jenkins aware — for
example, instead of hardcoding a machine name, you can specify a label
to let Jenkins choose a slave. This opens up a Jenkins cluster for doing
all kinds of things without requiring a job/build notion.

# Use Case

-   You have a test that involves multiple nodes. Your test script can
    use `distfork` to launch additional JVMs on the Jenkins cluster to
    carry that out. Such test script can be run from both within Jenkins
    or from developer's laptops.
-   You have some computation that is expensive or require specific
    environment (say, building JDK or building a virtual machine image.)
    You can submit such computation to Jenkins from your shell.
-   As a basis for distributed scripting.

# Usage

The following example runs "uname -a" command on a slave with the
'linux' label (if the -l option is optional.)

    $ java -jar jenkins-cli.jar -s http://server/jenkins/ dist-fork -l linux uname -a
    [distfork5384565281499633486.tmp] $ uname -a
    Linux bear 2.6.28-13-generic #44-Ubuntu SMP Tue Jun 2 07:55:09 UTC 2009 x86_64 GNU/Linux

The following example starts a Tomcat somewhere in a Jenkins cluster,
with a port-forwarding from the port 9999 to the HTTP listener of
Tomcat.

    % java -jar jenkins-cli.jar -s http://localhost:8080/ dist-fork -z ~/apache-tomcat-5.5.27.tar.gz \\
        -L 9999:localhost:8080 apache-tomcat-5.5.27/bin/catalina.sh run
    [distfork6313354709312415597.tmp] $ apache-tomcat-5.5.27/bin/catalina.sh run
    Jul 15, 2009 12:25:31 PM org.apache.catalina.core.AprLifecycleListener lifecycleEvent
    INFO: The Apache Tomcat Native library which allows optimal performance in production environments was not found on ...
    Jul 15, 2009 12:25:31 PM org.apache.coyote.http11.Http11BaseProtocol init
    ...

# Features

-   `distfork` executions are scheduled in the queue and run by an
    executor, just like normal builds. Thus it makes Jenkins aware of
    what slaves are busy and what are not.
-   Each command execution gets a one-time temporary directory for its
    working directory. Jenkins will clean this up after the command
    exits, as well as terminating any remaining background processes to
    maintain the cluster health.
-   Port-forwarding both ways so that you can talk to the remote process
    without knowing their actual IP addresses.
-   Ability to stage the files before the process execution, and ability
    to bring back files after it ends.

# Available Command Line Arguments

     -F LOCAL=REMOTE   : Remote files to be copied back to local locations after
                         the execution of a task
     -L PORT:HOST:PORT : Local to remote port forwarding
     -R PORT:HOST:PORT : Remote to local port forwarding
     -Z FILE           : Bring back the newly added/updated files in the target
                         remote machine after the end of the command by creating a
                         zip/tgz bundle and place this in the local file system by
                         this name.
     -d N              : Estimated duration of this task in milliseconds, or -1 if
                         unknown
     -e NAME=VAL       : Environment variables to set to the launched process
     -f REMOTE=LOCAL   : Local files to be copied to remote locations before the
                         exeuction of a task
     -l VAL            : Label for controlling where to execute this command
     -n VAL            : Human readable name that describe this command. Used in
                         Jenkins' UI.
     -z FILE           : Zip/tgz file to be extracted into the target remote
                         machine before execution of the command

# Notes

-   The `-z` `-Z` -f -F `-L` and `-R` options (file and port forwarding)
    will not work in a Jenkins with remoting based cli disabled ([blog
    post on new CLI](https://jenkins.io/blog/2017/04/11/new-cli/)),
    except in 1.7+ with some modes of `-z` and `-Z`.

# Changelog

### Version 1.7 (Jan 29 2018)

-   [ JENKINS-49205](https://issues.jenkins.io/browse/JENKINS-49205) -
    Getting issue details... STATUS

### Version 1.6.0 (Mar 20 2017)

-   fix [SECURITY-386 /
    CVE-2017-2652](https://jenkins.io/security/advisory/2017-03-20/#missing-permission-checks-in-distributed-fork-plugin)

### Version 1.5.0 (Mar 16 2017)

Now requires Jenkins 1.625.3 or higher.

-   Merge [PR\#6](https://github.com/jenkinsci/distfork-plugin/pull/6) -
    if the copy operation fails do not leave a zero length file

### Version 1.4.1 (Feb 10 2016)

-   fix
    [JENKINS-23567](https://issues.jenkins-ci.org/browse/JENKINS-23567)
    prevent log spam
-   fix
    [JENKINS-16200](https://issues.jenkins-ci.org/browse/JENKINS-16200)
    use the provided value for duration
-   fix
    [JENKINS-32648](https://issues.jenkins-ci.org/browse/JENKINS-32648)
    log the name of the node used to run the command

### Version 1.3 (Feb 25 2011)

-   Update for Jenkins

### Version 1.1 (Nov 19 2010)

-   Update code for more recent Hudson
-   Cut off the random meaningless name from the archive

### Version 1.0 (Jul 15 2009)

-   Initial release
