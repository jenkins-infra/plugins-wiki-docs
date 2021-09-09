This plugin allows to share workspaces by Jenkins jobs with the same SCM
repos.

It should save you some disk space, if you have different jobs with
identical repos.

How to use it:

1\) In "**Manage Jenkins**"-\>"**Configure System**" find new
"**Workspace Sharing**" block.

2\) Add some **Name + SCM Repo URL** pairs. Save.

3\) Go to the job configuration page, now you able to select "**Shared
Workspace**" here.

4\) Use **${SHAREDSPACE\_SCM\_URL}** variable in your SCM url field.

Workspaces will be created as **{node remote FS
root}/sharedspace/{workspace name}**

------------------------------------------------------------------------

Known issues:

 - SCM polling not working for now, plugin should be improved.

 - sometimes, on fresh copied job, shared-space **url** parameter not
saving to config on first "save", you should save job twice to be sure.

New in 1.0.2

-   Support for matrix-build projects
