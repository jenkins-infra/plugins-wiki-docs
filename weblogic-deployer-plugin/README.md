
This plugin deploys any artifacts built on Jenkins to a weblogic target
(managed server, cluster ...) as an application or a library component.

## Pre-requisites

> This plugin works with at least **1.485** jenkins version.  
> This plugin only deploys ear, war, jar artifacts.

## Configuration

### System Configuration

Before use it, the plugin has to be configured. It consists of loading
the weblogic target configuration, choosing the default JDK to run a
deployment task and adding the weblogic library path :

-   for WLS 8.X /pathtojar/weblogic.jar
-   for WLS 10.3 /pathtojar/wlfullclient.jar
-   for WLS 12.1 /pathtojar/wlthint3client.jar.

For building the wlfullclient.jar look at
here: <http://docs.oracle.com/cd/E12840_01/wls/docs103/client/jarbuilder.html>.

Further information
at <https://docs.oracle.com/middleware/1213/wls/SACLT/basics.htm#SACLT124>

Workaround for Weblogic 12.2

For an unknown reason, deployment fails with librairies generated from a
weblogic 12.2 product. You can generate and use
a **wlfullclient-10.3.6.jar**, *with that I can deploy without any
problem onto our WebLogic Server Version: 12.2.1.1.0*.

![](docs/images/plugin-configuration.png)

-   *Jdk* : the jdk used to run a deployment task.
-   *Additional classpath* : weblogic.jar file path loaded for
    deployment. If no value is set but the WL\_HOME environment variable
    is found, the plugin will try to load
     %WL\_HOME%/server/lib/weblogic.jar.  
    Depending on the weblogic version the weblogic.jar should be
    replaced by :

     

&nbsp;

-   -   for WLS 10.3 /path/to/jar/wlfullclient.jar

         

    -   for WLS 12.1 /path/to/jar/wlthint3client.jar.

Useful Information

If you use authentication mode, you should replace in WLS 12
wlfullclient.jar by wlthint3client.jar. If you have to add many
dependencies you can append them like that
**/path/to/wulfullclient.jar:/path/to/wlthint3client.jar**. The
separator ':' is platform dependent.

see
<https://docs.oracle.com/middleware/1213/wls/SACLT/basics.htm#SACLT125>

 

 

Oracle Information

"The WebLogic full client, wlfullclient.jar, is deprecated as of
WebLogic Server 12.1.3 and may be removed in a future release. Oracle
recommends using the WebLogic Thin T3 client or other appropriate client
depending on your environment. For more information on WebLogic client
types, see WebLogic Server Client Types and Features."

-   *Java Options to use* : the java options used by the java process
    when invoking the weblogic library. By default it will be -Xms256M
    -Xmx256M.
-   *Excluding artifact name list* : the built artifacts name pattern
    excluded from post build deployment action.
