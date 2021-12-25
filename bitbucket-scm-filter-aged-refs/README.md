## Summary

## Description

This plugin extends the filtering abilities of the [Bitbucket Branch
Source
Plugin](https://wiki.jenkins.io/display/JENKINS/Bitbucket+Branch+Source+Plugin).

This filter will ignore references (branches and pull requests) where
its last commit creation date is older than the defined threshold (in
days). Ignored references won't be added as Run sources or will be
disabled and tagged for deletion on the next full repository scan.

## Usage

When defining a new Bitbucket Team/Project job job, include an
additional behaviour (placed under the additional separator). 

![](docs/images/Screenshot_from_2017-09-25_16.35.33.png)

This behaviour is configurable, being mandatory to specify the
acceptable threshold (positive days) for each reference:

![](docs/images/Screenshot_from_2017-09-25_16.37.48.png){height="250"}

In case of an invalid positive threshold, the form won't validate:

![](docs/images/Screenshot_from_2017-09-25_16.38.04.png){height="250"}
