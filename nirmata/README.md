This plugin enables synchronization of YAML/JSON files stored in a Git
repository with a Kubernetes application managed on the Nirmata
platform.

Nirmata is a Kubernetes platform that enables enterprises to deliver a
highly scalable, always-on container management platform, built on
Kubernetes. Using Nirmata, enterprise teams can fully automate the
delivery and management of applications. At Nirmata, our mission is to
empower all enterprises to easily deliver and manage containerized
applications across public and private clouds.

You can learn more on [Nirmata Website](https://www.nirmata.com/)

## Features

1.  Update a running application in an environment
2.  Update an application in a catalog
3.  Deploy an ephemeral application
4.  Delete an ephemeral application

## General information

This Jenkins Plugin supports update/deployment/deletion of applications
in Nirmata.

## Requirement

### Jenkins

Jenkins 2.107.3 or newer is required.

### Git

Git 2.17.0 or newer is required.

## Setup

### Install

Install this plugin via the Jenkins plugin manager or download the
latest version of it from
\[<https://github.com/jenkinsci/nirmata-plugin/releases>\].

### Create Nirmata API Key

1.  To enable access to your Nirmata platform, you must generate API
    key:
2.  Sign-in to Nirmata platform
3.  Select Settings -\> Users
4.  Click Generate API key
5.  Copy the generated API key

### Add the Nirmata API key to Jenkins:

1.  Navigate to your Jenkins hosting

2.  Select "Credentials" from the Jenkins side panel

3.  Choose a credentials domain and click 'Add Credentials'

4.  From the 'Kind' drop-down, choose 'Secret text'

5.  Add the copied API key to 'Secret' textbox

6.  Enter a description for the credential and save

    [![api1](https://user-images.githubusercontent.com/39581624/41719183-e85e95ce-757c-11e8-97a1-4f8c0f7d9e18.JPG)](https://user-images.githubusercontent.com/39581624/41719183-e85e95ce-757c-11e8-97a1-4f8c0f7d9e18.JPG)

## Pre-job configuration

### Freestyle job configuration

#### 1. Update a running application in an environment

-   Create a new freestyle project

-   Select ‘Git’ under the section ‘Source Code Management’. Enter the
    URL of the GitHub repository. Specify the branch name of the
    repository

    [![git](https://user-images.githubusercontent.com/39581624/41720190-e79cd06c-757f-11e8-9bec-7ae3f9f1a2d4.JPG)](https://user-images.githubusercontent.com/39581624/41720190-e79cd06c-757f-11e8-9bec-7ae3f9f1a2d4.JPG)

-   Enable ‘Poll SCM’ option under ‘Build Triggers’. This is required to
    remotely trigger a build

    [![poll](https://user-images.githubusercontent.com/39581624/41720699-7af80bbe-7581-11e8-9d7e-89690c31d624.JPG)](https://user-images.githubusercontent.com/39581624/41720699-7af80bbe-7581-11e8-9d7e-89690c31d624.JPG)

-   Furthermore, create a ‘Build step’ in the section ‘Build’ by
    selecting ‘Invoke Nirmata Service’ and select ‘Update App in
    Environment’ from the drop-down

    -   Nirmata Endpoint - Enter base URL of the platform (default:
        [nirmata.io](http://nirmata.io/))

    -   Nirmata API Credentials - Select API key from the drop-down if
        already configured in the first step or else click ‘Add’ to add
        credentials

    -   Existing Environments - Select environment from the list in the
        drop-down

    -   Environment Applications - Select application which should be
        updated, from the dropdown

    -   Timeout - Enter a time period to wait to pull the result from
        Nirmata

    -   List of directories - Enter the relative path of the directory
        w.r.t locally stored repository containing YAML/JSON files.
        Multiple directories can be included using comma separator.

    -   Include File Pattern - Add filename/extension/regex that should
        also be included for updating an application. By default, all
        .yaml, .yml, .json files present in the specified directories
        above would be included. Note that multiple
        filename/extension/regex can be included using comma separator.

    -   Exclude File Pattern- Add filename/extension/regex for files in
        the mentioned directories that should be excluded for updating
        an application. Note that multiple filename/extension/regex can
        be excluded using comma separator.

    [![updatebuildea](https://user-images.githubusercontent.com/39581624/42504572-db8583e4-8459-11e8-8a6a-d7ff3cff3afa.JPG)](https://user-images.githubusercontent.com/39581624/42504572-db8583e4-8459-11e8-8a6a-d7ff3cff3afa.JPG)

-   Save/Apply configuration of the job

-   This job would be triggered on detection of a commit/change in the
    specified Git repo

-   The ‘Update App in Environment’ build step is marked successful if
    all the YAML/JSON files are imported successfully else it is marked
    as failed if any issue is encountered

    [![updateeaoutput](https://user-images.githubusercontent.com/39581624/42510304-1b3f0c00-846c-11e8-9b68-510ddc908408.png)](https://user-images.githubusercontent.com/39581624/42510304-1b3f0c00-846c-11e8-9b68-510ddc908408.png)

#### 2. Update an application in a catalog

-   Create a new freestyle project

-   Select ‘Git’ under the section ‘Source Code Management’. Enter the
    URL of the GitHub repository. Specify the branch name of the
    repository

    [![git](https://user-images.githubusercontent.com/39581624/41720190-e79cd06c-757f-11e8-9bec-7ae3f9f1a2d4.JPG)](https://user-images.githubusercontent.com/39581624/41720190-e79cd06c-757f-11e8-9bec-7ae3f9f1a2d4.JPG)

-   Enable ‘Poll SCM’ option under ‘Build Triggers’. This is required to
    remotely trigger a build

    [![poll](https://user-images.githubusercontent.com/39581624/41720699-7af80bbe-7581-11e8-9d7e-89690c31d624.JPG)](https://user-images.githubusercontent.com/39581624/41720699-7af80bbe-7581-11e8-9d7e-89690c31d624.JPG)

-   Furthermore, create a ‘Build step’ in the section ‘Build’ by
    selecting ‘Invoke Nirmata Service’ and select ‘Update App in
    Catalog’ from the drop-down

    -   Nirmata Endpoint - Enter base URL of the platform (default:
        [nirmata.io](http://nirmata.io/))

    -   Nirmata API Credentials - Select API key from the drop-down if
        already configured in the first step or else click ‘Add’ to add
        credentials

    -   Catalog Applications - Select application which should be
        updated, from the dropdown

    -   Timeout - Enter a time period to wait to pull the result from
        Nirmata

    -   List of directories - Enter the relative path of the directory
        w.r.t locally stored repository containing YAML/JSON files.
        Multiple directories can be included using comma separator.

    -   Include File Pattern - Add filename/extension/regex that should
        also be included for updating an application. By default, all
        .yaml, .yml, .json files present in the specified directories
        above would be included. Note that multiple
        filename/extension/regex can be included using comma separator.

    -   Exclude File Pattern- Add filename/extension/regex for files in
        the mentioned directories that should be excluded for updating
        an application. Note that multiple filename/extension/regex can
        be excluded using comma separator.

    [![updatebuildca](https://user-images.githubusercontent.com/39581624/42504577-de796bba-8459-11e8-91ac-80f2be786f11.JPG)](https://user-images.githubusercontent.com/39581624/42504577-de796bba-8459-11e8-91ac-80f2be786f11.JPG)

-   Save/Apply configuration of the job

-   This job would be triggered on detection of a commit/change in the
    specified Git repo

-   The ‘Update App in Catalog’ build step is marked successful if all
    the YAML/JSON files are imported successfully else it is marked as
    failed if any issue is encountered

    [![updatecaoutput](https://user-images.githubusercontent.com/39581624/42510394-61a7e716-846c-11e8-830d-b56677e9bdf0.png)](https://user-images.githubusercontent.com/39581624/42510394-61a7e716-846c-11e8-830d-b56677e9bdf0.png)

#### 3. Deploy an ephemeral application

-   Create a new freestyle project

-   Create a ‘Build step’ in the section ‘Build’ by selecting ‘Invoke
    Nirmata Service’ and select ‘Deploy App in Environment’ from the
    drop-down

    -   Nirmata Endpoint - Enter base URL of the platform (default:
        [nirmata.io](http://nirmata.io/))

    -   Nirmata API Credentials - Select API key from the drop-down if
        already configured in the first step or else click ‘Add’ to add
        credentials

    -   Existing Environments - Select environment from the list in the
        drop-down

    -   Name for the application - Specify the name by which the
        application should be deployed in the platform

    -   Timeout - Enter a time period to wait to pull the result from
        Nirmata

    -   Select 'Deploy from catalog' if the application should be
        deployed from the Nirmata catalog

    -   Catalog Applications - Select the application which should be
        deployed, from the dropdown

    -   Select 'Deploy from File(s)' if the application should be
        deployed using .yaml/.json/.yml

        -   List of directories - Enter the relative path of the
            directory w.r.t locally stored repository containing
            YAML/JSON files. Multiple directories can be included using
            comma separator.

        -   Include File Pattern - Add filename/extension/regex that
            should also be included for updating an application. By
            default, all .yaml, .yml, .json files present in the
            specified directories above would be included. Note that
            multiple filename/extension/regex can be included using
            comma separator.

        -   Exclude File Pattern- Add filename/extension/regex for files
            in the mentioned directories that should be excluded for
            updating an application. Note that multiple
            filename/extension/regex can be excluded using comma
            separator.

    [![deploybuild](https://user-images.githubusercontent.com/39581624/45298639-be3f3c00-b526-11e8-88f2-f46d5aa759cd.png)](https://user-images.githubusercontent.com/39581624/45298639-be3f3c00-b526-11e8-88f2-f46d5aa759cd.png)

-   Save/Apply configuration of job and execute an initial build by
    triggering ‘Build Now’ from the side panel

-   The ‘Deploy App in Environment’ build step is marked successful if
    the application deployed in the environment else it is marked as
    failed if any issue is encountered

    [![deployoutput](https://user-images.githubusercontent.com/39581624/45298664-d9aa4700-b526-11e8-9478-faa310c800e2.png)](https://user-images.githubusercontent.com/39581624/45298664-d9aa4700-b526-11e8-9478-faa310c800e2.png)

4\. Delete an ephemeral application

-   Create a new freestyle project

-   Create a ‘Build step’ in the section ‘Build’ by selecting ‘Invoke
    Nirmata Service’ and select ‘Delete App in Environment’ from the
    drop-down

    -   Nirmata Endpoint - Enter base URL of the platform (default:
        [nirmata.io](http://nirmata.io/))

    -   Nirmata API Credentials - Select API key from the drop-down if
        already configured in the first step or else click ‘Add’ to add
        credentials

    -   Existing Environments - Select environment from the list in the
        drop-down

    -   Running Applications - Select the application which should be
        deleted, from the dropdown

    -   Timeout - Enter a time period to wait to pull the result from
        Nirmata

    [![deletebuild](https://user-images.githubusercontent.com/39581624/42504594-e704a1aa-8459-11e8-9783-9cccb6b2181b.JPG)](https://user-images.githubusercontent.com/39581624/42504594-e704a1aa-8459-11e8-9783-9cccb6b2181b.JPG)

-   Save/Apply configuration of job and execute an initial build by
    triggering ‘Build Now’ from the side panel

-   The ‘Delete App in Environment’ build step is marked successful if
    the application is deleted successfully else it is marked as failed
    if any issue is encountered

    [![deleteoutput](https://user-images.githubusercontent.com/39581624/42510609-0bcf9e28-846d-11e8-9243-1f78e27329d7.png)](https://user-images.githubusercontent.com/39581624/42510609-0bcf9e28-846d-11e8-9243-1f78e27329d7.png)

### Pipeline workflow

-   Create a new pipeline

-   Select ‘Hello World’ from the side drop-down under the section
    ‘Pipeline’ and click on ‘Pipeline Syntax’

    [![pipeline](https://user-images.githubusercontent.com/39581624/42921871-e0839b18-8b3b-11e8-924a-88feaa102a37.JPG)](https://user-images.githubusercontent.com/39581624/42921871-e0839b18-8b3b-11e8-924a-88feaa102a37.JPG)

-   Select ‘git: Git’ from the ‘Sample Step’ drop-down. Enter the URL of
    the GitHub repository. Specify the branch name of the repository.
    Click on ‘Generate Pipeline Script’ and copy the script generated.
    Note that this is required only for the ‘Update’ actions

    [![samplestep-git](https://user-images.githubusercontent.com/39581624/42927801-2fa5c560-8b53-11e8-98cb-8b32f5e36aa0.JPG)](https://user-images.githubusercontent.com/39581624/42927801-2fa5c560-8b53-11e8-98cb-8b32f5e36aa0.JPG)

-   Select ‘nirmata: Invoke Nirmata Service’ from the ‘Sample Step’
    drop-down, select the required action from the drop-down and
    select\\enter the appropriate parameters. Click on ‘Generate
    Pipeline Script’ and copy the script generated

    [![samplestep-nirmata](https://user-images.githubusercontent.com/39581624/42927804-32132e6e-8b53-11e8-9022-188a5f0ee91f.JPG)](https://user-images.githubusercontent.com/39581624/42927804-32132e6e-8b53-11e8-9022-188a5f0ee91f.JPG)

-   Add the scripts generated above inside 'node' script as shown below

    [![pipelinescript](https://user-images.githubusercontent.com/39581624/42934507-09319b4a-8b65-11e8-9cf5-3965e24e4d5e.JPG)](https://user-images.githubusercontent.com/39581624/42934507-09319b4a-8b65-11e8-9cf5-3965e24e4d5e.JPG)

-   Save/Apply configuration of job and execute an initial build by
    triggering ‘Build Now’ from the side panel

    [![outputpipeline](https://user-images.githubusercontent.com/39581624/42928201-4bcc31ec-8b54-11e8-97aa-e0d073e8cf16.png)](https://user-images.githubusercontent.com/39581624/42928201-4bcc31ec-8b54-11e8-97aa-e0d073e8cf16.png)

Note: Similar workflows can be generated for 'Update App in
Catalog'/'Deploy App in Environment'/'Delete App in Environment'
actions.

## Version history

### Version 1.0.0

-   Initial release

### Version 1.0.1

-   UI Improvements

### Version 1.0.3

-   Pipeline support added

### Version 1.0.4

-   Improvements and support deployment of application through files

### Version 1.0.8

-   Master-slave configuration support added

### Version 1.0.9

-   'cloudbees-folder' plugin support added

### Version 1.0.10

-   Bug fix

### Version 1.0.11

-   Changes from Nirmata 2.4

  
