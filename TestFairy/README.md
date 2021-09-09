| Plugin Information                                                                              |
|-------------------------------------------------------------------------------------------------|
| View TestFairy [on the plugin site](https://plugins.jenkins.io/TestFairy) for more information. |

Older versions of this plugin may not be safe to use. Please review the
following warnings before using an older version:

-   [Credentials stored in plain
    text](https://jenkins.io/security/advisory/2019-04-03/#SECURITY-1062)

This plugin helps you to upload Android APKs or iOS IPA files to
[www.testfairy.com](http://www.testfairy.com/)

## How to use

Select **TestFairy iOS/Android** **Uploader** from **Add post-build
action** menu

![](docs/images/add_post_build_action.png)  
 ** **

**Job Configuration:**

![](docs/images/Job_configuration.png)  
\* The API Key can be found in [your account
settings](https://app.testfairy.com/settings/)   

To make sure Jenkins also uploads your iOS dSYMs to TestFairy, configure
the Xcode that builds the app on the Jenkins server to run a special
script. [Follow these
instructions](https://docs.testfairy.com/iOS_SDK/How_To_Upload_dSYM.html#upload-dsym-from-xcode).

The resulted TestFairy links will be listed in the console output

![](docs/images/Screen_Shot_2015-02-02_at_11.53.44_AM.png)

##### **Important** **for Advanced Uploader only:**** **

-   You should configure the "Path To Keystore file" and the
    corresponding storepass & alias.
-   You should configure "**TestFairy Android
    Environment" **on <http://localhost:8080/configure> for example:
    ![](docs/images/android_environment.png)

## Custom changelog

In order to add your own changelog or comments, please create a text
file in the following
location: $JENKINS\_HOME/jobs/$JOB\_NAME/builds/$BUILD\_ID/testfairy\_change\_log

The content of this file will override the default changelog.

## Private Cloud / On-Premise support 

In case you are using our Private Cloud or On-Premise product

please define an *TESTFAIRY\_UPLOADER\_SERVER* environment variable.

You can do it by going to **Manage Jenkins** =\> **Configure**

Under section Global Properties, check **Environment
variables checkbox**. Now Jenkins allow us to add key and value pairs.

The name should be *TESTFAIRY\_UPLOADER\_SERVER* and the value will be
your **server domain.**

![](docs/images/image2018-5-22_13:37:46.png){height="150"}

The following line should be printed at your next job console output: 

``` console-output
"The server will be  https://YOUR-PRIVATE-SERVER-SUBDOMAIN.testfairy.com/"
```

  
  
Authors

This plugin was developed and open sourced
by [TestFairy](http://testfairy.com/)

## Credits

The past plugin was developed by [3Pillar
Global](http://www.3pillarglobal.com/)
