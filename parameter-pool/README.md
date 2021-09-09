Allows use of a unique parameter value per concurrent build

#### Configuration steps

1.  Install plugin
2.  Add build step parameter pool to your project
3.  Project names refers to the projects that should be checked for
    running parameter pool values. If left blank, only the project
    containing the build step is checked.
4.  Paramter name is the name for the paramter
5.  Paramter pool is a comma separated list of parameter values that the
    plugin can pick from.

#### Rules for parameter selection

-   The plugin reads from left to right for parameter values.
-   The first value that is not in a running build is picked.
-   If prefer failed builds is selected, the first value that is from a
    failed build and not in a running build is picked.
-   \[start..end\] can be used for quick value entry. e.g.
    sanbox\[1..5\] corresponds to sandbox1, sandbox2, sandbox3,
    sandbox4, sandbox5

#### **Background**

I needed to create something like this for our CI environment. We have
test VMs that we set up then run tests against on a per commit basis.

These VMs are separate to slaves. To run these tests concurrently, I
needed to ensure that two test jobs wouldn't run against the same test
VM.

Our development team use the following flow.

After a code commit, the following runs

1.  A container tests job is kicked off
2.  This job uses the parameter pool plugin to select a vm name that is
    not in use in any other running container test job
3.  This vm is reverted
4.  This vm is rebuilt with the code from the commit
5.  Tests are run against that vm.

## Change Log

##### Version 1.0.3 (August 5th, 2017)

-   Support using variables for the project names' field.

##### Version 1.0.2 (October 23rd, 2015)

-   Tidied up logging. Made it less verbose and more contextual.

##### Version 1.0.1 (October 22nd, 2015)

-   When using multiple projects, check the regular parameters against
    the parameter pool variable name as well.

##### Version 1.0

-   Initial release
