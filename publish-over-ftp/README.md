
# Publish Over ...

Read Publish Over ... wiki page first

Please read [Publish
Over](https://wiki.jenkins.io/display/JENKINS/Publish+Over) first.  
Common configuration options that are documented in the Publish Over ...
wiki page will not be repeated here.

[Features](https://wiki.jenkins.io/display/JENKINS/Publish+Over+FTP+Plugin#PublishOverFTPPlugin-features)  
[Configure](https://wiki.jenkins.io/display/JENKINS/Publish+Over+FTP+Plugin#PublishOverFTPPlugin-configuration)  
[Change
log](https://wiki.jenkins.io/display/JENKINS/Publish+Over+FTP+Plugin#PublishOverFTPPlugin-changelog)

# Features

-   Send files to FTP servers
-   The plugin is "promotion aware" see
    [Promotions](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-promotions)
-   Publish to multiple servers in the "Post-build Actions"
-   Transfer complete directory structures, partial structures or just
    files
-   Option to delete all files in the remote directory before publishing
-   Use passive (PASV) or active (PORT) transfers
-   FTP can be used as a build step during the build process
-   Passwords are encrypted in the configuration files and in the UI

# Configure

#### Create host configurations in the main Jenkins configuration

From the Jenkins home page, click "Manage Jenkins" and the click on
"Configure System"

Find the FTP section (as below) and click on the "Add" button next to
"FTP Servers"  
![](docs/images/ftp_global_unconfigured.PNG)

You should now have the configuration options as below  
![](docs/images/ftp_global_configured.PNG)

Fill in Name, Hostname, Username, Password and Remote Directory. [see
Publish Over ... for common options for Host
Configurations](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-host)

##### Advanced

If you click the "Advanced..." button for a configuration, then you will
make more configuration options available (see below)  
![](docs/images/ftp_global_advanced.PNG)

[see Publish Over ... for common options for Host
Configurations](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-host)

###### Use active data mode

By default passive mode will be used to connect to the FTP Server.  
In passive mode the client initiates all connections which will allow
the client to send files through a firewall that has been configured to
refuse all inbound connections (and does not create dynamic rules).  
If you want to dissable passive mode, and have the client use PORT
commands for the server to connect to the client to retieve the files,
then you can check this box.

###### Don't make nested dirs

Do not try to create nested directories with a single MKD command  
The default behaviour when creating directories is to try to create the
target directory with single command, even if it is nested. If this
fails, the plugin will fall back to creating each directory
individually. Some FTP servers, when asked to create nested directories
will respond with a success code, but will not create the directories
correctly. This will result in directories being created in incorrect
branches of the directory tree.  
This option will not prevent the creation of nested directories, it is
just a fix for badly behaved FTP servers.

##### Click "Test Configuration".

##### Add more server configurations (if required)

##### Save

#### Configure a job to Publish Over FTP

Open a jobs main page and then click "Configure" from the left hand
menu.

Find the "Send build artifacts over FTP" checkbox in the "Post-build
Actions" section (as below) and click in the box.  
![](docs/images/ftp_publish_not_configured.PNG)

You should now have the configuration options as below  
![](docs/images/ftp_configure.png)

[see Publish Over ... for common options for
Server](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-server)

[see Publish Over ... for common options for Transfer
Sets](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-transfer)

Source files

The build will fail if you do not select any Source files to transfer

##### Advanced (Transfer Sets)

If you click the "Advanced..." button for a Transfer Set, then you will
make more configuration options available (see below)

![](docs/images/screenshot18.png)

[see Publish Over ... for common options for Transfer
Sets](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-transfer)

###### ASCII mode

Transfer the files using ASCII mode.  
This means that during the transfer, new lines and carriage returns will
be converted from the format used on the client operating system to the
format used on the servers operating system.  
Do not use this option if your Source files pattern will match any
binary files, as there is a good chance that binary files will be
corrupted during transfer.

###### Clean remote

Delete all files and directories from the remote directory before
uploading the new files.

##### Advanced (Publisher)

If you click the "Advanced..." button that is immediately below the "Add
Server" button, then you will make more configuration options available
(see below)  
![](docs/images/ftp_publish_publisher_advanced.PNG)

[see Publish Over ... for common options for
Publisher](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-publisher)

#### Options to override the default Promotion behaviour

If you are configuring an action in a promotion, new options will become
available.  
![](docs/images/ftp_promotion.PNG)

[see Publish Over ... for common options for
Promotions](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-promotions)

# Change log

#### 1.9 (03/03/2013)

-   [JENKINS-16681](https://issues.jenkins-ci.org/browse/JENKINS-16681)
    Allow source file names and paths to contain whitespace
    -   Add Advanced Transfer Set option "Pattern separator"
-   [JENKINS-16976](https://issues.jenkins-ci.org/browse/JENKINS-16976)
    Upload creates unneeded folders
    -   Add Advanced FTP Server option "Don't make nested dirs"

#### 1.8 (22/10/2012)

-   [JENKINS-13126](https://issues.jenkins-ci.org/browse/JENKINS-13126)
    Option to create empty directories
-   No default excludes option now available for all versions of Jenkins
-   Exclude files pattern now available for all versions of Jenkins

#### 1.7 (10/09/2012)

-   [JENKINS-14283](https://issues.jenkins-ci.org/browse/JENKINS-14283)
    Enable FTP as a build step
-   [JENKINS-13693](https://issues.jenkins-ci.org/browse/JENKINS-13693)
    Add option to disable default excludes
-   Prefix Publish over to the global config section title
-   Move the defaults configuration in the global config to an Advanced
    section

#### 1.6 (11/01/2012)

-   Advanced option to enable the FTP control channel encoding to be set
    for an FTP server configuration

#### 1.5 (10/11/2011)

-   Enable the server credentials to be specified/overriden when
    configuring the publisher in a job

#### 1.4 (05/08/2011)

-   [JENKINS-10599](https://issues.jenkins-ci.org/browse/JENKINS-10599)
    When using the Flatten files option, do not create the Remote
    directory if there are no files to transfer (unless Clean remote is
    also selected)

#### 1.3 (21/07/2011)

-   [JENKINS-10363](https://issues.jenkins-ci.org/browse/JENKINS-10363)
    Allow the publisher default values to be changed in Manage Jenkins
    (on Jenkins and Hudson 1.391 - 1.395)

#### 1.2 (10/07/2011)

-   Remove duplicate delete button from the system config page

#### 1.1 (09/07/2011)

-   Fixed
    [JENKINS-10268](https://issues.jenkins-ci.org/browse/JENKINS-10268)

#### 1.0 (08/07/2011)

-   Add [Parameterized
    publishing](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-parampub)
    [JENKINS-10006](https://issues.jenkins-ci.org/browse/JENKINS-10006)
-   Add ability to
    [retry](https://wiki.jenkins.io/display/JENKINS/Publish+Over#PublishOver-retry)
    the publish
    [JENKINS-10094](https://issues.jenkins-ci.org/browse/JENKINS-10094)
-   Moved the "Verbose output in console" option to the new Advanced
    section containing the other new Server options

#### 0.8 (20/05/2011)

-   Remove "Give the master a NODE\_NAME" option when running on Jenkins
    1.414 or later
-   Default the "Give the master a NODE\_NAME" option to 'master' when
    run on a Jenkins older than 1.414

#### 0.7 (09/05/2011)

-   advanced Transfer Set option to Exclude files  
    (option only available with Jenkins 1.407 and later)

#### 0.6 (10/04/2011)

-   reduce horizontal space taken up by labels in the configuration
    views

#### 0.5 (01/04/2011)

-   clean remote - option to delete all files in the remote directory
    before publishing

#### 0.4 (18/02/2011)

-   passwords encrypted in config files and in UI (now requires
    Hudson \> 1.384 or any Jenkins)
-   environment variables for substitution now include build variables
    (including matrix build axis)

#### 0.3 (16/02/2011)

-   added form validation
-   removed debug logs for new configurations

#### 0.2 (12/02/2011)

-   2 new configuration options when in promotion
    -   Use the workspace when selecting "Source files"
    -   Use the time of the promotion when using "Remote directory is a
        date format"

#### 0.1 (08/02/2011)

-   Initial release

Questions, Comments, Bugs and Feature Requests

Please post questions or comments about this plugin to the [Jenkins User
mailing list](http://jenkins-ci.org/content/mailing-lists).  
To report a bug or request an enhancement to this plugin please [create
a ticket in
JIRA](http://issues.jenkins-ci.org/browse/JENKINS/component/15791).
