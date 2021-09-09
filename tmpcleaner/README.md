Jenkins and/or plugins can create some temporary files.  
This plugin allows you to cleanup JVM temporary files.  
This plugin will cleanup the directory java.io.tmpdir.

# How to configure

TODO : configure it with the ui.

Currently you can configure some parameters with system properties when
starting Jenkins:

``` syntaxhighlighter-pre
recurrence cleaner execution : -Dhudson.plugins.tmpcleaner.TmpCleanWork.minutes=360 
extra directories to clean : -Dhudson.plugins.tmpcleaner.TmpCleanWork.extraDirectories=/var/tmp 
clean files not accessed since this number of days : -Dhudson.plugins.tmpcleaner.TmpCleanWork.days=1
```

Default values :

-   minutes : 360
-   extraDirectories : null
-   days : 7

# Version History

### Version 0.1 (2010-02-01)

-   Initial release
