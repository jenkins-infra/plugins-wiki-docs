  
This plugin allows you to send these metrics : number of tests, tests
skipped, tests failed, build duration, cobertura total line coverage   
and cobertura total branch coverage to one or more graphite servers.  
If you don't have a graphite server you can use :
[https://www.hostedgraphite.com](https://www.hostedgraphite.com/) to
test.  
    
For cobertura metrics you need to install cobertura plugin and run
cobertura:cobertura in goals section.  
    
Be sure to run jenkins your jobs with a Jdk 7 (go to the manage jenkins
+ configure system + Jdk installations ), because the plugin only works
with this version of jdk.
