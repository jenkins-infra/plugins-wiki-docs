This plugin adds a step for triggering build plans in Bamboo systems.
See <https://github.com/jenkinsci/pipeline-bamboo-plugin> for more
detailed usage instructions. 

Sample usage:

``` syntaxhighlighter-pre
buildBamboo(projectKey: "projectKey", 
            planKey: "planKey",
            serverAddress: 'http://bamboo-server', 
            'username': env.BAMBOO_USER, 
            'password': env.BAMBOO_PASS, 
            propagate: False,
            checkInterval: 120,
            params: ["appVersion": "1.0.0", "buildNumber": env.BUILD_NUMBER])
```
