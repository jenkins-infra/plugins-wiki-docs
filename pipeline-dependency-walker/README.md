Adds the Pipeline step ‘walk’ to execute a pipeline task for the job and
all its downstream jobs.

# Summary

Jenkins has introduced a new way to configure the jobs - using pipeline
groovy scripts. Pipeline allows to configure a build process in a
flexible way. Comparing to classical job configuration pipelines is way
more powerful, manage-able and expressive configuration tool.

The Jenkins pipeline-dependency-walker allows you to tackle the problem
of executing same pipeline routine for the job and all its downstream
jobs. For maven projects that means an execution of the same routine for
all the jobs defined as SNAPSHOT dependencies of the given job. The
execution graph can be visualized using [Dependency Graph View
Plugin](https://wiki.jenkins.io/display/JENKINS/Dependency+Graph+View+Plugin).

Some extra documentation for this plugin is in
the [GitHub](https://github.com/jenkinsci/pipeline-dependency-walker-plugin)

# Usage scenarios

## 1. Clean build

The plugin can be used to preform a clean build in the isolated
environment for the group of dependent projects.

Example of pipeline configuration:

``` syntaxhighlighter-pre
node {
    stage('build') {
        echo "cleanup workspace"
        deleteDir()

        mvnRepo=pwd() + "/m2" // set local maven repo
        echo "use maven repo $mvnRepo"

        walk job: 'parent-project', jobAction: '''
            dir(JOB_NAME) {
                git url: JOB_SCM_URL, branch: JOB_SCM_BRANCH, credentialsId: JOB_SCM_CREDINTIALS_ID
                withMaven(maven: 'mvn', mavenLocalRepo: mvnRepo) {
                    sh "mvn clean install"
                }
            }
        '''
    }
}
```

## 2. Multiple (cascade) release

Another use case is a multiple release. When the release action (see
[Release Plugin](https://wiki.jenkins.io/display/JENKINS/Release+Plugin)
or [M2 Release
Plugin](https://wiki.jenkins.io/display/JENKINS/M2+Release+Plugin)) is
defined in a way that it drops SNAPSHOT keyword from dependencies, than
using this plugin one can trigger a consistent release of multiple
modules. In this scenario release should first update dependencies, for
example invoking following maven target:

``` syntaxhighlighter-pre
versions:use-releases scm:checkin \-Dmessage="drop snapshot versions"
```

In some way the plugin is an alternative to [Maven Cascade Release
Plugin](https://wiki.jenkins.io/display/JENKINS/Maven+Cascade+Release+Plugin).

Example of pipeline configuration:

``` syntaxhighlighter-pre
node {
    stage('build') {
        walk job: 'parent-project', failOnUnstable: true, jobAction: 'release JOB_NAME'
    }
}
```
