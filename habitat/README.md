  

This plugin allows for the abstraction of building, uploading, and
promoting  
habitat packages.

## Pre-Reqs

\- Must have Jenkins setup for building habitat packages  
- A designated origin and the corresponding keys uploaded to slaves to
run job  
- Habitat Auth Token specified as a Jenkins credential

## Usage

### Tasks

Currently the available tasks are:

\* \`build\`: executes a build of a habitat package  
\* \`upload\`: uploads a habitat hart file  
\* \`promote\`: promotes a habitat package  
\* \`demote\`: demotes a habitat package  
\* \`channels\`: lists channels of a specific habitat package  
\* \`export\`: exports a habitat package to a specific format  
\* valid formats: \`aci\`, \`cf\`, \`docker\`, \`kubernetes\`,
\`mesos\`, \`tar\`  
\* \`search\`: searches the builder API for a specific string  
\* \`config\`: gets the default configuration from the specified habitat
package ident  
\* \`exec\`: executes a command in the context of a habitat package  
\* \`binlink\`: installs and links the habitat package

### Options

### Example Build and Upload Job

    pipeline {
     agent any

      environment {
       HAB_NOCOLORING = true
       HAB_BLDR_URL = 'https://bldr.habitat.sh/'
       HAB_ORIGIN = 'skylerto'
      }

      stages {
       stage('scm') {
         steps {
           git url: 'https://github.com/skylerto/nexus-habitat.git', branch: 'master'
         }
       }
       stage('build') {
         steps {
           habitat task: 'build', directory: '.', origin: "${env.HAB_ORIGIN}", docker: true
         }
       }
       stage('upload') {
         steps {
           withCredentials([string(credentialsId: 'depot-token', variable: 'HAB_AUTH_TOKEN')]) {
             habitat task: 'upload', authToken: env.HAB_AUTH_TOKEN, lastBuildFile: "${workspace}/results/last_build.env", bldrUrl: "${env.HAB_BLDR_URL}"
           }
         }
       }
      }
    }

### Example Promotion/Release Job

    pipeline {
     agent any

     environment {
       HAB_NOCOLORING = true
       HAB_BLDR_URL = 'https://bldr.habitat.sh/'
     }

     stages {
      stage('promote') {
        steps {
          script {
            env.HAB_CHANNEL = input message: 'Please provide a channel',
              parameters: [
                string(description: 'Habitat Channel', name: 'channel')
              ]
          }
          script {
            env.HAB_PKG = input message: 'Please provide an artifact',
              parameters: [
                string(description: 'Habitat Package', name: 'package')
              ]
          }
          //Hard-coding your "${env.HAB_CHANNEL}" removes the need to ask for it (improved automation)
          //You could also set env.HAB_PKG programatically, like so:
          /*
          script {
            env.HAB_PKG = sh ( 
              script: "ls -t "{$workspace}"/results | grep hart | head -n 1",
              returnStdout: true
            ).trim()
          }
          */
          withCredentials([string(credentialsId: 'depot-token', variable: 'HAB_AUTH_TOKEN')]) {
            habitat task: 'promote', channel: "${env.HAB_CHANNEL}", authToken: "${env.HAB_AUTH_TOKEN}", artifact: "${env.HAB_PKG}", bldrUrl: "${env.HAB_BLDR_URL}"
          }
        }
      }

      }
    }

### Other Shiny New Features

\`\`\`  
pipeline {  
agent any

environment {  
HAB\_NOCOLORING = true  
HAB\_BLDR\_URL = '<https://bldr.habitat.sh/>'  
HAB\_AUTH\_TOKEN = 'my-hab-auth-token-name'  
HAB\_PKG = 'core/googlemock/1.8.0/20180609191841'  
}

stages {  
stage('instantiate\_variable'){  
steps {  
script {  
env.PKG\_FILE\_NAME = sh(  
script: "ls -t ${workspace}/results/ \| grep hart \| head -n 1",  
returnStdout: true  
).trim()  
}

script {  
env.TMP\_PKG\_NAME = sh(  
script: "echo ${env.PKG\_FILE\_NAME} \| sed 's/-x86\_64-linux.hart//' \|
cut -d '-' -f 2-20 \| sed 's/\\\\(.\*\\\\)-/\\\\1\\\\//' \| sed
's/\\\\(.\*\\\\)-/\\\\1\\\\//'",  
returnStdout: true  
).trim()  
}

script {  
env.DOCKER\_IMG\_NAME = sh(  
script: "echo ${env.TMP\_PKG\_NAME} \| cut -d '/' -f 1",  
returnStdout: true  
).trim()  
}

script {  
env.PKG\_NAME = "${env.HAB\_ORIGIN}" + '/' + "${env.TMP\_PKG\_NAME}"  
}  
}  
}

stage('demote') {  
//demotes habitat pkg from specified channel in builder  
habitat task: 'demote', channel: 'development', authToken:
"${env.HAB\_AUTH\_TOKEN}", artifact: "${env.HAB\_PKG}", bldrUrl:
"${env.HAB\_BLDR\_URL}"  
}  
stage('channels') {  
//lists channels specified habitat pkg belongs to  
habitat task: 'channels', authToken: "${env.HAB\_AUTH\_TOKEN}",
artifact: "${env.HAB\_PKG}", bldrUrl: "${env.HAB\_BLDR\_URL}"  
}  
stage('config') {  
//lists configuration options build into package  
habitat task: 'config', artifact: "${env.PKG\_NAME}", authToken:
"${env.HAB\_AUTH\_TOKEN}", bldrUrl: "${env.HAB\_BLDR\_URL}"  
}  
stage('export') {  
//export hart file to any format ("aci", "cf", "docker", "kubernetes",
"mesos", "tar")  
//must provide a hart file instead of full pkg origin/name/path  
habitat task: 'export', format: "docker", lastBuildFile:
"${workspace}/results/last\_build.env", bldrUrl:
"${env.HAB\_BLDR\_URL}"  
}  
stage('search') {  
//search an origin for all packages matching search string  
habitat task: 'search', searchString: '\<my-search-string\>', authToken:
"${env.HAB\_AUTH\_TOKEN}", bldrUrl: "${env.HAB\_BLDR\_URL}"  
}  
stage('exec') {  
//execute commands within context of habitat pkg  
habitat task: 'exec', artifact: "${env.PKG\_NAME}", command:
'\<your-command\>'  
}  
stage('binlink') {  
//link habitat pkg to local system's bin executeable  
habitat task: 'binlink', path: '/usr/local/bin', binary 'bash',
artifact: "${env.PKG\_NAME}", authToken: "${env.HAB\_AUTH\_TOKEN}",
bldrUrl: "${env.HAB\_BLDR\_URL}"  
}  
}  
}  
}  
\`\`\`

The directory for the \`build\` task must be local to the repository as
the studio is created under the root of the repository.

  
