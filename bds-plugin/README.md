This plugin allows users to build [RAD
Studio](http://www.embarcadero.com/products/rad-studio)
([Delphi](http://www.embarcadero.com/products/delphi) or
[C++Builder](http://www.embarcadero.com/products/cbuilder)) projects or
project groups in a job.

This plugin reads the RAD Studio environment variables from the batch
file which initializes a RAD Studio Command Prompt.

## Project information

Regardless of the Source Code link above, the source code repository of
this plugin is at <https://bitbucket.org/kazssym/jenkins-bds-plugin>. If
you are interested in what will be implemented in future versions,
please [sign up for a free Bitbucket
account](https://bitbucket.org/account/signup/) (if you have not yet)
and watch the repository for notifications.

### API document

The Java API document (javadoc) is accessible at
<http://kazssym.bitbucket.org/jenkins-bds-plugin/api/>.

## Getting help

Please use an experimental [community forum for this
plugin](https://support.zoho.com/portal/linuxfront/community/jenkins-plugins/rad-studio-plugin).

## Known issues

-   You may get errors in RAD Stduio builds. Builds from RAD Studio
    Command Prompt causes some errors not visible in IDE builds. The
    author cannot resolve issues in their products.

## Release history

#### Version 3.1 (November 28, 2014)

-   The Jenkins core requirement was changed to version 1.532.

#### Version 3.0 (November 22, 2014)

-   Some messages are translated to Japanese.
-   The deprecated original build wrapper implementation was removed.
-   Internal code was refactored.

#### Version 2.1 (November 16, 2014)

-   Fix: all the environment variables are now properly passed to
    MSBuild.

#### Version 2.0 (November 15, 2014)

-   An independent builder was added and the original build wrapper
    implementation is now deprecated.

#### Version 1.3 (November 15, 2014)

-   The groupId was changed to the default value
    (`org.jenkins-ci.plugins`) so that users can discover this plugin
    more quickly.

#### Version 1.2.1 (November 15, 2014)

-   No changes but the version number. This is just a re-release of
    version 1.2 as this plugin has disappeared from repo.jenkins-ci.org.
    (**Update**: I found it had not disappeared at all but just been
    stored in another directory according to its groupId.)

#### Version 1.2 (November 7, 2014)

-   The SCM connections in the POM are corrected.

#### Version 1.1 (November 7, 2014)

-   The plugin URL was changed to this page.

#### Version 1.0 (November 7, 2014)

-   Initial release.
