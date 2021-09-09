This plugin allows distribute JUnit tests to all slaves in a specified
label for a project.

# Distributed Testing Plugin

The goal of this plugin is to enable a distributed testing of compiled
classes on multiple nodes. Tests are send one by one to nodes in the
label specified for the project and run. Test results  
are saved in the "results" directory in the project workspace. f.e.
"TEST-helloword.HelloTest.xml" for the test class
"helloworld.HelloTest".

**This plugin assumes that all slaves in the specified label have a
shared workspace directory. (like NFS)**

Only classes in the "Tests classes directory" directory with a file name
containing a "test" substring (case insensitive) are automatically found
by this plugin and run.

If you enable "Publish JUnit test result report" in the "Post-build
Actions" section and type "results/\*.xml" you will see test results in
the Hudson's web UI.

Only nodes in a label which were specified for this project ("Tie this
project to a node") will be used for distributed testing.

It's possible let this plugin to compile tests class sources which were
checkout from a repository if "Compile tests" checkbox was checked.
Remember to provide all necessary libraries needed for compilation.

It's possible to check a "Wait for nodes which are busy" checkbox to
wait for other nodes which are busy to be freed.

# Change Log

### Version 1.0 (Jan 20, 2011)

-   Initial release
