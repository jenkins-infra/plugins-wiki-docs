  
This plug-in exposes project builds as a maven repository so the
artifacts can be picked up by downstream builds or other systems.

# Use in a Maven build pipeline

1\. Add the following to the jenkins maven settings.xml file:

**settings.xml**

``` syntaxhighlighter-pre
<profile>
   <id>upstream</id>
   <repositories>
      <repository>
         <id>upstream</id>
         <url>${env.Jenkins.Repository}</url>
         <releases>
             <enabled>true</enabled>
         </releases>
         <snapshots>
            <enabled>true</enabled>
         </snapshots>
      </repository>
    </repositories>
 <pluginRepositories>
    <pluginRepository>
          <id>upstream</id>
          <url>${env.Jenkins.Repository}</url>
          <releases>
            <enabled>true</enabled>
          </releases>
          <snapshots>
            <enabled>true</enabled>
         </snapshots>
    </pluginRepository>
  </pluginRepositories>
</profile>
```

###### Add maven setting

Add -Pupstream to your maven 'goals and options' (e.g: -Pupstream clean
install) to turn on the above profile.

###### Check the "Define Upstream Maven Repository" checkbox item

Set a specific project, or the project that caused this build.

# Description

After installation, archived build artifacts of your Maven jobs will be
available as a maven repository so that other tools or builds that
understand maven repositories can use them directly, without having to
upload them to a separate server first.

##### By Build

    http://jenkins-server:port/plugin/repository/project/projectName/Build/buildNumber/repository

Thus an artifact from build 4 of project helloworld might be

    http://jenkins-server:port/plugin/repository/project/helloworld/Build/4/repository/org/example/helloworld/1.0-SNAPSHOT/helloworld-1.0-SNAPSHOT.pom

##### **By GIT SHA1**

Alternatively, if your build was executed from source stored in a GIT
repository, you can access it via the SHA1 id. The plugin will return
the most recent successful build artifacts.

    http://jenkins-server:port/plugin/repository/project/projectName/SHA1/buildSHA1/repository

Thus an artifact from build 4 of project helloworld might be

<http://jenkins/plugin/repository/helloworld/SHA1/f9a6ccb7fa31b6d88cd4ce0554d46aa4f3850425/repository/org/example/helloworld/1.0-SNAPSHOT/helloworld-1.0-SNAPSHOT.pom>

    http://jenkins-server:port/plugin/repository/project/helloworld/SHA1/f9a6ccb7fa31b6d88cd4ce0554d46aa4f3850425/repository/org/example/helloworld/1.0-SNAPSHOT/helloworld-1.0-SNAPSHOT.pom

This feature could be used (with an appropriate script) to allow a
developer who checks out a particular branch, to automatically sync his
local repository with the correctly built artifacts stored in jenkins.
You can access the build without the project name:

``` syntaxhighlighter-pre
http://jenkins-server:port/plugin/repository/SHA1/buildSha1
```

Therefore you could sync your repository with something like the
following:

``` syntaxhighlighter-pre
wget -e robots=off -P ~/.m2/repository -np -r -nH --cut-dirs=4 http://jenkins:8080/plugin/repository/SHA1/`git rev-parse HEAD`/
```

##### **All Builds**

A repository containing all build artifacts is available at

    http://jenkins-server:port/plugin/repository/everything

**Chained Builds**

The above examples return repositories containing just the artifacts
from the particular build. You can get access to a repository that also
contains any upstream resources by substituting 'repository' for
'repositoryChain'. E.g:

    http://jenkins-server:port/plugin/repository/project/projectName/Build/buildNumber/repositoryChain

 

Care is needed due to aliasing of artifacts if you have multiple
projects generating artifacts with the same coordinate with the
'everything' and 'repositoryChain' modes.

# Version History

[TABLE]

 
