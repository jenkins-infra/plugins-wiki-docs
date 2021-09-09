This plugin allows you to use MSBuild to build .NET and Visual Studio
projects.

## Usage

To use this plugin, specify the location directory of MSBuild.exe on
Jenkin's configuration page. The MSBuild executable is usually
situated in a subfolder of C:\\WINDOWS\\Microsoft.NET\\Framework. The
Visual Studio 2017 Community version of "msbuild.exe" is located in
"C:\\Program Files (x86)\\Microsoft Visual
Studio\\2017\\Community\\MSBuild\\15.0\\Bin\\" If you have multiple
MSBuild versions installed, you can configure multiple executables. 

  

![](docs/images/jenkins-msbuild.png){height="400"}

Then, on your project configuration page, specify the name of the build
file (.proj or .sln) and any [command line
arguments](https://docs.microsoft.com/en-us/visualstudio/msbuild/msbuild-command-line-reference?view=vs-2017)
you want to pass in. The files are compiled to the directory where
Visual Studio would put them as well.

  

![](docs/images/jenkins-job-msbuild.png){height="400"}

### Troubleshooting

-   When using Command Line Arguments, bear in mind that special
    characters are treated like in Unix, so they will need to be escaped
    using the backslash.

## Changelog

##### Release 1.29

\*
Fix [JENKINS-48194](https://issues.jenkins-ci.org/browse/JENKINS-48194) -
Binary compatibility broken since 1.28

##### Release 1.28

\*
Fix [JENKINS-42284](https://issues.jenkins-ci.org/browse/JENKINS-42284) -
chcp command errors are ignored and no longer fail the build. Moreover,
a checkbox is now available on the build step configuration to prevent
the plugin from executing chcp before running msbuild.

##### Release 1.27

\*
Add [JENKINS-24132](https://issues.jenkins-ci.org/browse/JENKINS-24132) -
Support for multiple MSBuild Output encoding so that the console log of
Jenkins is displayed correctly   
\*
Add [JENKINS-37392](https://issues.jenkins-ci.org/browse/JENKINS-37392) -
Add @Symbol("msbuild") to MSBuild's ToolDescriptor  
\* Fix [PR\#28](https://github.com/jenkinsci/msbuild-plugin/pull/28) -
Minor bugs and build warnings 

##### Release 1.26

\*
Fix [JENKINS-28679](https://issues.jenkins-ci.org/browse/JENKINS-28679) -
Warning when setting MSBuild installation path to the directory
containing msbuild.exe instead of the path to the executable itself   
\*
Add [JENKINS-3367](https://issues.jenkins-ci.org/browse/JENKINS-3367) -
Add ouput coloring for warning and error messages

##### Release 1.25

\* Fix [JENKINS-9104](https://issues.jenkins-ci.org/browse/JENKINS-9104)
- Veto killing mspdbsrv.exe"

##### Release 1.24

\* Fix
[JENKINS-19706](https://issues.jenkins-ci.org/browse/JENKINS-19706) -
Masked Password Clearly visible as plain text in console output.  
\* Fix
[JENKINS-19830](https://issues.jenkins-ci.org/browse/JENKINS-19830) -
Masked Password visible as plain text in Msbuild Plugin  
\* Fix
[JENKINS-21585](https://issues.jenkins-ci.org/browse/JENKINS-21585) -
Pass build variables as properties incorrectly format command line  
\* Fix
[JENKINS-18652](https://issues.jenkins-ci.org/browse/JENKINS-18652) -
Handling of Configuration and Platform parameters  
\* Fix
[JENKINS-22344](https://issues.jenkins-ci.org/browse/JENKINS-22344) -
Command Line Arguments: /p:PublishFolder does not work with UNC format
to publish to remote server  
\* Fix
[JENKINS-22451](https://issues.jenkins-ci.org/browse/JENKINS-22451) -
Backslash is stripped from MSBuild command line argument  
\* Fix
[JENKINS-22461](https://issues.jenkins-ci.org/browse/JENKINS-22461) -
New MSBuild release has a space in the installation path; causes msbuild
plugin to fail

##### Release 1.23

\* Fix textbox for argument is too short  
\* Add french translation

##### Release 1.22

\* Fixed more documentation links.

##### Release 1.21

\* Fix
[JENKINS-19830](https://issues.jenkins-ci.org/browse/JENKINS-19830) -
Masked Password visible as plain text in Msbuild Plugin

##### Release 1.20

\* Fix
[JENKINS-19432](https://issues.jenkins-ci.org/browse/JENKINS-19432) -
Add option: "If warnings during msbuild, set the build to unstable"

##### Release 1.19

\* Fix
[JENKINS-18543](https://issues.jenkins-ci.org/browse/JENKINS-18543) -
Update to newest MSBuild plugin breaks passing of release configurations
with spaces in them

##### Release 1.18

\* Fix
[JENKINS-17876](https://issues.jenkins-ci.org/browse/JENKINS-17876) -
MSBuild Command Line Arguments quotes being stripped...not 5552

##### Release 1.17

\* Fix [JENKINS-5552](https://issues.jenkins-ci.org/browse/JENKINS-5552)
- MSBuild plugin creates malformed command line

##### Release 1.16

\* Fix
[JENKINS-14898](https://issues.jenkins-ci.org/browse/JENKINS-14898) -
MsBuild windows style environment variables no longer work  
\* Fix
[JENKINS-15029](https://issues.jenkins-ci.org/browse/JENKINS-15029) -
Update of MSBuild plugin to 1.15 causes Parameterized trigger plugin to
fail.

##### Release 1.15

\* Fix issue on backward compatibility

##### Release 1.14

\* Fix
[JENKINS-13863](https://issues.jenkins-ci.org/browse/JENKINS-13863) -
MSBuild is unable to build projects in a different directory

##### Release 1.13

\* Merge pull request - Add a checkbox to exclude a failure on msbuild
step

##### Release 1.12

\* Add UI checkbox to control build variables passing

##### Release 1.11

\* Integrate pull request - Use lowercase "/p" for xbuild compatibility

##### Release 1.10

\* Integrate pull request - Change Internal object: Descriptor by
BuildStepDescriptor

##### Release 1.9

\* Fix command generation with multiple build parameters

##### Release 1.8.2 (December 25, 2011)

\* Fix
[JENKINS-12222](https://issues.jenkins-ci.org/browse/JENKINS-12222) -
java.lang.NullPointerException in the msbuild plugin when a job is
executed by the parameterized build trigger plugin

##### Release 1.8.1 (December 03, 2011)

\* Fix double quoted default args

##### Release 1.8 (December 01, 2011)

\* Add default args (global configuration) - Merged pull request

##### Release 1.7 (May 13, 2011)

-   Fix
    [JENKINS-3823](https://issues.jenkins-ci.org/browse/JENKINS-3823) -
    configure msbuild path as a tool  
    and
    [JENKINS-4120](https://issues.jenkins-ci.org/browse/JENKINS-4120) -
    Implement concept of tool installation into MSBuild plugin

##### Release 1.6 (May 10, 2011)

-   Fixed
    [JENKINS-9645](https://issues.jenkins-ci.org/browse/JENKINS-9645)
    and
    [JENKINS-9643](https://issues.jenkins-ci.org/browse/JENKINS-9643) -
    Regression introduced in 1.5 - The MsBuild file was not taken into
    account

##### Release 1.5 (May 05, 2011)

-   Add variables (from build and environment) resolution.

##### Release 1.4 (April 02, 2011)

-   Fix
    [JENKINS-4121](https://issues.jenkins-ci.org/browse/JENKINS-4121) -
    Existence check for MsBuild.exe does not account for non-master
    nodes

##### Release 1.3 (Dec 29, 2009)

-   Add build parameters as properties
    ([JENKINS-2349](https://issues.jenkins-ci.org/browse/JENKINS-2349))
-   Console output should show the command
    ([JENKINS-3610](https://issues.jenkins-ci.org/browse/JENKINS-3610))
-   Update uses of deprecated APIs

##### Release 1.2 (Apr 21, 2009)

-   Add a the possibility to manage multiple Msbuild version
    ([JENKINS-3179](https://issues.jenkins-ci.org/browse/JENKINS-3179))

##### Release 1.1 (Jun 03, 2008)

-   Initial release
