Feature Branch Notifier is an alternative solution to launching builds
dynamically on different branches. Instead of cloning projects and
configuring them to work on different branches, one job's builds will
run on branches that have updates.

For a more detailed guide / introduction look at my article [on
ZeroTurnaround's
blog](http://zeroturnaround.com/rebellabs/things-to-consider-when-featuring-branching-with-continuous-integration/)

This plugin was created as a result of my BSc thesis, about using
Continuous Integration and feature branches together in a project. The
full thesis can be retrieved
[here](http://comserv.cs.ut.ee/forms/ati_report/downloader.php?file=023BE4E368E261696E75B79D778A61A1A3D2F1A7),
which contains lengthier explanations about the ups and downs of using
these two methodologies together and a very detailed introduction to the
Feature Branch Notifier plugin.

## Changelog

### Version 1.4 (Nov 16, 2014)

-   Fixed compatibility with newer Jenkins core that was introduces
    since version 1.568 (Thank you Mads Mohr Christensen!)

### Version 1.3 (Nov 30, 2013) - RECOMMENDED UPDATE!

-   Fixed polling loop when new branch is created in the repository
-   Fixed branch short display name not always showing first 12 chars

### Version 1.2 (Sep 21, 2013)

-   WARNING! After this upgrade all Feature branch aware job
    configurations have to be resaved, because upgrade is incompatible
-   Feature branch aware trigger now handles notifyCommit requests
-   Global configuration option whether to show full length branch names
    in Build History view or just first 12 letters.
-   Environment variable $BRANCH\_ALPHANUMERIC now available (like
    $BRANCH) to get branch name that has been escaped to just
    alphanumeric characters
-   Support ignore post commit hooks

### Version 1.1 (Jun 05, 2013)

-   Fixed feature branch actions being accumulated in the trigger

### Version 1.0 (Jun 04, 2013)

-   Initial release of the plugin
