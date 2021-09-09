 

Enables Jenkins to execute  [Progress® Test Studio for
APIs](https://www.telerik.com/teststudio-apis)

  

## Features

The Test Studio for APIs Plugin allows you to build and execute Test
Studio tests and test lists in Jenkins CI environment and easily explore
the generated JUnit xml results in the built-in Jenkins functionality.

 

------------------------------------------------------------------------

## Setup

1.  **Input the full path to the Telerik.ApiTesting.Runner.exe**. The
    default path to find the Test Runner executable is C:\\Program Files
    (x86)\\Progress\\Test Studio\\Bin\\ApiTesting\\runnerconsole.
2.  **Specify the project root folder** using full or relative path
3.  **Specify the test/tests to execute** using relative path(s) to the
    test file(s) (relative to the project root folder).
4.  **Optionally**, you could execute specific steps within a test case
    by specifying "Start from" and/or "Stop after" keys, or you can set
    variables for the test run.
5.  **Choose whether to convert test or test steps to JUnit test**. By
    default, a test case in Test Studio for APIs will be converted in
    the test results as a "test suite" and test steps will appear as
    "test cases" in order to provide lower granularity of results. If
    you check the "Test as junit test" option, test suites in Test
    Studio for APIs will appear as "test suites" in the junit results,
    and test cases will appear accordingly as "test cases".  
      

Your test execution step is now ready to save and run.

  
