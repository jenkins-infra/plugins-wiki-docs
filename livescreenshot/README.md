Show live screenshots of running jobs in the job list. 

  

This plugin adds a column to the job list view to show a thumbnail of a
screenshot. Moreover, an "Screenshot" action is added to each build
which leads to a page with the fullsize screenshot.

The screenshot images are read from the workspace of a build, either
stored as png or jpeg files. These files must be updated by the running
build. The refresh mechanism of the Jenkins user interface makes sure
that you see an up to date screenshot on screen.

By default, the files are called screenshot.png and
screenshot-thumb.png. But, this can easily changed in the build wrapper
configuration of a job.

## ![](docs/images/screenshot.png)

Add a column to the current view:

![](docs/images/Bildschirmfoto_2013-02-05_um_21.51.57.png)

And activate the screenshots for a job:

![](docs/images/Bildschirmfoto_2013-02-05_um_21.52.54.png)

The shown filenames are the default. Adapt your job to update these file
on a regular basis. If you are running kvm inside the job, create these
files using virsh or the kvm console every 5 seconds. The thumbnail file
should be small, like in the screenshot above. The file screenshot.png
is used for the full size screenshot action for a job:

![](docs/images/Bildschirmfoto_2013-02-05_um_21.56.22.png)  
 

The screenshot is also archived as an artefact.

## Major Known Issues

## Version History

### v1.4.5

-   Fix non-matrix build job screenshot display
    -   don't show screenshots twice of non-matrix builds (Fixes
        [JENKINS-20801](https://issues.jenkins-ci.org/browse/JENKINS-20801))
    -   show stop link also for non-matrix jobs

### **v1.4.4**

-   Update meta information about the plugin. Now it is visible in the
    update center.

### v1.4.3

-   Move plugin into org.jenkins.plugins namespace 

### v1.4.2

-   First version hosted by the jenkinsci project on github
