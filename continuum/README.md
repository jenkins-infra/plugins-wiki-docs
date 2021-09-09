Exposes
[Continuum](https://www.versionone.com/product/continuum/devops/features)
commands that are available via its [REST
API](https://community.versionone.com/VersionOne_Continuum/REST_API_and_Command_Line_Tools/API_Introduction/Continuum_REST_API_Reference)
as pipeline steps.

## Requirements

-   Continuum API token (see ['Authenticating: Using a
    token'](https://community.versionone.com/VersionOne_Continuum/REST_API_and_Command_Line_Tools/API_Introduction)
    section),
-   Jenkins 2.11 or later,
-   [Credentials
    Plugin](https://wiki.jenkins.io/display/JENKINS/Credentials+Plugin)
    1.22 or later,
-   [Pipeline Job
    Plugin](https://wiki.jenkins.io/display/JENKINS/Pipeline+Job+Plugin)
    2.9 or later

## Usage

**Common step parameters:**

-   *serverUrl* - Continuum server's base URL
-   *credentialsId* - Id of the stored credentials which contains the
    Continuum API token,
-   *apiToken* - Continuum API token. When specified, this parameter's
    value has precedence over credentialsId value,
-   *markUnstable* - When set, mark current run as unstable if the step
    execution fails.

#### Commands

##### *ctmInitiatePipeline*

``` syntaxhighlighter-pre
ctmInitiatePipeline serverUrl: 'https://continuum.server.url', credentialsId: 'Continuum', project: 'My Ctm Project', definition: 'My pipeline definition', group: 'master', environmentVariables: '*'
```

The id of the initiated pipeline instance is recorded
in *jenkins.plugins.continuum.actions.PipelineInitiatedAction* instance
within the current *Run*.

##### *ctmPostPiData*, *ctmSetPiData*

``` syntaxhighlighter-pre
ctmPostPiData serverUrl: 'https://continuum.server.url', credentialsId: 'Continuum', key: 'build_complete', value: 'true', pi: 'running_pipeline_instance_id'
```

``` syntaxhighlighter-pre
ctmSetPiData serverUrl: 'https://continuum.server.url', credentialsId: 'Continuum', key: 'build_complete', value: 'true', pi: 'running_pipeline_instance_id'
```

If the *pi *parameter is not specified, the ids that are recorded in
current
run's *jenkins.plugins.continuum.actions.PipelineInitiatedAction* instance
are used.

## Version History

### Version 1.0.1 (November 2017)

-   Initial release,
-   Supports [initiate\_pipeline](https://community.versionone.com/VersionOne_Continuum/REST_API_and_Command_Line_Tools/API_Introduction/Continuum_REST_API_Reference#initiate_pipeline), [post\_pi\_data](https://community.versionone.com/VersionOne_Continuum/REST_API_and_Command_Line_Tools/API_Introduction/Continuum_REST_API_Reference#post_pi_data), [set\_pi\_data](https://community.versionone.com/VersionOne_Continuum/REST_API_and_Command_Line_Tools/API_Introduction/Continuum_REST_API_Reference#set_pi_data)
    commands.

 
