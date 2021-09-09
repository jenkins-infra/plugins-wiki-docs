 

Enables Jenkins to execute [Progress® Test Studio
tests](https://www.telerik.com/teststudio).

------------------------------------------------------------------------

## Features

The Test Studio Plugin allows you to build and execute Test Studio tests
and test lists in Jenkins CI environment and easily explore the
generated JUnit xml results in the built-in Jenkins functionality.

 

------------------------------------------------------------------------

## Setup

1.  **Add a Test Studio runner configuration build step**. Under the
    'Add build step menu' section select 'Test Studio runner
    configuration'.
2.  **Input the full path to ArtOfTest.Runner.exe**. The default path to
    find the Test Runner executable is C:\\Program Files
    (x86)\\Progress\\Test Studio\\Bin.
3.  **Specify the test or test list to execute** using the absolute path
    to the file in the Jenkins CI workspace or its relative path
    according that same workspace.

    The *project root folder* and *settings file* fields accept relative
    path to the Jenkins job workspace only.

      

4.  **Choose whether to convert test or test steps to JUnit test**. By
    enabling the checkbox a test list will be converted as a test suite
    and each including test will be converted to a JUnit test. Otherwise
    if unthicked a test will be converted to a test suite and each of
    its steps will be converted as a JUnit test.

Your test execution step is now ready to save and run.
