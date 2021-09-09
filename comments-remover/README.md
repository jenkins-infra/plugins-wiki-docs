This plugin removes comments from source files for a number of
programming languages. Required Python 3.6 on Jenkins server. A new
build step is added: 'Invoke Comments Remover' which accepts files to
process as input and creates uncommented version of them.

User can specify Python path in global settings for the plugin
(otherwise the one on the system PATH is used).

### [Contributors](https://github.com/jenkinsci/comments-remover-plugin#contributors)

Daniel Dyląg

 

[For
users](https://github.com/jenkinsci/comments-remover-plugin#for-users)

### [Global settings](https://github.com/jenkinsci/comments-remover-plugin#global-settings)

Go to Manage Jenkins -\> Configure System to access them

[![settings](https://user-images.githubusercontent.com/9072987/30342487-630f98ce-97fa-11e7-8076-e7c02ad494f2.png)](https://user-images.githubusercontent.com/9072987/30342487-630f98ce-97fa-11e7-8076-e7c02ad494f2.png)

[![settings](https://user-images.githubusercontent.com/9072987/30342530-814deb06-97fa-11e7-996f-a5020d6870aa.png)](https://user-images.githubusercontent.com/9072987/30342530-814deb06-97fa-11e7-996f-a5020d6870aa.png)

[![settings](https://user-images.githubusercontent.com/9072987/30513656-199cf8fc-9b07-11e7-99e7-5a8cf530e763.png)](https://user-images.githubusercontent.com/9072987/30513656-199cf8fc-9b07-11e7-99e7-5a8cf530e763.png)

There is help section to provide examples:

[![settings](https://user-images.githubusercontent.com/9072987/30513578-1f1a5d5c-9b06-11e7-89c3-4297cec3147d.png)](https://user-images.githubusercontent.com/9072987/30513578-1f1a5d5c-9b06-11e7-89c3-4297cec3147d.png)

### [Usage](https://github.com/jenkinsci/comments-remover-plugin#usage)

The plugin can be used wherever build steps can be defined, e.g.
Freestyle project

[![job](https://user-images.githubusercontent.com/9072987/30342535-8179a28c-97fa-11e7-8540-25d04aad24a9.png)](https://user-images.githubusercontent.com/9072987/30342535-8179a28c-97fa-11e7-8540-25d04aad24a9.png)

Adding build step:

[![build](https://user-images.githubusercontent.com/9072987/30342534-817803f0-97fa-11e7-98a0-da4f43bbcf30.png)](https://user-images.githubusercontent.com/9072987/30342534-817803f0-97fa-11e7-98a0-da4f43bbcf30.png)

[![build
step](https://user-images.githubusercontent.com/9072987/30342536-817a7f86-97fa-11e7-99a5-37e9f255f0b6.png)](https://user-images.githubusercontent.com/9072987/30342536-817a7f86-97fa-11e7-99a5-37e9f255f0b6.png)

This part also has "help" section:

[![build step
help](https://user-images.githubusercontent.com/9072987/30342537-81878802-97fa-11e7-8c8c-b64f20f2fb3e.png)](https://user-images.githubusercontent.com/9072987/30342537-81878802-97fa-11e7-8c8c-b64f20f2fb3e.png)

##### [Example of build output and result:](https://github.com/jenkinsci/comments-remover-plugin#example-of-build-output-and-result)

[![build
output](https://user-images.githubusercontent.com/9072987/30342538-81903aec-97fa-11e7-92dd-e5ad839d2a4c.png)](https://user-images.githubusercontent.com/9072987/30342538-81903aec-97fa-11e7-92dd-e5ad839d2a4c.png)

[![build
result](https://user-images.githubusercontent.com/9072987/30342539-819254c6-97fa-11e7-8a65-998198cc2657.png)](https://user-images.githubusercontent.com/9072987/30342539-819254c6-97fa-11e7-8a65-998198cc2657.png)

[![build
result](https://user-images.githubusercontent.com/9072987/30342540-81930aa6-97fa-11e7-85fa-7f934169025b.png)](https://user-images.githubusercontent.com/9072987/30342540-81930aa6-97fa-11e7-85fa-7f934169025b.png)

### [Using as a shell/batch command script](https://github.com/jenkinsci/comments-remover-plugin#using-as-a-shellbatch-command-script)

Alternatively, user can create plain script build step
(`Execute shell` or `Execute Windows batch command`) and
run `comments_remover.py` Python script manually.

[![shell
step](https://user-images.githubusercontent.com/9072987/30379725-bf93011a-9897-11e7-992a-874f7880d5c5.jpg)](https://user-images.githubusercontent.com/9072987/30379725-bf93011a-9897-11e7-992a-874f7880d5c5.jpg)

Comments Remover script is unpacked to JENKINS\_HOME directory (which is
available in script as environmental variable)

[![shell step
output](https://user-images.githubusercontent.com/9072987/30379735-c522fc02-9897-11e7-9286-c3363f1c4a2b.jpg)](https://user-images.githubusercontent.com/9072987/30379735-c522fc02-9897-11e7-9286-c3363f1c4a2b.jpg)

If you use Jenkins Struct Plugin, this plugin has a shorthand
defined: `commentsremover`.

## For contributors

### [Updating plugin with a new version of Comments Remover](https://github.com/jenkinsci/comments-remover-plugin#updating-plugin-with-a-new-version-of-comments-remover)

Create ZIP archive of all files required to run Comments Remover - in
particular, `comments_remover.py` and `requirements.txt`. Put it
in `src/main/resources`. The plugin expects to
find `comment_remover.py` and `requirement.txt` on the top lever of the
archive.

### [Debug](https://github.com/jenkinsci/comments-remover-plugin#debug)

`mvnDebug hpi:run`

You can attach Java Debugger to a local Java process of Jenkins.

### [Prepare plugin for distribution](https://github.com/jenkinsci/comments-remover-plugin#prepare-plugin-for-distribution)

`mvn package`

The \*.hpi file will be created in target/ directory. To install
manually on local Jenkins, copy it to $JENKINS\_HOME/plugins directory.

### [Releasing new version to Jenkins Update Center](https://github.com/jenkinsci/comments-remover-plugin#releasing-new-version-to-jenkins-update-center)

`mvn release:prepare release:perform`

Follow the instructions to assign new version number.

You must have an account on [jenkins-ci.org](http://jenkins-ci.org/)
with commit rights, and its credentials configured in maven settings:

    <server>
      <id>maven.jenkins-ci.org</id>
      <username>...</username>
      <password>...</password>
    </server>

More info here:

<https://wiki.jenkins.io/display/JENKINS/Hosting+Plugins>

## For contributors

### [Updating plugin with a new version of Comments Remover](https://github.com/jenkinsci/comments-remover-plugin#updating-plugin-with-a-new-version-of-comments-remover)

Create ZIP archive of all files required to run Comments Remover - in
particular, `comments_remover.py` and `requirements.txt`. Put it
in `src/main/resources`. The plugin expects to
find `comment_remover.py` and `requirement.txt` on the top lever of the
archive.

### [Debug](https://github.com/jenkinsci/comments-remover-plugin#debug)

`mvnDebug hpi:run`

You can attach Java Debugger to a local Java process of Jenkins.

### [Prepare plugin for distribution](https://github.com/jenkinsci/comments-remover-plugin#prepare-plugin-for-distribution)

`mvn package`

The \*.hpi file will be created in target/ directory. To install
manually on local Jenkins, copy it to $JENKINS\_HOME/plugins directory.

### [Releasing new version to Jenkins Update Center](https://github.com/jenkinsci/comments-remover-plugin#releasing-new-version-to-jenkins-update-center)

`mvn release:prepare release:perform`

Follow the instructions to assign new version number.

You must have an account on [jenkins-ci.org](http://jenkins-ci.org/)
with commit rights, and its credentials configured in maven settings:

    <server>
      <id>maven.jenkins-ci.org</id>
      <username>...</username>
      <password>...</password>
    </server>

More info here:

<https://wiki.jenkins.io/display/JENKINS/Hosting+Plugins>

 

## For contributors

### [Updating plugin with a new version of Comments Remover](https://github.com/jenkinsci/comments-remover-plugin#updating-plugin-with-a-new-version-of-comments-remover)

Create ZIP archive of all files required to run Comments Remover - in
particular, `comments_remover.py` and `requirements.txt`. Put it
in `src/main/resources`. The plugin expects to
find `comment_remover.py` and `requirement.txt` on the top lever of the
archive.

### [Debug](https://github.com/jenkinsci/comments-remover-plugin#debug)

`mvnDebug hpi:run`

You can attach Java Debugger to a local Java process of Jenkins.

### [Prepare plugin for distribution](https://github.com/jenkinsci/comments-remover-plugin#prepare-plugin-for-distribution)

`mvn package`

The \*.hpi file will be created in target/ directory. To install
manually on local Jenkins, copy it to $JENKINS\_HOME/plugins directory.

### [Releasing new version to Jenkins Update Center](https://github.com/jenkinsci/comments-remover-plugin#releasing-new-version-to-jenkins-update-center)

`mvn release:prepare release:perform`

Follow the instructions to assign new version number.

You must have an account on [jenkins-ci.org](http://jenkins-ci.org/)
with commit rights, and its credentials configured in maven settings:

    <server>
      <id>maven.jenkins-ci.org</id>
      <username>...</username>
      <password>...</password>
    </server>

More info here:

<https://wiki.jenkins.io/display/JENKINS/Hosting+Plugins>
