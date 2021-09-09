Jenkins plugin that adds a build step for cloning a view and jobs that
are visible in it.

# Summary

View-cloner is a build step plugin that allows to copy a view and jobs
visible in it. In the process of copying job names and configurations
can be changed with supplied replacement pattern.

# Usage

1.  Create a Freestyle Project and add "View clone" step.
2.  Fill all 5 fields
    1.  Absolute url of the view (Absolute url to the view you want to
        clone)
    2.  Niew view name (Name of the view that will be created)
    3.  Replace pattern (Comma separated list of oldValue=newValue
        Example: 1.1-SNAPSHOT=1.2-SNAPSHOT, slave1=slave2,
        master=release\_19)
    4.  Username to authenticate with (user needs to have rights to
        job/view configs and job/view creation).
    5.  Password for the user
3.   Save and Build.

If you have role based security it is advised to create the "view clone
job" where simple users cant configure it.

NOTE: Views populated using regex are not supported (jobs will not be
cloned)

# Examples

 Image heavy

Example was done using Nested and Sectioned view plugins.

######  Original view

![](docs/images/view19.PNG)

###### One of the jobs configuration

![](docs/images/build1.PNG)

![](docs/images/build21.PNG)

###### View clone step

![](docs/images/viewclone2.PNG)

###### Execution

![](docs/images/console.PNG)

###### Niew view

![](docs/images/view20.PNG)

###### One of the jobs new configuration

![](docs/images/build31.PNG)  
![](docs/images/build42.PNG)

# Changelog

**1.1** initial release

# TO DO

-   Add ability to clone from remote Jenkins instances.
-   Add support for views populated with regex.
-   Allow variables in step configuration
