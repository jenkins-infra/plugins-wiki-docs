This plugin implements a jBPM 5 build step, which can be used to execute
a test plan described by a business process.

## What is jBPM workflow plugin?

jBPM workflow plugin implements a Jenkins build step. To learn more
about possibilities and benefits of integration with jBPM, take a look
[here](https://wiki.jenkins.io/display/JENKINS/jBPM+Integration+with+Jenkins).

## Current status

The first version 0.3 has been released. It contains jBPM workflow
plugin (new build step) and is able to run business processes, also with
enabled persistence. Please note, that this plugin has not been tested
in production environment.

## Business process configuration

Plugin can be used to start BPMN 2.0 compliant business process
definitions, but they have to be created first. For this purpose it is
recommended to install and use jBPM. This suite contains web application
Guvnor, which stores and makes available your business process
definitions to your Jenkins master. Guvnor is bundled with Designer, a
web tool for business process draft.

Integration of jBPM business process with Jenkins is done via service
tasks (work items). So you have to save your work item definition in
Guvnor which describes interface of the new service task type. Then it
is possible to draft business processes and use the new tasks on the
canvas of the Designer. Service tasks represent asynchronous launch of
Jenkins job. Asynchronous means that you can run multiple service tasks
concurrently, one task does not block the engine execution. Current
`JenkinsJob` work item definition can be added in Guvnor via the item
*New work item definition* in *Knowledge Bases* menu on the left panel
and looks like this (can also be found
﻿[here](https://github.com/jsvitak/jbpm-workflow-plugin/blob/master/src/main/resources/META-INF/JenkinsJobWorkItemDefinition.wid)):

``` syntaxhighlighter-pre
import org.drools.process.core.datatype.impl.type.ListDataType;
import org.drools.process.core.datatype.impl.type.ObjectDataType;
[
  [
    "name" : "JenkinsJob",
    "displayName" : "Jenkins Job",
    "parameters" : [
      "jobParameters" : new ListDataType(),
    ],
    "results" : [
      "jobResult" : new ObjectDataType(),
    ],
    "icon" : "icons/jenkins20.png",
  ]
]
```

While drafting business processes you may use every jBPM feature. Tasks
representing Jenkins jobs are supplied with a job name and they return a
job result. So make sure, that you have

-   declared correctly all process variables
-   set up input and output parameters of selected service task (it is
    not necessary to declare all of them, only the ones which are really
    used)
-   assigned/mapped constants and process variables to parameters of
    selected service task

Several examples below are provided to see how to configure most typical
use cases in process designer. It is assumed that you have successfully
deployed all jBPM modules into JBoss application server. Next step is to
open Guvnor web page, create a package and new BPMN 2.0 business process
definition. Process designer will be opened and you can quickly create a
simple business process using canvas and tool palettes. You have to
remember process ID of your business process definition in order to use
it by the plugin in Jenkins. Small knowledge of BPMN is required, so the
use cases below describe only plugin specific configuration steps.

### Setting up a job name

Select your work item of `JenkinsJob` type and go to properties panel on
the right. Set a work item name - it must exactly match the name of your
existing Jenkins job, for example `hello-job`.

Once the jBPM process is invoked (by launching Jenkins job with jBPM
plugin build step) and the process flow enters `JenkinsJob` work item,
which has been already configured, then Jenkins job with the name
`hello-job` will be launched.

### Retrieving a job result

To be able to launch a Jenkins job, you have to specify a job name
first. After that you are able to retrieve a job result. First add a new
import for Jenkins result representation:

`hudson.model.Result`

Add a process variable result of *Standard Type* Object in the *Variable
Definitions* field of the process *Properties* panel. *Custom Type*
`Result` is not necessary to fill.

`result:Object`

Select a JenkinsJob work item and open data output editor by clicking on
*DataOutputSet* field in *More Properties* of *Properties* panel. Add a
new data output with name `jobResult` and type `Object`.

`jobResult:Object`

Open assignments editor by clicking on *Assignments* field in *More
properties* of *Properties* panel. Set *From Object* as `jobResult`,
*Assignment Type* as is mapped to and *To Object* as `result`. Your
final assignments might look like:

`jobResult->result`

Now you are able to evaluate results of finished Jenkins jobs. This can
be done for example in constraints of gateway branches. If the
constraint expression is evaluated as true, then the process flow
continues in satisfied branches. This can be done in the following
example ways:

`return ((Result)(kcontext.getVariable("result"))).isBetterThan(Result.FAILURE);`

or

`return ((Result)(kcontext.getVariable("result"))).isWorseOrEqualTo(Result.FAILURE);`

If you do not want to specify branch constraints, then you can also pass
the result object for example to a human task to let the tester decide
in which flow branch the engine should continue.

Know that
[Result](http://javadoc.jenkins-ci.org/hudson/model/Result.html) is a
Jenkins class for representing result and contains static instances of
all result types - `SUCCESS, UNSTABLE, FAILURE, NOT_BUILT, ABORTED`.
Their ordering is important. You can easily compare against these result
types using the following methods:

`public boolean isWorseThan(Result that)`  
`public boolean isWorseOrEqualTo(Result that)`  
`public boolean isBetterThan(Result that)`  
`public boolean isBetterOrEqualTo(Result that)`

### Setting up a parameterized job

In the process configuration add several imports, just click on *Add
Import* button and fill in:

`hudson.model.StringParameterValue`  
`java.util.List`  
`java.util.ArrayList`

Also set process variables, at least variable parameters which is of
type Object, you do not have to set *Custom Type*.

`parameters:Object`

Write a Java code which fills this parameters process variable with a
data that should be supplied to a parameterized Jenkins job.

`List params = new ArrayList();`  
`params.add(new StringParameterValue("VERSION", "5.3.0"));`  
`kcontext.setVariable("parameters", params);`

Now the parameters will be a process variable of type List which can be
mapped to an input of a work item which launches a Jenkins job. Since
the jBPM workflow plugin uses simple Janino Java compiler, you cannot
use generics, like in the example above.

### Setting up a persistence

Persistence can be enabled in the global configuration page in Jenkins.
It has been tested only on JBoss AS 7, but any other container that
supports data source, which is accessible via JNDI might be possible to
use as well. Unfortunately this feature won't work now in Winstone.
Persistence was one of the hardest things to implement as there were
many classloading problems and conflicts. Simply said it was maybe a bad
idea to integrate such large and complex applications like jBPM and
Jenkins in Java code.

### Setting up an integration with LDAP

Integration with LDAP matters only to jBPM suite itself. jBPM supports
integration with LDAP, so that users from the LDAP can be used for jBPM
authentication. The goal is that only selected people are allowed to
modify selected business process packages or to claim specified human
tasks (like a decision in a selected test plan).

## Jenkins job configuration

It is assumed that you already have some jobs in your Jenkins server. To
control their launching using business processes you have to create a
free style Jenkins job and add a new build step *Invoke a jBPM business
process*. In this build step specify a URL to your business process
definition. To ease this, see the attached help icon with a sample URL,
which points to Guvnor location at localhost server, but you can easily
change it to your own URL. The idea is to download business processes
from your jBPM server repository (Guvnor) using WebDAV protocol.

It is also necessary to fill in a process identifier. It is useful to
adhere a convention like: my.package.process1.

All inputs are validated, so you'll be notified about wrong or empty
URLs.

# Problems

-   Plugin has not been tested in production environment.
-   Only testing was done on JBoss AS 7 with disabled JPA subsystem
    (classloading issues).
-   Requires a container with configured data source accesible via JNDI
    to use benefit of business process persistence. That means no
    persistence available with default Winstone container.
-   It's necessary to create additional job for each test plan (test
    plan corresponds to business process).
