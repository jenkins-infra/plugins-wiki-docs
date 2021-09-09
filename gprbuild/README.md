This Jenkins plugin allows building GNAT projects with GPRbuild.

# Main features

-   Manage multiple GNAT installations within Jenkins
-   Build (Ada) projects using GNAT project files (\*.gpr) with the help
    of GPRbuild - configurable as build step in your pipeline.

## Configuring GPRbuild in your pipeline

Beside the GUI pipeline builder you can use the following in your
Jenkinsfile:

    gprbuild installationName: <name of GNAT installation as configured in Jenkins>, proj: <*.gpr file>, names: <Source files containing an entry point>, switches: <GPRbuild switches>

Only *installationName* is required. Refer to
<https://docs.adacore.com/gprbuild-docs/html/gprbuild_ug.html> for
documentation of GPRbuild.
