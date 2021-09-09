Perform deleting or disabling of old jobs based on some cron tasks. You
can configure this plugin globally based on some specific scheduler,
excluding jobs with some regex, add some description in each disabling
job (for tracking purposes), apply that filter for those jobs older than
X days.

  

# Summary

Jenkins is an awesome Automation System, and there are a bunch of people
using it in different ways, for example: developers, testers,
automation, build engineers, release engineers, scrum master, product
owner and so on. Unfortunately, as the number of jobs grows, maintaining
them becomes tedious, and the paradigm of no using a predefined set of
maintenance jobs action fall apart.

The Maintenance Jobs Scheduler plugin attempts to solve this problem by
running a cronly task based on some parameters.

Manually reviewing those jobs wouldn't be too hard, but doing the same
thing all over again for every job or for a hundred other projects is
where it gets difficult and tedious. This provides a much more powerful
way of analyzing them.

# Usage

Go to **Manage Jenkins - Configure System - Maintenance Jobs Scheduler**
section:

![](https://raw.githubusercontent.com/jenkinsci/maintenance-jobs-scheduler-plugin/master/images/global-setup.png){width="1200"}  
![](https://raw.githubusercontent.com/jenkinsci/maintenance-jobs-scheduler-plugin/master/images/disabled-job.png){width="1200"}  
**Open Issues**

# Groovy Script

You can see the method in the below url:

-   <https://github.com/jenkinsci/maintenance-jobs-scheduler-plugin/blob/master/src/main/java/org/jenkinsci/plugins/maintenancejobsscheduler/MaintenanceJobsPeriodicWork.java#L45>
    **Groovy Script**

    ``` syntaxhighlighter-pre
    new org.jenkinsci.plugins.maintenancejobsscheduler.MaintenanceJobsPeriodicWork().execute(true, 1, "disabled", "", false);
    ```

    Although it's not supported yet, the execute method will return the
    list of disabled/removed jobs then you will be able to iterate them 
    **Groovy Script (Upcoming release)**

    ``` syntaxhighlighter-pre
    // It will be available in the upcoming release
    new MaintenanceJobsPeriodicWork().execute(true, 1, "disabled", "", false)?.each { println it.name }
    ```

# Version history

### Version 0.1.1 (Upcoming release)

-   ![(info)](docs/images/information.svg)
      Change execute signature and return List of Jobs

### Version 0.1.0 (Dec 28, 2015)

-   ![(info)](docs/images/information.svg)
      Initial release
