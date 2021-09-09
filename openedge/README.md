Configure [OpenEdge ABL](https://www.progress.com/openedge) tools
location on Jenkins nodes.

## What it does

During a build, this plugin will:

-   Export the DLC environment variable, pointing to the installed
    OpenEdge tool
-   Add the path `$DLC/bin` to the `PATH`, so that the tools are
    available during the build

## Setup

### Global configuration

1.  In the tools settings (Manage Jenkins → Global Tool Configuration),
    find the "OpenEdge Installations" section and click "Add OpenEdge".
2.  Enter a name, e.g. "OpenEdge 12.0" — the name itself has no
    significance, but will be displayed to users during job
    configuration
3.  Type the installation directory (or leave it blank if OpenEdge is
    not installed on the master server)

### Node configuration

1.  In the node settings (select node → Configuration), check "Tools
    location" (if unchecked)
2.  Each OpenEdge installation configured globally can be overridden in
    the slave

### Per-job configuration

#### Freestyle

1.  In a job's configuration, find the "Build environment" section
2.  Select the "Set up OpenEdge" checkbox
3.  Select the OpenEdge version you want to use when this job is built

#### Pipeline

As with any other type of Tool Installer, you can use the `tool` step to
inject the DLC variable. For example:

[TABLE]

## Version history

### Version 0.9 (June 6th, 2019)

-   Just code cleanup

### Version 0.8 (June 6th, 2019)

-   First release available in update center

### Version 0.5 (circa 2014)

-   Initial release
