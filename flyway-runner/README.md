### About

Adds Flyway as an available build step. See Flyway documentation at
<https://flywaydb.org/documentation/>

### Installation

Install the flyway-runner plugin.  
Install flyway on the server where your job will run, including any
database driver.

### Configuration

Add your Flyway installation in Manage Jenkins -\> Configure System.  
Note that the jar file containing your database driver should be located
in FLYWAY\_HOME/lib.  
Once defined, you may select "Invoke Flyway" as the step for any Jenkins
Job.

### Job DSL example:

``` syntaxhighlighter-pre
flywayRunner {
            name('flyway')
            command('migrate')
            url('jdbc:mysql://mysqlserver:3306/mydb')
            locations('filesystem:$WORKSPACE/dbscripts')
            credentialsId('44620c50-1589-4617-a677-7563985e46e1')
          }
```

### Jenkins Pipeline example:

``` syntaxhighlighter-pre
flywayrunner installationName: 'flywaytool', flywayCommand: 'migrate', credentialsId: 'bef7d729-6c22-4782-93a1-c3284ed6ebd1',  url: 'jdbc:mysql://192.168.56.1:3306/mysql', locations: '', commandLineArgs: ''
```

### Release 1.9 (15 March 2017)

-   Added Symbols for Jenkins Pipeline support.

### Release 1.8 (24 February 2017)

-   \[JENKINS-41995\] Allow environment variables in flywayCommand.

### Release 1.7 (28 January 2017)

-   Added installation of flyway automatically from Maven central.

### Release 1.6 (15 October 2016)

-   Added support for Job DSL.

### Release 1.5 (3 October 2016)

-   Fixed null pointer exception when passing folder level credentials.

### Release 1.4 (28 July 2016)

-   Added Credentials plugin support to enter database credentials.

### Release 1.3 (27 May 2016)

-   Added support for pipeline

### Release 1.2 (10 April 2016)

-   Changed Password field type to Secret

### Release 1.1 (24 March 2016)

-   Resolving environment variables

### Release 1.0 (13 March 2016)

-   First public release
