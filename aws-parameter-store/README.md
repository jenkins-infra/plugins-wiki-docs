A Jenkins plugin to populate environment variables from [AWS Parameter
Store](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html).

## Overview

This plugin collects parameters from the AWS Parameter Store and sets
them as environment variables for a build.

Each AWS Parameter Store parameter name is converted to uppercase and
any non-numeric characters are converted to underscores. For example,
the parameter name `my-param1` with value `my-value1` would become the
environment variable `MY_PARAM1=my-value1`.

This plugin is compatible with [AWS Parameter Store
Hierarchies](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-paramstore-working.html).
A **path** and **recursive** indicator can be specified to pass to the
[GetParametersByPath](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetParametersByPath.html)
API call. The **naming** parameter can be used to specify how the
environment variable is derived from the **path**:

-   **basename** - anything after the last '/' is the variable name
    (e.g. with path `/service`, parameter `/service/app/param` becomes
    `PARAM`)
-   **relative** - anything after the **path** is the variable name
    (e.g. with path `/service`, parameter `/service/app/param` becomes
    `APP_PARAM`)
-   **absolute** - the full path with parameter name is the variable
    name (e.g. with path `/service`, parameter `/service/app/param`
    becomes `SERVICE_APP_PARAM`)

Parameter types are handled as follow:

-   **String** parameter values are unchanged
-   **SecureString** parameter values are decrypted
-   **StringList** parameter values are set as comma-separated values

## Configuration

The plugin is configured on each build configuration page:

[![Screenshot](https://github.com/jenkinsci/aws-parameter-store-plugin/raw/master/images/screenshot-1.png)](https://github.com/jenkinsci/aws-parameter-store-plugin/blob/master/images/screenshot-1.png)

This has the following fields:

-   **AWS Credentials** - the id of credentials added via the [AWS
    Credentials Plugin](https://plugins.jenkins.io/aws-credentials)
-   **AWS Region Name** - the region name to search for parameters
    (defaults to `us-east-1`)
-   **Path** - the hierarchy for the parameters
-   **Recursive** - whether to retrieve all parameters within a
    hierarchy
-   **Naming** - whether the environment variable should be
    **basename**, **relative** or **absolute**

## Pipelines

This plugin can be included in your `Jenkinsfile`, for example:

    withAWSParameterStore(credentialsId: '', naming: 'relative', path: '/service', recursive: true, regionName: 'eu-west-1') {
      // some block
    }

## ChangeLog

1.1.0 (2018-04-05)

-   Add support for pipelines
-   Add naming options for environment variables: basename, absolute,
    relative
-   Migrate deprecated AWS API calls

[](https://github.com/jenkinsci/aws-parameter-store-plugin/blob/master/CHANGELOG.md#100-2018-03-27)1.0.0
(2018-03-27)

-   Initial release
