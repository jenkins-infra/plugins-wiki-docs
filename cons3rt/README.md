# Summary

The CONS3RT Jenkins plugin provides users with the ability to create
CONS3RT software assets as part of the Jenkins build. The plugin also
allows for users to upload their asset, created as a function of their
build, to a CONS3RT site. This allows for the creation of new assets or
the update of existing assets as part of a CI pipeline. In addition to
asset creation or update, users can also leverage the deployment run
option in the post-build action section of the plugin to launch new
deployment runs that leverage their newly updated asset(s). The CONS3RT
plugin allows for the full customization and configuration of deployment
runs.

A bulk of the documentation for this plugin can be found in the [Github
Wiki](https://github.com/jenkinsci/cons3rt-plugin/wiki)

# Configuration

After installing the plugin, you'll get a new Post-Build entry named
"Create a CONS3RT Asset" and a Post-Build Action entry named "Create or
Update a CONS3RT Asset". These actions will allow for the creation and
upload of an asset to a CONS3RT site. In order to upload your asset to a
site, a site url and ReST token must first be provided, with the latter
taking the form of a Jenkins secret-text credential.

# Features

-   Create a CONS3RT asset during build to include the latest artifacts
-   Create a new asset in a CONS3RT site
-   Update an existing asset within a site
-   Launch an existing deployment
-   Fully configure and customize a deployment run

# Usage

See the wiki for specific steps and other examples.

1.  Create an asset (cons3rt build-step or via other means)
2.  Create a new or update an existing asset
3.  Optionally, launch an existing deployment run. If that deployment
    run contains the updated asset, it will be reflected in the new run.

These [tutorials](https://github.com/jenkinsci/cons3rt-plugin/wiki/Tutorials) provides
explicit steps to use the plugin.

# Changelog

See [Release
Notes](https://github.com/jenkinsci/cons3rt-plugin/wiki#release-notes) in
the github wiki.

  
