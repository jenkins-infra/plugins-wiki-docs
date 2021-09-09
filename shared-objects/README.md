The current version of this plugin may not be safe to use. Please review
the following warnings before use:

-   [CSRF
    vulnerability](https://www.jenkins.io/security/advisory/2020-10-08/#SECURITY-2052)

**This plugin is up for adoption.** Want to help improve this plugin?
[Click here to learn
more](http://localhost:8085/display/JENKINS/Adopt+a+Plugin "Adopt a Plugin")!

This plugin makes it possible to share objects (script file, source
file, tool installation, ...) from an environment in Jenkins and manage
dynamically these objects through environment variables with the
[EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) during
the job build.

# Features

-   Exports Jenkins tool installations as environment variables
-   Extracts objects stored in a SCM as environment variables
-   Exports public file paths as environment variables
-   Exports public content as environment variables

# Use cases

-   To export a public file path as an environment variable
-   To fetch a Clearcase shared object and use the virtual path of the
    file content a as an environment variable  
    For example, a shared script stored in Clearcase and accessible
    through a label, will be populated in the job by an environment
    variable to a fetch copy script path.

# Versions

## 0.44

\* Rename 'URL properties file' to 'HTTP URL properties file' and an
option for 'public file path to properties file'

## 0.43

\* Fix
[JENKINS-16582](https://issues.jenkins-ci.org/browse/JENKINS-16582) -
Add uberClassLoader to Shared Objects Groovy Scripts

## 0.42

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.68  
\* Reauire Jenkins 1.444+

## 0.41

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.62

## 0.40

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.60

## 0.39

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.59

## 0.38

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.58

## 0.37

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.57

## 0.36

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.56

## 0.35

\* Fix
[JENKINS-14056](https://issues.jenkins-ci.org/browse/JENKINS-14056) -
Run Groovy scripts from files and environment variables (Add a shared
groovy script content)

## 0.34

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.55

## 0.33

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.54

## 0.32

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.53

## 0.31

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.52

## 0.30

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.51

## 0.29

\* Fix
[JENKINS-13673](https://issues.jenkins-ci.org/browse/JENKINS-13673) -
Tool installations injected by SharedObjects plugin cannot be used by
EnvInject

## 0.28

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.50

## 0.27

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.49

## 0.26

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.48

## 0.25

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.47

## 0.24

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.46

## 0.23

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.45

## 0.22

\* Add variables resolution URLSharedObject

## 0.21

\* Fix sharedObjects.xml creation

## 0.20

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.44  
\* Try to fix redirection on the save button (on a local reverse proxy
infrastructure)

## 0.19

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.42

## 0.18

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.39

## 0.17

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.38  
\* Add the ability to export a properties file through an URL as
environment variables

## 0.16

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.37

## 0.15

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.36

## 0.14

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.35

## 0.13

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.34

## 0.12

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.33

## 0.11

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.32

## 0.10

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.31

## 0.9

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.30

## 0.8

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.29  
\* Fix
[JENKINS-12879](https://issues.jenkins-ci.org/browse/JENKINS-12879) -
Verion 1.27 of EnvInject does not work with Tool Environment plugin

## 0.7

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.28

## 0.6

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 1.27
with a build context

## 0.5

\* Update to [EnvInject
Plugin](http://localhost:8085/display/JENKINS/EnvInject+Plugin) 0.5  
\* Refactoring profiles usage

## 0.4

\* Fix Clearcase share object  
\* Add a profile for each shared object

## 0.3

\* Fix slave execution

## 0.2

\* Add Clearcase shared objects  
\* Add Tool installations propagation

## 0.1

\* Initial version
