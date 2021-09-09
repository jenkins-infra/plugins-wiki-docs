 

A Jenkins plugin to communicate with a Themis instance. It can send
report files to be analyzed by Themis and send a refresh request for a
project.

## Usage

### Create a Themis instance

In global configuration (“Manage Jenkins” ⇒ “Configure System”), add a
Themis instance in the Themis configuration section. You need to fill
the following fields:

-   **instance name**: the name of the instance, used to identify it if
    there are several instances.
-   **URL**: the base url of your Themis instance (e.g.,
    “[https://themis.example.com](https://themis.example.com/)”).
-   **API key**: a Themis API key, generated from the administration
    page of your Themis instance. Used for authentication.

### Refreshing Themis

The action will send a request for refreshing the project, but will not
wait for its completion. You should thus check your Themis instance to
see the refresh status. By default errors will not mark the build as
failed, but you can change this behavior by checking the “Error fails
build” checkbox.

#### Freestyle project

In the configuration of your job, add the post-build action “Refresh
Themis Project”. Select the Themis instance where the project to refresh
is located, then enter the project key, which is available in the
project administration page of Themis.

### Pipeline

The Themis refresh step is available in pipeline mode:

``` syntaxhighlighter-pre
themisRefresh(instanceName: 'Some instance', projectKey: 'key')
```

If you want errors to fail the build, add the `failBuild` parameter, set
as `true`.

### Sending report files

The action will gather report files (e.g., test coverage reports) to
Themis. You need to specify the Themis instance to use, the key of the
source that was analyzed by the reports, and a list of report files.

Report files have a type and paths. If several paths are required to
match all the files for a type, you can add several report files with
the same type or use a single report file with all the paths separated
by commas. Paths can match several files using ant-style wildcards
(e.g., “`target/**/*.xml`”).

By default errors will not mark the build as failed, but you can change
this behavior by checking the “Error fails build” checkbox.

#### Freestyle project

In the configuration of your job, add the post-build action “Send report
files to Themis”. Select the Themis instance and enter the source key.
You can then add as many report files as needed.

#### Pipeline

You can send report files in a pipeline job using the \`themisReport\`
function:

``` syntaxhighlighter-pre
themisReport(instanceName: 'Some instance', sourceKey: 'key', reports: [[type: 'type1', path: 'path'], [type: 'type2', path: 'path']])
```

Reports are specified as a list of maps, each containing a type (key
`type`) and a path (key `path`).

If you want errors to fail the build, add the `failBuild` parameter, set
as `true`.

##### ⚠ Retrieving SCM version

To properly analyze the reports, Themis requires the SCM version. In a
freestyle project it is automatically retrieved from environments
variable. Due to limitations of pipeline, these environment variables
are not set in a pipeline project and you will need to manually add it
in the environment. This can be done using the [`withDev`
step](https://jenkins.io/doc/pipeline/steps/workflow-basic-steps/#code-withenv-code-set-environment-variables) (recommended)
or the
[`environment` directive](https://jenkins.io/doc/book/pipeline/syntax/#environment).

For git:

``` syntaxhighlighter-pre
withEnv(["GIT_COMMIT=${sh(returnStdout: true, script: 'git rev-parse HEAD').trim()}"]) {
    themisReport(…)
}
```

For SVN:

``` syntaxhighlighter-pre
withEnv(["SVN_REVISION=${sh(returnStdout: true, script: 'svn info --show-item last-changed-revision .').trim()}"]) {
    themisReport(…)
}
```

## Proxy

The plugin uses the Jenkins proxy configuration, in the “Advanced” tab
of the “Manage plugins” configuration page.  
Authentication, HTTPS, and exclusions are all supported.

## Changelog

**1.4.1**:

-   Add Cppchecker to the list of supported tools

**1.4**:

-   Add Jacoco to the list of supported tools
-   Fix an issue that could occur if report files archiving failed

**1.3**:

-   Add a button to test connection with Themis instance in global
    configuration

**1.2.3:**

-   Modify the version of workflow step api to be more inclusive

**1.2.1**:

-   Fix a bug where old commit ID was sent

**1.2**:

-   Add a post build action and a step to send report files to Themis

**1.1**:

-   Add support for http proxy

**1.0**:

-   Initial release
