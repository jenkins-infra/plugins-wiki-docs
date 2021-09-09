 

Enables Jenkins to execute [Progress® Mobile Studio
tests](https://www.telerik.com/teststudio/mobile-testing)

## Features

The Mobile Studio Plugin allows you to build and execute Mobile Studio
tests and test lists in Jenkins CI environment and easily explore the
generated JUnit xml results in the built-in Jenkins functionality.

  

------------------------------------------------------------------------

 

 

## Setup

1.  **Add a Mobile Studio Runner configuration build step**. Under the
    'Add build step menu' section select 'Mobile Studio runner
    configuration'.
2.  **Input the full path to Telerik.MobileTesting.Runner.exe**. The
    default path to the Mobile Runner executable is C:\\Program Files
    (x86)\\Progress\\Test Studio\\Bin\\MobileStudio.
3.  **Input Message Server address** - running [message
    server](https://docs.telerik.com/teststudio/test-studio-mobile/features/message-server) to
    which the devices are connected to.

4.  **Input device ID** to execute the tests on.

5.  **Specify the test or test list to execute** using full or relative
    path to the file and the project root folder full path.

6.  **Choose whether to convert test or test steps to JUnit test**. By
    enabling the checkbox a test list will be converted as a test suite
    and each including test will be converted to a JUnit test. Otherwise
    if unthicked a test will be converted to a test suite and each of
    its steps will be converted as a JUnit test.

Your test execution step is now ready to save and run.

 

  
