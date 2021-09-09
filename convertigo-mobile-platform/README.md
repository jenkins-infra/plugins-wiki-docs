**Convertigo-mobile-platform plugin** is able to integrate [Convertigo
Mobility Platform](http://www.convertigo.com/) projects in a Continuous
Integration process. The plugin can build, deploy and test Convertigo
projects and generate JUnit format XML test reports to be handled by
Jenkins.

## Using the Plugin

See documentation bellow:

##### Configure SCM

First you will have to pull out from SCM the Convertigo Projects you
want to build and test. To to this Configure in the SCM section the
right SCM provider (SVN , GIT etc ..) and the correct repository URL.
The url must point to a Valid Convertigo Project directory containing
the \<project-name\>.xml file. You can also point to a directory
containing several valid Convertigo projects. In this case all these
projects will be build and deployed to the Convertigo Server.

![](docs/images/1.figure5_Jenkins_Using1_flou.png)

##### Link to Convertigo Q&A Server

Then when you add a build step, you will find the Convertigo Plugin in
the step list. Select it and configure the step. 

![](docs/images/2.figure6_Jenkins_Using2.png)

The first part is to link the Plugin to a Convertigo Q&A server. This
can be any Convertigo Standard Edition Server, installed and up and
running. Give in this section the server’s URL and admin console
credentials. (Usually admin/admin).

  
![](docs/images/3.figure7_Jenkins_Using3_flou2.png)  

##### Configure Build options

You can check the Build and Deploy option to have the Plugin to build
the .CAR files and to have deployed automatically on the target
Convertigo Server.

##### Using Test Cases

Once the .CARs are built and deployed on the server, you can now enable
tests by checking the check box.

When the “Enable test” option is checked you will have the opportunity
to select the project you want to test in the drop down list (Warning,
this box can take some time to fillup…)

  
![](docs/images/4.figure8_Jenkins_Using4_flou.png)  

**When you select a project, the second drop down will list all the
Convertigo Test Cases in this form :**  

-   (S)project.sequences.testcase for sequence testcases or
-   (T)project.connector.transaction.testcase for transactions 

![](docs/images/5.figure9_Jenkins_Using5_flou.png)

**Select the test case you want and then click the “Execute test case”.
The Convertigo XML out pout will be displayed below the testcase :**

![](docs/images/6.figure10_Jenkins_Using6_flou.png)  
**Now in the Assert window you will be able to write your assertions
this way:**

``` syntaxhighlighter-pre
&lt;My Xpath ok 1&gt;

&lt;My Xpath ok 2&gt;

...

&lt;My Xpath ok 3&gt;

Assert nok

&lt;My Xpath not ok 1&gt;

&lt;My Xpath not ok 2&gt;

&lt;My Xpath not ok 3&gt;
```

To have this test case to be a success:  

-   you must have all the \<my Xpath ok\> to match
-   and none of the \<xpath not ok\> to match.

**You can use the “Test XPATH” button to see if the assertions you wrote
are valid for this test case.**

![](docs/images/7.figure11_Jenkins_Using7_flou.png)  

You can add as many test cases from any project for this Jenkins step
you want. By clicking on “Add test case”.

##### Using test results

Convertigo Jenkins Plugin will generate a .xml file in the /TestReports
directory. This is a standard Junit XML test format that can be read by
any other Jenkins Plugin.

For example configure in the Post build step the Result reader:

  
![](docs/images/8.figure12_Jenkins_UsingTestResults1_flou.png)  
  
![](docs/images/9.figure13_Jenkins_UsingTestResults2_flou.png)  

When you run a Jenkins Build you can see in the Console the plugin
execution:

  
![](docs/images/10.figure14_Jenkins_UsingTestResults3.png)  

And the test results:

  
![](docs/images/11.figure15_Jenkins_UsingTestResults4_flou.png)  

And the console output:

  
![](docs/images/12.figure16_Jenkins_UsingTestResults6_flou.png)  

### Convertigo as Industrialized mobile build platform

With Convertigo Jenkins CI plugin, Developers can now use one of the
best Continuous Integration platform to build and test Enterprise Mobile
Applications connected to valuable Enterprise Data.
