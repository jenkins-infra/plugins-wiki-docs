This plugin allows pipeline and freestyle jobs to wrap arbitrary steps
or builders. The plugin will then notify GitHub via a status message the
result of the steps/builders  

See the [GitHub Readme for more
info!](https://github.com/jenkinsci/pipeline-gitstatuswrapper-plugin)

  

**gitStatusWrapper makes your life easier!**

``` syntaxhighlighter-pre
stage('EZPZ Updates') {
    steps {
        gitStatusWrapper(credentialsId: 'github-token', gitHubContext: 'Status', description: 'Validating') {
            sh "./do_stuff.sh"
        }
    }
}
```

Stop calling githubNotify 3+ times

``` syntaxhighlighter-pre
stage('Annoying status updates') {
    script {
      try {
        githubNotify(credentialsId: 'github-token', context: 'Status', description: 'Validating', status: 'PENDING')
        sh "./do_stuff.sh"
        githubNotify(credentialsId: 'github-token', context: 'Status', description: 'Validating', status: 'SUCCESS')
      }
      catch (Exception e) {
        githubNotify(credentialsId: 'github-token', gitHubContext: 'Status', description: 'Validating', status: 'FAILURE')
      }
    }
}
```

  

  

  

  
