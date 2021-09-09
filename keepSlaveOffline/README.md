  

  This plugin allows to keep given slave offline after Jenkins restart.

  
This is a workaround for [a bug in
pre-1.397](http://issues.jenkins-ci.org/browse/JENKINS-8196), 1.397+
don't need it. Typical usage is take Jenkins slave offline for some run
running job over the weekend and make sure that slave stay offline even
if there is maintenance Jenkins restart over the weekend. 

# Changelog

##### Release 1.0 (2011-02-10)

-   Initial release

  
