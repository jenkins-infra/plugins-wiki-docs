 

Jenkins Plugin to Record Deployments in Stackify Retrace  
  
Deployment Tracking Overview:  
<https://support.stackify.com/deployment-tracking-overview/>  
  
Sign Up for a Trial:  
<http://www.stackify.com/sign-up/>

## Installation

Manage Jenkins / Manage Plugins / Available

Search for 'Stackify' and install the 'Stackify Deployment Recorder'
plugin.

![](docs/images/stackify-deployment-recorder-install.png){height="150"}

## Usage

Jenkins Job / Configure

Add the 'Record deployment in Stackify Retrace' Post Build Action

![](docs/images/stackify-deployment-recorder-postbuildaction.png){height="250"}

Fill in your Stackify API key first. You will then get a drop down list
of applications to pick from.

![](docs/images/stackify-deployment-recorder-blankconfig.png){height="250"}

The configuration defaults should be fine for a Git + Maven Java
project.

![](docs/images/stackify-deployment-recorder-config.png){height="250"}

Save your job configuration changes.

## Troubleshooting

#### Job Log

Jenkins Job / Console Output

![](docs/images/stackify-deployment-recorder-joblog.png){height="150"}

#### System Log

Manage Jenkins / System Log / Add new log recorder

Name: Stackify

Logger: org.jenkinsci.plugins.stackify

![](docs/images/stackify-deployment-recorder-systemlogrecorder.png){height="150"}

Then you can view log messages from the Stackify plugin.

![](docs/images/stackify-deployment-recorder-systemlog.png){height="250"}

 

  
  
  
  
