The plugin allows to use Xamarin Studio Tool Runner - mdtool. Presently
only the Xamarin Studio Build Tool support implemented. This tool allows
to build [Xamarin](http://xamarin.com/) projects.

# Usage

You can specify multiple locations of `mdtool` on Jenkin's configuration
page. Typically it located at Xamarin Studio application bundle:
`/Applications/Xamarin Studio.app/Contents/MacOS/mdtool`. As you may
guess, this location is valid for OS X.

On your project configuration page you can add "Build a Xamarin Studio
solution using mdtool" build step and specify solution file (`.sln`)
path. Also you can specify build target, solution configuration, name of
the project to build, and prefix of the Mono runtime to build against.

# Changelog

### Version 0.1.1 (Jun 16, 2014)

-   Rename this page

### Version 0.1 (Jun 16, 2014)

-   Initial version
