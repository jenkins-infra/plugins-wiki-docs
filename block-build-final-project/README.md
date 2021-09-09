Block build when upstream/downstream project is building. Optional final
projects may be given.

## Summary

This plug-in allows a project to block when upstream or downstream
projects are building. Jenkins already provides this functionality
built-in, but it blocks on the entire pipeline. This plug-in allows an
optional final project to be specified. This allows the project to block
on part of the pipeline instead of the entire pipeline.

When configuring a project, the following options are available when
this plugin is installed:

![](docs/images/block-build-final-project.jpg)

## Example

For a detailed example on how to use this plugin, please visit [GitHub
README.md](https://github.com/jenkinsci/block-build-final-project-plugin/blob/master/README.md).

## Requirements

### Jenkins

Jenkins [version 1.625.3](https://jenkins.io/changelog-stable#v1.625.3)
or newer is required.

## Version history

### Version 1.0 (2017-01-21)

-   Initial release
