This plugin allows pushing information to rally

# History

Ashish and I at [IDeaS](http://www.ideas.com/) were discussing how we
could update rally with code changes information happening on multiple
projects which were using multiple SCM (perforce, svn, cvs etc) systems.
We did not want to write hooks for each SCM separatly because of efforts
& maintenance cost. We wanted it to happen through some central system.

The natural choice was to use Jenkins where our multiple projects build
run after each SCM change. We then come up with an idea of writing a
plug-in which will take code change information of each build and update
it to Rally using its Rest APIs.  

# What does this plugin do?

1.  pulls SCM ChangeSets information from Jenkins Build and push it to
    rally defect or story. You can configure how this information should
    be pulled; at each build, between only successfull builds or may be
    between two dates to fill the backlog and ofcourse you change your
    choice anytime by changing the configuration.
2.  picks up Task details \[status, actual hrs, todo hrs etc\] from scm
    comments (if provided)  and updates rally task details accordingly.
    This is to give developer ability to update rally through their code
    comments itself. This is completly optional though.
3.  This plugin saves us from writing check-in hooks to svn, cvs etc
    which is difficult if organisation uses more than one config
    management tool.
4.  Build will not fail if for any reason the changes couldn't be posted
    to rally. The failure reason will be available onto console for
    investigation purpose.

# Configuration

For configuration instructions please see [the project page on
GitHub](http://jenkinsci.github.io/rally-plugin/).

# Change Log

Note : for legacy reasons, plugin ID was "rally-update-plugin-1". To
upgrade to future release, first uninstall this plugin.

Release 1.0 (Apr 11th, 2013):

-   Updates changeset information to rally defects and story
    -   Pulls the information like files changed for the story or defect
        from Jenkins and updates the rally accordingly

&nbsp;

-   Updates Task details like actual, todo hrs and status rally task if
    provided in a comments while checking in cod
    -   **Template:** \<StoryDefectNumber\>: TId: \<TaskNumber\>,
        status: \<WorkStatus\>, Actuals: \<ActualEfforts\>, ToDo:
        \<ToDOHours\>, \<Comments\>
    -   e.g.
        -   US5489: TId: TA15876, status: In-progress, Actuals: 1.5,
            ToDo: .5, added toggle for new functionality
    -   If we don’t remember the Task Id i.e. TID then we can put Task
        Index \[TI\] instead to update the task details. In following
        example it will update the 2^(nd) task of US5489.
        -   US5489: TI: 2, status: In-progress, Actuals: 1.5, ToDo: .5,
            added toggle for new functionality
    -   When we mark status of the task as completed the ToDo
        automatically becomes 0
    -   The Actuals, Status, ToDo are all optional and we only need to
        mention those which we want to update

Release 1.2 (June 8th, 2013): 

-    SCM repository name and SCM URI made optional

&nbsp;

-   -   The SCM Repository name and URI on configuration confused many
        of us.
    -   We want to reiterate that the plugin does not depend upon any
        SCM \[git, cvs, svn etc\] for its working. It solely depends
        upon Jenkins core and **not on SCM** to pull the code changes
        information.
    -   The SCM information we ask  on configuration page is just to
        provide a ability to put hyperlink to code files to allow you
        navigate to code repository from within rally.
    -   But now we made these two fields optional and leave them blank
        you don't want hyperlink or have this information.

Release 1.3 (Feb 5th, 2014): 

-   made plugin compatible with rally api 2.0

Release 1.4 (Feb 24th, 2014): 

-   Jacob Schoen -added provision to input proxy detail to allow plugin
    connect to rally even if your jenkins is running behind enterprise
    proxy.

Release 2.0 (July 4th, 2015):

**BREAKING CHANGE:** Version 2.0 is startlingly different than 1.x. You
will need to reconfigure if you upgrade!

-   Upgraded the version of the Rally REST Toolkit for Java dependency
    from 2.0.1 to 2.1.1
-   Updated authentication from Rally Username/Password (which was
    deprecated) to using API Key
-   Removed the feature that constrained Rally updates to a date range
    (instead of "last build" or "last successful build"). I really
    didn't understand why someone would do this. I'm not averse to it,
    but depending on user need there may be a better way to address it
-   Added deep linking into an SCM web view from Rally Changesets
-   Added ability to create the Rally Repository object if it didn't
    already exist
-   Added tests (up to \~75% coverage now!)
-   General refactoring
-   Removed 'debug' console output option
-   Wrote up a project page using GitHub Pages, linked in the
    'Configuration' section above

Release 2.1 (August 15th, 2015):

-   Added ability to associate changesets with more than one work item

Release 2.2 (October 12th, 2015):

**BREAKING CHANGE:** Version 2.2 has moved to a Publish step instead of
a Build step to better reflect the plugin's intent. You will need to
reconfigure if you upgrade!

-   Plugin now has the option of capturing the build status and storing
    that information in Rally

Release 2.2.1 (November 24th, 2015)

-   Fixed bug in credential handling; should be able to handle DSL-based
    configuration without embedding credential information
