## Description

``` conf-macro
Warrior Framework Plugin allows user to integrate Warrior Automation Framework with Jenkins to execute Warrior files
```

## Warrior Framework Plugin installation

1\. Navigate to Manage Jenkins → Manage Plugins → Available

2\. Install 'Warrior Framework Plugin'

3\. Restart Jenkins to complete installation

## Running a Jenkins job with Warrior Framework Plugin

1\. In Jenkins, navigate to 'New Item' and create a new Job

2\. In Build section, click 'Add build step', and select 'Warrior
Framework Plugin'

3\. Provide values for all required fields(\* indicates mandatory field)
- refer 'Configuration' section below

4\. Save the changes and click 'Build Now' to run the Job

## Features:

1\. Execute warrior files(case/suite/project)

2\. Upload the execution logs to FTP/SFTP/SCP server

## Configuration:

Plugin has below sections:

#### 1. Configuration details(mandatory):

[Warhorn](https://github.com/warriorframework/warriorframework/tree/master/warhorn)
will be used for setting up the execution environment for [Warrior
Framework](https://github.com/warriorframework/warriorframework) and the
details of configuration/input file for warhorn will be specified in
this section.

Configuration file can be downloaded either from a git repository or via
SFTP.

#### 2. Files to run(mandatory):

Provide relative/absolute path of warrior files - case/suite/project to
be executed by Warrior Framework

#### 3. Python path(optional):

Provide the absolute path of Python interpreter or the default python
will be used for execution.

#### 4. Copy Warrior log files to remote server(optional):

Provide the details of the system where the log files will be uploaded
using FTP/SFTP/SCP

Note - Click the help(?) button in the plugin to know more about each
field.

## Change-log

#### Release 1.2

-   Minor changes

#### Release 1.1

-   Minor changes

#### Release 1.0

-   Initial release of the plugin
