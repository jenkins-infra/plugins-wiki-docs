Enables Jenkins to notify [Cisco Spark](https://web.ciscospark.com/)
Spaces from build, post-build and pipeline steps

 

A comprehensive tutorial for using the plugin
exists [here](https://jlestrada.github.io/pages/CiscoSpark/) courtesy
of [jlestrada](https://jlestrada.github.io/)

Messages can be formatted as plain text, markdown or html (with
limitations)

Click the help icon next to the Message field to see commonly available
environment variables

## **Credential Setup**

1.  Obtain a bot token (valid for 100 years) from the [developer
    site](https://developer.ciscospark.com/add-bot.html), or use your
    own personal token (not recommended)
2.  The Bot or User **must** be invited to the Spark Space to send
    messages from Jenkins
3.  Configure a new "String text" credential either globally or within a
    folder

![](docs/images/Screen_Shot_2016-12-20_at_10.48.43_PM.png)

## **Pipeline Step Example**

You can use the Pipeline Syntax generator to configure the spark message
DSL syntax

![](docs/images/Screen_Shot_2017-05-08_at_5.10.36_PM.png)

## **Build Steps Example**

![](docs/images/Screen_Shot_2016-10-27_at_7.17.10_PM.png)

## **Post-Build Step Example with Formatting and Environment Variables **

![](docs/images/Screen_Shot_2016-10-27_at_8.02.12_PM.png) 

![](docs/images/Screen_Shot_2016-10-27_at_8.08.03_PM.png)

## Note regarding environment variables:

Accepted formats are:

-   ${VARIABLE}
-   $VARIABLE
-   ${env.VARIABLE}

Click the help icon next to the message field to see default environment
variables available to use. All parameterized variables to a build are
also available to use.

To use custom variables in build/post-build steps, you need to inject
the variables into the build using Environment Injector Plugin,
Credentials Binding plugin etc.

To use custom variables in pipeline steps, your sparkSend DSL must
reside inside a withEnv, withCredentials etc.

# [Changelog](https://github.com/jenkinsci/docker-plugin/blob/master/CHANGELOG.md)

See <https://github.com/jenkinsci/cisco-spark-notifier-plugin/blob/master/CHANGELOG.md>
