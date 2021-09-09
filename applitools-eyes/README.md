This plugin adds [Applitools Eyes](https://applitools.com/) test results
to your Jenkins build report. See this video for a recorded
tutorial: <https://youtu.be/5MUaXS2_AmU>.

# Enabling Applitools support

## Project Configuration in Jenkins

### Free Style Project

After installing the Applitools Eyes plugin you can enable Applitools
support in the project configuration page, by checking "Applitools
Support" under the "Build Environment" section:

![](docs/images/jenkins-applitools-support3.png)

If you are using a dedicated Applitools Eyes server, update the
Applitools URL accordingly (If you don't know if you're using a
dedicated server, you are not using one).

### Pipeline project

To use the Applitools plugin in a pipeline project, you need to add the
Applitools() directive and put your run code in a block. Following is a
script example:

``` syntaxhighlighter-pre
node {
    stage('Applitools build') {
        Applitools() {
            sh 'mvn clean test'
        }
    }
}
```

If you are using a dedicated Applitools Eyes server, you should update
the Applitools URL accordingly inside the Applitools directive. For
example:

``` syntaxhighlighter-pre
node {
    stage('Applitools build') {
        Applitools('https://myprivateserver.com') {
            sh 'mvn clean test'
        }
    }
}
```

### Creating an Applitools supported task using DSL

You can use DSL to dynamically create a new task with Applitools
enabled.  

  

``` syntaxhighlighter-pre
freeStyleJob('dynamically-generated-job') {
    wrappers {
        applitools('https://myprivateserver.com')
    }
    steps {
        shell ("echo DYNAMIC_TASK")
    }
}
```

  

If you have any questions or need any assistance in using the plugin,
feel free to contact Applitools support at: support \[at\] applitools
dot com. 

## Updating Your Tests Code

Jenkins exports the batch ID to the *APPLITOOLS\_BATCH\_ID* environment
variable. You need to update your tests code to use this ID in order for
your tests to appear in the Applitools window report in Jenkins. 

In addition, Jenkins exports a suggested batch name to the
*APPLITOOLS\_BATCH\_NAME* environment variable. Using this batch name is
optional (the batch name is used for display purposes only).

Following is a Java code example:

``` syntaxhighlighter-pre
BatchInfo batchInfo = new BatchInfo(System.getenv("APPLITOOLS_BATCH_NAME"));
// If the test runs via Jenkins, set the batch ID accordingly.
String batchId = System.getenv("APPLITOOLS_BATCH_ID");
if (batchId != null) {
    batchInfo.setId(batchId);
}
eyes.setBatch(batchInfo);
```

If you have any questions or need any assistance in using the plugin,
feel free to contact Applitools support at: support \[at\] applitools
dot com. 

## Video Tutorial

You can find a recorded tutorial for using the Applitools Eyes Plugin
here: <https://youtu.be/5MUaXS2_AmU>.

# Changelog

### Version 1.10

Added support for creating an Applitools task from DSL.

### Version 1.8

Added automatic support for batch sequence name.

### Version 1.7

Corrected project name extraction.

### Version 1.6

Added pipeline support.

### Version 1.5

Now exporting "APPLITOOLS\_BATCH\_NAME" environment variable, which can
be used to set default batch name.

### Version 1.4

Changed Applitools frame size, to allow better integration with the
in-window viewer.

### Version 1.3

Inital release.

  
