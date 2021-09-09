A Jenkins plugin to deploy an Azure Function.

## Prerequisites

To use this plugin to deploy to Azure Function, first you need to have
an Azure Service Principal in your Jenkins instance.

1.  Create an Azure Service Principal through [Azure
    CLI](https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?toc=%2fazure%2fazure-resource-manager%2ftoc.json) or [Azure
    portal](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal).
2.  Open Jenkins dashboard, go to Credentials, add a new Microsoft Azure
    Service Principal with the credential information you just created.

Then create a Function in Azure portal or through Azure CLI.

## Deploy

You can deploy your project to Azure Function by uploading your build
artifacts using
[GIT](https://docs.microsoft.com/en-us/azure/app-service/deploy-local-git) or
[ZIP](https://docs.microsoft.com/en-us/azure/app-service/deploy-zip).

1.  Create a new freestyle project in Jenkins, add necessary build steps
    to build your code.
2.  Add a post-build action 'Publish an Azure Function'.
3.  Select your Azure credential in Azure Profile Configuration section.
4.  In App Configuration section, choose the resource group and function
    app in your subscription, and also fill in the files you want to
    deploy (for example, a jar package if you're using Java).
5.  There are two optional parameters Source Directory and Target
    Directory that allows you to specify source and target folders when
    uploading files.
6.  Save the project and build it, your function app will be deployed to
    Azure when build is completed.

## Deploy using Pipeline

You can also use this plugin in pipeline (Jenkinsfile). Here are some
samples to use the plugin in pipeline script:

To deploy a NodeJS function app:

``` syntaxhighlighter-pre
azureFunctionAppPublish azureCredentialsId: '<credential_id>',
                        resourceGroup: '<resource_group_name>', appName: '<app_name>',
                        filePath: '**/*.js,**/*.json'
```

For advanced options, you can use Jenkins Pipeline Syntax tool to
generate a sample script.

## Data/Telemetry

Azure Function Plugin collects usage data and sends it to Microsoft to
help improve our products and services. Read our [privacy
statement](http://go.microsoft.com/fwlink/?LinkId=521839) to learn more.

You can turn off usage data collection in Manage Jenkins -\> Configure
System -\> Azure -\> Help make Azure Jenkins plugins better by sending
anonymous usage statistics to Azure Application Insights.

## Changelog

### Version 0.3.0, 2019-01-07

-   Deploy Java function with zip deployment instead of ftp deployment

### Version 0.2.1, 2018-04-03

-   Support for credentials lookup
    in [Folders](https://plugins.jenkins.io/cloudbees-folder)

### Version 0.2.0, 2018-01-09

-   Support MSI

### Version 0.1.2, 2017-11-07

-   Specify refspec explicitly when doing git push
-   Add Third Party Notice

### Version 0.1.1, 2017-10-18

-   Remove runtime licenses

### Version 0.1.0, 2017-10-04

-   Initial release