-   *Disable* : If checked, the plugin execution is disabled.
-   *Configuration File* : xml file path containing deployments targets.
    It has to be
    \[http://host:port/plugin/weblogic-deployer-plugin/defaultConfig/plugin-configuration.xsd\]
    schema compliant. No validation currently performed. The file can be
    added through a local path (/usr/users/.../plugin-configuration.xml)
    or a remote URL (<http://xxxxxxxxx/plugin-configuration.xml)>;

    **configuration.xml**

    ``` syntaxhighlighter-pre
    <?xml version="1.0" encoding="UTF-8"?>
    <config xmlns="http://org.jenkinsci.plugins/WeblogicDeploymentPlugin"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://org.jenkinsci.plugins/WeblogicDeploymentPlugin plugin-configuration.xsd"> 
    <weblogic-targets>
        <weblogic-target>
            <name>my_managed_server1</name>
            <host>_weblogic.admin.server.host_</host>
            <port>_weblogic.admin.server.port_</port>
            <login>_weblogic.admin.server.login_</login>
            <password>_weblogic.admin.server.password_</password>
            <authMode>BY_KEY</authMode>
            <userconfigfile>P:\Documents\perso\dev\wls-deploy-plugin\wls_userConfig.properties</userconfigfile>
            <userkeyfile>P:\Documents\perso\dev\wls-deploy-plugin\wls_userConfig.key</userkeyfile>
        </weblogic-target>
        <weblogic-target>
            <name>my_managed_server2</name>
            <host>_weblogic.admin2.server.host_</host>
            <port>_weblogic.admin2.server.port_</port>
            <login>_weblogic.admin2.server.login_</login>
            <password>_weblogic.admin2.server.password_</password>
            <authMode>BY_LOGIN</authMode>
        </weblogic-target>
        <weblogic-target>
            <name>my_managed_server3</name>
            <host>_weblogic.admin.server.host_</host>
            <port>_weblogic.admin.server.port_</port>
            <login>_weblogic.admin.server.login_</login>
            <password>_weblogic.admin.server.password_</password>
            <!-- used to transfer by FTP the component flagged as library to the WL machine -->
            <ftpHost>_weblogic.remote.host_</ftpHost>
            <ftpUser>_weblogic.remote.user_</ftpUser>
            <ftpPassowrd>_weblogic.remote.password_</ftpPassowrd>
            <remoteDir>/remote/path/used/to/transfer/libraries</remoteDir>
        </weblogic-target>
    </weblogic-targets>
    </config>
    ```

Library Deployment Tip

The ftp parameters are used to deploy libraries. When you checked your
artifact deployment as a library deployment, the plugin connects to the
ftpHost and transfers the artifact into the remoteDir directory.  
Basically, the ftpHost value should be the same as the host value.

#### Authentication mode

There are 2 kinds of authentication :

-   BY\_KEY : uses a keystore file and a config file
-   BY\_LOGIN : uses a login/password (this is the default
    authentication mode).

Since 2.3, the plugin also supports authentication by keystore. To use
it, set authMode with BY\_KEY value then set userconfigfile/userkeyfile
elements. If you forget to specify authMode with BY\_KEY value, the
plugin uses the default authentication mode BY\_LOGIN.

### Job Configuration

#### If the plugin is not configured

If no configuration has been set, the plugin will display an error
message  
![](docs/images/no-system-config.jpg)

#### If the plugin is already configured

If the plugin is already configured, jenkins will display the job plugin
configuration form.

![](docs/images/job-config-2.png)

-   *Deployment task list :* The list of deployments to run. For each
    task, some of parameters has to be set :
    -   *Task name (optional) :* The name of the task which will be used
        to identify it.
    -   *environment* : the targeted weblogic environment. Can be
        customized.
    -   *name* : the name used by weblogic to display component.
    -   *Base directory where the resource can be found*. If this field
        is left blank, the plugin will lookup under workspace directory.
    -   *Built resource to deploy* : a regular expression to filter
        resource which will be deployed.
    -   *targets*: the weblogic target (can be a managed server
        instance, a cluster either the AdminServer). By default the
        plugin will use the AdminServer as the target. Many targets can
        be defined and will be separated by un comma symbol (e.g
        AdminServer, ManagedServer1, Cluster2). Can be customized.
    -   *weblogic libraries* : If checked, the generated artifact will
        be deployed as a library component.
    -   *advanced configuration* : See the chapter below Job Advanced
        configuration.
-   *Build failed when deployment failed* : If checked, The current
    build will be flagged as a failed one if the deployment task failed.
-   *Force deployment tasks stop on first failure* : Useful if you have
    any task configured and you want to stop the next deployments tasks
    where an error occurs.
-   *Deployment policy* : Configure which cause(s) will trigger the
    deployment action. If 'None specified' is selected, the deployment
    occurs each time the job builds. If another ones are selected, the
    deployement action only occurs when the build was triggered by a
    chosen cause.
-   *Deploying only when sources changes* : If checked, the deployment
    action only occurs when the build trigger by a parametrized cause
    AND the SCM step detects any changes.
-   *Projects deployment Dependencies* : (experimental) specifies a
    dependency with others job deploying some artifacts.

##### Customization of parameters

Some of parameters can also be tokenized with environment variables or
even build parameters. Here are these parameters :

-   -   *environment*: Instead of setting a fixed value into the
        configuration file (e.g localhost:7000) you can set a variable
        like ${WL\_HOST}:${WL\_PORT}
    -   *targets*: Instead of setting a fixed value (e.g AdminServer)
        you can set a variable like ${ENV\_TARGET} or $TARGET.
    -   *Base directory where the resource can be found* : you can set a
        variable like ${WORKSPACE}.
    -   *name*: The name parameter can be tokenized (e.g
        my-war-${MY\_VERSION})

![](docs/images/config-customization.png)

Use the build parameter plugin or add some environment variable to set
these values

![](docs/images/build-params.png)

##### Job Advanced configuration

It's possible to set advanced options like stage mode and command line.
It helps user with special needs to override the default behaviour of
the plugin.

![](docs/images/Job-advanced-configuration.png)

-   *Stage mode* : stage, nostage or external stage
-   *protocol* : t3, t3s, http or https
-   Command line : The command which will be run by the deployer instead
    of the default ones (undeploy/deploy)

###### Stage mode

Stage mode define how the artificat will be deployed. By default the
plugin use the stage mode 'stage'. Please refer to the weblogic
documentation for further information.

##### Override deployment execution

For advanced users, it can be useful to define the commands that the
deployer has to run instead of the default ones, To enable this feature,
the user will set different command lines into the 'Command line' field
of Job advanced configuration.

These commands has to be ended by the ';' separator. The following
plugin token can be added to the command line :

-   {wl.deployment\_name} : the 'Name' parameter value
-   {wl.source} :  the resource to deploy (figured out by the plugin)
-   {wl.targets} : the 'Targets' parameter value
-   {wl.host} : the host part of the 'Environment' parameter
-   {wl.port} : the port part of the 'Environment' parameter
-   {wl.deploymentPlan} : the path of the deployment plan of the
    'Environment' parameter
-   {wl.login} : the login to authenticate to the server (provided by
    the configuration file)
-   {wl.password} : the password to authenticate to the server (provided
    by the configuration file)
-   {wl.user\_configfile} : the Deployer configuration file (defined in
    the configuration file)
-   {wl.user\_keyfile} : the private key to authenticate (provided by
    the configuration file)

Note : only the arguments and parameters can be specified. The java
executable used to run the command will be figure out by the plugin with
the same algorithm than a default execution.

For instance : the user who prefers run deployment with 'distribute'
instead of deploy could be set the following command lines:

**command line parameter**

``` syntaxhighlighter-pre
-adminurl http://{wl.host}:{wl.port} -user {wl.login} -password {wl.password} -debug -remote -verbose -name {wl.deployment_name} -source {wl.source} -targets {wl.targets} -cancel;
-adminurl http://{wl.host}:{wl.port} -user {wl.login} -password {wl.password} -name {wl.deployment_name} -source {wl.source} -targets {wl.targets} -distribute
```

Be Careful

Sometimes source path contains special chars like $.To ensure that the
plugin well handle the path you can surround the token {wl.source} with
quotes like this :

**command line parameter**

``` syntaxhighlighter-pre
-adminurl http://{wl.host}:{wl.port} -user {wl.login} -password {wl.password} -debug -remote -verbose -name {wl.deployment_name} -source "{wl.source}" -targets {wl.targets} -cancel;
```

NB : Environment variables and build parameters can also be used.

## User Guide

### Build status

The build status will be modified according the following rules :

-   the status is set to SUCCESS when :
    -   the deployment task is successfully achieved
    -   the checkbox "Mark build unstable if deployment was not
        attempted" is not checked whatever the result of pre-requisite
        step.
-   If the checkbox "Mark build unstable if deployment was not
    attempted" is checked, the status is set to UNSTABLE when :
    -   at least one of the verification of the deployment task failed
        (PLUGIN\_DISABLED, OTHER\_TRIGGER\_CAUSE, NO\_CHANGES,
        UNSATISFIED\_DEPENDENCIES, PREVIOUS\_STATUS\_BUILD\_FAILED).
    -   the deployment task failed and the *Build failed when deployment
        failed* parameter is not checked.
-   status is set to FAILED when the deployment task failed and the
    *Build failed when deployment failed* parameter is checked.

#### Check a build deployment status

On the build dashboard a new icon will appear. It displays the
deployment status

![](docs/images/job-deployments-results.png)

#### Check the last successful deployment on main job dashboard

When you click on your job, a dashboard show a new icon with the date of
the last successful deployment. If no deployment occurred or always
failed. The date will be replaced by 'N/A' label.

![](docs/images/project-deployment-status-2.png)

### View deployment Logs

You can view the deployment logs of each task. Simply click on the
'Deployments Statuses' link or 'Weblogic deployments' link. They will
appear one by one in the deployment page.

![](docs/images/deployment-logs-2.png)

### Disabling deployment task at runtime

A deployment task can be skipped during a job build by setting an env
variable or a build parameter following this naming rule
(DEPLOY\_\<task\_name\>\_SKIP) to true.

For instance, if your task names 'task1' you have the possibility to
skip its execution by setting a variable named DEPLOY\_TASK1\_SKIP to
true (It could be a boolean build parameter).

### Master/slave architecture support

The latest version of the plugin (4.0) supports master/slave
architecture. That is to say, the plugin automatically copy weblogic
libraries and any kind of configuration to the remote node. Be sure that
the right JDK used by the plugin is correctly installed and declared in
the node configuration. 

 

Note master/slave architecture

The plugin doesn't copy userkeyfile nor userconfigfile to the remote
node. This enhancement will be done in the next version.

 

 

## Release Notes

##### Version 4.1 (September 03, 2017)

[ JENKINS-45044](https://issues.jenkins.io/browse/JENKINS-45044) -
Getting issue details... STATUS

##### Version 4.0 (August 21, 2017)

Master-Slave architecture support ( [
JENKINS-44599](https://issues.jenkins.io/browse/JENKINS-44599) - Getting
issue details... STATUS ,  [
JENKINS-36215](https://issues.jenkins.io/browse/JENKINS-36215) - Getting
issue details... STATUS )

Note : the copy of userkeyfile and userconfigfile on the remote node is
not currently supported.

Merge pull
request [\#8](https://github.com/jenkinsci/weblogic-deployer-plugin/pull/8 "Simplify global configuration") from
mustafau/simplify-global-configuration

[ JENKINS-45097](https://issues.jenkins.io/browse/JENKINS-45097) -
Getting issue details... STATUS

[ JENKINS-36524](https://issues.jenkins.io/browse/JENKINS-36524) -
Getting issue details... STATUS

[ JENKINS-37077](https://issues.jenkins.io/browse/JENKINS-37077) -
Getting issue details... STATUS

##### Version 3.7 (June 21, 2017)

[ JENKINS-42802](https://issues.jenkins.io/browse/JENKINS-42802) -
Getting issue details... STATUS

Upgrade to 1.580.1 jenkins version

Minor enhancements (simply invoke join instead of start + join, using
absolute path of jdk home)

##### Version 3.6 (Oct 25, 2016)

[JENKINS-39029](https://issues.jenkins-ci.org/browse/JENKINS-39029)
Fixed NPE for job configured with the plugin verson older than 3.5  
[JENKINS-38218](https://issues.jenkins-ci.org/browse/JENKINS-38218)
Support multiple files validation for extraClasspath field.

##### Version 3.5 (Sep 04, 2016)

[JENKINS-32392](https://issues.jenkins-ci.org/browse/JENKINS-32392)
Added the ability to choose the protocol to use during the deployment.  
Refactoring deployment policy. LegacyCodeCause and UserCause no more
supported.(thanks to mustafa ulu)

##### Version 3.4 (May 26, 2016)

[JENKINS-19962](https://issues.jenkins-ci.org/browse/JENKINS-19962)
Added the ability to declare a job successfull when pre-requisite step
failed  
[JENKINS-35161](https://issues.jenkins-ci.org/browse/JENKINS-35161)
variable can be used for the Deployment name value  
UserCause is now flagged deprecated in the triggers list  
Added TimerTrigger to the list of triggers

##### Version 3.3 (August 31, 2015)

[JENKINS-26992](https://issues.jenkins-ci.org/browse/JENKINS-26992)
baseDirectory not well replaced  
Removed unused org.codehaus.plexus dependency

##### Version 3.1 (March 31, 2015)

Removed org.codehaus.plexus.FileUtils dependency

##### Version 3.0 (March 28, 2015)

[JENKINS-26992](https://issues.jenkins-ci.org/browse/JENKINS-26992)
Supported baseDirectory variable expansion  
[JENKINS-26366](https://issues.jenkins-ci.org/browse/JENKINS-26366)
Implemented Promoted Builds plugin support  
[JENKINS-23700](https://issues.jenkins-ci.org/browse/JENKINS-23700) By
default the plugin searches under workspace directory

Be Careful

This version is not backward compatible. If you used previous version
with maven project don't forget to update the maven jobs configuration
(fill up base directory which is no more computed).

##### Version 2.13 (February 16, 2015)

[JENKINS-20351](https://issues.jenkins-ci.org/browse/JENKINS-20351)
Implemented the recursive search when no base directory is set in
freestyle job configuration.  
Fixed
[JENKINS-26901](https://issues.jenkins-ci.org/browse/JENKINS-26901) Not
possible to run freestyle job with non-set baseDirectory.

##### Version 2.12 (December 17, 2014)

[JENKINS-24789](https://issues.jenkins-ci.org/browse/JENKINS-24789)
Added the possibility to skip a task deployment during a build by
setting a build parameter or an env variable.

##### Version 2.11 (December 16, 2014)

Fixed regression due to an unexpected commit
![(sad)](docs/images/sad.svg)

##### Version 2.10 (December 6, 2014)

Fixing bug
[JENKINS-23701](https://issues.jenkins-ci.org/browse/JENKINS-23701) :
Added better control on invalid directory parameter set.  
French translation missing  
Fixing wrong javadoc  
Fixing wrong icon URL.

##### Version 2.9.1 (December 20, 2013)

Fixing bug
[JENKINS-20970](https://issues.jenkins-ci.org/browse/JENKINS-20970) :
deployment failed due to an unexpected stream closed exception.

##### Version 2.9 (November 30, 2013)

Handled exception when configuration file uploaded is incorrect.  
Added error log on jenkins project selector bean.

##### Version 2.8 (October 06, 2013)

Fixing bug
[JENKINS-16007](https://issues.jenkins-ci.org/browse/JENKINS-16007)

##### Version 2.7 (October 04, 2013)

Implementing
[JENKINS-18685](https://issues.jenkins-ci.org/browse/JENKINS-18685)
Added support for customization of deployment targets/environment
through build parameters.

##### Version 2.6 (September 16, 2013)

Implementing
[JENKINS-19237](https://issues.jenkins-ci.org/browse/JENKINS-19237)
Added deployment plan support  
Evolution
[JENKINS-19016](https://issues.jenkins-ci.org/browse/JENKINS-19016)
Modified behavior when the step of pre-requisite check failed.

##### Version 2.5 (July 27, 2013)

Implementing
[JENKINS-18882](https://issues.jenkins-ci.org/browse/JENKINS-18882)
Replaced weblogic icon  
Fixing bug
[JENKINS-18940](https://issues.jenkins-ci.org/browse/JENKINS-18940)
token {wl.source} never replaced in command line

##### Version 2.4 (July 24, 2013)

Implementing
[JENKINS-17300](https://issues.jenkins-ci.org/browse/JENKINS-17300) and
[JENKINS-18812](https://issues.jenkins-ci.org/browse/JENKINS-18812) :
Added new feature which allow the advanced user to define his own
command to run  
Fixing bug
[JENKINS-18881](https://issues.jenkins-ci.org/browse/JENKINS-18881) :
NPE when the user viewing deployment result of a skipped execution  
Fixing bug
[JENKINS-18883](https://issues.jenkins-ci.org/browse/JENKINS-18883) :
cron value doesn't appear in 'Deploy periodically' field

##### Version 2.3 (June 26, 2013)

Implementing
[JENKINS-18467](https://issues.jenkins-ci.org/browse/JENKINS-18467) :
stage mode attribute mishandled in job advanced configuration.  
Implementing
[JENKINS-17879](https://issues.jenkins-ci.org/browse/JENKINS-17879) :
Supports weblogic authentication by keystore.

##### Version 2.2 (May 04, 2013)

Implementing
[JENKINS-17300](https://issues.jenkins-ci.org/browse/JENKINS-17300) :
Supports stage mode choice in job configuration.

##### Version 2.1 (May 03, 2013)

Implementing
[JENKINS-17301](https://issues.jenkins-ci.org/browse/JENKINS-17301) :
Supports jdk configuration per job.

##### Version 2.0 (Mar 04, 2013)

Implementing
[JENKINS-16808](https://issues.jenkins-ci.org/browse/JENKINS-16808) :
Supports multi-deployment feature.  
Implementing
[JENKINS-16699](https://issues.jenkins-ci.org/browse/JENKINS-16699) :
Searched resource pattern or name is traced in the job log

Be Careful

This version is not backward compatible.

##### Version 1.4 (Feb 11, 2013)

Implementing
[JENKINS-15696](https://issues.jenkins-ci.org/browse/JENKINS-15696) :
Supports freestyle project.

##### Version 1.3 (Aug 13, 2012)

Implementing
[JENKINS-14763](https://issues.jenkins-ci.org/browse/JENKINS-14763) :
English translation. The English language is the default plugin
language.

##### Version 1.2 (Aug 2, 2012)

Implementing
[JENKINS-14646](https://issues.jenkins-ci.org/browse/JENKINS-14646) :
The old java class or resources prefixed by HudsonXXXX has been
refactored to XXXX.  
Implementing
[JENKINS-14626](https://issues.jenkins-ci.org/browse/JENKINS-14626) : As
of now, it's possible to filter the artifact name to deploy by regex
defined in the job configuration. (Useful for maven multi-module project
which generate many artifacts).

##### Version 1.1 (May 5, 2012)

Forked from Hudson version.

Added JDK selection on global configuration.

Removed task abortion if no compatibility detected between the JDK and
the weblogic.Deployer API (As of now, It displays a warning).

Fixed translation and spelling errors.

Added WebLogic Server 10.3 support.
