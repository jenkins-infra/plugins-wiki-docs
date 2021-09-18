
## Who is this plugin for?

It's for users of Redgate's SQL Change Automation. The tools help users
manage databases alongside application code in agile processes. The [SQL
Change Automation](http://www.red-gate.com/sca) tool plugs into Jenkins
to enable continuous integration for your SQL Server databases.

## What does it do?

It's an easy way to build, test, synchronize and publish databases using
Jenkins:

1.  Build - builds your database from a [Redgate source controlled
    database](http://www.red-gate.com/sqlsourcecontrol/) to a NuGet
    package.
2.  Test - generates test data using Redgate's [SQL Data
    Generator](http://www.red-gate.com/sql-data-generator/) and runs
    tSQLt tests against the package.
3.  Sync - updates an existing database with the latest version in the
    package.
4.  Publish - publishes the package to a NuGet feed ready for
    deployment.

## What are the prerequisites?

You'll need to install:

-   Redgate's [SQL Source
    Control](https://www.red-gate.com/products/sql-development/sql-source-control/)
    or [SQL Change Automation](https://www.red-gate.com/sca) so you can
    generate a project

Free trial versions of these tools are available.

## Developing or debugging this plugin

Redgate recommend the [JetBrains IntelliJ
IDEA](https://www.jetbrains.com/idea/) environment for developing or
debugging. There's a free community edition available.

To get a development version of Jenkins working with the Redgate SQL
Change Automation plugin installed:

1.  Clone the repository.
2.  Install [Maven](https://maven.apache.org/download.cgi).
3.  Open a command prompt at the repository root directory and run the
    following commands:
    1.  set MAVEN\_OPTS=-Xdebug
        -Xrunjdwp:transport=dt\_socket,server=y,address=8000,suspend=n
    2.  mvn hpi:run

For more details, see this [Jenkins
tutorial](https://wiki.jenkins-ci.org/display/JENKINS/Plugin+tutorial)

## Need help?

If you need help with this plugin, email <support@red-gate.com>

## Know how to improve this plugin?

If you can make this plugin better - great! Code it and submit a [pull
request](https://github.com/jenkinsci/redgate-sql-ci-plugin/pulls). If
it looks good, we'll merge in your changes.

Alternatively, email your suggestions to <support@red-gate.com>
