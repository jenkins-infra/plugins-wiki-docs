 This plugin stores the scm changes and job build message as http
request body to trigger service.

-   Introduction
-   How it works?
-   Usage

## Introduction

The simple way to read the job build message, including the scm
changeSets and job build message, which is used to trigger other
service.

**Only \`Git\` and \`Svn\` based projects are supported.**

## How it works?

While your job runs the plugin reads your build workspace to retrieve
the build message via compare last with previous build SCM revision
diffs. the diff are stored and use like $(AFFECTED*PATH),
$(JOB*BUILD\_MESSAGE).

## Usage

Install this plugin via the Jenkins plugin manager.

After installation just activate the post build action named SCM
HttpClient.

configuration:

![](https://i.imgur.com/4s3LJYC.jpg)

print on console:

![](https://i.imgur.com/BbHqhaK.jpg)

## Version history

### Version 1.0 (February 26, 2019)

-   Initial release

### Version 1.1 (June 18, 2019)

-   added Authorization for request

  
