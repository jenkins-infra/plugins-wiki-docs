This plugin is an API plugin aimed at easing the transition for plugins
to run correctly in Jenkins running in Java 11. 

**As an end user, you should generally never have to install this plugin
yourself. It is designed to be automatically installed as a dependency
for plugins needing to access the JAXB API that has been removed from
the JDK in Java 9+.**

### For developers

If you are a developer and your plugin is using JAXB and you cannot
remove the dependency:

-   If your minimum baseline is \< 2.164, you should consider adding an
    explicitly dependency against it. 
-   if your minimum baseline is \>= 2.164, you **must** add the
    dependency against this plugin so your plugin doesn't crash while
    running on a JRE 11.

Additional reading:

-   [Java 11 Developer
    Guidelines](http://localhost:8085/display/JENKINS/Java+11+Developer+Guidelines). 
-   [Known Java 11 Compatibility
    issues](http://localhost:8085/display/JENKINS/Known+Java+11+Compatibility+issues) 
-   <https://jenkins.io/doc/administration/requirements/jenkins-on-java-11/>
-   [Java 11 Support for Jenkins is General
    Availability](https://jenkins.io/blog/2019/03/11/let-s-celebrate-java-11-support/)

  
