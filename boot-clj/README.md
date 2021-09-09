 

# Summary

Allows users to build projects using [Boot](http://boot-clj.com/)

# Configure the boot-clj plugin

Press the **manage Jenkins** link and then the **configure System**.
Navigate to the **boot section** and put the path to boot's startup
shell script.  
E.g /home/joel/.nix-profile/bin/boot

# Configure your project to use boot

-   Navigate to the configuration section of your project and add a new
    **Build project using boo**t build step
-   Add a boot task e.g **uber jar**
-   [JVM Options](https://github.com/boot-clj/boot/wiki/JVM-Options/)
    are optional \*only work for \*nix 
-   Save your configuration
